import { motion } from 'framer-motion';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import MatchInfos from '../Components/MatchInfos/MatchInfos';

const Partida = () => {
  return (
    <motion.div>
      <Header />
      <MatchInfos />
      <Footer />
    </motion.div>
  );
};

export default Partida;
