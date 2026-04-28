import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { TeamsResponse } from '../../types/worldcup';
import { GetURL } from '../Helper/GetURL';
import { Translate } from '../Helper/Translate';
import TitleH1 from '../Title/TitleH1';
import { Container, Groups, GroupsContent } from './GruposStyle';

const Grupos = () => {
  const [dados, setDados] = useState<TeamsResponse | undefined>();
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  async function FetchGroups() {
    const response = await fetch('https://worldcupjson.net/teams');
    const data: TeamsResponse = await response.json();
    setDados(data);
  }

  useEffect(() => {
    void FetchGroups();
  }, []);

  useEffect(() => {
    const el = carousel.current;
    if (!el) return;
    setWidth(el.scrollWidth - el.offsetWidth);
  }, [dados]);

  return (
    <Container>
      <TitleH1 text="GRUPOS" />

      {dados ? (
        <GroupsContent ref={carousel} whileTap={{ cursor: 'grabbing' }}>
          <Groups
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            {dados.groups.map((grupo) => (
              <ul key={grupo.letter}>
                <li>GRUPO {grupo.letter}</li>
                <li>
                  <img src={GetURL(grupo.teams[0].country)} alt="" />
                  {Translate(grupo.teams[0].name)}
                </li>
                <li>
                  <img src={GetURL(grupo.teams[1].country)} alt="" />{' '}
                  {Translate(grupo.teams[1].name)}
                </li>
                <li>
                  <img src={GetURL(grupo.teams[2].country)} alt="" />{' '}
                  {Translate(grupo.teams[2].name)}
                </li>
                <li>
                  <img src={GetURL(grupo.teams[3].country)} alt="" />{' '}
                  {Translate(grupo.teams[3].name)}
                </li>
              </ul>
            ))}
          </Groups>
        </GroupsContent>
      ) : null}

      <div className="button_div">
        <Link to={'/Grupos'}>VER PONTOS DOS GRUPO</Link>
      </div>
    </Container>
  );
};

export default Grupos;
