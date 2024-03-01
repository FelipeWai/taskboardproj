import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  background-color: white;
  padding: 3rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    transition: transform 0.3s ease;

    h2 {
      color: black;
    }

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 400px) {
      h2 {
        display: none;
      }
    }
  }
  @media (max-width: 400px) {
    padding: 2rem;
    justify-content: space-between;
  }
`;

export const BtnLogin = styled(Link)`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: #212121;
  font-weight: 500;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: black;
  }
`;