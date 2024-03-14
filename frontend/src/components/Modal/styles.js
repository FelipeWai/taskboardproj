import styled from "styled-components";

export const Container = styled.dialog`
  width: 40%;
  height: 90%;
  margin: auto 5rem auto auto;
  backdrop-filter: brightness(0.25) saturate(150%) blur(20px);
  border-radius: 0.6rem;
  padding: 2rem;
  border: none;
  position: relative;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    h4 {
      color: black;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      border: 1px solid ${({ theme }) => theme.COLORS.TASK_DETAILS};
      border-radius: 1rem;
      background-color: white;
      cursor: pointer;
    }
  }

  .icons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;

    label {
      color: ${({ theme }) => theme.COLORS.TASK_DETAILS};
    }
    > div {
      display: flex;
      gap: 2rem;
      margin: 0.5rem 0rem;

      @media (max-width: 770px) {
        gap: 0.5rem;
      }
    }
  }

  .status {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 2rem;
    label {
      color: ${({ theme }) => theme.COLORS.TASK_DETAILS};
    }
    > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin-top: 0.5rem;
      width: 100%;
    }
  }

  // Modal
  form {
    display: flex;
    justify-content: end;
    margin-top: 5rem;

    button {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      border-radius: 5rem;
      padding: 0.5rem 2rem;
      border: none;
      cursor: pointer;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.BTN_DETAILS};
      transition: transform 0.2s ease;
      margin: 0rem 2rem 2rem 0rem;

      svg {
        width: 1.4rem;
        height: 1.4rem;
      }

      &:hover {
        transform: scale(1.1);
      }
    }

    .btnDelete {
      background-color: ${({ theme }) => theme.COLORS.TASK_DETAILS};
    }
    .btnSave {
      background-color: ${({ theme }) => theme.COLORS.BORDER_FOCUS};
    }
  }

  @media (max-width: 950px) {
    width: 50%;
  }
  /* @media(max-height:750px){
    form{

    }
  } */
  @media (max-width: 740px) {
    width: 100%;
    height: 90%;
    margin: auto;
  }

  @media (max-width: 400px) {
    form {
      justify-content: center;
      align-items: center;
      gap: 1.5rem;

      button {
        font-size: 1.2rem;
        margin: 0rem 0rem 2rem 0rem;
      }
    }
  }
`;
