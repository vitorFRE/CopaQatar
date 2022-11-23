import React from 'react';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import Grupos from '../Components/Grupos/Grupos';
import Header from '../Components/Header/Header';
import NextMatch from '../Components/NextMatch/NextMatch';
import Theme from '../Styles/Theme';

const Home = () => {
  return (
    <Theme>
      <div>
        <Header />
        <Banner />
        <Grupos />
        <NextMatch />
        <Footer />
      </div>
    </Theme>
  );
};

export default Home;
