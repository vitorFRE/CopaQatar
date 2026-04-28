import { motion } from 'framer-motion';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import Grupos from '../Components/Grupos/Grupos';
import Header from '../Components/Header/Header';
import NextMatch from '../Components/NextMatch/NextMatch';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <Banner />
      <Grupos />
      <NextMatch />
      <Footer />
    </motion.div>
  );
};

export default Home;
