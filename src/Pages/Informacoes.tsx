import { motion } from 'framer-motion';
import Banner from '../Components/Banner/Banner';
import CurrentMatch from '../Components/CurrentMatch/CurrentMatch';
import Faq from '../Components/Faq/Faq';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import NextMatch from '../Components/NextMatch/NextMatch';
import { useEdition } from '../edition/EditionContext';

const Informacoes = () => {
  const { slug } = useEdition();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <Banner />
      {slug === '2022' ? <CurrentMatch /> : null}
      <Faq />
      {slug === '2022' ? <NextMatch /> : null}
      <Footer />
    </motion.div>
  );
};

export default Informacoes;
