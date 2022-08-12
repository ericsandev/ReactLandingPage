
import React from 'react';
import {
  AboutUs,
  Button,
  Collections,
  Container,
  FAQ,
  FeaturedArtworks,
  Footer,
  Hero,
  Navbar,
  Sponsor,
  Team,
} from '@/components';
import { Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter } from '@/keyframes';
import { Helmet } from 'react-helmet';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from '@/components/ContactForm';

const Home = () => {
  return (
    <div className='h-full main_bg text-white overflow-hidden' id='top'>
      <Helmet>
        <title>Hypnofrens | Welcome 6666 NFTS Hypnofrens</title>
        <meta name='description' content='Hypnofrens focuses on establishing a brand IRL through partnerships with companies around the world. In addition to a partnership with an animation studio and writers for the creation of an animated series at the same time that we are preparing the next collection called "The Sensors".' />
      </Helmet>
      <Navbar />
      <Hero />
      <AboutUs />
      <Collections />
      <Team />
      <FAQ />
      <Container>
        <div
          className={
            'bg-gradient-to-b from-[#ff0000] to-[#000000] rounded-xl py-20 px-10 flex items-center justify-center shadow-lg flex-col mb-44'
          }
        >
          <h2 className='font-bold text-2xl sm:text-4xl lg:text-5xl mb-5 w-full md:w-2/5 leading-snug text-center'>
            Get ready to collect 6666 Hypnofrens
          </h2>
          <Reveal delay={200} duration={1000} keyframes={fadeInDownShorter}>
            <Button onClick={() => window.open("https://discord.gg/FnbxCXUNtz?src=website", "_blank")}>Get Whitelisted Now</Button>
          </Reveal>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
