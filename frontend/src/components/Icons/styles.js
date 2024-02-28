import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.COLORS.BG_TASK_TODO};
  border-radius: 1rem;
  cursor: pointer;

  &.selected {
    border: 2px solid ${({ theme }) => theme.COLORS.BORDER_FOCUS};
  }

  img {
    width: 2rem;
    height: 2rem;
  }
`;
