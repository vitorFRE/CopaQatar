import React from 'react';
import styled from 'styled-components';

const MatchContainer = styled.ul`
  width: 1200px;
  max-width: 100%;

  background-color: ${({ theme }) => theme.colors.bgColor};
  box-shadow: 3px 3px 3px rgba(60, 57, 57, 0.2);

  align-items: center;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  > ul {
    text-align: center;
    padding: 10px;
    > .in_2 {
      color: ${({ theme }) => theme.colors.RedQatar};
      font-weight: 600;
      font-size: 1.125rem;
      line-height: 22px;
      margin-bottom: 10px;
      margin-top: 10px;
    }
    .in_1,
    .in_3 {
      color: ${({ theme }) => theme.colors.defaultTextColor};
      font-weight: 600;
      font-size: 1.625rem;
      line-height: 22px;
    }
  }

  > .li_1 {
    justify-content: flex-start;
  }

  > .li_2 {
    justify-content: flex-end;
  }

  .li_1:first-child,
  .li_2:last-child {
    color: ${({ theme }) => theme.colors.defaultTextColor};
    font-weight: 500;
    font-size: 1.625rem;
    line-height: 31px;
    padding: 10px;

    display: flex;
    gap: 50px;
    align-items: center;
  }

  @media (max-width: 700px) {
    .li_1:first-child,
    .li_2:last-child {
      font-size: 1.225rem;
      text-align: center;
    }

    > li {
      display: flex;
      flex-direction: column;
      > img {
        width: 50px;
      }
    }
  }
`;

const Match = ({
  Team1,
  Team2,
  LogoT1,
  LogoT2,
  Info,
  Info2,
  Info3,
  Info4,
  Info5,
  ...props
}) => {
  return (
    <MatchContainer>
      <li className="li_1">
        <img src={LogoT1} alt="Team Logo" /> {Team1}
      </li>
      <ul>
        <li className="in_1">{Info}</li>
        <li className="in_2">{Info2}</li>
        <li className="in_3">{Info3}</li>
        <li className="in_2">{Info4}</li>
        <li className="in_2">{Info5}</li>
      </ul>
      <li className="li_2">
        {Team2} <img src={LogoT2} alt="Team Logo" />
      </li>
    </MatchContainer>
  );
};

export default Match;
