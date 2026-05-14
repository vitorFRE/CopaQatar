import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.footerBackground};
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

  @media (max-width: 450px) {
    > div {
      align-items: center;
    }
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
      color: ${({ theme }) => theme.colors.greyColor2};
      &:hover {
        color: white;
      }
    }
  }

  @media (max-width: 720px) {
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 5px;

    > ul {
      margin-bottom: 10px;
      margin-top: 10px;
    }
  }
`;

export const FooterLogos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;

  @media (max-width: 450px) {
    .logofifa {
      width: 50px;
    }
    .logoqatar {
      width: 170px;
    }
  }

  .logofifa {
    fill: white;
  }
`;

export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: white;
  text-align: center;
  margin-bottom: 25px;

  strong {
    font-size: 1.4rem;
  }

  span {
    color: ${({ theme }) => theme.colors.greyColor2};
  }
`;

export const ModernFooterShell = styled.footer`
  background:
    radial-gradient(circle at 88% 0%, rgba(91, 227, 109, 0.08), transparent 22%),
    linear-gradient(180deg, #040b18 0%, #071120 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

export const ModernFooterContent = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 42px 1rem 26px;
`;

export const ModernFooterTop = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 1.2fr) 1fr;
  gap: 36px;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const ModernFooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  strong {
    color: white;
    font-size: 2rem;
    line-height: 1.1;
  }

  p {
    max-width: 520px;
    margin: 0;
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.7;
  }
`;

export const ModernEditionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 9px 14px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.78);
    background: rgba(255, 255, 255, 0.04);
    font-weight: 600;
  }

  a.active {
    background: ${({ theme }) => theme.colors.primary};
    color: #04111c;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ModernFooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ModernFooterColumn = styled.div`
  h3 {
    margin: 0 0 18px;
    color: white;
    font-size: 1rem;
    text-transform: uppercase;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  li,
  a {
    color: rgba(255, 255, 255, 0.68);
    font-weight: 500;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ModernFooterBottom = styled.div`
  padding-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  span {
    color: rgba(255, 255, 255, 0.52);
    font-size: 0.92rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
