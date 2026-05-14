import { Link } from 'react-router-dom';
import LogoFifa from '../../assets/Images/LogoFifa';
import LogoQatar from '../../assets/Images/LogoQatar';
import { useEdition } from '../../edition/EditionContext';
import {
  buildEditionPath,
  getAllEditionConfigs,
} from '../../edition/editionConfig';
import {
  Container,
  FooterLogos,
  FooterMenu,
  ModernEditionList,
  ModernFooterBottom,
  ModernFooterBrand,
  ModernFooterColumn,
  ModernFooterContent,
  ModernFooterLinks,
  ModernFooterShell,
  ModernFooterTop,
} from './FooterStyles';

const Footer = () => {
  const { slug, brandStyle, name } = useEdition();
  const editions = getAllEditionConfigs();

  if (brandStyle === 'modern') {
    return (
      <ModernFooterShell>
        <ModernFooterContent>
          <ModernFooterTop>
            <ModernFooterBrand>
              <strong>{name}</strong>
              <p>
                Uma nova experiência para acompanhar grupos, partidas, fases finais e os
                principais números da Copa do Mundo de 2026.
              </p>
              <ModernEditionList>
                {editions.map((edition) => (
                  <Link
                    key={edition.slug}
                    to={buildEditionPath(edition.slug)}
                    className={edition.slug === slug ? 'active' : ''}
                  >
                    {edition.year}
                  </Link>
                ))}
              </ModernEditionList>
            </ModernFooterBrand>

            <ModernFooterLinks>
              <ModernFooterColumn>
                <h3>Navegação</h3>
                <ul>
                  <li>
                    <Link to={buildEditionPath(slug)}>Início</Link>
                  </li>
                  <li>
                    <Link to={buildEditionPath(slug, 'grupos')}>Grupos</Link>
                  </li>
                  <li>
                    <Link to={buildEditionPath(slug, 'partidas')}>Partidas</Link>
                  </li>
                  <li>
                    <Link to={buildEditionPath(slug, 'informacoes')}>Informações</Link>
                  </li>
                </ul>
              </ModernFooterColumn>

              <ModernFooterColumn>
                <h3>Projeto</h3>
                <ul>
                  <li>
                    <a
                      href="https://github.com/vitorFRE/CopaQatar"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Repositório
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/estiens/world_cup_json"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Fonte de dados
                    </a>
                  </li>
                </ul>
              </ModernFooterColumn>

              <ModernFooterColumn>
                <h3>Contato</h3>
                <ul>
                  <li>
                    <a
                      href="https://github.com/vitorFRE"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/vitor-santos-5744861b2/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </ModernFooterColumn>
            </ModernFooterLinks>
          </ModernFooterTop>

          <ModernFooterBottom>
            <span>Copa do Mundo 2026. Layout inicial da edição em evolução.</span>
            <span>Projeto independente criado para acompanhar a competição.</span>
          </ModernFooterBottom>
        </ModernFooterContent>
      </ModernFooterShell>
    );
  }

  return (
    <Container>
      <div>
        <FooterMenu>
          <ul>
            <li>Redes Sociais</li>
            <li>
              <a
                href="https://github.com/vitorFRE"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vitor-santos-5744861b2/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Linkedin
              </a>
            </li>
          </ul>
          <ul>
            <li>Infos</li>

            <li>
              <a
                href="https://github.com/vitorFRE/CopaQatar"
                target="_blank"
                rel="noreferrer noopener"
              >
                Repositório
              </a>
            </li>

            <li>
              <a
                href="https://github.com/estiens/world_cup_json"
                target="_blank"
                rel="noreferrer noopener"
              >
                API
              </a>
            </li>
          </ul>
          <ul>
            <li>Pages</li>
            <li>
              <Link to={buildEditionPath(slug)}>Inicio</Link>
            </li>
            <li>
              <Link to={buildEditionPath(slug, 'grupos')}>Grupos</Link>
            </li>
            <li>
              <Link to={buildEditionPath(slug, 'partidas')}>Partidas</Link>
            </li>
            <li>
              <Link to={buildEditionPath(slug, 'informacoes')}>Informações</Link>
            </li>
          </ul>
          <ul>
            <li>Edições</li>
            {editions.map((edition) => (
              <li key={edition.slug}>
                <Link to={buildEditionPath(edition.slug)}>{edition.year}</Link>
              </li>
            ))}
          </ul>
        </FooterMenu>

        {brandStyle === 'legacy' ? (
          <FooterLogos>
            <LogoFifa />
            <LogoQatar />
          </FooterLogos>
        ) : null}
      </div>
    </Container>
  );
};

export default Footer;
