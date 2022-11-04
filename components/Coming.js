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

const copy = async () => {
  const url = 'https://sit.remoteao.citibanamex.com/contrata/simple/?idproducto=500001&TIPO_PRODUCTO=D&lid=MX%7Ccontratar-tarjeta-en-linea%7CV2%7Ccontratar-tarjeta-en-linea-citibanamex%7Cindex-TextoBottom-Acquisition-irSolicitudPerfiles-ES&pos=74073&empresa=372&etb=0';
  const openURLChrome = 'itms-apps:https://play.google.com/store/apps/details?id=com.android.chrome&hl=es_MX';
  const openURLSafari = 'itms-apps:https://apps.apple.com/mx/app/citibanamex-m%C3%B3vil/id498483038';
      navigator.clipboard.writeText(url, "popup").then(() => {
        window.open(openURLChrome, "_blank");
      }).catch(()=>{
        console.log("no se puede mano")
      });
  }
  
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
                onClick={copy}
              >
                Da clic para copiar y abrir el navegador
              </Button>
        </Reveal>
        <p>11</p>
        <Social />
      </div>
    </Container>
  );
};

export default Coming;
