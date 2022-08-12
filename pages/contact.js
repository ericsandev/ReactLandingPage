import {
  Container,
  FAQ,
  Footer,
  Hero,
  Navbar,
  ContactForm,
} from '@/components';
import React from 'react';
import { Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter } from '@/keyframes';
import {
  Helmet
} from 'react-helmet';
const Contact = () => {
  return (
    <div className='h-full main_bg text-white overflow-hidden' id='top'>
      <Helmet>
        <title>Hypnofrens | Contact Hypnfrens NFT</title>
        <meta name='description' content='Contact Hypnofrens' />
      </Helmet>
      <Navbar />
      <ContactForm />
      <FAQ />

      <Footer />
    </div>
  );
};

export default Contact;
