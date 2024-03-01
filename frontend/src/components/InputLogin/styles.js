import styled from "styled-components";

export const Container = styled.label`
  color: #808080;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

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
`;
