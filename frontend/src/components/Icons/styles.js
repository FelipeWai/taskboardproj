import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.COLORS.BG_TASK_TODO};
  border-radius: 1rem;
  cursor: pointer;

  &.selected {
    background-color: #F5D565;
  }

  img {
    width: 2rem;
    height: 2rem;
  }

`;
