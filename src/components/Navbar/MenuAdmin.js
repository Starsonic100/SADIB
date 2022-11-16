import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Axios from "axios";
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';import { SidebarData } from './SidebarData';
import '../css/navbar.css';
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
    const navigate = useNavigate();
    const scrollToAnchor = () => {
      scroller.scrollTo('anchor', {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: 50
      });
    };
    Axios.defaults.withCredentials = true;

  
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const logoutUser  =  () => {
    showSidebar();

      Axios.get("http://54.144.147.250:3001/logout").then((response) => {
        if (response.data === 'SUCCESS') {
          navigate("/");
          navigate(0);
      } else {
        navigate("/");
          navigate(0);
      }
      });
        
};
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
              <Link to="/AgregarPaciente"onClick={showSidebar}>
                <span>Registrar Paciente</span></Link>
            </li>
            <li className='nav-text'>
              <Link to="/Pacientes" onClick={showSidebar}>
                <span>Ver Pacientes</span></Link>
            </li>
            <li className='nav-text'>
              <Link to="/AsignarPrueba" onClick={showSidebar}>
                <span>Asignar Prueba</span></Link>
            </li>
            <li className='nav-text'>
              <Link to="/EditarPsic" onClick={showSidebar}>
                <span>Editar Mis Datos</span></Link>
            </li>
            <li className='nav-text'>
              <Link to="/" onClick={logoutUser}>
                <span>Cerrar Sesión</span></Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
      
    </MuiThemeProvider>
  );
}

export default MenuAdmin;