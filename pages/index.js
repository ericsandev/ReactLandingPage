
import React from 'react';
import {
  AboutUs,
  Button,
  Collections,
  Container,
  FAQ,
  Footer,
  Hero,
  Navbar,
  Team,
  Marketing,
  CallTo,
  Mint
} from '@/components';

const Home = () => {
  return (
    <div className='h-full main_bg text-white overflow-hidden' id='top'>
      <Navbar />
      <Mint />
      <Marketing />
      <Hero />
      <AboutUs />
      <Collections />
      <Team />
      <FAQ />
      <CallTo />
      <Footer />
    </div>
  );
};

export default Home;
