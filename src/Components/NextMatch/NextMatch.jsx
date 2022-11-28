import React, { useEffect, useState } from 'react';
import TitleH1 from '../Title/TitleH1';
import { Container, Matchs } from './NextMatchStyle';
import Match from './Match';
import { GetURL } from '../Helper/GetURL';
import { Translate } from '../Helper/Translate';

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
      <TitleH1 id="proximojogo" text="PRÓXIMOS JOGOS / HOJE" />

      <Matchs>
        {dados
          ? dados.map((today) => (
              <Match
                key={today.id}
                Team1={Translate(today.home_team.name)}
                Team2={Translate(today.away_team.name)}
                LogoT1={GetURL(today.home_team.country)}
                LogoT2={GetURL(today.away_team.country)}
                DayHour={`${convertedDate(today.datetime)}`}
              />
            ))
          : null}
      </Matchs>
    </Container>
  );
};

export default NextMatch;
