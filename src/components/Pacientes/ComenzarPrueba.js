import React from 'react';
import '../css/pacientes.css';
import dibujo from '../img/dibujo.png';

function ComenzarPrueba(){ 
    
    return(
        <div className="container">
            <div className="itoken">
                <div className="main row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div align="center">
                            <img src={dibujo} width="90%" alt="Dibujo" title="Dibujo"/>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="codigo">
                            probando ando
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ComenzarPrueba;