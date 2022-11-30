import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Informacoes from './Pages/Informacoes';
import Partida from './Pages/Partida';

const RoutesPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Informacoes" element={<Informacoes />} />
        <Route path="/Partida/:id" element={<Partida />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPages;
