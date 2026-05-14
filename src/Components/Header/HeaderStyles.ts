import styled, { css } from 'styled-components';

type BrandStyleProps = {
  $brandStyle: 'legacy' | 'modern';
};

const modernSurface = css`
  background: rgba(4, 10, 22, 0.96);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const HeaderShell = styled.header<BrandStyleProps>`
  position: relative;
  z-index: 10;
  ${({ $brandStyle }) => ($brandStyle === 'modern' ? modernSurface : '')}
`;

export const Container = styled.div<BrandStyleProps>`
  max-width: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '1360px' : '1200px')};
  padding: 0 1rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '82px' : '0')};
  flex-wrap: ${({ $brandStyle }) => ($brandStyle === 'modern' ? 'nowrap' : 'wrap')};

  @media (max-width: 980px) {
    min-height: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '72px' : '0')};
    gap: 12px;
    padding: 0 0.875rem;
  }
`;

export const Logo = styled.div<BrandStyleProps>`
  padding: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '16px 0' : '38px 0')};
  min-width: 0;
  flex: 0 1 auto;

  a {
    display: inline-flex;
    align-items: center;
    min-width: 0;
  }

  @media (max-width: 980px) {
    padding: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '12px 0' : '24px 0')};
  }
`;

export const LogoText = styled.div<BrandStyleProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    color: ${({ $brandStyle, theme }) =>
      $brandStyle === 'modern' ? 'white' : theme.colors.primary};
    font-size: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '1.2rem' : '1.4rem')};
    line-height: 1.1;
    text-transform: ${({ $brandStyle }) => ($brandStyle === 'modern' ? 'uppercase' : 'none')};
    letter-spacing: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '0.04em' : 'normal')};
  }

  span {
    color: ${({ $brandStyle, theme }) =>
      $brandStyle === 'modern' ? 'rgba(255, 255, 255, 0.72)' : theme.colors.greyColor};
    font-size: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '0.8rem' : '0.95rem')};
    text-transform: ${({ $brandStyle }) => ($brandStyle === 'modern' ? 'uppercase' : 'none')};
    letter-spacing: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '0.08em' : 'normal')};
  }

  @media (max-width: 980px) {
    gap: 2px;

    strong {
      font-size: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '1rem' : '1.15rem')};
      letter-spacing: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '0.03em' : 'normal')};
    }

    span {
      font-size: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '0.72rem' : '0.85rem')};
      letter-spacing: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '0.06em' : 'normal')};
    }
  }
`;

export const LogoBadge = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(91, 227, 109, 0.18));
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.12);

  @media (max-width: 980px) {
    width: 34px;
    height: 34px;
    margin-right: 10px;
    border-radius: 10px;
  }
`;

export const Menu = styled.nav<BrandStyleProps>`
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 0 0 auto;

  > button {
    background: none;
    border: none;
    cursor: pointer;
    display: none;
    padding: 10px;
    z-index: 999;
    position: relative;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '30px' : '56px')};
    align-items: center;

    > li {
      color: ${({ $brandStyle, theme }) =>
        $brandStyle === 'modern' ? 'rgba(255, 255, 255, 0.72)' : theme.colors.greyColor};

      a {
        font-weight: 500;
        font-size: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '0.98rem' : '1.2rem')};
        transition: color 0.2s ease;
        position: relative;
        display: inline-flex;
        padding: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '28px 0' : '0')};

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }

      .nav_link.active {
        color: ${({ $brandStyle, theme }) =>
          $brandStyle === 'modern' ? 'white' : theme.colors.primary};

        &::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '16px' : '-6px')};
          height: 2px;
          border-radius: 999px;
          background: ${({ theme }) => theme.colors.primary};
          opacity: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '1' : '0')};
        }
      }
    }

    .edition_links {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-left: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '10px' : '0')};
    }

    .edition_link {
      border-radius: 999px;
      padding: 8px 14px;
      background-color: ${({ $brandStyle, theme }) =>
        $brandStyle === 'modern' ? 'rgba(255, 255, 255, 0.08)' : theme.colors.primarySoft};
      color: ${({ theme }) => theme.colors.primary};
      font-size: 0.95rem;
      font-weight: 600;
      border: 1px solid
        ${({ $brandStyle }) =>
          $brandStyle === 'modern' ? 'rgba(255, 255, 255, 0.08)' : 'transparent'};
    }

    .edition_link.active {
      color: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '#04111c' : 'white')};
      background-color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 980px) {
    gap: 12px;

    button {
      display: block;
      padding: 6px;
      line-height: 0;

      > svg {
        width: 30px;
        height: 30px;
      }
    }

    ul {
      margin-top: 0;
      position: absolute;
      width: min(420px, calc(100% - 24px));
      top: calc(100% + 8px);
      right: 12px;
      flex-direction: column;
      padding: 24px;
      display: none;
      z-index: 800;
      gap: 24px;
      border-radius: 20px;

      > li {
        width: 100%;
        text-align: left;

        > a {
          font-size: 1.05rem;
          padding: 0;
          color: ${({ $brandStyle, theme }) =>
            $brandStyle === 'modern' ? 'white' : theme.colors.primary};
        }

        &:last-child {
          margin-bottom: 0;
        }
      }

      .edition_links {
        justify-content: flex-start;
        margin-left: 0;
      }

      .edition_link {
        font-size: 0.95rem;
      }
    }

    .menuActive {
      background: ${({ $brandStyle }) =>
        $brandStyle === 'modern'
          ? 'rgba(4, 10, 22, 0.98)'
          : 'rgba(255, 255, 255, 0.92)'};
      box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
      border: 1px solid
        ${({ $brandStyle }) =>
          $brandStyle === 'modern' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'};
      display: flex;
    }
  }
`;

export const HeaderActions = styled.div<BrandStyleProps>`
  display: ${({ $brandStyle }) => ($brandStyle === 'modern' ? 'flex' : 'none')};
  align-items: center;
  gap: 12px;

  .header_icon {
    width: 38px;
    height: 38px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.82);
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .header_cta {
    padding: 10px 16px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: white;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.04);
  }

  @media (max-width: 980px) {
    display: none;
  }
`;
