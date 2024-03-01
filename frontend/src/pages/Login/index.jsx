import React, { useState } from "react";
import { Container, LinksWrapper, LoginForm } from "./styles";
import caneta from "../../assets/Edit_duotone.svg";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import InputLogin from "../../components/InputLogin";

const Login = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  const [validity, setValidity] = useState({
    name: true,
    email: true,
    password: true,
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      errorMessage:
        "E-mail inválido. Por favor, insira um endereço de email válido.",
      label: "E-mail",
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      errorMessage:
        "Senha inválida. Deve conter no mínimo 8 caracteres, pelo menos uma letra maiúscula, um número e um símbolo.",
      label: "Senha",
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[0-9a-zA-Z\W_]{8,}$/,
      required: true,
    },
  ];

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });

    if (name === "email" || name === "password") {
      const isValid = inputs
        .find((input) => input.name === name)
        .pattern.test(value);
      setValidity({ ...validity, [name]: isValid });
    } else {
      setValidity({ ...validity, [name]: true });
    }
  };

  const onBlur = (name) => {
    setTouched({ ...touched, [name]: true });
    if (name === "email" || name === "password") {
      const isValid = inputs
        .find((input) => input.name === name)
        .pattern.test(values[name]);
      setValidity({ ...validity, [name]: isValid });
    }
  };

  return (
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

        <form action="/" method="post">
          {inputs.map((input) => (
            <InputLogin
              key={input.id}
              {...input}
              onChange={onChange}
              value={values[input.name]}
              onBlur={() => onBlur(input.name)}
              isValid={validity[input.name]}
              touched={touched[input.name]}
              required={input.required}
            />
          ))}
          <button>LOGAR</button>
        </form>

        <LinksWrapper>
          <p>
            Não tem uma conta? <Link to="/auth/create">Crie agora</Link>
          </p>
        </LinksWrapper>
      </LoginForm>
    </Container>
  );
};

export default Login;
