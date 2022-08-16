import React from 'react';
import { Button, Container } from '.';
import { JackInTheBox, Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter, fadeInLeft, fadeInUp } from '@/keyframes';
import Image from 'next/image';
import Background from '../public/hero/nightmare.jpg';

const sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Background.src})`,
  backgroundSize: 'cover',
};


const Marketing = () => {
  return (
    <Container className={'flex flex-col sm:flex-row py-10'} style={sectionStyle}>
      <div className='flex items-center w-full sm:w-[60%] pr-0 sm:pr-10 lg:pr-20 mt-[-20px] sm:mt-5 lg:mt-10'>
        <div>
          <Reveal keyframes={fadeInLeft} duration={800} delay={200}>
            <h1 className='text-2xl lg:text-3xl font-bold mb-5' style={{
              fontFamily: "var(--font-bahiana)", fontSize: '74px'
            }} >
              🚨The Princess was captured.🚨
            </h1>
          </Reveal>
          <Reveal keyframes={fadeInDownShorter} duration={1000} delay={800}>
            <p className='mb-8 lg:text-2xl text-xl '>
              Help us find the Princess, any clues that can help find her will be rewarded
            </p>
          </Reveal>

          <div className='flex mb-10'>
            <Reveal keyframes={fadeInUp} duration={1000} delay={200}>
              <Button
                isLink
                href={'https://discord.gg/FnbxCXUNtz?src=web'}
                className={'mr-3'}
                variant={'primary'}
              >
                <ion-icon name="logo-discord"></ion-icon> JOIN THE INVESTIGATE
              </Button>
            </Reveal>
            <Reveal keyframes={fadeInUp} duration={1000} delay={200}>
              <Button
                isLink
                href={'/#intro'}
                className={'mr-3'}
                variant={'outlinePrimary'}
              >
                Learn more
              </Button>
            </Reveal>
          </div>
        </div>

      </div>
      <div className='flex-1 mt-14 sm:mt-0'>
        <JackInTheBox delay={200} triggerOnce>
          <div className='relative w-full h-[400px] lg:h-[500px] flex items-center'>
            <Image
              layout='fill'
              objectFit='contain'
              objectPosition={'center'}
              src='/hero/wanted.gif'
              alt='hypnofrens'
            />
          </div>
        </JackInTheBox>
      </div>
    </Container>
  );
};

export default Marketing;
