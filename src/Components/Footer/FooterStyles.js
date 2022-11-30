import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #8d1b3d;
  margin-top: 50px;

  > div {
    max-width: 1200px;
    padding: 0 1rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  gap: 100px;

  > ul {
    color: white;
    margin-top: 75px;
    margin-bottom: 75px;

    @media (max-width: 720px) {
      margin-top: 25px;
      margin-bottom: 25px;
    }

    > li:first-child {
      margin-bottom: 24px;
      font-size: 1.5rem;
      font-weight: 600;
      color: white;
    }

    > li {
      margin-bottom: 16px;
      font-size: 1.125rem;
      font-weight: 500;
      color: ${(props) => props.theme.colors.greyColor2};
      &:hover {
        color: white;
      }
    }
  }

  @media (max-width: 720px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const FooterLogos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;

  .logofifa {
    fill: white;
  }
`;
