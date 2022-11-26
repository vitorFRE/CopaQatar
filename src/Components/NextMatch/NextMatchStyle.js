import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const Matchs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  > ul:last-child {
    margin-bottom: 100px;
  }
`;
