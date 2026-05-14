import { motion } from 'framer-motion';
import { EditionPlaceholderSection } from '../Components/Edition/EditionBlocks';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import MatchInfos from '../Components/MatchInfos/MatchInfos';
import { useEdition } from '../edition/EditionContext';

const Partida = () => {
  const { slug, placeholders } = useEdition();

  return (
    <motion.div>
      <Header />
      {slug === '2022' ? (
        <MatchInfos />
      ) : (
        <EditionPlaceholderSection
          title="Detalhes da partida"
          content={placeholders.matchDetails}
        />
      )}
      <Footer />
    </motion.div>
  );
};

export default Partida;
