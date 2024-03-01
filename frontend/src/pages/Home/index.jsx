import React from "react";
import Header from "../../components/Header"
import { Container, Main } from "./styles"

import hero from "../../assets/home-hero.png"
import { ArrowRight } from 'lucide-react';

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

        <a href="/">
            Use o Task Board
            <ArrowRight />
        </a>

      </Main>
    </Container>
  );
};

export default Home;
