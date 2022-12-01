import React, { useEffect, useState } from 'react';
import { GetURL } from '../Helper/GetURL';
import { Translate } from '../Helper/Translate';
import TitleH1 from '../Title/TitleH1';
import { Container, Tabelas } from './GruposPageStyle';

const GruposPage = () => {
  const [dados, setDados] = useState();

  async function FetchGroups() {
    const response = await fetch('https://worldcupjson.net/teams');
    const data = await response.json();
    setDados(data);
  }

  useEffect(() => {
    FetchGroups();
  }, []);

  return (
    <Container>
      <TitleH1 text={'Grupos'} />
      <Tabelas>
        {dados
          ? dados.groups.map((grupo) => (
              <table key={grupo.letter}>
                <tbody>
                  <tr>
                    <th>{`Grupo ${grupo.letter}`}</th>
                    <th>J</th>
                    <th>V</th>
                    <th>D</th>
                    <th>E</th>
                    <th>G</th>
                    <th>P</th>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={GetURL(grupo.teams[0].country)}
                        alt="Team Logo"
                      />
                      {Translate(grupo.teams[0].name)}
                    </td>
                    <td>{grupo.teams[0].games_played}</td>
                    <td>{grupo.teams[0].wins}</td>
                    <td>{grupo.teams[0].losses}</td>
                    <td>{grupo.teams[0].draws}</td>
                    <td>{grupo.teams[0].goals_for}</td>
                    <td>{grupo.teams[0].group_points}</td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={GetURL(grupo.teams[1].country)}
                        alt="Team Logo"
                      />
                      {Translate(grupo.teams[1].name)}
                    </td>
                    <td>{grupo.teams[1].games_played}</td>
                    <td>{grupo.teams[1].wins}</td>
                    <td>{grupo.teams[1].losses}</td>
                    <td>{grupo.teams[1].draws}</td>
                    <td>{grupo.teams[1].goals_for}</td>
                    <td>{grupo.teams[1].group_points}</td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={GetURL(grupo.teams[2].country)}
                        alt="Team Logo"
                      />
                      {Translate(grupo.teams[2].name)}
                    </td>
                    <td>{grupo.teams[2].games_played}</td>
                    <td>{grupo.teams[2].wins}</td>
                    <td>{grupo.teams[2].losses}</td>
                    <td>{grupo.teams[2].draws}</td>
                    <td>{grupo.teams[2].goals_for}</td>
                    <td>{grupo.teams[2].group_points}</td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={GetURL(grupo.teams[3].country)}
                        alt="Team Logo"
                      />
                      {Translate(grupo.teams[3].name)}
                    </td>
                    <td>{grupo.teams[3].games_played}</td>
                    <td>{grupo.teams[3].wins}</td>
                    <td>{grupo.teams[3].losses}</td>
                    <td>{grupo.teams[3].draws}</td>
                    <td>{grupo.teams[3].goals_for}</td>
                    <td>{grupo.teams[3].group_points}</td>
                  </tr>
                </tbody>
              </table>
            ))
          : null}
      </Tabelas>
    </Container>
  );
};

export default GruposPage;
