import React from "react";
import { Container } from "./styles";

const InputCreateAccount = ({
  label,
  errorMessage,
  onChange,
  onBlur,
  isValid,
  touched,
  required,
  type,
  ...inputProps
}) => {
  return (
    <Container>
      {label}
      <input
        {...inputProps}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        required={required ? "required" : ""}
        autoComplete={type === "password" ? "current-password" : "off"}
      />
      {touched && !isValid && <span>{errorMessage}</span>}
    </Container>
  );
};

export default InputCreateAccount;
