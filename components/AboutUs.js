import React from 'react';
import { Button, Container } from '.';
import { Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter2, fadeInLeft, fadeInUp } from '@/keyframes';
import Image from 'next/image';



const AboutUs = () => {
  return (
    <Container className={'mb-44 scroll-mt-10'} id='about'>
      <div className='text-center mb-8'>
        <h2 className='font-bold text-3xl mb-2'>BLUEPRINT</h2>
        <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
          <p className='w-full  text-xl sm:w-[500px] mx-auto'>
            We’re not just releasing a roadmap; we’re laying out the blueprint to help guide and build a community-centric, world-leading web three brand.
          </p>
        </Reveal>
      </div>
      <div className='flex items-center'>
        <div className='w-[44%] hidden sm:block'>
          <Reveal keyframes={fadeInLeft} triggerOnce>
            <div className='relative w-full h-[700px] rounded-2xl overflow-hidden'>
              <Image
                layout='fill'
                objectFit='cover'
                objectPosition={'center'}
                src='/aboutus.png'
                alt='about us'
              />
            </div>
          </Reveal>
        </div>
        <div className='flex-1 ml-0 sm:ml-10 lg:ml-20'>
          <div className='grid grid-cols-3 gap-3 mb-3'>
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

            <Reveal keyframes={fadeInLeft} duration={500} delay={600}>
              <div>
                <p className='font-bold text-2xl mb-1'>4000</p>
                <p className='opacity-50 '>Hellisted</p>
              </div>
            </Reveal>

            <Reveal keyframes={fadeInLeft} duration={500} delay={600}>
              <div>
                <p className='font-bold text-2xl mb-1'>10.SEP.22</p>
                <p className='opacity-50 '>at 11:00 CT</p>
              </div>
            </Reveal>

            <Reveal keyframes={fadeInLeft} duration={500} delay={600}>
              <div>
                <p className='font-bold text-2xl mb-1'>10.SEP.22</p>
                <p className='opacity-50 '>at 12:00 CT</p>
              </div>
            </Reveal>
          </div>

          <div className='flex items-center justify-between mb-10'>
            <Reveal keyframes={fadeInUp} duration={1000} delay={400}>
              <Button className='flex items-center content-center mb-3'
                onClick={() => window.open("https://twitter.com/hypnofrensNFT", "_blank")}     >
                <ion-icon name="logo-twitter"></ion-icon> @hypnofrensNFT
              </Button>
            </Reveal>

            <Reveal keyframes={fadeInUp} duration={1000} delay={400}>
              <Button className='flex items-center content-center ml-2 mb-3'
                onClick={() => window.open("https://discord.gg/FnbxCXUNtz", "_blank")}     >
                <ion-icon name="logo-discord"></ion-icon> hypnofrensNFT
              </Button>
            </Reveal>

            <Reveal keyframes={fadeInUp} duration={1000} delay={400}>
              <Button className='flex items-center content-center ml-2 mb-3'
                onClick={() => window.open("https://instagram.com/hypnofrensNFT", "_blank")}     >
                <ion-icon name="logo-instagram"></ion-icon> hypnofrensNFT
              </Button>
            </Reveal>
          </div>

          <h3 className='font-bold text-2xl mb-3'>A- Market</h3>
          <p className='mb-3 '>
            We're building an ecosystem of commercial channels spanning across web three,
            through partnerships with brands.<br />
            Your <strong>Hypnofrens will give you exclusive access</strong> to digital and physical merch,
            products and events.{' '}
          </p>
          <h3 className='font-bold text-2xl mb-3'>B- Growing</h3>
          <p className='mb-3 '>
            We will grow the Hypnofrens brand through online guerrilla marketing & outdoor advertising campaigns
            in the weeks following mint. We will also auction 1 of 1 Hypnofrens for world-changing causes, charity and
            high-visibility collabs.{' '}
          </p>
          <h3 className='font-bold text-2xl mb-3'>C- Beyond</h3>
          <p className='hidden lg:block mb-3 '>
            Our team will work alongside the community to drop lo-fi mixtapes and other forms of
            collective artistic expression. We will continue to create gorgeous concept art and
            beautifully written folk tales... And future holder-only NFT drops.{' '}
          </p>
          <h3 className='font-bold text-2xl mb-3'>D- Share ♥</h3>
          <p className='hidden lg:block mb-3 '>
            Our website will display all 6,666 Hypnofrens and we will also
            curate a gallery of our <span>favourite fan art and the artists behind it</span>, as well as work
            with other NFT brands and artists to bring our digital art to physical galleries & exhibits.{' '}
          </p>

        </div>
      </div>
    </Container >
  );
};

export default AboutUs;
