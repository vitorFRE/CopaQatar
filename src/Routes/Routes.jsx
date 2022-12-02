import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from '../Components/Helper/ScrollToTop';
import AnimateRoutes from './AnimateRoutes';

const RoutesPages = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimateRoutes />
    </BrowserRouter>
  );
};

export default RoutesPages;
