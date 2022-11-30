import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetURL } from '../Helper/GetURL';
import { Translate } from '../Helper/Translate';
import Match from '../NextMatch/Match';
import TitleH1 from '../Title/TitleH1';
import { Eventos, MatchDetails, MatchInfosContainer } from './MatchInfosStyle';
import {
  ConvertedDateDay,
  ConvertedDateHour,
  ConvertedDateMonth,
  ConvertedDateTest,
} from '../Helper/ConvertedDate';

const MatchInfos = () => {
  const partida = useParams();

  const [dados, setDados] = useState();

  async function FetchGroups() {
    const response = await fetch(
      `https://worldcupjson.net/matches/${partida.id}`,
    );
    const data = await response.json();
    setDados(data);
  }

  useEffect(() => {
    FetchGroups();
  }, []);

  return (
    <MatchInfosContainer>
      {dados ? (
        <MatchDetails>
          <TitleH1
            text={`${Translate(dados.home_team.name)} vs ${Translate(
              dados.away_team.name,
            )}`}
          />
          <Match
            Team1={Translate(dados.home_team.name)}
            Team2={Translate(dados.away_team.name)}
            LogoT1={GetURL(dados.home_team.country)}
            LogoT2={GetURL(dados.away_team.country)}
            Info={`${ConvertedDateHour(dados.datetime)}`}
            Info2={`${ConvertedDateDay(dados.datetime)} de ${Translate(
              ConvertedDateMonth(dados.datetime),
            )}`}
            Info3={`${
              dados.home_team.goals === null ? '0' : dados.home_team.goals
            } - ${
              dados.away_team.goals === null ? '0' : dados.away_team.goals
            }`}
            Info4={Translate(dados.status)}
          />

          <Eventos>
            <ul className="eventos_">
              <li>
                <img src={GetURL(dados.home_team.country)} />
              </li>
              <li>Eventos da Partida</li>
              <li>
                <img src={GetURL(dados.away_team.country)} />
              </li>
            </ul>
            <div className="eventos_time">
              <div>
                {dados
                  ? dados.home_team_events.map((eventos) => (
                      <ul key={eventos.id}>
                        <li className="event_name">
                          {Translate(eventos.type_of_event)}
                        </li>
                        <li>{`${eventos.time} ${eventos.player}`}</li>
                      </ul>
                    ))
                  : null}
              </div>
              <div>
                {dados
                  ? dados.away_team_events.map((eventos) => (
                      <ul key={eventos.id}>
                        <li className="event_name">
                          {Translate(eventos.type_of_event)}
                        </li>
                        <li>{`${eventos.time} ${eventos.player}`}</li>
                      </ul>
                    ))
                  : null}
              </div>
            </div>
          </Eventos>
        </MatchDetails>
      ) : null}
    </MatchInfosContainer>
  );
};

export default MatchInfos;
