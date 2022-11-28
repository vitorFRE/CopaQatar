import React from 'react';
import { Link } from 'react-router-dom';
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
              <a href="https://github.com/vitorFRE" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <Link to="/">Twitter</Link>
            </li>
            <li>
              <Link to="/">Youtube</Link>
            </li>
          </ul>
          <ul>
            <li>Legais</li>
            <li>
              <Link to="/">Sobre</Link>
            </li>
            <li>
              <Link to="/">Lincença</Link>
            </li>
            <li>
              <Link to="/">Contato</Link>
            </li>
            <li>
              <Link to="/">Politíca de privacidade</Link>
            </li>
          </ul>
          <ul>
            <li>Fifa</li>
            <li>
              <Link to="/">Serviços</Link>
            </li>
            <li>
              <Link to="/">Patrocinadores</Link>
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
