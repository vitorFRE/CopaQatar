import React from 'react';
import LogoFifa from '../../assets/Images/LogoFifa';
import { Container, Logo, Menu } from './HeaderStyles';

const Header = () => {
  return (
    <Container>
      <Logo>
        <LogoFifa />
      </Logo>

      <Menu>
        <li>
          <a href="">Inicio</a>
        </li>
        <li>
          <a href="">Grupos</a>
        </li>
        <li>
          <a href="">Partidas</a>
        </li>
        <li>
          <a href="">Onde Assistir</a>
        </li>
      </Menu>
    </Container>
  );
};

export default Header;
