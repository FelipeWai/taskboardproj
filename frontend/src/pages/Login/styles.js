import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Container = styled.div`
  display: flex;
  width: 80rem;
  height: 50rem;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  background-color: white;
  padding: 2rem;

  .FormDetails {
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;

    form {
      margin-bottom: 2rem;
    }

    h1 {
      margin-bottom: 2rem;
    }

    input {
      width: 100%;
      height: 5.6rem;
      padding: 2rem;
      margin-bottom: 1.5rem;

      background-color: #e6e6e6;
      border: 0;
      border-radius: 5rem;
    }

    button {
      background-color: #6fb556;
      width: 100%;
      border: none;
      padding: 2rem;
      border-radius: 5rem;
      color: white;
      font-weight: 700;
      cursor: pointer;
      margin-top: 1rem;

      &:hover {
        background-color: #4a8a33;
      }
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    a {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 4rem;
    height: 80vh;
    border-radius: 0rem;
  }

  @media (max-width: 560px) {
    height: 100vh;
    gap: 1rem;
    .FormDetails {
      width: 100%;
    }
  }
`;
