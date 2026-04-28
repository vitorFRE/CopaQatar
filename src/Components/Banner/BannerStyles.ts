import styled from 'styled-components';
import i from '../../assets/wallpaper.png';

export const Container = styled.main`
  height: 600px;
  background-image: linear-gradient(#c02352a7, #b6355c7d), url(${i});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  > div {
    padding: 0 1rem;

    display: flex;
    padding-top: 90px;
    gap: 25px;
    align-items: center;
    flex-direction: column;
  }
`;
