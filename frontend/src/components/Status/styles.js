import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 2px solid ${({ theme }) => theme.COLORS.TASK_DETAILS};
  border-radius: 1rem;
  padding: 0.2rem;
  cursor: pointer;

  &.border{
    border: 2px solid ${({ theme }) => theme.COLORS.BORDER_FOCUS};
  }

  h3 {
    font-weight: 600;
    font-size: 1.6rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;

    &.orange {
      background-color: ${({ theme }) => theme.COLORS.BG_ICON_PROGRESS};
    }

    &.green {
      background-color: ${({ theme }) => theme.COLORS.BG_ICON_COMPLETED};
    }

    &.red {
      background-color: ${({ theme }) => theme.COLORS.BG_ICON_WONTDO};
    }

    img {
      width: 2.4rem;
      height: 2.4rem;
    }

  }

  @media (max-width: 400px) {
      h3 {
        font-weight: 600;
        font-size: 1.2rem;
      }
    }
    @media (max-width: 345px) {
      h3 {
        font-weight: 600;
        font-size: 1rem;
      }
    }
`;
