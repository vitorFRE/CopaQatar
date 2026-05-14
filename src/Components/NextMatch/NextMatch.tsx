import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useEdition } from '../../edition/EditionContext';
import { buildEditionPath } from '../../edition/editionConfig';
import { loadMatchesTodayLike } from '../../data/editions';
import type { WorldCupMatch } from '../../types/worldcup';
import { ConvertedDateHour } from '../Helper/ConvertedDate';
import { GetURL } from '../Helper/GetURL';
import { Translate } from '../Helper/Translate';
import TitleH1 from '../Title/TitleH1';
import Match from './Match';
import { Container, Matchs } from './NextMatchStyle';

const NextMatch = () => {
  const { slug } = useEdition();
  const [dados, setDados] = useState<WorldCupMatch[] | undefined>();

  async function FetchGroups() {
    const data = await loadMatchesTodayLike(slug);
    setDados(data);
  }

  useEffect(() => {
    void FetchGroups();
  }, [slug]);

  return (
    <Container>
      <TitleH1 text="PRÓXIMOS JOGOS / HOJE" />

      <Matchs>
        {dados
          ? dados.map((today) => (
              <Link key={today.id} to={buildEditionPath(slug, `partida/${today.id}`)}>
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
        <Link to={buildEditionPath(slug, 'partidas')}>VER TODOS OS JOGOS</Link>
      </div>
    </Container>
  );
};

export default NextMatch;
