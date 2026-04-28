import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { WorldCupMatch } from '../../types/worldcup';
import {
  ConvertedDateDay,
  ConvertedDateHour,
  ConvertedDateMonth,
} from '../Helper/ConvertedDate';
import { GetURL } from '../Helper/GetURL';
import { Translate } from '../Helper/Translate';
import Match from '../NextMatch/Match';
import TitleH1 from '../Title/TitleH1';
import { Eventos, MatchDetails, MatchInfosContainer } from './MatchInfosStyle';

const MatchInfos = () => {
  const { id } = useParams<{ id: string }>();

  const [dados, setDados] = useState<WorldCupMatch | undefined>();

  async function FetchGroups() {
    if (!id) return;
    const response = await fetch(`https://worldcupjson.net/matches/${id}`);
    const data: WorldCupMatch = await response.json();
    setDados(data);
  }

  useEffect(() => {
    void FetchGroups();
  }, [id]);

  const homeEvents = dados?.home_team_events ?? [];
  const awayEvents = dados?.away_team_events ?? [];

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
                <img src={GetURL(dados.home_team.country)} alt="" />
              </li>
              <li>Eventos da Partida</li>
              <li>
                <img src={GetURL(dados.away_team.country)} alt="" />
              </li>
            </ul>
            <div className="eventos_time">
              <div>
                {homeEvents.map((eventos) => (
                  <ul key={eventos.id}>
                    <li className="event_name">
                      {Translate(eventos.type_of_event)}
                    </li>
                    <li>{`${eventos.time} ${eventos.player}`}</li>
                  </ul>
                ))}
              </div>
              <div>
                {awayEvents.map((eventos) => (
                  <ul key={eventos.id}>
                    <li className="event_name">
                      {Translate(eventos.type_of_event)}
                    </li>
                    <li>{`${eventos.time} ${eventos.player}`}</li>
                  </ul>
                ))}
              </div>
            </div>
          </Eventos>
        </MatchDetails>
      ) : null}
    </MatchInfosContainer>
  );
};

export default MatchInfos;
