import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GrupoPage from './Pages/GrupoPage';

import Home from './Pages/Home';
import Informacoes from './Pages/Informacoes';
import Partida from './Pages/Partida';
import Partidas from './Pages/Partidas';

const RoutesPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Informacoes" element={<Informacoes />} />
        <Route path="/Partidas" element={<Partidas />} />
        <Route path="/Partida/:id" element={<Partida />} />
        <Route path="/Grupos" element={<GrupoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPages;
