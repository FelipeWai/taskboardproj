import React, { useState, useContext  } from "react";
import { Container, Icon } from "./styles";
import estudo from "../../assets/estudo.png";
import pensar from "../../assets/pensar.png";
import cafe from "../../assets/cafe.png";
import treino from "../../assets/treino.png";
import livros from "../../assets/livros.png";
import alarme from "../../assets/alarme.png";
import {iconContext} from "../Stone/Context"

const Icons = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon === selectedIcon ? null : icon);
  };

  return (
    <Container>
      <iconContext.Provider value={selectedIcon}>
      <Icon
        onClick={() => handleIconClick(estudo)}
        selected={selectedIcon === estudo}
        className={selectedIcon === estudo ? "selected" : ""}
      >
        <img src={estudo} alt="icon" />
      </Icon>
      <Icon
        onClick={() => handleIconClick(pensar)}
        selected={selectedIcon === pensar}
        className={selectedIcon === pensar ? "selected" : ""}
      >
        <img src={pensar} alt="icon" />
      </Icon>
      <Icon
        onClick={() => handleIconClick(cafe)}
        selected={selectedIcon === cafe}
        className={selectedIcon === cafe ? "selected" : ""}
      >
        <img src={cafe} alt="icon" />
      </Icon>
      <Icon
        onClick={() => handleIconClick(treino)}
        selected={selectedIcon === treino}
        className={selectedIcon === treino ? "selected" : ""}
      >
        <img src={treino} alt="icon" />
      </Icon>
      <Icon
        onClick={() => handleIconClick(livros)}
        selected={selectedIcon === livros}
        className={selectedIcon === livros ? "selected" : ""}
      >
        <img src={livros} alt="icon" />
      </Icon>
      <Icon
        onClick={() => handleIconClick(alarme)}
        selected={selectedIcon === alarme}
        className={selectedIcon === alarme ? "selected" : ""}
      >
        <img src={alarme} alt="icon" />
      </Icon>
      </iconContext.Provider>
    </Container>
  );
};

export default Icons;
