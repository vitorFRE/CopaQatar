import React, { useState } from 'react';
import { Container, Logo, Menu } from './HeaderStyles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import LogoHeader from '../../assets/Images/LogoHeader';

const Header = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <Container>
      <Logo>
        <LogoHeader />
      </Logo>

      <Menu>
        <button onClick={() => setMobileMenu(!mobileMenu)}>
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
          className={`${mobileMenu && 'menuActive'}`}
        >
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="#grupos">Grupos</a>
          </li>
          <li>
            <a href="#proximojogo">Partidas</a>
          </li>
          <li>
            <a href="">Onde Assistir</a>
          </li>
        </motion.ul>
      </Menu>
    </Container>
  );
};

export default Header;
