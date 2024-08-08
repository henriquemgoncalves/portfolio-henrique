import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/esm/CardImg';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import CardBody from 'react-bootstrap/esm/CardBody';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const imageList = [
    {
        src: '/imagens/bros.png',
        titulo: 'Mario Bros (Jogo)',
        url: 'https://mario-bros-game-two.vercel.app/',
    },
    {
        src: '/imagens/cine.png',
        titulo: 'Cine Tag',
        url: 'https://cinetag-wine.vercel.app/',
    },
    {
        src: '/imagens/geek.png',
        titulo: 'AluraGeek',
        url: 'https://alurageek-challenge-olive.vercel.app/',
    },
    {
        src: '/imagens/login.png',
        titulo: 'Tela Login',
        url: 'https://login-cadastro-eight.vercel.app/',
    },
    {
        src: '/imagens/numReact.png',
        titulo: 'Numero Secreto (Jogo)',
        url: 'https://secret-number-taupe.vercel.app/',
    },
    {
        src: '/imagens/odonto.png',
        titulo: 'Odontologia',
        url: 'https://projeto-uscs.vercel.app/',
    },
    {
        src: '/imagens/org.png',
        titulo: 'Organo',
        url: 'https://projeto-organo-delta.vercel.app/',
    },
    {
        src: '/imagens/port.png',
        titulo: 'Portfólio',
        url: 'https://portfolio-react-nine-rho.vercel.app/',
    },
    {
        src: '/imagens/web.png',
        titulo: 'Web Site',
        url: 'https://travel-website-woad-beta.vercel.app/',
    }
];

const ContMod = styled.main`
    width: 100%;
    padding: 0;
    margin: 0;
`

const PrincMod = styled.section`
    padding: 30px;
    width: 100%;
    height: 85vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    scroll-behavior: auto;
    overflow-y: auto;

    &::-webkit-scrollbar{
        margin-right: 10px;
        width: 10px;
    }

    &::-webkit-scrollbar-track{
        background-color: #ffffff2f;
        border-radius: 10px;
        
    }

    &::-webkit-scrollbar-thumb{
        background-color: #b1aeae;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover{
        background-color: #fff;
    }
`

const CardMod = styled(Card)`
    padding: 0;
    width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background-color: #ffffff5e;
    border-radius: 2px 2px 20px 20px;
    
    &:hover{
        box-shadow: rgba(201, 201, 201, 0.932) 0px 0px 10px 5px;
        transition: .5s;
    }
`

const ImageMod = styled(CardImg)`
    width: 100%;
    height: auto;
`

const CardBodyMod = styled(CardBody)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    
`

const TitleMod = styled(CardTitle)`
    color: #fff;
    font-family: "Cormorant Garamond", serif;
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 10px;
`

const BotaoMod = styled(Button)`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0 0 20px 20px;
    font-family: "Cormorant Garamond", serif;
    font-size: 24px;
    font-style: italic;
    font-weight: 500;
    border-top: 3px solid #F97300;
    transition: .5s;
    background-color: #b1aeae;

    &:hover{
        background-color: #888585;
        color: #fff;
        border-top: 3px solid #fff;
        font-weight: 800;
    }
`

const Cards = () => {
    useEffect(() => {
        AOS.init({
            once: true,
        });     
    }, []);

    const clicarBotao = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

  return (
    <ContMod>
        <PrincMod data-aos="fade-right" data-aos-duration="2000" data-aos-offset="300" data-aos-easing="ease-in-sine">
        {imageList.map((image, index) => (
            <CardMod key={index}>
                <ImageMod variant="top" src={image.src} />
                <CardBodyMod>
                    <TitleMod>{image.titulo}</TitleMod>
                    <BotaoMod onClick={() => clicarBotao(image.url)}>
                        Visitar
                    </BotaoMod> 
                </CardBodyMod>
            </CardMod>                           
            ))}
        </PrincMod>
    </ContMod>
  )
}

export default Cards
