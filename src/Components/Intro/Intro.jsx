import React from 'react';
import { Container } from './IntroStyles';
import simbolo from '../../assets/simbolo.svg';
import fifaeqatar from '../../assets/fifaeqatar.svg';

const Intro = () => {
  return (
    <Container>
      <div>
        <img src={simbolo} alt="Simbolo Copa do mundo Qatar" />
        <img src={fifaeqatar} alt="Logo Qatar + Fifa" />
      </div>
    </Container>
  );
};

export default Intro;
