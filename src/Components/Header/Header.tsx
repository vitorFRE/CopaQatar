import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import {
  PiGlobeSimple,
  PiMagnifyingGlass,
  PiTrophyDuotone,
} from 'react-icons/pi';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from 'styled-components';
import LogoHeader from '../../assets/Images/LogoHeader';
import { useEdition } from '../../edition/EditionContext';
import {
  buildEditionPath,
  getAllEditionConfigs,
} from '../../edition/editionConfig';
import {
  Container,
  HeaderActions,
  HeaderShell,
  Logo,
  LogoBadge,
  LogoText,
  Menu,
} from './HeaderStyles';

const Header = () => {
  const theme = useTheme();
  const { slug, brandStyle } = useEdition();
  const [mobileMenu, setMobileMenu] = useState(false);
  const editions = getAllEditionConfigs();
  const navigationItems = [
    { label: 'Início', path: buildEditionPath(slug) },
    { label: 'Partidas', path: buildEditionPath(slug, 'partidas') },
    { label: 'Grupos', path: buildEditionPath(slug, 'grupos') },
    { label: 'Informações', path: buildEditionPath(slug, 'informacoes') },
  ];

  return (
    <HeaderShell $brandStyle={brandStyle}>
      <Container $brandStyle={brandStyle}>
        <Logo $brandStyle={brandStyle}>
          <Link to={buildEditionPath(slug)}>
            {brandStyle === 'legacy' ? (
              <LogoHeader />
            ) : (
              <>
                <LogoBadge>
                  <PiTrophyDuotone size={22} />
                </LogoBadge>
                <LogoText $brandStyle={brandStyle}>
                  <strong>Copa do Mundo</strong>
                  <span>{slug}</span>
                </LogoText>
              </>
            )}
          </Link>
        </Logo>

        <Menu $brandStyle={brandStyle}>
          <button type="button" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? (
              <MdClose size={36} color={brandStyle === 'modern' ? 'white' : theme.colors.primary} />
            ) : (
              <GiHamburgerMenu
                size={36}
                color={brandStyle === 'modern' ? 'white' : theme.colors.primary}
              />
            )}
          </button>
          <ul className={`${mobileMenu ? 'menuActive' : ''}`}>
            {navigationItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === buildEditionPath(slug)}
                  className={({ isActive }) =>
                    `nav_link${isActive ? ' active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="edition_links">
              {editions.map((edition) => (
                <Link
                  key={edition.slug}
                  to={buildEditionPath(edition.slug)}
                  className={`edition_link ${edition.slug === slug ? 'active' : ''}`}
                >
                  {edition.year}
                </Link>
              ))}
            </li>
          </ul>
        </Menu>

        <HeaderActions $brandStyle={brandStyle}>
          <span className="header_icon" aria-hidden="true">
            <PiGlobeSimple size={18} />
          </span>
          <span className="header_icon" aria-hidden="true">
            <PiMagnifyingGlass size={18} />
          </span>
          <Link className="header_cta" to={buildEditionPath(slug, 'informacoes')}>
            Entrar
          </Link>
        </HeaderActions>
      </Container>
    </HeaderShell>
  );
};

export default Header;
