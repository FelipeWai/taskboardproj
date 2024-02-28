import React from "react";
import { Container } from "./styles";
import add from "../../assets/Add_round_duotone.svg";


const NewTask = ({title, status}) => {

  return (
    <Container className={`${status === "inProgress" ? "orange" : ""} ${status === "completed"  ? "green" : ""} ${
      status === "wontdo" ? "red" : ""
      }`}
    >
      <div>
        <img src={add} alt="icone com um mais desenhado" />
      </div>
      <h3>{title}</h3>
    </Container>
  );
};

export default NewTask;
