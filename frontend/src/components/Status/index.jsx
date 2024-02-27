import React from 'react'
import {Container} from "./styles"

const Status = ({imgStatus, altStatus, statusText, inProgress, completed, wontdo}) => {

  
  // function handleClick(){
      
  // }

  return (
    <Container>
      
        <div className={`${inProgress ? "orange" : ""} ${completed ? "green" : ""} ${wontdo ? "red" : ""}`}>
        <img src={imgStatus} alt={altStatus}/>
        </div>

        <h3>{statusText}</h3>
    </Container>
  )
}

export default Status
