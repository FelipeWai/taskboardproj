import styled from "styled-components";

export const Container = styled.div``

export const CreateAccountForm = styled.div`
     position: fixed;
  width: 50rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: .5rem;
  padding: 3rem;
  > div {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: center;
    >div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
    }
  }

  form{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span{
    font-size: 1.2rem;
    color: red;
  }

  input{
      background-color: #EBECEC;
      border: 1px solid #E0E0DD;
      padding: .5rem 2rem;
      width: 100%;
      height: 4rem;
      border-radius:.5rem;
      font-size: 1.6rem;
    }

    button{
      width: 100%;
      border: none;
      background-color: #2383E2;
      font-weight: 500;
      color: white;
      height: 4rem;
      border-radius: .5rem;
      margin-top: 1.5rem;
      cursor: pointer;

      &:hover{
        background-color: #1371CD;
      }
    }
  }

  @media(max-width:500px){
    width: 100%;
    margin-top: 1rem;
    border-radius: 0rem;
    border: 0px;
  }

  @media(max-width:360px){
   >div{
    p{
      font-size: 1.4rem;
    }
   }
  }
`;