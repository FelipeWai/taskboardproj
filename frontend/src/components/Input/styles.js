import styled from "styled-components";

export const Container = styled.p`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.TASK_DETAILS};
  }

  input,
  textarea {
    padding: 1rem;
    border: 2px solid ${({ theme }) => theme.COLORS.TASK_DETAILS};
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.6rem;
  }
  textarea {
    height: 20rem;
    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TASK_DETAILS};
    }
  }
`;
