import React from 'react';
import LogoFifa from '../../assets/Images/LogoFifa';
import LogoQatar from '../../assets/Images/LogoQatar';
import { Container, FooterLogos, FooterMenu } from './FooterStyles';

const Footer = () => {
  return (
    <Container>
      <div>
        <FooterMenu>
          <ul>
            <li>Redes Sociais</li>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">Youtube</a>
            </li>
          </ul>
          <ul>
            <li>Legais</li>
            <li>
              <a href="/">Sobre</a>
            </li>
            <li>
              <a href="/">Licença</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
            <li>
              <a href="/">Politíca de privacidade</a>
            </li>
          </ul>
          <ul>
            <li>Fifa</li>
            <li>
              <a href="/">Serviços</a>
            </li>
            <li>
              <a href="/">Patrocinadores</a>
            </li>
          </ul>
        </FooterMenu>

        <FooterLogos>
          <LogoFifa />
          <LogoQatar />
        </FooterLogos>
      </div>
    </Container>
  );
};

export default Footer;
