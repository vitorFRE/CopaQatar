import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadMatches } from '../../data/edition2022';
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
import { Container } from './PartidasListaStyle';

const PartidasLista = () => {
  const [dados, setDados] = useState<WorldCupMatch[] | undefined>();

  async function FetchGroups() {
    const data = await loadMatches();
    setDados(data);
  }

  useEffect(() => {
    void FetchGroups();
  }, []);
  return (
    <Container>
      <TitleH1 text={'Todas as Partidas'} />
      <div>
        {dados
          ? dados.map((par) => (
              <Link key={par.id} to={`/partida/${par.id}`}>
                <Match
                  Team1={Translate(par.home_team.name)}
                  Team2={Translate(par.away_team.name)}
                  LogoT1={`${
                    par.home_team_country === null || par.home_team_country === undefined
                      ? `${GetURL('UND')}`
                      : `${GetURL(par.home_team.country)}`
                  }`}
                  LogoT2={`${
                    par.away_team_country === null || par.away_team_country === undefined
                      ? `${GetURL('UND')}`
                      : `${GetURL(par.away_team.country)}`
                  }`}
                  Info={`${ConvertedDateHour(par.datetime)}`}
                  Info2={`${ConvertedDateDay(par.datetime)} de ${Translate(
                    ConvertedDateMonth(par.datetime),
                  )}`}
                  Info3={
                    par.home_team.goals !== null || par.away_team.goals !== null
                      ? `${
                          par.home_team.goals === null
                            ? '0'
                            : par.home_team.goals
                        } - ${
                          par.away_team.goals === null
                            ? '0'
                            : par.away_team.goals
                        }`
                      : undefined
                  }
                  Info4={Translate(par.status)}
                  Info5={
                    par.stage_name ? Translate(par.stage_name) : undefined
                  }
                />
              </Link>
            ))
          : null}
      </div>
    </Container>
  );
};

export default PartidasLista;
