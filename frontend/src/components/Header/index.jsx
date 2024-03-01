import React from 'react'
import {Container, BtnLogin} from "./styles"
import logo from "../../assets/Logo.svg"

const Header = ({btnHeader, link}) => {
  return (
    <Container>
       <a href="/" className="logo">
          <img src={logo} alt="logo" />
          <h2>Task Board</h2>
        </a>

        <BtnLogin to={link}>{btnHeader}</BtnLogin> 
    </Container>
  )
}

export default Header
