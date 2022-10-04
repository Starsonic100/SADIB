import React from 'react';
import './components/css/style.css';
import Inicio from './Inicio';
import About from './About';
import Tutorial from './Tutorial';

const MainP = () =>{

     return (
      <div className="main row">
                        <div className="container">
       <Inicio/>
        <About/>
        <Tutorial/>
        </div>
        </div>
  );
}

export default MainP;