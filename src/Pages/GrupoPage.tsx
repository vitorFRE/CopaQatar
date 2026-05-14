import { motion } from 'framer-motion';
import { EditionPlaceholderSection } from '../Components/Edition/EditionBlocks';
import Footer from '../Components/Footer/Footer';
import GruposPage from '../Components/GruposPage/GruposPage';
import Header from '../Components/Header/Header';
import { useEdition } from '../edition/EditionContext';

const GrupoPage = () => {
  const { slug, placeholders } = useEdition();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      {slug === '2022' ? (
        <GruposPage />
      ) : (
        <EditionPlaceholderSection title="Grupos 2026" content={placeholders.groups} />
      )}
      <Footer />
    </motion.div>
  );
};

export default GrupoPage;
