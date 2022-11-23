import React from 'react';
import styled from 'styled-components';

const MatchContainer = styled.ul`
  width: 1200px;
  max-width: 100%;

  background-color: ${({ theme }) => theme.colors.bgColor};

  align-items: center;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  li {
    color: ${({ theme }) => theme.colors.RedQatar};
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 22px;
  }

  li:first-child {
    justify-content: flex-start;
  }

  li:last-child {
    justify-content: flex-end;
  }

  li:first-child,
  li:last-child {
    color: ${({ theme }) => theme.colors.defaultTextColor};
    font-weight: 500;
    font-size: 1.625rem;
    line-height: 31px;
    padding: 10px;

    display: flex;
    gap: 50px;
    align-items: center;
  }
`;

const Match = ({ Team1, Team2, LogoT1, LogoT2, DayHour }) => {
  return (
    <MatchContainer>
      <li>
        <img src={LogoT1} alt="Team Logo" /> {Team1}
      </li>
      <li>{DayHour}</li>
      <li>
        {Team2} <img src={LogoT2} alt="Team Logo" />
      </li>
    </MatchContainer>
  );
};

export default Match;
