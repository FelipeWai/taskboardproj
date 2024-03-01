import React from "react";
import { Container } from "./styles";

const InputLogin = ({ label, errorMessage, onChange, onBlur, isValid, touched, required, type, ...inputProps }) => {
  return (
    <Container>
      {label}
      <input {...inputProps} type={type} onChange={onChange} onBlur={onBlur} required={required ? "required" : ""} autoComplete={type === "password" ? "current-password" : "off"} />
      {touched && !isValid && <span>{errorMessage}</span>}
    </Container>
  );
};

export default InputLogin;
