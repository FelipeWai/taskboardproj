import React, { useState } from "react";
import { Container, CreateAccountForm } from "./styles";
import Header from "../../components/Header";
import caneta from "../../assets/Edit_duotone.svg";
import InputCreateAccount from "../../components/InputCreateAccount";

const Registry = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [validity, setValidity] = useState({
    name: true,
    email: true,
    password: true,
    confirmPassword: true,
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      errorMessage:
        "E-mail inválido. Por favor, insira um endereço de email válido.",
      label: "E-mail",
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9\.-]+\.[a-zA-Z]{2,}$/i,
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      errorMessage:
        "Senha inválida. Deve conter no mínimo 8 caracteres, pelo menos uma letra maiúscula, um número e um símbolo.",
      label: "Senha",
      pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+|~=\`{}\[\]:;"'<>,.?\\/])[a-zA-Z0-9!@#$%^&*()_+|~=\`{}\[\]:;"'<>,.?\\]{8,}$/,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      errorMessage: "As senhas não coincidem!",
      label: "Confirmar senha",
      pattern: values.password,
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
    } else if (name === "confirmPassword") {
      const isValid = values.confirmPassword === values.password;
      setValidity({ ...validity, [name]: isValid });
    }
  };

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

        <form action="/" method="POST">
          {inputs.map((input) => (
            <InputCreateAccount
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
          <button type="submit">CRIAR CONTA</button>
        </form>
      </CreateAccountForm>
    </Container>
  );
};

export default Registry;
