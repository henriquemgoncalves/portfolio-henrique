import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaCss3, FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import VanillaTilt from 'vanilla-tilt'

const ContMod = styled.main`
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
`

const SecMod = styled.section`
  padding: 10px;
  margin: 50px 0 0 20px;
  width: 450px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  
  &:hover{
    background-color: #000000d8;
    box-shadow: rgba(249, 115, 0, 0.56) 0px 18px 30px 10px;
  }

  .container-itens{
    width: 100%;
    padding-left: 10px;
  }

  h3{
    margin-bottom: 5px;
    color: #F97300;
    font-size: 24px;
    font-weight: 700;
    font-family: "Cormorant Garamond", serif;
    font-style: italic;
  }

  ul{
    list-style: none;
  }

  ul li,
  p{
    font-size: 20px;
    font-weight: 400;
    color: #b1aeae;
    font-family: "Cormorant Garamond", serif;
    font-style: italic;
  }
  
  .logos{
    color: #b1aeae;
    font-size: 45px;
    display: flex;
    gap: 5px;
  }

  @media (max-width: 500px){
            width: 90%;
            display: flex;
            justify-content: center;
  }
`

const CabecalhoEstilizado = styled(Cabecalho)`
    font-size: 20px;
    font-weight: 400;
    color: #b1aeae;
    font-family: "Cormorant Garamond", serif;
    font-style: italic;
`

const VideoMod = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    pointer-events: none;
`

const About = () => {
  const [isActive3d, setIsActive3d] = useState(true);

  const titulo1 = ("Perfil");
  const titulo2 = ("Formação");
  const titulo3 = ("Skills");

  useEffect(() => {
      AOS.init({
          once: true,
      });     
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <= 500) {
        setIsActive3d(false);
      } else {
        setIsActive3d(true);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const element = document.querySelector("#card");

    if(isActive3d) {
      VanillaTilt.init(element, {
        max: 25,
        speed: 3000,
        glare: true,
        "max-glare": 0.5,
        easing:"cubic-bezier(.03,.98,.52,.99)"
      });
    } else {
      if(element.vanillaTilt) {
        element.vanillaTilt.destroy();
      }
      element.style.backgroundColor = '#000000d8';
    }
  }, [isActive3d]);
  
  return (
    <ContMod data-aos="fade">
      <VideoMod autoPlay muted loop playsInline>
        <source src="/Back/about.mp4" type='video/mp4'/>
      </VideoMod>
      <CabecalhoEstilizado/>
        <SecMod id='card'>
          <div 
            className='container-itens' 
            data-aos="fade-right" 
            data-aos-easing="ease-in-sine" 
            data-aos-delay="2000"
          >
            <h3>{titulo1}</h3>
            <ul>
              <li>Henrique M Gonçalves</li>
              <li>36 anos</li>
              <li>São Paulo - SP</li>
            </ul>
          </div>

          <div 
            className='container-itens' 
            data-aos="fade-right" 
            data-aos-easing="ease-in-sine" 
            data-aos-delay="2500"
          >
            <h3>{titulo2}</h3>
            <ul>
              <li> - Dev Front end - (ONE Oracle Next Education)</li>
              <li> - Programador WEB - IFRS (Cursando)</li>
              <li> - Análise e Desenvolvimeno de Sistemas - FMU (Cursando)</li>
            </ul>
          </div>

          <div 
            className='container-itens'
            data-aos="fade-right" 
            data-aos-easing="ease-in-sine" 
            data-aos-delay="3000"
          >
            <h3>{titulo3}</h3>
            <div className="logos">
              <FaHtml5 />
              <FaCss3 />
              <IoLogoJavascript />
              <RiReactjsFill />
            </div>
          </div>          
        </SecMod>
    </ContMod>
  )
}

export default About
