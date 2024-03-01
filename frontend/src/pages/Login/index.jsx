import React from "react";
import { Container, LinksWrapper, LoginForm } from "./styles";
import caneta from "../../assets/Edit_duotone.svg";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import InputLogin from "../../components/InputLogin";

const Login = () => {
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

        <form action="auth/login" method="post">
          <InputLogin label="Nome" tipo="text"/>
          <InputLogin label="E-mail" tipo="email"/>
          <InputLogin label="Senha" tipo="password"/>
          <button>LOGAR</button>
        </form>

      <LinksWrapper>
          <p>Não tem uma conta? <Link to="/auth/create">Crie agora</Link></p>
      </LinksWrapper>
      </LoginForm>
    </Container>
  );
};

export default Login;
