import React from 'react';
import { Button, Container } from '.';
import { JackInTheBox, Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter, fadeInLeft, fadeInUp } from '@/keyframes';
import Image from 'next/image';
import Background from '../public/hero/hell.jpg';

const sectionStyle = {
  width: "100%",
  height: "80vh",
  backgroundImage: `url(${Background.src})`,
  backgroundSize: 'cover',
};


const Hero = () => {
  return (
    <Container className={'flex flex-col sm:flex-row pt-20 mb-32'} style={sectionStyle}>
      <div className='w-full sm:w-[50%] pr-0 sm:pr-10 lg:pr-20 mt-[-20px] sm:mt-5 lg:mt-10'>
        <Reveal keyframes={fadeInLeft} duration={800} delay={200}>
          <h1 className='text-3xl lg:text-3xl font-bold mb-5' style={{
            fontFamily: "var(--font-bahiana)", fontSize: '74px'
          }} >
            Hypnofrens
          </h1>
        </Reveal>
        <Reveal keyframes={fadeInDownShorter} duration={1000} delay={800}>
          <p className='mb-8 text-xl'>
            Hypnofrens focuses on establishing a brand IRL, create an animated series and stablish a comic brand.
            Generate a revenue share for our NFT holders.
          </p>
        </Reveal>

        <div className='flex mb-10'>
          <Reveal keyframes={fadeInUp} duration={1000} delay={200}>
            <Button
              isLink
              href={'/#about'}
              className={'mr-3'}
              variant={'primary'}
            >
              Explore Now
            </Button>
          </Reveal>
          <Reveal keyframes={fadeInUp} duration={1000} delay={400}>
            <Button className='flex items-center content-center mb-3'
              onClick={() => window.open("https://twitter.com/hypnofrensNFT", "_blank")}     >
              <ion-icon name="logo-twitter"></ion-icon> @hypnofrensNFT
            </Button>
          </Reveal>
        </div>
        <div className='grid grid-cols-3 gap-3'>
          <Reveal keyframes={fadeInLeft} duration={500} delay={200}>
            <div>
              <p className='font-bold text-2xl mb-1'>6666</p>
              <p className='opacity-50 '>NFTs</p>
            </div>
          </Reveal>
          <Reveal keyframes={fadeInLeft} duration={500} delay={400}>
            <div>
              <p className='font-bold text-2xl mb-1'>0 $SOL</p>
              <p className='opacity-50 '>Pre-Sale</p>
            </div>
          </Reveal>
          <Reveal keyframes={fadeInLeft} duration={500} delay={600}>
            <div>
              <p className='font-bold text-2xl mb-1'>0.5 $SOL</p>
              <p className='opacity-50 '>Public</p>
            </div>
          </Reveal>
        </div>
      </div>
      <div className='flex-1 mt-14 sm:mt-0'>
        <JackInTheBox delay={200} triggerOnce>
          <div className='relative w-full h-[400px] lg:h-[500px] float'>
            <Image
              layout='fill'
              objectFit='contain'
              objectPosition={'center'}
              src='/hero/float.png'
              alt='hero'
            />
          </div>
        </JackInTheBox>
      </div>
    </Container>
  );
};

export default Hero;
