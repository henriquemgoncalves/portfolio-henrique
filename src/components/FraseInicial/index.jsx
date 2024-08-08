import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useTypewriter } from 'react-simple-typewriter'
import AOS from 'aos'
import 'aos/dist/aos.css'

const FraseMod = styled.section`
    color: #fff;
    width: 100%;

    .container{
        padding-top: 25%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;       
    }

    p{
        font-family: "Cormorant Garamond", serif;
        font-size: 30px;
        font-weight: 400;
        font-style: italic;
        color: #fff;
    }

    span{
        display: block;
        font-family: "Cormorant Garamond", serif;
        font-weight: 600;
        font-size: 38px;
        font-style: italic;
        color: #F97300;
    }

    @media (max-width: 600px){
            width: 100%;
            height: 600px;
            padding: 15px;

            p{
                font-size: 20px;
            }

            span{
                font-size: 24px;
            }
        }
`

const Frase = () => {
    const paragrafo = ("Motivado pela paixão e pelo desejo de ...");
    
    useEffect(() => {
        AOS.init({
            once: true,
        });     
    }, []);

    const [textoSpan] = useTypewriter({
        words: ['...Trabalhar', '...Contribuir', 'me tornar Desenvolvedor Front-End!'],
        typeSpeed: 100,
        delaySpeed: 1000
    })

  return (
    <FraseMod data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div className="container">
            <p data-aos="fade-right" data-aos-duration="2000">{paragrafo}</p>
            <span data-aos="fade" data-aos-duration="4000">{textoSpan}</span>     
        </div>   
    </FraseMod>
  )
}

export default Frase
