import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SiFrontendmentor } from "react-icons/si";
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { RiMenu3Fill } from "react-icons/ri";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import OffcanvasHeader from 'react-bootstrap/esm/OffcanvasHeader';

const CabMod = styled.header`
    width: 100%;
    display: flex;
    padding: 15px 20px;
    justify-content: space-between;
    align-items: center;

    .menu-mobile{
        display: none;
    }

    .img-logo{
        color: #b1aeae;
        font-size: 20px;
        font-weight: 600;
    }

    .container-links nav{    
        display: flex;
        gap: 30px;
    }

    @media (max-width: 600px){
        .container-links nav{
            display: none;
        }

        .menu-mobile{
            display: block;
        }
    }
`

const NavLink = styled(Link)`
    padding: 2px 10px;
    border-radius: 5px;
    text-decoration: none;
    color: #b1aeae;
    font-size: 18px;
    font-weight: 500;
    font-style: italic;
    transition: .5s;

    &:hover{
        color: #fff;
    }
   
    &.active{
        color: #F97300;
        border-bottom: 1px solid #F97300;   
    }
`

const CanvasBodyMod = styled(Offcanvas.Body)`
    background-color: #0000007a;
    border-radius: 15px; 
`

const CabCanvasMod = styled(OffcanvasHeader)`
    background-color: #f0f0f0bc;
`

const OffcanvasLink = styled(Link)`
    padding: 10px 20px;
    font-family: "Cormorant Garamond", serif;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    font-style: italic;
    transition: .5s;
    display: block;
    height: auto;

    &:hover{
        color: #F97300;
        background-color: #b1aeae;
        font-weight: 700;
    }

    &:active{
        color: #F97300;
    }
`

const Botao = styled(Button)`
    background-color: transparent;
    color: #F97300;
    border-color: #F97300;
    font-size: 16px;
    font-weight: 700;
    margin: 0;
    padding: 1px 5px;

    &:hover{
        background-color: #b1aeae;
        color: #F97300;
        border-color: #F97300;
    }
`

const Cabecalho = ({ className, ...props }) => {
    const location = useLocation();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        AOS.init({
            once: true,
        });     
    }, []);

  return (
    <CabMod className={className}>
        <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0" className='img-logo'>
            <p><SiFrontendmentor/> HMG</p>
        </div>
        <div className='container-links'>
            <nav data-aos="fade-left" data-aos-duration="1000">
                <NavLink to='/' className={location.pathname === '/' ? 'active' : ''}>
                    Home
                </NavLink>
                <NavLink to='/about' className={location.pathname === '/about' ? 'active' : ''}>
                    Sobre mim
                </NavLink>
                <NavLink to='/projects' className={location.pathname === '/projects' ? 'active' : ''}>
                    Projetos
                </NavLink>
                <NavLink to='/contact' className={location.pathname === '/contact' ? 'active' : 'l'}>
                    Contato
                </NavLink>
            </nav>

            <div className="menu-mobile">
                <Botao variant="primary" onClick={handleShow} className="me-2">
                    <RiMenu3Fill/>
                </Botao>

                <Offcanvas style={{width:"300px", height:"400px", backgroundColor:"#0000007a", borderRadius:"0px 0px 15px 15px"}} show={show} placement='end' onHide={handleClose} {...props}>  
                    <CabCanvasMod closeButton>
                        <Offcanvas.Title/>
                    </CabCanvasMod>
                    
                    <CanvasBodyMod>
                        <OffcanvasLink to='/' className={location.pathname === '/' ? 'active' : ''}>
                            Home
                        </OffcanvasLink>
                        <OffcanvasLink to='/about' className={location.pathname === '/about' ? 'active' : ''}>
                            Sobre mim
                        </OffcanvasLink>
                        <OffcanvasLink to='/projects' className={location.pathname === '/projects' ? 'active' : ''}>
                            Projetos
                        </OffcanvasLink>
                        <OffcanvasLink to='/contact' className={location.pathname === '/contact' ? 'active' : 'l'}>
                            Contato
                        </OffcanvasLink>
                    </CanvasBodyMod>

                </Offcanvas>
            </div>
            

        </div>
      
    </CabMod>
  )
}

export default Cabecalho
