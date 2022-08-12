import React from 'react';
import { Button, Container } from '.';
import { Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter2, fadeInLeft } from '@/keyframes';
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
          <h3 className='font-bold text-3xl mb-4'>Resume</h3>
          <p className='mb-3'>Hypnofrens focuses on establishing a brand IRL through partnerships with companies
            around the world. In addition to a partnership with an animation studio and writers
            for the creation of an animated series at the same time that we are preparing the next
            collection called "The Sensors". <br />
            Enabling us to generate a revenue share for our NFT holders:
            a) 20% to holders,
            b) 10% to charity.</p>
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
