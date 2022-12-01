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
              <a
                href="https://www.linkedin.com/in/vitor-santos-5744861b2/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
          </ul>
          <ul>
            <li>Infos</li>

            <li>
              <a href="https://github.com/vitorFRE/CopaQatar" target="_blank">
                Repositório
              </a>
            </li>

            <li>
              <a
                href="https://github.com/estiens/world_cup_json"
                target="_blank"
              >
                API
              </a>
            </li>
          </ul>
          <ul>
            <li>Pages</li>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/informacoes">Informações</Link>
            </li>
            <li>
              <Link to="/Partidas">Partidas</Link>
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
