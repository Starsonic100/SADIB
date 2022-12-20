import React, { useState } from 'react';
import '../css/sign-log.css';
import dibujando from '../img/dibujando.png';
import validacion from './validacion';
import useAcceso from './useAcceso';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";
let theme = createTheme();
theme = responsiveFontSizes(theme);

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
            <div className="main row">
               <div className="col-12">
                    <div className="formulario">
                        <div className="container">
                            <div className="main row">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="container">
                                        <div className="formulario-token">
                                            <div className="encabezado-token">
                                                <div align="center">
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h5" class="encabezado-token">{"INGRESA EL TOKEN"}</Typography>
                                                    </MuiThemeProvider>
                                                </div>
                                            </div>
                                            <form onSubmit={handleSubmit} className='form' noValidate>
                                                <div class="myform form">
                                                    <div align="center">
                                                        <div class="form-group">
                                                            <input type="codigo" class="form-control my-input" placeholder="Código para acceder" name='Fcodigo' value={valores.Fcodigo} onChange={handleChange}/>
                                                            {errores.codigo && <h6 class="error">{errores.codigo}</h6>}
                                                        </div>
                                                    </div>
                                                    <div className="main row">
                                                        <div align="center">
                                                            <div className="col-3">
                                                                <h6>{loginStatus}</h6>
                                                                <button type="submit" class="botont">Acceder</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                        
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="image-center">
                                        <div align="center">
                                            <img src={dibujando} width="50%" alt="Lápiz" title="Lápiz"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    );
}

export default Acceso;