import React, { useEffect, useState } from 'react';
import { Container } from './CurrentMatchStyle';
import circulo from '../../assets/circulo.svg';
import Match from '../NextMatch/Match';

const CurrentMatch = () => {
  const [dados, setDados] = useState();

  /* async function FetchCurrent() {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}matches/current`,
    );
    const data = await response.json();
    console.log(data);
    setDados(data);
  }

  useEffect(() => {
    FetchCurrent();
  }, []); */

  return (
    <Container>
      <h1>
        <img src={circulo} /> AGORA
      </h1>
    </Container>
  );
};

export default CurrentMatch;
