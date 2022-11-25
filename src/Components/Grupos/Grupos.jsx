import React, { useEffect, useState, useRef } from 'react';
import { Container, GroupsContent, Groups } from './GruposStyle';
import { motion } from 'framer-motion';
import TitleH1 from '../Title/TitleH1';

const Grupos = () => {
  const [dados, setDados] = useState();
  const carousel = useRef();
  const [width, setWidth] = useState();

  async function FetchGroups() {
    const response = await fetch('https://worldcupjson.net/teams');
    const data = await response.json();
    setDados(data);
  }

  useEffect(() => {
    FetchGroups();
  }, []);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
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
            {dados
              ? dados.groups.map((grupo) => (
                  <ul key={grupo.letter}>
                    <li>GRUPO {grupo.letter}</li>
                    <li>
                      <img
                        src={`/src/assets/Teams/${grupo.teams[0].country}.svg`}
                      />
                      {grupo.teams[0].name}
                    </li>
                    <li>
                      <img
                        src={`/src/assets/Teams/${grupo.teams[1].country}.svg`}
                      />{' '}
                      {grupo.teams[1].name}
                    </li>
                    <li>
                      <img
                        src={`/src/assets/Teams/${grupo.teams[2].country}.svg`}
                      />{' '}
                      {grupo.teams[2].name}
                    </li>
                    <li>
                      <img
                        src={`/src/assets/Teams/${grupo.teams[3].country}.svg`}
                      />{' '}
                      {grupo.teams[3].name}
                    </li>
                  </ul>
                ))
              : null}
          </Groups>
        </GroupsContent>
      ) : null}
    </Container>
  );
};

export default Grupos;
