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
const url = 'https://sit.remoteao.citibanamex.com/contrata/simple/?idproducto=500001&TIPO_PRODUCTO=D&lid=MX%7Ccontratar-tarjeta-en-linea%7CV2%7Ccontratar-tarjeta-en-linea-citibanamex%7Cindex-TextoBottom-Acquisition-irSolicitudPerfiles-ES&pos=74073&empresa=372&etb=0';


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
                onClick={() => {window.open(url, "mozillaTab");}}
              >
                Da clic para copiar y abrir el navegador
              </Button>
        </Reveal>
        <Social />
      </div>
    </Container>
  );
};

export default Coming;
