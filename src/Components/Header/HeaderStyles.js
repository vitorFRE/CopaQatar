import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  padding: 38px 0;
`;

export const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 56px;

  > li {
    color: ${({ theme }) => theme.colors.greyColor};

    a {
      font-weight: 500;
      font-size: 1.2rem;

      &:hover {
        color: ${({ theme }) => theme.colors.RedQatar};
      }
    }
  }
`;
