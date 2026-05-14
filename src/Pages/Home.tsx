import { motion } from 'framer-motion';
import Banner from '../Components/Banner/Banner';
import { EditionBrazilTodayMock } from '../Components/Edition/EditionBrazilTodayMock';
import { EditionCompetitionMock } from '../Components/Edition/EditionCompetitionMock';
import { EditionHomeMock } from '../Components/Edition/EditionHomeMock';
import { EditionNumbersMock } from '../Components/Edition/EditionNumbersMock';
import Footer from '../Components/Footer/Footer';
import Grupos from '../Components/Grupos/Grupos';
import Header from '../Components/Header/Header';
import NextMatch from '../Components/NextMatch/NextMatch';
import { useEdition } from '../edition/EditionContext';

const Home = () => {
  const { slug } = useEdition();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <Banner />
      {slug === '2022' ? (
        <>
          <Grupos />
          <NextMatch />
        </>
      ) : (
        <>
          <EditionHomeMock />
          <EditionBrazilTodayMock />
          <EditionCompetitionMock />
          <EditionNumbersMock />
        </>
      )}
      <Footer />
    </motion.div>
  );
};

export default Home;
