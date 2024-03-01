import styled from "styled-components";

export const Container = styled.div`
  max-width: 120rem;
`;
export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  margin-top: 5rem;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 0 1rem;

  h1 {
    font-size: 6rem;
    line-height: 1;
    margin-bottom: 5rem;
    span {
      background-color: ${({ theme }) => theme.COLORS.BG_ICON_PROGRESS};
    }
  }
  h2 {
    line-height: 1;
    color: #3e3e4c;
    text-align: center;
    width: 75%;
    margin-bottom: 5rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 20rem;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    background-color: #111111;
    font-weight: 500;
    color: white;
    text-decoration: none;
    transition: transform 0.3s ease;

    &:hover {
      background-color: black;
      transform: scale(1.1);
    }
  }

  > div {
    max-width: 60rem;
    width: 100%;

    img {
      width: 100%;
      height: auto;
    }
  }
  @media (max-width: 725px) {
    h1 {
      font-size: 4rem;
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 3.4rem;
      margin-bottom: 3rem;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 3rem;
    }

    a {
      padding: 1rem;
      width: 18rem;
      font-size: 1.4rem;
    }
  }
  @media (max-width: 350px) {
    h2 {
      width: 100%;
    }
  }
`;
