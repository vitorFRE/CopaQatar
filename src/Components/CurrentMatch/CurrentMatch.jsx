import React, { useEffect, useState } from 'react';
import { Container, Current } from './CurrentMatchStyle';
import circulo from '../../assets/circulo.svg';
import Match from '../NextMatch/Match';
import { GetURL } from '../Helper/GetURL';
import { Translate } from '../Helper/Translate';

const CurrentMatch = () => {
  const [dados, setDados] = useState();

  async function FetchCurrent() {
    const response = await fetch(`https://worldcupjson.net/matches/current`);
    const data = await response.json();
    setDados(data);
  }

  useEffect(() => {
    FetchCurrent();
  }, []);

  return (
    <Container>
      <h1>
        <img src={circulo} /> AGORA
      </h1>

      <Current>
        {dados && dados.length > 0 ? (
          dados.map((curr) => (
            <Match
              key={curr.id}
              Team1={Translate(curr.home_team.name)}
              Team2={Translate(curr.away_team.name)}
              LogoT1={GetURL(curr.home_team.country)}
              LogoT2={GetURL(curr.away_team.country)}
              Info={`${curr.home_team.goals} - ${curr.away_team.goals}`}
            />
          ))
        ) : (
          <h2>Não tem nem um jogo acontecendo agora.</h2>
        )}
      </Current>
    </Container>
  );
};

export default CurrentMatch;
