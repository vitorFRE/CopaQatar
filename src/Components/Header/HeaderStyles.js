import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  padding: 38px 0;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 56px;

  > li {
    color: #3c3939;

    a {
      font-weight: 500;
      font-size: 1.2rem;

      &:hover {
        color: #8d1b3d;
      }
    }
  }
`;
