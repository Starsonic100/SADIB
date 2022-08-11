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
function MenuVisitante() {
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
                <span>Iniciar Sesión</span></Link>
            </li>
            <li className='nav-text'>
              <Link to="/SignUp" onClick={showSidebar}>
                <span>Registrarse</span></Link>
            </li>
       
      
    </MuiThemeProvider>
  );
}

export default MenuVisitante;