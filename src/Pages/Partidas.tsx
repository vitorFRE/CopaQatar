import { motion } from 'framer-motion';
import { EditionPlaceholderSection } from '../Components/Edition/EditionBlocks';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import PartidasLista from '../Components/Partidas/PartidasLista';
import { useEdition } from '../edition/EditionContext';

const Partidas = () => {
  const { slug, placeholders } = useEdition();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      {slug === '2022' ? (
        <PartidasLista />
      ) : (
        <EditionPlaceholderSection
          title="Partidas 2026"
          content={placeholders.matches}
        />
      )}
      <Footer />
    </motion.div>
  );
};

export default Partidas;
