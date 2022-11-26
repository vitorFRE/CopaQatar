import React, { useEffect, useState } from 'react';
import TitleH1 from '../Title/TitleH1';
import { Container, Matchs } from './NextMatchStyle';
import Match from './Match';

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

  function convertedDate(data) {
    let utcDate = data;
    let localDate = new Date(utcDate);
    return localDate.toString().split(' ')[4];
  }

  return (
    <Container>
      <TitleH1 text="PRÓXIMOS JOGOS / HOJE" />

      <Matchs>
        {dados
          ? dados.map((today) => (
              <Match
                key={today.id}
                Team1={today.home_team.name}
                Team2={today.away_team.name}
                LogoT1={`/src/assets/Teams/${today.home_team.country}.svg`}
                LogoT2={`/src/assets/Teams/${today.away_team.country}.svg`}
                DayHour={`${convertedDate(today.datetime)}`}
              />
            ))
          : null}
      </Matchs>
    </Container>
  );
};

export default NextMatch;
