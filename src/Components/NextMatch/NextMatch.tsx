import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { WorldCupMatch } from '../../types/worldcup';
import { ConvertedDateHour } from '../Helper/ConvertedDate';
import { GetURL } from '../Helper/GetURL';
import { Translate } from '../Helper/Translate';
import TitleH1 from '../Title/TitleH1';
import Match from './Match';
import { Container, Matchs } from './NextMatchStyle';

const NextMatch = () => {
  const [dados, setDados] = useState<WorldCupMatch[] | undefined>();

  async function FetchGroups() {
    const response = await fetch('https://worldcupjson.net/matches/today');
    const data: WorldCupMatch[] = await response.json();
    setDados(data);
  }

  useEffect(() => {
    void FetchGroups();
  }, []);

  return (
    <Container>
      <TitleH1 text="PRÓXIMOS JOGOS / HOJE" />

      <Matchs>
        {dados
          ? dados.map((today) => (
              <Link key={today.id} to={`/partida/${today.id}`}>
                <Match
                  Team1={Translate(today.home_team.name)}
                  Team2={Translate(today.away_team.name)}
                  LogoT1={GetURL(today.home_team.country)}
                  LogoT2={GetURL(today.away_team.country)}
                  Info2={`${ConvertedDateHour(today.datetime)}`}
                />
              </Link>
            ))
          : null}
      </Matchs>

      <div className="button_div">
        <Link to={'/Partidas'}>VER TODOS OS JOGOS</Link>
      </div>
    </Container>
  );
};

export default NextMatch;
