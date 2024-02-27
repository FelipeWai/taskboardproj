import React from "react";
import { Container } from "./styles";
import AddTask from "../../components/AddTask";
import logo from "../../assets/Logo.svg";
import edit from "../../assets/Edit_duotone.svg";

const Home = () => {

  return (
    <Container>
      <div>

        <img src={logo} alt="Logo" />
        <div>
          <h1>My Task Board</h1>
          <span>Tasks to keep organised</span>
        </div>
        <img src={edit} alt="Ilustração de uma caneta preta" />

      </div>

      <AddTask/>
      
    </Container>
  );
};

export default Home;
