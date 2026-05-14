import styled, { css } from 'styled-components';
import i from '../../assets/wallpaper.png';

type BrandStyleProps = {
  $brandStyle: 'legacy' | 'modern';
};

const modernLayout = css`
  position: relative;
  min-height: 620px;
  background-image:
    linear-gradient(
      90deg,
      rgba(3, 8, 20, 0.96) 0%,
      rgba(4, 11, 24, 0.9) 28%,
      rgba(4, 11, 24, 0.56) 58%,
      rgba(4, 11, 24, 0.84) 100%
    ),
    url('/hero-fundo.png');
  background-position: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 88% 24%, rgba(91, 227, 109, 0.18), transparent 24%),
      radial-gradient(circle at 85% 70%, rgba(91, 227, 109, 0.22), transparent 20%);
    pointer-events: none;
  }

  > .banner_modern {
    position: relative;
    z-index: 1;
    max-width: 1360px;
    min-height: 620px;
    margin: 0 auto;
    padding: 28px 1rem 42px;
    display: grid;
    grid-template-columns: minmax(320px, 620px) minmax(220px, 280px);
    justify-content: space-between;
    align-items: center;
    gap: 28px;
  }

  @media (max-width: 980px) {
    min-height: auto;
    background-position: 62% center;

    > .banner_modern {
      min-height: auto;
      grid-template-columns: 1fr;
      padding-top: 28px;
      padding-bottom: 32px;
      gap: 20px;
    }
  }
`;

const legacyLayout = css`
  height: 600px;
  background-image: linear-gradient(#c02352a7, #b6355c7d), url(${i});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  > .banner_legacy {
    padding: 0 1rem;
    display: flex;
    padding-top: 90px;
    gap: 25px;
    align-items: center;
    flex-direction: column;
  }
`;

export const Container = styled.main<BrandStyleProps>`
  background-repeat: no-repeat;
  background-size: cover;

  ${({ $brandStyle }) => ($brandStyle === 'modern' ? modernLayout : legacyLayout)}
`;

export const HeroContent = styled.div<BrandStyleProps>`
  position: relative;
  z-index: 2;
  max-width: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '560px' : '720px')};
  text-align: ${({ $brandStyle }) => ($brandStyle === 'modern' ? 'left' : 'center')};
  color: white;

  .hero_eyebrow {
    display: inline-flex;
    margin-bottom: 18px;
    color: ${({ $brandStyle, theme }) =>
      $brandStyle === 'modern' ? theme.colors.primary : 'white'};
    font-size: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '0.95rem' : '1rem')};
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h1 {
    font-size: ${({ $brandStyle }) =>
      $brandStyle === 'modern' ? 'clamp(3rem, 6vw, 5rem)' : 'clamp(2.4rem, 5vw, 4rem)'};
    line-height: 1.04;
    margin-bottom: 18px;
    max-width: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '520px' : 'none')};
    text-transform: ${({ $brandStyle }) => ($brandStyle === 'modern' ? 'uppercase' : 'none')};
  }

  .hero_description {
    max-width: 520px;
    font-size: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '1.08rem' : '1.1rem')};
    line-height: 1.7;
    color: ${({ $brandStyle }) =>
      $brandStyle === 'modern' ? 'rgba(255, 255, 255, 0.82)' : 'white'};
  }

  .hero_meta {
    margin-top: 14px;
    font-size: 1.02rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
  }

  @media (max-width: 980px) {
    max-width: 100%;

    h1 {
      max-width: 320px;
      font-size: 3.5rem;
    }

    .hero_description {
      max-width: 340px;
      font-size: 1rem;
      line-height: 1.55;
    }

    .hero_meta {
      font-size: 0.95rem;
      line-height: 1.5;
      max-width: 320px;
    }
  }

  @media (max-width: 560px) {
    .hero_eyebrow {
      margin-bottom: 14px;
      font-size: 0.88rem;
    }

    h1 {
      max-width: 260px;
      font-size: 2.9rem;
      margin-bottom: 14px;
    }

    .hero_description {
      max-width: 100%;
      font-size: 0.95rem;
    }

    .hero_meta {
      max-width: 100%;
      font-size: 0.9rem;
      margin-top: 12px;
    }
  }
`;

export const HeroCup = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: clamp(220px, 24vw, 340px);
  height: auto;
  z-index: 1;
  pointer-events: none;
  filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.45));

  @media (max-width: 980px) {
    display: none;
  }
`;

export const ActionGroup = styled.div<BrandStyleProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ $brandStyle }) => ($brandStyle === 'modern' ? 'flex-start' : 'center')};
  gap: 16px;
  margin-top: 32px;

  a {
    padding: ${({ $brandStyle }) => ($brandStyle === 'modern' ? '15px 24px' : '14px 22px')};
    border-radius: 999px;
    font-weight: 600;
    border: 1px solid transparent;
  }

  a:first-child {
    background-color: ${({ $brandStyle, theme }) =>
      $brandStyle === 'modern' ? theme.colors.primary : 'white'};
    color: ${({ $brandStyle, theme }) =>
      $brandStyle === 'modern' ? '#04111c' : theme.colors.primary};
  }

  a:last-child {
    background-color: ${({ $brandStyle }) =>
      $brandStyle === 'modern' ? 'rgba(255, 255, 255, 0.04)' : 'transparent'};
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: white;
  }

  @media (max-width: 560px) {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 12px;

    a {
      width: 100%;
      text-align: center;
    }
  }
`;

export const HeroStats = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-self: end;
  position: relative;
  z-index: 2;

  @media (max-width: 980px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px 18px;
    width: 100%;
    max-width: 320px;
    justify-self: start;
  }

  @media (max-width: 560px) {
    max-width: 100%;
  }
`;

export const HeroStatItem = styled.div`
  display: grid;
  grid-template-columns: 44px 1fr;
  align-items: center;
  gap: 14px;
  padding: 8px 0;

  .hero_stat_icon {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(4, 11, 24, 0.6);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
    color: white;
  }

  strong {
    display: block;
    color: white;
    font-size: 1.9rem;
    line-height: 1;
    margin-bottom: 4px;
  }

  span {
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.86rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  @media (max-width: 560px) {
    grid-template-columns: 38px 1fr;
    gap: 10px;

    .hero_stat_icon {
      width: 38px;
      height: 38px;
    }

    strong {
      font-size: 1.5rem;
    }

    span {
      font-size: 0.76rem;
    }
  }
`;
