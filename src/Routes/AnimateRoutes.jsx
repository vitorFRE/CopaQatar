import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import GrupoPage from '../Pages/GrupoPage';
import Home from '../Pages/Home';
import Informacoes from '../Pages/Informacoes';
import Partida from '../Pages/Partida';
import Partidas from '../Pages/Partidas';

import { AnimatePresence } from 'framer-motion';

const AnimateRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Informacoes" element={<Informacoes />} />
        <Route path="/Partidas" element={<Partidas />} />
        <Route path="/Partida/:id" element={<Partida />} />
        <Route path="/Grupos" element={<GrupoPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
