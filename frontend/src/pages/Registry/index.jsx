import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, CreateAccountForm } from "./styles";
import Header from "../../components/Header";
import caneta from "../../assets/Edit_duotone.svg";
import Validation from "./Validation";

const Registry = () => {
  const nevigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  function handleInput(event) {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  }

  function handleValidation(event) {
    event.preventDefault();

    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      nevigate("/auth/login");
    }
  }

  return (
    <Container>
      <Header btnHeader="Login" link="/auth/login" />
      <CreateAccountForm>
        <div>
          <div>
            <h2>Criar uma conta</h2>
            <img src={caneta} alt="Ilustração de uma caneta preta" />
          </div>
          <p>
            Registre-se para acessar as funcionalidades do Task Board e otimize
            sua produtividade!
          </p>
        </div>

        <form onSubmit={handleValidation} action="." method="POST">
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={handleInput}
            autoComplete="username"
          />
          {errors.username && <span>{errors.username}</span>}

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

          <label>Confirmar senha</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleInput}
            autoComplete="current-password"
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          <button type="submit">CRIAR CONTA</button>
        </form>
      </CreateAccountForm>
    </Container>
  );
};

export default Registry;
