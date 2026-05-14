import type { ReactNode } from 'react';
import {
  PiShirtFolded,
  PiSoccerBall,
  PiTicket,
  PiUsersThree,
} from 'react-icons/pi';
import styled from 'styled-components';

type NumberItem = {
  value: string;
  label: string;
  description: string;
  icon: ReactNode;
};

const numberItems: NumberItem[] = [
  {
    value: '5.000.000+',
    label: 'Torcedores',
    description: 'esperados',
    icon: <PiUsersThree size={28} />,
  },
  {
    value: '7.800.000+',
    label: 'Ingressos',
    description: 'disponíveis',
    icon: <PiTicket size={28} />,
  },
  {
    value: '48',
    label: 'Seleções',
    description: 'participantes',
    icon: <PiShirtFolded size={28} />,
  },
  {
    value: '104',
    label: 'Partidas',
    description: 'ao todo',
    icon: <PiSoccerBall size={28} />,
  },
];

const Wrapper = styled.section`
  background:
    radial-gradient(circle at 90% 10%, rgba(91, 227, 109, 0.05), transparent 22%),
    linear-gradient(180deg, #040b18 0%, #061121 100%);
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
  margin-bottom: 24px;

  h2 {
    margin: 0;
    color: white;
    font-size: 1.9rem;
    text-transform: uppercase;
    white-space: nowrap;
  }

  span {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 640px) {
    h2 {
      white-space: normal;
      font-size: 1.45rem;
    }
  }
`;

const NumbersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

const NumberCard = styled.article`
  display: grid;
  grid-template-columns: 38px 1fr;
  align-items: start;
  gap: 14px;
  padding-top: 10px;

  .icon {
    color: ${({ theme }) => theme.colors.primary};
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  strong {
    display: block;
    margin-bottom: 6px;
    color: white;
    font-size: 2rem;
    line-height: 1;
  }

  span,
  small {
    display: block;
    color: rgba(255, 255, 255, 0.82);
  }

  small {
    color: rgba(255, 255, 255, 0.58);
  }
`;

export const EditionNumbersMock = () => {
  return (
    <Wrapper>
      <Content>
        <Header>
          <h2>Números da Copa</h2>
          <span />
        </Header>

        <NumbersGrid>
          {numberItems.map((item) => (
            <NumberCard key={item.label}>
              <div className="icon" aria-hidden="true">
                {item.icon}
              </div>
              <div>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <small>{item.description}</small>
              </div>
            </NumberCard>
          ))}
        </NumbersGrid>
      </Content>
    </Wrapper>
  );
};
