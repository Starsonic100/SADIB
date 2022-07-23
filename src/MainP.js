import React from 'react';
import './components/css/App.css';
import Inicio from './Inicio';
import About from './About';
import Tutorial from './Tutorial';

const MainP = () =>{

     return (
       <div className='main'>
       <Inicio/>
        <About/>
        <Tutorial/>
        </div>      
  );
}

export default MainP;