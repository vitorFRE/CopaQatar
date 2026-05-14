import { PiArrowRight, PiCalendarBlank, PiClock, PiMapPin } from "react-icons/pi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEdition } from "../../edition/EditionContext";
import { buildEditionPath } from "../../edition/editionConfig";
import { GetURL } from "../Helper/GetURL";

type BrazilSectionState = "today" | "upcoming" | "eliminated";

type BrazilMatch = {
  stage: string;
  badge: string;
  dateLabel: string;
  timeLabel: string;
  venueLabel: string;
  home: {
    code: string;
    name: string;
    description: string;
  };
  away: {
    code: string;
    name: string;
    description: string;
  };
  footer: {
    leftTitle: string;
    leftDescription: string;
    rightTitle: string;
    rightDescription: string;
  };
};

// Troque o retorno desta função para simular os diferentes estados da seção.
function getBrazilSectionMockState(): BrazilSectionState {
  return "today";
}

const brazilTodayMatch: BrazilMatch = {
  stage: "Grupo C",
  badge: "Hoje",
  dateLabel: "Hoje, 16 Jun",
  timeLabel: "16:00 no horário local",
  venueLabel: "Lincoln Financial Field, Filadélfia",
  home: {
    code: "BRA",
    name: "Brasil",
    description: "Seleção brasileira",
  },
  away: {
    code: "UND",
    name: "Haiti",
    description: "Confronto de estreia",
  },
  footer: {
    leftTitle: "Transmissão mockada",
    leftDescription: "Card especial criado para a home 2026",
    rightTitle: "Pré-jogo",
    rightDescription: "Escalações e detalhes em breve",
  },
};

const brazilUpcomingMatch: BrazilMatch = {
  stage: "Quartas de final",
  badge: "Próxima",
  dateLabel: "18 Jun",
  timeLabel: "21:00 no horário local",
  venueLabel: "MetLife Stadium, Nova Jersey",
  home: {
    code: "BRA",
    name: "Brasil",
    description: "Próximo compromisso",
  },
  away: {
    code: "ARG",
    name: "Argentina",
    description: "Clássico sul-americano",
  },
  footer: {
    leftTitle: "Hoje não joga",
    leftDescription: "A próxima partida já está definida",
    rightTitle: "Aquecimento",
    rightDescription: "Prévia e destaques do confronto em breve",
  },
};

const Wrapper = styled.section`
  background: radial-gradient(
      circle at 20% 10%,
      rgba(91, 227, 109, 0.06),
      transparent 24%
    ),
    linear-gradient(180deg, #061121 0%, #040b18 100%);
  padding: 0 0 56px;
`;

const Content = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 22px;

  h2 {
    margin: 0;
    color: white;
    font-size: 1.95rem;
    text-transform: uppercase;
    white-space: nowrap;
  }

  span {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 680px) {
    h2 {
      white-space: normal;
      font-size: 1.55rem;
    }
  }
`;

const HighlightCard = styled.article`
  display: grid;
  grid-template-columns: minmax(320px, 420px) 1fr;
  gap: 28px;
  padding: 26px;
  border-radius: 20px;
  border: 1px solid rgba(91, 227, 109, 0.18);
  background: linear-gradient(180deg, rgba(10, 19, 32, 0.96), rgba(8, 16, 28, 0.94)),
    radial-gradient(circle at 86% 20%, rgba(91, 227, 109, 0.08), transparent 18%);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 560px) {
    padding: 20px;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .eyebrow {
    display: inline-flex;
    align-self: flex-start;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(91, 227, 109, 0.14);
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h3 {
    margin: 0;
    color: white;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.05;
    text-transform: uppercase;
  }

  p {
    max-width: 440px;
    margin: 0;
    color: rgba(255, 255, 255, 0.74);
    font-size: 1.02rem;
    line-height: 1.7;
  }
`;

const MetaList = styled.div`
  display: grid;
  gap: 12px;

  > div {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: rgba(255, 255, 255, 0.74);
    font-size: 0.96rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 6px;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 18px;
    border-radius: 999px;
    font-weight: 600;
  }

  a:first-child {
    background: ${({ theme }) => theme.colors.primary};
    color: #04111c;
  }

  a:last-child {
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.03);
  }

  @media (max-width: 560px) {
    flex-direction: column;

    a {
      width: 100%;
    }
  }
`;

const MatchCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  padding: 22px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(180deg, rgba(14, 23, 38, 0.94), rgba(10, 18, 30, 0.9));
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  min-height: 100%;

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h4 {
    margin: 0;
    color: white;
    font-size: 2rem;
    line-height: 1.1;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.7;
  }
`;

const MatchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  strong {
    color: white;
    font-size: 1.05rem;
    text-transform: uppercase;
  }

  span {
    padding: 6px 10px;
    border-radius: 999px;
    background: rgba(91, 227, 109, 0.14);
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const Teams = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 14px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Team = styled.div<{ $align?: "left" | "right" }>`
  display: flex;
  flex-direction: ${({ $align }) => ($align === "right" ? "row-reverse" : "row")};
  align-items: center;
  justify-content: ${({ $align }) => ($align === "right" ? "flex-start" : "flex-start")};
  gap: 14px;
  color: white;

  img {
    width: 44px;
    height: 30px;
    border-radius: 6px;
    object-fit: cover;
  }

  strong {
    display: block;
    font-size: 1.35rem;
  }

  span {
    display: block;
    margin-top: 4px;
    color: rgba(255, 255, 255, 0.58);
    font-size: 0.9rem;
  }

  @media (max-width: 560px) {
    justify-content: center;
    flex-direction: row;
  }
`;

const Versus = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
`;

const MatchFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  strong {
    color: white;
    font-size: 1.05rem;
  }

  span {
    color: rgba(255, 255, 255, 0.56);
    font-size: 0.9rem;
  }

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const EditionBrazilTodayMock = () => {
  const { slug } = useEdition();
  const matchesPath = buildEditionPath(slug, "partidas");
  const infoPath = buildEditionPath(slug, "informacoes");
  const brazilSectionMockState = getBrazilSectionMockState();
  const showUpcomingMatch = brazilSectionMockState === "upcoming";
  const showEliminatedState = brazilSectionMockState === "eliminated";
  const selectedMatch = showUpcomingMatch ? brazilUpcomingMatch : brazilTodayMatch;

  const introContent = showEliminatedState
    ? {
        eyebrow: "Fim da campanha",
        title: "Não. O Brasil já foi eliminado.",
        description:
          "A seleção brasileira encerrou a participação nesta edição. Agora o destaque da home fica com as fases finais e com a espera pela próxima campanha.",
        primaryLabel: "Ver mata-mata",
        secondaryLabel: "Mais informações",
      }
    : showUpcomingMatch
    ? {
        eyebrow: "Próximo compromisso",
        title: "Hoje não. A próxima partida do Brasil já está definida.",
        description:
          "Mesmo sem jogo no dia, a home continua destacando o próximo confronto da seleção brasileira para manter a navegação contextual.",
        primaryLabel: "Ver próxima partida",
        secondaryLabel: "Mais informações",
      }
    : {
        eyebrow: "Especial do dia",
        title: "Sim, o Brasil entra em campo hoje.",
        description:
          "Em clima de estreia, o destaque da rodada fica com a seleção brasileira em um confronto mockado para dar mais personalidade à home da edição 2026.",
        primaryLabel: "Ver partida",
        secondaryLabel: "Mais informações",
      };

  return (
    <Wrapper>
      <Content>
        <Header>
          <h2>O Brasil joga hoje?</h2>
          <span />
        </Header>

        <HighlightCard>
          <Intro>
            <span className='eyebrow'>{introContent.eyebrow}</span>
            <h3>{introContent.title}</h3>
            <p>{introContent.description}</p>

            {!showEliminatedState ? (
              <MetaList>
                <div>
                  <PiCalendarBlank size={18} />
                  <span>{selectedMatch.dateLabel}</span>
                </div>
                <div>
                  <PiClock size={18} />
                  <span>{selectedMatch.timeLabel}</span>
                </div>
                <div>
                  <PiMapPin size={18} />
                  <span>{selectedMatch.venueLabel}</span>
                </div>
              </MetaList>
            ) : null}

            <ActionRow>
              <Link to={matchesPath}>
                {introContent.primaryLabel}
                <PiArrowRight size={18} />
              </Link>
              <Link to={infoPath}>{introContent.secondaryLabel}</Link>
            </ActionRow>
          </Intro>

          <MatchCard>
            {showEliminatedState ? (
              <EmptyState>
                <strong>Campanha encerrada</strong>
                <h4>Voltamos em 2030.</h4>
                <p>
                  O Brasil não tem mais partidas nesta edição. Enquanto isso, você ainda
                  pode acompanhar grupos, eliminatórias e os destaques finais do torneio.
                </p>
              </EmptyState>
            ) : (
              <>
                <MatchHeader>
                  <strong>{selectedMatch.stage}</strong>
                  <span>{selectedMatch.badge}</span>
                </MatchHeader>

                <Teams>
                  <Team>
                    <img src={GetURL(selectedMatch.home.code)} alt='' />
                    <div>
                      <strong>{selectedMatch.home.name}</strong>
                      <span>{selectedMatch.home.description}</span>
                    </div>
                  </Team>

                  <Versus>x</Versus>

                  <Team $align='right'>
                    <img src={GetURL(selectedMatch.away.code)} alt='' />
                    <div>
                      <strong>{selectedMatch.away.name}</strong>
                      <span>{selectedMatch.away.description}</span>
                    </div>
                  </Team>
                </Teams>

                <MatchFooter>
                  <div>
                    <strong>{selectedMatch.footer.leftTitle}</strong>
                    <span>{selectedMatch.footer.leftDescription}</span>
                  </div>
                  <div>
                    <strong>{selectedMatch.footer.rightTitle}</strong>
                    <span>{selectedMatch.footer.rightDescription}</span>
                  </div>
                </MatchFooter>
              </>
            )}
          </MatchCard>
        </HighlightCard>
      </Content>
    </Wrapper>
  );
};
