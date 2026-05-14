import { Fragment } from 'react';
import { PiArrowRight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEdition } from '../../edition/EditionContext';
import { buildEditionPath } from '../../edition/editionConfig';
import { GetURL } from '../Helper/GetURL';

type MockUpcomingMatch = {
  date: string;
  time: string;
  home: { code: string; name: string };
  away: { code: string; name: string };
  venue: string;
  group: string;
};

type KnockoutStage = {
  title: string;
  date: string;
  highlighted?: boolean;
};

const mockUpcomingMatches: MockUpcomingMatch[] = [
  {
    date: '15 Jun',
    time: '13:00',
    home: { code: 'GER', name: 'Alemanha' },
    away: { code: 'JPN', name: 'Japão' },
    venue: 'Mercedes-Benz Stadium, Atlanta',
    group: 'Grupo E',
  },
  {
    date: '15 Jun',
    time: '16:00',
    home: { code: 'ESP', name: 'Espanha' },
    away: { code: 'CRC', name: 'Costa Rica' },
    venue: 'SoFi Stadium, Los Angeles',
    group: 'Grupo F',
  },
  {
    date: '15 Jun',
    time: '19:00',
    home: { code: 'FRA', name: 'França' },
    away: { code: 'KSA', name: 'Arábia Saudita' },
    venue: 'MetLife Stadium, Nova Jersey',
    group: 'Grupo G',
  },
  {
    date: '16 Jun',
    time: '13:00',
    home: { code: 'ARG', name: 'Argentina' },
    away: { code: 'UND', name: 'Jordânia' },
    venue: 'NRG Stadium, Houston',
    group: 'Grupo H',
  },
  {
    date: '16 Jun',
    time: '16:00',
    home: { code: 'BRA', name: 'Brasil' },
    away: { code: 'UND', name: 'Haiti' },
    venue: 'Lincoln Financial Field, Filadélfia',
    group: 'Grupo C',
  },
];

const knockoutStages: KnockoutStage[] = [
  {
    title: 'Oitavas de final',
    date: '28 Jun - 03 Jul',
  },
  {
    title: 'Quartas de final',
    date: '04 Jul - 05 Jul',
  },
  {
    title: 'Semifinais',
    date: '08 Jul - 09 Jul',
  },
  {
    title: 'Final',
    date: '19 Jul 16:00',
    highlighted: true,
  },
];

const Wrapper = styled.section`
  background:
    radial-gradient(circle at 82% 18%, rgba(91, 227, 109, 0.06), transparent 22%),
    linear-gradient(180deg, #061121 0%, #040b18 100%);
  padding: 0 0 78px;
`;

const Content = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionBlock = styled.div`
  & + & {
    margin-top: 34px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    color: white;
    font-size: 2rem;
    text-transform: uppercase;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;

    h2 {
      font-size: 1.55rem;
    }
  }
`;

const UpcomingCard = styled.div`
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: linear-gradient(180deg, rgba(14, 23, 38, 0.96), rgba(10, 18, 30, 0.92));
`;

const UpcomingRow = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 52px 1fr minmax(180px, 240px) 92px;
  align-items: center;
  gap: 16px;
  padding: 18px 22px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 100px 1fr 28px 1fr;
    grid-template-areas:
      'date home versus away'
      'venue venue venue venue';
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'date'
      'home'
      'away'
      'venue';
    gap: 12px;
  }
`;

const DateBlock = styled.div`
  color: white;
  text-transform: uppercase;
  font-weight: 600;

  span {
    display: block;
  }

  span:last-child {
    margin-top: 6px;
    color: rgba(255, 255, 255, 0.74);
  }

  @media (max-width: 1100px) {
    grid-area: date;
  }
`;

const TeamBlock = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;

  img {
    width: 32px;
    height: 22px;
    border-radius: 4px;
    object-fit: cover;
  }

  @media (max-width: 1100px) {
    &.home {
      grid-area: home;
    }

    &.away {
      grid-area: away;
    }
  }
`;

const Versus = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.2rem;

  @media (max-width: 1100px) {
    grid-area: versus;
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

const VenueBlock = styled.div`
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.88rem;
  text-align: right;

  strong {
    color: rgba(255, 255, 255, 0.44);
    font-weight: 500;
  }

  @media (max-width: 1100px) {
    grid-area: venue;
    text-align: left;
  }
`;

const CenterButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;

  a {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 24px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    color: white;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.02);
  }
`;

const KnockoutGrid = styled.div`
  display: grid;
  grid-template-columns:
    minmax(160px, 1fr)
    28px
    minmax(160px, 1fr)
    28px
    minmax(160px, 1fr)
    28px
    minmax(160px, 1fr);
  gap: 12px;
  align-items: stretch;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const StageCard = styled.article<{ $highlighted?: boolean }>`
  min-height: 110px;
  padding: 18px 16px;
  border-radius: 12px;
  border: 1px solid
    ${({ $highlighted, theme }) =>
      $highlighted ? theme.colors.primary : 'rgba(255, 255, 255, 0.06)'};
  background: ${({ $highlighted }) =>
    $highlighted
      ? 'linear-gradient(180deg, rgba(16, 43, 32, 0.62), rgba(10, 18, 30, 0.92))'
      : 'linear-gradient(180deg, rgba(14, 23, 38, 0.96), rgba(10, 18, 30, 0.92))'};
  text-align: center;

  h3 {
    margin: 0 0 12px;
    color: white;
    font-size: 1.25rem;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.72);
    font-weight: 500;
  }
`;

const StageArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const EditionCompetitionMock = () => {
  const { slug } = useEdition();
  const matchesPath = buildEditionPath(slug, 'partidas');

  return (
    <Wrapper>
      <Content>
        <SectionBlock>
          <SectionHeader>
            <h2>Próximas partidas</h2>
            <Link to={matchesPath}>
              Ver calendário completo
              <PiArrowRight size={16} />
            </Link>
          </SectionHeader>

          <UpcomingCard>
            {mockUpcomingMatches.map((match) => (
              <UpcomingRow key={`${match.date}-${match.time}-${match.home.code}-${match.away.name}`}>
                <DateBlock>
                  <span>{match.date}</span>
                  <span>{match.time}</span>
                </DateBlock>

                <TeamBlock className="home">
                  <span>{match.home.name}</span>
                  <img src={GetURL(match.home.code)} alt="" />
                </TeamBlock>

                <Versus>x</Versus>

                <TeamBlock className="away">
                  <img src={GetURL(match.away.code)} alt="" />
                  <span>{match.away.name}</span>
                </TeamBlock>

                <VenueBlock>
                  {match.venue}
                  <strong>{`  ${match.group}`}</strong>
                </VenueBlock>
              </UpcomingRow>
            ))}
          </UpcomingCard>

          <CenterButton>
            <Link to={matchesPath}>
              Ver todas as partidas
              <PiArrowRight size={16} />
            </Link>
          </CenterButton>
        </SectionBlock>

        <SectionBlock>
          <SectionHeader>
            <h2>Fase eliminatória</h2>
          </SectionHeader>

          <KnockoutGrid>
            {knockoutStages.map((stage, index) => (
              <Fragment key={stage.title}>
                {index > 0 ? (
                  <StageArrow>
                    <PiArrowRight size={24} />
                  </StageArrow>
                ) : null}
                <StageCard $highlighted={stage.highlighted}>
                  <h3>{stage.title}</h3>
                  <p>{stage.date}</p>
                </StageCard>
              </Fragment>
            ))}
          </KnockoutGrid>
        </SectionBlock>
      </Content>
    </Wrapper>
  );
};
