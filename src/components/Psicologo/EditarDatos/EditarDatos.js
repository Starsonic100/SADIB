import React,{ useEffect,useState }  from 'react';
import '../../css/psicologo.css';
import psicologo from '../../img/psicologo.png';
import validar from './validacion';
import Axios from "axios";
import useEditarDatos from './useEditarDatos';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";
let theme = createTheme();
theme = responsiveFontSizes(theme);

const EditarDatos = ({ submitForm }) => {
    
    const { handleChange, handleSubmit, valores, errores } = useEditarDatos(
      submitForm,
      validar
    );

    useEffect(() => {
      Axios.get("http://54.144.147.250:3001/editarPsic").then((response) => {
          {valores.Fusuario=response.data.user[0].id_usuario};
          {valores.Fnombre=response.data.user[0].nombre};
          {valores.Fapellido=response.data.user[0].apellidop};
          {valores.Fsapellido=response.data.user[0].apellidom};
          {valores.Fcorreo=response.data.user[0].correo};
          {valores.Ftelefono=response.data.user[0].telefono};
      });
    }, []);

    return(
        <div className="container">
            {/* Comienza sección de preguntas*/}
            <div className="main row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                    <div className="container">
                        <div className="formulario-psicologo">
                            {/* Comienza div de instrucciones*/}
                            <div className="encabezado-psicologo">
                                <div align="center">
                                    <MuiThemeProvider theme={theme}>
                                        <Typography variant="h5" class="encabezado-psicologo">{"EDITAR"}</Typography>
                                    </MuiThemeProvider>
                                </div>
                            </div>
                            {/*Termina div de instrucciones*/}
                            
                            {/* Comienza div de preguntas*/}  
                            <div className="contenido">
                                <form onSubmit={handleSubmit} className='form' noValidate>
                                    <div class="myform form">
                                        <div align="center">
                                            <div className="container">
                                                <div className="main row">
                                                    <div className="col-12">
                                                        <MuiThemeProvider theme={theme}>
                                                            <Typography variant="h3" class="apartado">{"Mi información"}</Typography>
                                                        </MuiThemeProvider>
                                                    </div>
                                                </div>
                                                <hr></hr>

                                                <div class="form-group">
                                                    <div className="main row">
                                                        <div className="col-12">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido-psicologo">{"Usuario"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly" name='Fusuario' id='Fusuario' value={valores.Fusuario} onChange={handleChange}></input>
                                                            </div>
                                                        </div> 
                                                    </div>

                                                    <div className="main row">
                                                        <div className="col-12">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido-psicologo">{"Nombre(s)"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='Fnombre' id='Fnombre' value={valores.Fnombre} onChange={handleChange}>
                                                                </input>
                                                            </div>
                                                        </div>
                                                        {errores.nombre && <h6 class="error">{errores.nombre}</h6>}
                                                    </div>

                                                    <div className="main row">
                                                        <div className="col-12">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido-psicologo">{"Primer apellido"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='Fapellido' id='Fapellido' value={valores.Fapellido} onChange={handleChange}></input>
                                                            </div>
                                                        </div>
                                                        {errores.papellido && <h6 class="error">{errores.papellido}</h6>}
                                                    </div>

                                                    <div className="main row">
                                                        <div className="col-12">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido-psicologo">{"Segundo apellido"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='Fsapellido' id='Fsapellido' value={valores.Fsapellido} onChange={handleChange}></input>
                                                            </div>
                                                        </div>
                                                        {errores.sapellido && <h6 class="error">{errores.sapellido}</h6>}
                                                    </div>

                                                    <div className="main row">
                                                        <div className="col-12">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido-psicologo">{"Correo electrónico"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='Fcorreo' id='Fcorreo' value={valores.Fcorreo} onChange={handleChange}></input>
                                                            </div>
                                                        </div>
                                                        {errores.correo && <h6 class="error">{errores.correo}</h6>}
                                                    </div>

                                                    <div className="main row">
                                                        <div className="col-12">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido-psicologo">{"Teléfono"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" pattern="[0-9]" name='Ftelefono' id='Ftelefono' value={valores.Ftelefono} onChange={handleChange}></input>
                                                            </div>
                                                        </div>
                                                        {errores.telefono && <h6 class="error">{errores.telefono}</h6>}
                                                    </div>

                                                    <div className="main row">
                                                        <div className="col-12">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido-psicologo">{"Contraseña"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='Fcontrasenia' id='Fcontrasenia' value={valores.Fcontrasenia} onChange={handleChange}></input>
                                                            </div>
                                                        </div>
                                                        {errores.contrasenia && <h6 class="error">{errores.contrasenia}</h6>}
                                                    </div>


                                                    <div className="main row">
                                                        <div className="col-8">
                                                            <div align="center">
                                                                <div class="text-center ">
                                                                    <button type="submit"class="botonp">Guardar</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>    
                            </div>
                            {/*Termina div de preguntas*/}
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                    <div className="image-center">
                        <div align="center">
                            <img src={psicologo} width="90%" alt="Psicólogo" title="Psicólogo"/>
                        </div>
                    </div>
                </div>
            </div>
            {/*Termina sección de preguntas*/}
        </div>                    
    );
}

export default EditarDatos;