
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
  CountdownTimer
} from '@/components';
import { Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter } from '@/keyframes';
import { Helmet } from 'react-helmet';


const Home = () => {

  const MINT_DAYS_IN_MS = 25 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + MINT_DAYS_IN_MS;


  return (
    <div className='h-full main_bg text-white overflow-hidden' id='top'>
      <Helmet>
        <title>Hypnofrens | Welcome 6666 NFTS Hypnofrens</title>
        <meta name='description' content='Hypnofrens focuses on establishing a brand IRL through partnerships with companies around the world. In addition to a partnership with an animation studio and writers for the creation of an animated series at the same time that we are preparing the next collection called "The Sensors".' />
      </Helmet>
      <Navbar />
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
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
