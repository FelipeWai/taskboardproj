import React from "react";
import Header from "../../components/Header"
import { Container, Main } from "./styles"

import hero from "../../assets/home-hero.png"
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Header btnHeader="Fazer login" link="/auth/login"/>
      <Main>
        <h1>
          Facilitando sua vida com uma
          <br /> <span>gestão simples</span> de tarefas
        </h1>
        <h2>
        Escreva tarefas, organize conhecimento e gerencie seus afazeres.
        </h2>

        <div>
            <img src={hero}/>
        </div>

        <Link to="/auth/signup">
            Use o Task Board
            <ArrowRight />
        </Link>

      </Main>
    </Container>
  );
};

export default Home;
