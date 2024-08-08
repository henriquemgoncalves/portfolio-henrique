import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Cabecalho from '../components/Cabecalho'
import { useEffect } from 'react'
import Frase from '../components/FraseInicial'

const ContMod = styled.main`
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: "Cormorant Garamond", serif;
`
const VideoMod = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`

const Home = () => {
  useEffect(() => {
      AOS.init({
          once: true,
      });     
  }, []);

  return (
    <ContMod data-aos="fade">
      <VideoMod autoPlay muted loop>
        <source src='/Back/home.mp4' type='video/mp4'/>
      </VideoMod>
      <Cabecalho/>
      <Frase/>  
    </ContMod>
  )
}

export default Home
