import React, { useState } from 'react';
import '../css/sign-log.css';
import lapiz from '../img/lapiz.png';
import validacion from './validacion';
import useAcceso from './useAcceso';

const Acceso = ({ submitForm }) =>{
    const { handleChange, handleSubmit, valores, errores, loginStatus } = useAcceso(
        submitForm,
        validacion
    );

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return(
        <div className="container">
            <div className="frame">
                <div className="main row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="content-tabs">
                            <form onSubmit={handleSubmit} className='form' noValidate>
                                <div class="myform form">
                                    <div align="center">
                                        <div class="form-group">
                                            <input type="codigo" class="form-control my-input" placeholder="Código para acceder" name='Fcodigo' value={valores.Fcodigo} onChange={handleChange}/>
                                            {errores.codigo && <h6 class="error">{errores.codigo}</h6>}
                                        </div>
                                    </div>
                                    <div align="center">
                                        <h6>{loginStatus}</h6>
                                        <button type="submit" class="btn btn-block send-button tx-tfm">Acceder a Prueba</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="image-center">
                            <div align="center">
                                <img src={lapiz} width="90%" alt="Lápiz" title="Lápiz"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Acceso;