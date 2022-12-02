import { motion } from 'framer-motion';
import React from 'react';
import Footer from '../Components/Footer/Footer';
import GruposPage from '../Components/GruposPage/GruposPage';
import Header from '../Components/Header/Header';

const GrupoPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <GruposPage />
      <Footer />
    </motion.div>
  );
};

export default GrupoPage;
