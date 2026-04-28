import { useEffect, useState } from 'react';
import circulo from '../../assets/circulo.svg';
import type { WorldCupMatch } from '../../types/worldcup';
import { GetURL } from '../Helper/GetURL';
import { Translate } from '../Helper/Translate';
import Match from '../NextMatch/Match';
import { Container, Current } from './CurrentMatchStyle';

const CurrentMatch = () => {
  const [dados, setDados] = useState<WorldCupMatch[] | undefined>();

  async function FetchCurrent() {
    const response = await fetch(`https://worldcupjson.net/matches/current`);
    const data: WorldCupMatch[] = await response.json();
    setDados(data);
  }

  useEffect(() => {
    void FetchCurrent();
  }, []);

  return (
    <Container>
      <h1>
        <img src={circulo} alt="" /> AGORA
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
              Info={`${curr.home_team.goals ?? 0} - ${curr.away_team.goals ?? 0}`}
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
