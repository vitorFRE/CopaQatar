import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Informacoes from './Pages/Informacoes';

const RoutesPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Informacoes" element={<Informacoes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPages;
