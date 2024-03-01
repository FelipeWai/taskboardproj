import React from 'react';
import { Container } from './styles';

const Icons = ({ imgIcon, isSelected, click }) => {
  return (
    <Container className={isSelected ? 'selected' : ''} onClick={click}>
      <img src={imgIcon} alt="icon" />
    </Container>
  );
};

export default Icons;
