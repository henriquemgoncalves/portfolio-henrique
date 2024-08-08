import React, { useEffect } from 'react'
import Cabecalho from '../components/Cabecalho'
import background from '../Back/contact.mp4'
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { useTypewriter } from 'react-simple-typewriter'

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
    height: 100vh;
    margin: 0;
    padding: 10px;
`

const ElemMod = styled.section`
  width: 100%;
  height: 88%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid #b1aeae;
  border-radius: 20px;

  .up{
    padding: 20px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    font-family: "Cormorant Garamond", serif;
  }

  .txt-up{
    width: auto;
    padding: 30px;
  }

  .up h3{
    font-size: 30px;
    font-style: italic;
    color: #F97300;
    font-family: "Cormorant Garamond", serif;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .up p{
    font-size: 20px;
    font-style: italic;
    color: #757575;
    font-weight: 400;
  }

  .down{
    margin: 10px;
    padding: 10px;
    width: 500px;
    height: 70%;
    background-color: #00000067;
    border-radius: 0 100px 0 0;
  }

  .links{
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: auto;
  }

  .links ul{
    list-style: none;
  }

  .links ul li{
    font-size: 16px;
    font-style: italic;
    color: #fff;
    font-weight: 400;
  }

  .down nav{
    display: flex;
    flex-direction: column;
    border-left: 1px solid #fff;
    padding-left: 20px;
    
  }

  .down nav a{
    text-decoration: none;
    color: #fff;
    font-size: 34px;
  }

  @media (max-width: 540px){
        .down{
          width: 100%;
          padding: 0;
          margin: 0;
        }

        .up h3{
          font-size: 24px;
        }

        .up p{
          font-size: 18px;
        }
    }
`

const CabecalhoEst = styled(Cabecalho)`
    font-size: 20px;
    font-weight: 400;
    color: #b1aeae;
    font-family: "Cormorant Garamond", serif;
    font-style: italic;
`

const Contact = () => {
  const titulo = ("Vamos contruir algo incrível juntos!");

  useEffect(() => {
      AOS.init({
          once: true,
      });     
  }, []);

  const [paragrafo] = useTypewriter({
    words: ['Entre em contato e vamos transformar suas ideias em realidade...'],
    typeSpeed: 50,
    delaySpeed: 1000
  })

  return (
    <ContMod data-aos="fade">
      <CabecalhoEst/>
      <VideoMod autoPlay muted loop>
        <source src={background} type='video/mp4'/>
      </VideoMod>
      <ElemMod>
        <div className="up" data-aos="fade-left" data-aos-duration="3000">
          <div className="txt-up">
            <h3>{titulo}</h3>
            <p>{paragrafo}</p>  
          </div>     
        </div>

        <div className="down" data-aos="fade-right" data-aos-duration="2000">
          <div className="links" >
              <nav>
                <a href='https://www.linkedin.com/in/henrique-madruga-gonçalves-044a072aa' target='_blank'><FaLinkedin/></a>
                <a href='https://www.github.com/henriquemgoncalves' target='_blank'><FaGithubSquare/></a>
              </nav>
              <ul>
                <li>Cel: (11) 94000-7976</li>
                <li>E-mail: 88dev.hg@gmail.com</li>
              </ul>
          </div>    
        </div>        
      </ElemMod>     
    </ContMod>
  )
}

export default Contact
