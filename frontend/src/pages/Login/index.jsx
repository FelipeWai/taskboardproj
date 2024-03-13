import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, LinksWrapper, LoginForm } from "./styles";
import caneta from "../../assets/Edit_duotone.svg";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import Validation from "./Validation";
import { ChakraProvider, useToast } from "@chakra-ui/react";

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleInput(event) {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  }

  const [isLoading, setIsLoading] = useState(false);
  function handleValidation(event) {
    event.preventDefault();
    setIsLoading(true);

    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      fetch("/auth/gettoken", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Erro ao obter token");
          }
        })
        .then((data) => {
          const csrfToken = data.csrfToken;

          fetch("/auth/login/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-CSRFToken": csrfToken,
            },
            body: JSON.stringify(values),
          })
            .then((response) => {
              if (response.ok) {
                navigate("/tasks");
              } else {
                toast({
                  title: `Erro ao logar`,
                  position: 'top-right',
                  status:'error',
                  isClosable: true,
                })
                throw new Error("Error ao logar na conta");
              }
            })
            .catch((error) => {
              console.error("Erro ao logar na conta:", error);
            })
            .finally(() => {
              setIsLoading(false);
            });
        })
        .catch((error) => {
          console.error("Erro ao obter token:", error);
        });
    } else {
      setIsLoading(false);
    }
  }

  return (
    <ChakraProvider>
    <Container>
      <Header btnHeader="GitHub" link="/" />
      <LoginForm>
        <div>
          <div>
            <h2>Fazer login</h2>
            <img src={caneta} alt="Ilustração de uma caneta preta" />
          </div>
          <p>
            Bem-vindo de volta! Para aceder à sua conta Task Board, por favor
            inicie sessão abaixo.
          </p>
        </div>

        <form onSubmit={handleValidation} method="POST">
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            onChange={handleInput}
            autoComplete="email"
          />
          {errors.email && <span>{errors.email}</span>}

          <label>Senha</label>
          <input
            type="password"
            name="password"
            onChange={handleInput}
            autoComplete="current-password"
          />
          {errors.password && <span>{errors.password}</span>}
          <button type="submit">{isLoading ? <Loader /> : "LOGAR"}</button>
        </form>

        <LinksWrapper>
          <p>
            Não tem uma conta? <Link to="/auth/signup">Crie agora</Link>
          </p>
        </LinksWrapper>
      </LoginForm>
    </Container>
    </ChakraProvider> 
  );
};

export default Login;
