import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink, Link, useLocation } from 'react-router-dom';import { SidebarData } from './SidebarData';
import '../css/NavBar.css';
import { IconContext } from 'react-icons';
import {Link as Linker,animateScroll as scroll } from "react-scroll";
import {createMuiTheme, 
        responsiveFontSizes,
        MuiThemeProvider,
        Typography
      } from "@material-ui/core"

let theme=createMuiTheme();
theme=responsiveFontSizes(theme);
function MenuAdmin() {
    const path = useLocation().pathname;
    const location = path.split('/')[1];
    const scroller = scroll.scroller;
  
    const scrollToAnchor = () => {
      scroller.scrollTo('anchor', {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: 50
      });
    };
  
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <MuiThemeProvider theme={theme}>
      <IconContext.Provider value={{ color: '#2469A0' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className='logo'>
          <Link to="/" >
          <img src={require('../img/logo.png')}/></Link>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className='nav-text'>
            {location === '' ? (
       <Linker to="inicio" spy={true} smooth={true} offset={-90} duration={500}  onClick={showSidebar}>
       <span>Inicio</span></Linker>
      ) : (
        <Link to="/" spy={true} smooth={true} offset={-90} duration={500} onClick={showSidebar}>
       <span>Inicio</span></Link>
      )}
              
            </li>
            <li className='nav-text'>
              <Linker to="about" spy={true} smooth={true} offset={-90} duration={500} onClick={showSidebar}>
                <span>Acerca del Sitio</span></Linker>
            </li>
            <li className='nav-text'>
              <Linker to="tutorial" spy={true} smooth={true} offset={-90} duration={500} onClick={showSidebar}>
                <span>Como Funciona</span></Linker>
            </li>
            <li className='nav-text'>
              <Link to="/Login"onClick={showSidebar}>
                <span>Registrar Paciente</span></Link>
            </li>
            <li className='nav-text'>
              <Link to="/SignUp" onClick={showSidebar}>
                <span>Ver Pacientes</span></Link>
            </li>
            <li className='nav-text'>
              <Link to="/SignUp" onClick={showSidebar}>
                <span>Asignar Prueba</span></Link>
            </li>
            <li className='nav-text'>
              <Link to="/SignUp" onClick={showSidebar}>
                <span>Cerrar Sesión</span></Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
      
    </MuiThemeProvider>
  );
}

export default MenuAdmin;