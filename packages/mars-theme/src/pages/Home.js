import React from 'react';
import { connect } from 'frontity';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Why from '../components/Home/Why';
import Features from '../components/Home/Features';
import Tokenomics from '../components/Home/Tokenomics';
import Treasury from '../components/Home/Treasury';
import Roadmap from '../components/Home/Roadmap';
import News from '../components/Home/News';
import Team from '../components/Home/Team';
import Footer from '../components/Footer/Footer';

const Home = ({ state }) => {
  return (
    <>
      <Hero />
      <About />
      <Why />
      <Features />
      <Tokenomics />
      <Treasury />
      <Roadmap />
      <News />
      <Team />
      <Footer />
    </>
  );
};

export default connect(Home);
