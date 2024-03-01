import React from 'react'
import {Container} from "./styles"

const InputLogin = ({label, tipo, ...props}) => {
  return (
    <Container>
       {label}
        <input type={tipo} {...props} />
    </Container>
  )
}

export default InputLogin
