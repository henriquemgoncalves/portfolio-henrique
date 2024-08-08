import React, { useEffect } from 'react'
import Cabecalho from '../components/Cabecalho'
import Cards from '../components/Cards'
import background from '../Back/project.mp4'
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'

const VideoMod = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`

const ContMod = styled.main`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Cormorant Garamond", serif;
`

const Projects = () => {
  useEffect(() => {
    AOS.init({
          once: true,
      });     
  }, []);

  return (
    <ContMod data-aos="fade">
      <Cabecalho/>
      <VideoMod autoPlay muted loop>
        <source src={background} type='video/mp4'/>
      </VideoMod>
      <Cards/>   
    </ContMod>
  )
}

export default Projects
