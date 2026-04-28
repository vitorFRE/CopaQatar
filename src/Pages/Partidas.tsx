import { motion } from 'framer-motion';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import PartidasLista from '../Components/Partidas/PartidasLista';

const Partidas = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <PartidasLista />
      <Footer />
    </motion.div>
  );
};

export default Partidas;
