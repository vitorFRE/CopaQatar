import React, { useEffect, useState } from 'react';
import TitleH1 from '../Title/TitleH1';
import { Container, Matchs } from './NextMatchStyle';
import Match from './Match';
import { GetURL } from '../Helper/GetURL';
import { Translate } from '../Helper/Translate';
import { Link } from 'react-router-dom';
import { ConvertedDateHour } from '../Helper/ConvertedDate';

const NextMatch = () => {
  const [dados, setDados] = useState();

  async function FetchGroups() {
    const response = await fetch('https://worldcupjson.net/matches/today');
    const data = await response.json();
    setDados(data);
  }

  useEffect(() => {
    FetchGroups();
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
