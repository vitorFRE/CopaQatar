import React, { useState } from 'react';
import LogoFifa from '../../assets/Images/LogoFifa';
import { Container, Logo, Menu } from './HeaderStyles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

const Header = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <Container>
      <Logo>
        <LogoFifa />
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
            <a href="">Grupos</a>
          </li>
          <li>
            <a href="">Partidas</a>
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
