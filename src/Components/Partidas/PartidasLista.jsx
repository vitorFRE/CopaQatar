import React, { useEffect, useState } from 'react';
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
import circulo from '../../assets/circulo.svg';
import { Link } from 'react-router-dom';

const PartidasLista = () => {
  const [dados, setDados] = useState();

  async function FetchGroups() {
    const response = await fetch(`https://worldcupjson.net/matches/`);
    const data = await response.json();
    setDados(data);
  }

  useEffect(() => {
    FetchGroups();
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
                    par.home_team_country === null
                      ? `${GetURL('UND')}`
                      : `${GetURL(par.home_team.country)}`
                  }`}
                  LogoT2={`${
                    par.away_team_country === null
                      ? `${GetURL('UND')}`
                      : `${GetURL(par.away_team.country)}`
                  }`}
                  Info={`${ConvertedDateHour(par.datetime)}`}
                  Info2={`${ConvertedDateDay(par.datetime)} de ${Translate(
                    ConvertedDateMonth(par.datetime),
                  )}`}
                  Info3={
                    par.home_team.goals || par.away_team.goals
                      ? `${
                          par.home_team.goals === null
                            ? '0'
                            : par.home_team.goals
                        } - ${
                          par.away_team.goals === null
                            ? '0'
                            : par.away_team.goals
                        }`
                      : null
                  }
                  Info4={Translate(par.status)}
                  Info5={Translate(par.stage_name)}
                />
              </Link>
            ))
          : null}
      </div>
    </Container>
  );
};

export default PartidasLista;
