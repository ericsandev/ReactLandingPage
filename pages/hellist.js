import {
  Container,
  FAQ,
  Footer,
  Hero,
  Navbar,
  HellistForm,
} from '@/components';
import React from 'react';
import {
  Helmet
} from 'react-helmet';

const Hellist = () => {
  return (
    <div className='h-full main_bg text-white overflow-hidden' id='top'>
      <Helmet>
        <title>Hypnofrens | HELList NFT</title>
        <meta name='description' content='Hellist Hypnofrens' />
      </Helmet>
      <Navbar />
      <h1 className='text-3xl lg:text-3xl text-center font-bold mb-5' style={{
        fontFamily: "var(--font-bahiana)", fontSize: '74px'
      }} >
        HELLIST
      </h1>
      <HellistForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Hellist;
