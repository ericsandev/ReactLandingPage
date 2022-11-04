import React from 'react';
import { Button, Container, Social } from '.';
import { JackInTheBox, Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter, fadeInLeft, fadeInUp } from '@/keyframes';
import Image from 'next/image';
import Background from '../public/hero/hell.jpg';

const sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "#010101"
};
const url = 'https://play.google.com/store/apps/details?id=com.android.chrome&hl=es_MX';


const Coming = () => {
  return (
    <Container className={'flex '} style={sectionStyle} id="intro">
      <div className='w-full h-[100vh] flex flex-col justify-center items-center '>
        <Reveal keyframes={fadeInUp} duration={800} delay={200}>
          <Image
            src='/svg/reload.svg'
            width={300}
            height={200}
            alt='reload'
          />
        </Reveal>
        <Reveal keyframes={fadeInUp} duration={800} delay={200}>
          <Image
            className='rounded-full'
            src='/hero/devil.png'
            width={150}
            height={150}
            alt='reload'
          />
<Button
                className={'mr-3 text-3xl'}
                variant={'primary'}
                onClick={() => {window.open(url, "mozillaTab","popup");}}
              >
                Da clic para copiar y abrir el navegador
              </Button>
              <p>2</p>
        </Reveal>
        <Social />
      </div>
    </Container>
  );
};

export default Coming;
