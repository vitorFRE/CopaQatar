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

export const Menu = styled.nav`
  > button {
    background: none;
    border: none;
    cursor: pointer;
    display: none;
    padding: 10px 10px 10px 10px;
    z-index: 999;
    position: relative;
  }
  ul {
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
  }

  @media (max-width: 800px) {
    button {
      display: block;
    }
    ul {
      margin-top: 0px;
      position: absolute;
      width: 100%;
      top: 0px;
      right: 0px;
      flex-direction: column;
      padding-top: 104px;
      display: none;
      z-index: 800;
      gap: 40px;

      > li {
        width: 100%;
        text-align: center;
        > a {
          font-size: 24px;
          color: ${({ theme }) => theme.colors.RedQatar};
        }
        &:last-child {
          margin-bottom: 20px;
        }
      }
    }
    .menuActive {
      background: rgba(255, 255, 255, 0.25);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(6.5px);
      -webkit-backdrop-filter: blur(6.5px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      display: flex;
      border-radius: 0 0 0 6px;
      width: 40%;
      height: max-content;
    }
  }
`;
