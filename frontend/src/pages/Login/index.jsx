import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, LinksWrapper, LoginForm } from "./styles";
import caneta from "../../assets/Edit_duotone.svg";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Validation from "./Validation"

const Login = () => {

  const nevigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({})

  function handleInput(event){
    const newObj = {...values, [event.target.name]: event.target.value}
    setValues(newObj)
  }

  function handleValidation(event){
    event.preventDefault();
  
    const validationErrors = Validation(values);
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      nevigate("/");
    }
  }


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

        <form onSubmit={handleValidation}  action="." method="POST">
        <label>E-mail</label>
        <input type="email" name="email" onChange={handleInput}  autoComplete="email"/>
          {errors.email && <span>{errors.email}</span>}

          <label>Senha</label>
          <input type="password" name="password" onChange={handleInput} autoComplete="current-password"/>
          {errors.password && <span>{errors.password}</span>}
          <button type="submit">LOGAR</button>
        </form>

        <LinksWrapper>
          <p>
            Não tem uma conta? <Link to="/auth/signup">Crie agora</Link>
          </p>
        </LinksWrapper>
      </LoginForm>
    </Container>
  );
};

export default Login;
