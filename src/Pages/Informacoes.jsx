import React from 'react';
import Banner from '../Components/Banner/Banner';
import CurrentMatch from '../Components/CurrentMatch/CurrentMatch';
import Faq from '../Components/Faq/Faq';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { motion } from 'framer-motion';

const Informacoes = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <Banner />
      <CurrentMatch />
      <Faq />
      <Footer />
    </motion.div>
  );
};

export default Informacoes;
