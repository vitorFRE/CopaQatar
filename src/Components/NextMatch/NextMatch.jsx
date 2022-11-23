import React from 'react';
import TitleH1 from '../Title/TitleH1';
import { Container, Matchs } from './NextMatchStyle';
import i from '../Images/Imagens';
import Match from './Match';

const NextMatch = () => {
  return (
    <Container>
      <TitleH1 text="PRÓXIMOS JOGOS" />
      <Matchs>
        <Match
          Team1={'Qatar'}
          Team2={'Equador'}
          DayHour={'20/11 13:00'}
          LogoT1={i.Qatar}
          LogoT2={i.Equador}
        />

        <Match
          Team1={'Inglaterra'}
          Team2={'Irã'}
          DayHour={'21/11 10:00'}
          LogoT1={i.Inglaterra}
          LogoT2={i.Ira}
        />

        <Match
          Team1={'Senegal'}
          Team2={'Holanda'}
          DayHour={'21/11 13:00'}
          LogoT1={i.Senegal}
          LogoT2={i.Holanda}
        />

        <Match
          Team1={'EUA'}
          Team2={'País de Gales'}
          DayHour={'21/11 16:00'}
          LogoT1={i.EstadosUnidos}
          LogoT2={i.PaisDeGales}
        />

        <Match
          Team1={'Argentina'}
          Team2={'Arábia Saudita'}
          DayHour={'22/11 07:00'}
          LogoT1={i.Argentina}
          LogoT2={i.ArabiaSaudita}
        />
      </Matchs>

      <div className="button_div">
        <button>VER TODOS OS JOGOS</button>
      </div>
    </Container>
  );
};

export default NextMatch;
