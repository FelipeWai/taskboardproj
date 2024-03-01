import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  height: 3rem;
  border-radius: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.COLORS.BG_ADD_TASK};
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 3rem;
  cursor: pointer;
  margin-bottom: 2rem;

  &.orange {
    background-color: ${({ theme }) => theme.COLORS.BG_TASK_PROGRESS};
  }

  &.green {
    background-color: ${({ theme }) => theme.COLORS.BG_TASK_COMPLETED};
  }

  &.red {
    background-color: ${({ theme }) => theme.COLORS.BG_TASK_WONTDO};
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;

    &.orangeIcon {
      background-color: ${({ theme }) => theme.COLORS.BG_ICON_PROGRESS};
    }

    &.greenIcon {
      background-color: ${({ theme }) => theme.COLORS.BG_ICON_COMPLETED};
    }

    &.redIcon {
      background-color: ${({ theme }) => theme.COLORS.BG_ICON_WONTDO};
    }

    img {
      width: 2.4rem;
      height: 2.4rem;
    }

  }

  @media (max-width: 770px) {
    width: 80%;
  }

`;

export const TaskDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    background: white;
    border-radius: 1rem;
    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  @media (max-width: 430px) {
    h3{
      font-size: 1.5rem;
    }
  }

`