import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center; 
  min-height: 100vh; 
  margin-top: 5rem;

  .wrapper {
    display: flex;
    align-items: start;
    gap: 3rem;
    margin-bottom: 4rem;

    .titleWrapper {
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
