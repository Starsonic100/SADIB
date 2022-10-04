import React from 'react';
import './components/css/style.css';



const Inicio = () =>{

     return (
        <div className='bienvenida' id='inicio'>
         <span className='img1'> <img src={require('./components/img/MainImage 1.png')} alt="bienvenida"/> <br/></span>
        </div>
  );
}

export default Inicio;