import React, { useEffect, useState } from 'react';
import { Container, GroupsContent, GroupsNav } from './GruposStyle';
import i from '../Images/Imagens';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import TitleH1 from '../Title/TitleH1';

const Grupos = () => {
  const [dados, setDados] = useState();
  async function FetchGroups() {
    const response = await fetch('https://worldcupjson.net/teams');
    const data = await response.json();
    console.log(data.groups[6]);
    console.log(data.groups.length);
    setDados(data);
  }

  useEffect(() => {
    FetchGroups();
  }, []);

  return (
    <Container>
      <TitleH1 text="GRUPOS" />
      <GroupsContent>
        {dados ? (
          dados.groups.map((grupo) => (
            <ul>
              <li>GRUPO {grupo.letter}</li>
              <li>
                <img src={`/src/assets/Teams/${grupo.teams[0].country}.svg`} />
                {grupo.teams[0].name}
              </li>
              <li>
                <img src={`/src/assets/Teams/${grupo.teams[1].country}.svg`} />{' '}
                {grupo.teams[1].name}
              </li>
              <li>
                <img src={`/src/assets/Teams/${grupo.teams[2].country}.svg`} />{' '}
                {grupo.teams[2].name}
              </li>
              <li>
                <img src={`/src/assets/Teams/${grupo.teams[3].country}.svg`} />{' '}
                {grupo.teams[3].name}
              </li>
            </ul>
          ))
        ) : (
          <>
            <ul>
              <li>GRUPO A</li>
              <li>
                <img src={i.Qatar} alt="Qatar Logo" /> Qatar
              </li>
              <li>
                <img src={i.Equador} alt="Equador Logo" /> Equador
              </li>
              <li>
                <img src={i.Senegal} alt="Sonegal Logo" /> Sonegal
              </li>
              <li>
                <img src={i.Holanda} alt="Holanda Logo" /> Holanda
              </li>
            </ul>

            <ul>
              <li>GRUPO B</li>
              <li>
                <img src={i.Inglaterra} alt="Inglaterra Logo" /> Inglaterra
              </li>
              <li>
                <img src={i.Ira} alt="Irã Logo" /> Irã
              </li>
              <li>
                <img src={i.EstadosUnidos} alt="Estados Unidos Logo" /> Estados
                Unidos
              </li>
              <li>
                <img src={i.PaisDeGales} alt="País de Gales Logo" /> País de
                Gales
              </li>
            </ul>

            <ul>
              <li>GRUPO C</li>
              <li>
                <img src={i.Argentina} alt="Argentina Logo" /> Argentina
              </li>
              <li>
                <img src={i.ArabiaSaudita} alt="Arábia Saudita Logo" /> Arábia
                Saudita
              </li>
              <li>
                <img src={i.Mexico} alt="México Logo" /> México Unidos
              </li>
              <li>
                <img src={i.Polonia} alt="Polônia Logo" /> Polônia
              </li>
            </ul>
          </>
        )}
      </GroupsContent>

      <GroupsNav>
        <button>
          <FiChevronLeft size="32px" />
        </button>
        <button>
          <FiChevronRight size="32px" />
        </button>
      </GroupsNav>
    </Container>
  );
};

export default Grupos;
