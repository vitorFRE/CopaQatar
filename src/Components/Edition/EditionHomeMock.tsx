import { PiArrowRight, PiPlayCircle } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEdition } from '../../edition/EditionContext';
import { buildEditionPath } from '../../edition/editionConfig';
import { GetURL } from '../Helper/GetURL';

type MockGroup = {
  name: string;
  teams: { code: string; name: string }[];
};

type MockLiveMatch = {
  group: string;
  status: string;
  home: { code: string; name: string; score: number };
  away: { code: string; name: string; score: number };
  venue: string;
};

const mockGroups: MockGroup[] = [
  {
    name: 'Grupo A',
    teams: [
      { code: 'MEX', name: 'Mexico' },
      { code: 'CAN', name: 'Canada' },
      { code: 'BRA', name: 'Brasil' },
      { code: 'USA', name: 'EUA' },
    ],
  },
  {
    name: 'Grupo B',
    teams: [
      { code: 'GER', name: 'Alemanha' },
      { code: 'JPN', name: 'Japao' },
      { code: 'TUN', name: 'Tunisia' },
      { code: 'UND', name: 'Europa PO 1' },
    ],
  },
  {
    name: 'Grupo C',
    teams: [
      { code: 'FRA', name: 'Franca' },
      { code: 'KSA', name: 'Arabia Saudita' },
      { code: 'DEN', name: 'Dinamarca' },
      { code: 'AUS', name: 'Australia' },
    ],
  },
  {
    name: 'Grupo D',
    teams: [
      { code: 'ARG', name: 'Argentina' },
      { code: 'MAR', name: 'Marrocos' },
      { code: 'KOR', name: 'Coreia do Sul' },
      { code: 'ECU', name: 'Equador' },
    ],
  },
  {
    name: 'Grupo E',
    teams: [
      { code: 'ESP', name: 'Espanha' },
      { code: 'URU', name: 'Uruguai' },
      { code: 'POR', name: 'Portugal' },
      { code: 'POL', name: 'Polonia' },
    ],
  },
  {
    name: 'Grupo F',
    teams: [
      { code: 'ENG', name: 'Inglaterra' },
      { code: 'BEL', name: 'Belgica' },
      { code: 'GHA', name: 'Gana' },
      { code: 'CMR', name: 'Camaroes' },
    ],
  },
  {
    name: 'Grupo G',
    teams: [
      { code: 'SUI', name: 'Suica' },
      { code: 'NED', name: 'Paises Baixos' },
      { code: 'SEN', name: 'Senegal' },
      { code: 'IRN', name: 'Ira' },
    ],
  },
  {
    name: 'Grupo H',
    teams: [
      { code: 'CRC', name: 'Costa Rica' },
      { code: 'QAT', name: 'Qatar' },
      { code: 'UND', name: 'Africa PO 2' },
      { code: 'UND', name: 'Concacaf PO' },
    ],
  },
];

const mockLiveMatches: MockLiveMatch[] = [
  {
    group: 'Grupo A',
    status: '62\'',
    home: { code: 'MEX', name: 'Mexico', score: 1 },
    away: { code: 'USA', name: 'EUA', score: 0 },
    venue: 'Estadio Azteca, Cidade do Mexico',
  },
  {
    group: 'Grupo C',
    status: '45\' +2',
    home: { code: 'BRA', name: 'Brasil', score: 2 },
    away: { code: 'MAR', name: 'Marrocos', score: 1 },
    venue: 'Gillette Stadium, Boston',
  },
  {
    group: 'Grupo E',
    status: '30\'',
    home: { code: 'ESP', name: 'Espanha', score: 1 },
    away: { code: 'URU', name: 'Uruguai', score: 0 },
    venue: 'SoFi Stadium, Los Angeles',
  },
];

const Wrapper = styled.section`
  background:
    radial-gradient(circle at 84% 0%, rgba(91, 227, 109, 0.08), transparent 24%),
    linear-gradient(180deg, #040b18 0%, #061121 100%);
  padding: 56px 0 72px;
`;

const Content = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionBlock = styled.div`
  & + & {
    margin-top: 42px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 22px;

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

  @media (max-width: 680px) {
    align-items: flex-start;
    flex-direction: column;

    h2 {
      font-size: 1.6rem;
    }
  }
`;

const GroupsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const GroupCard = styled.article`
  padding: 18px 18px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: linear-gradient(180deg, rgba(14, 23, 38, 0.94), rgba(10, 18, 30, 0.9));

  h3 {
    margin: 0 0 16px;
    color: white;
    font-size: 1rem;
    text-transform: uppercase;
  }
`;

const TeamList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 0 16px;
  padding: 0;
`;

const TeamRow = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;

  img {
    width: 18px;
    height: 18px;
    border-radius: 4px;
    object-fit: cover;
  }
`;

const GroupLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const LiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

const LiveCard = styled.article`
  padding: 18px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: linear-gradient(180deg, rgba(14, 23, 38, 0.94), rgba(10, 18, 30, 0.92));
`;

const LiveCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;

  span:first-child {
    color: rgba(255, 255, 255, 0.52);
    font-size: 0.92rem;
    text-transform: uppercase;
  }
`;

const LiveBadge = styled.span`
  padding: 6px 10px;
  border-radius: 999px;
  background-color: rgba(91, 227, 109, 0.14);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const LiveTeams = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 12px;
`;

const LiveTeamRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 12px;

  .team_identity {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
    color: white;
    font-size: 1.15rem;
    font-weight: 500;
  }

  .team_identity img {
    width: 22px;
    height: 22px;
    border-radius: 4px;
  }

  .score {
    color: white;
    font-size: 2rem;
    font-weight: 700;
  }

  .minute {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    font-weight: 600;
  }
`;

const Venue = styled.p`
  margin: 0 0 14px;
  color: rgba(255, 255, 255, 0.52);
  font-size: 0.92rem;
`;

const Progress = styled.div`
  width: 100%;
  height: 3px;
  margin-bottom: 14px;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.14);

  span {
    display: block;
    width: 56%;
    height: 100%;
    border-radius: inherit;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FollowButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: white;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.02);
`;

export const EditionHomeMock = () => {
  const { slug } = useEdition();
  const groupsPath = buildEditionPath(slug, 'grupos');
  const matchesPath = buildEditionPath(slug, 'partidas');

  return (
    <Wrapper>
      <Content>
        <SectionBlock>
          <SectionHeader>
            <h2>Grupos</h2>
          </SectionHeader>

          <GroupsGrid>
            {mockGroups.map((group) => (
              <GroupCard key={group.name}>
                <h3>{group.name}</h3>
                <TeamList>
                  {group.teams.map((team) => (
                    <TeamRow key={`${group.name}-${team.code}-${team.name}`}>
                      <img src={GetURL(team.code)} alt="" />
                      <span>{team.name}</span>
                    </TeamRow>
                  ))}
                </TeamList>
                <GroupLink to={groupsPath}>
                  Ver grupo
                  <PiArrowRight size={16} />
                </GroupLink>
              </GroupCard>
            ))}
          </GroupsGrid>
        </SectionBlock>

        <SectionBlock>
          <SectionHeader>
            <h2>Partidas ao vivo</h2>
            <Link to={matchesPath}>
              Ver todas
              <PiArrowRight size={16} />
            </Link>
          </SectionHeader>

          <LiveGrid>
            {mockLiveMatches.map((match) => (
              <LiveCard key={`${match.group}-${match.home.code}-${match.away.code}`}>
                <LiveCardHeader>
                  <span>{match.group}</span>
                  <LiveBadge>Ao vivo</LiveBadge>
                </LiveCardHeader>

                <LiveTeams>
                  <LiveTeamRow>
                    <div className="team_identity">
                      <img src={GetURL(match.home.code)} alt="" />
                      <span>{match.home.name}</span>
                    </div>
                    <span className="score">{match.home.score}</span>
                    <span className="minute">{match.status}</span>
                  </LiveTeamRow>

                  <LiveTeamRow>
                    <div className="team_identity">
                      <img src={GetURL(match.away.code)} alt="" />
                      <span>{match.away.name}</span>
                    </div>
                    <span className="score">{match.away.score}</span>
                    <span className="minute"> </span>
                  </LiveTeamRow>
                </LiveTeams>

                <Venue>{match.venue}</Venue>
                <Progress>
                  <span />
                </Progress>

                <FollowButton to={matchesPath}>
                  <PiPlayCircle size={18} />
                  Acompanhar
                </FollowButton>
              </LiveCard>
            ))}
          </LiveGrid>
        </SectionBlock>
      </Content>
    </Wrapper>
  );
};
