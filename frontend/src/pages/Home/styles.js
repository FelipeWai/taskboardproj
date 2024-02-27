import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  height: 50vh; 
  > div {
    display: flex;
    align-items: start;
    gap: 3rem;
    margin-bottom: 4rem;

    > div {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1rem;
    }
    
  }
  @media(max-width:350px){
      > div {
    gap: 1rem;
    
    h1{
      font-size: 2rem;
    }
    }
  }
`;
