import { motion } from 'framer-motion';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import LogoHeader from '../../assets/Images/LogoHeader';
import { Container, Logo, Menu } from './HeaderStyles';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <Container>
      <Logo>
        <Link to="/">
          <LogoHeader />
        </Link>
      </Logo>

      <Menu>
        <button type="button" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? (
            <MdClose size={36} color={'#8d1b3d'} />
          ) : (
            <GiHamburgerMenu size={36} color={'#8d1b3d'} />
          )}
        </button>
        <motion.ul
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className={`${mobileMenu ? 'menuActive' : ''}`}
        >
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Grupos">Grupos</Link>
          </li>
          <li>
            <Link to="/Partidas">Partidas</Link>
          </li>
          <li>
            <Link to="/informacoes">Informações</Link>
          </li>
        </motion.ul>
      </Menu>
    </Container>
  );
};

export default Header;
