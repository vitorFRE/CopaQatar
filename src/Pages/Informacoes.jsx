import React from 'react';
import Banner from '../Components/Banner/Banner';
import CurrentMatch from '../Components/CurrentMatch/CurrentMatch';
import Faq from '../Components/Faq/Faq';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Informacoes = () => {
  return (
    <>
      <Header />
      <Banner />
      <CurrentMatch />
      <Faq />
      <Footer />
    </>
  );
};

export default Informacoes;
