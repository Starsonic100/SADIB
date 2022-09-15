import React, { useState } from 'react';
import '../css/pacientes.css';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";
import Axios from "axios";
import validacionPaciente from './validacionPaciente';


let theme = createTheme();
theme = responsiveFontSizes(theme);

function EditarPaciente(){

    /*Datos del paciente*/
    const [Nombre, setNombre] = useState("");
    const [Papellido, setPapellido] = useState("");
    const [Sapellido, setSapellido] = useState("");
    const [FNacimiento, setFNacimiento] = useState("");
    const [Genero, setGenero] = useState("");
    const [Email, setEmail] = useState("");
    const [Telefono, setTelefono] = useState("");

    /*Datos del tutor*/
    const [TNombre, setTNombre] = useState("");
    const [TPapellido, setTPapellido] = useState("");
    const [TSapellido, setTSapellido] = useState("");
    const [TEmail, setTEmail] = useState("");
    const [TTelefono, setTTelefono] = useState("");

    const [errors, setErrors] = useState({});

    //Función para crear un paciente
    const actualizar_paciente = () => {
        setErrors(validacionPaciente(Nombre,Papellido,Sapellido,FNacimiento,Genero,Email,Telefono,TNombre,TPapellido,TSapellido,TEmail,TTelefono));
        Axios.post("http://localhost:3001/update",{
        /*Datos del paciente*/    
            pnombre: Nombre,
            ppapellido: Papellido,
            psapellido: Sapellido,
            pfnacimiento: FNacimiento,
            pgenero: Genero,
            pemail: Email,
            ptelefono: Telefono,
        /*Datos del tutor*/
            tnombre: TNombre,
            tpapellido: TPapellido,
            tsapellido: TSapellido,
            temail: TEmail,
            ttelefono: TTelefono
        }).then((response) => {
            console.log(response);
        });
    };
    

    return(
        <div className="container">
            
            {/* Comienza sección de preguntas*/}
            <div className="main row">
                <div className="col-12">
                    <div className="container">
                        <div className="formulario-pacientes">
                            {/* Comienza div de instrucciones*/}
                            <div className="encabezado">
                                <div align="center">
                                    <MuiThemeProvider theme={theme}>
                                        <Typography variant="h5" class="encabezado">{"EDITAR PACIENTE"}</Typography>
                                    </MuiThemeProvider>
                                </div>
                            </div>
                            {/*Termina div de instrucciones*/}
                            
                            {/* Comienza div de preguntas*/}  
                            <div className="contenido">
                                <div class="myform form">
                                    <div align="center">
                                        <div className="container">
                                            <div className="main row">
                                                <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h3" class="apartado">{"Datos del paciente"}</Typography>
                                                    </MuiThemeProvider>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            
                                            <div class="form-group">
                                                <div className="main row">
                                                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                                                        <div class="input-group input-group-sm mb-3">
                                                            
                                                            <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                <MuiThemeProvider theme={theme}>
                                                                    <Typography variant="h6" class="contenido">{"ID paciente"}</Typography>
                                                                </MuiThemeProvider>
                                                            </span>
                                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly"></input>
                                                        </div>
                                                    </div> 
                                                </div>

                                                <div className="main row">
                                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                        <div class="input-group input-group-sm mb-3">
                                                            <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                <MuiThemeProvider theme={theme}>
                                                                    <Typography variant="h6" class="contenido">{"Nombre(s)"}</Typography>
                                                                </MuiThemeProvider>
                                                            </span>
                                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => {setNombre(e.target.value);}}>
                                                            </input>
                                                        </div>
                                                        {errors.pnombre && <h6 class="error">{errors.pnombre}</h6>}
                                                    </div>

                                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                        <div class="input-group input-group-sm mb-3">
                                                            <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                <MuiThemeProvider theme={theme}>
                                                                    <Typography variant="h6" class="contenido">{"Primer apellido"}</Typography>
                                                                </MuiThemeProvider>
                                                            </span>
                                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => {setPapellido(e.target.value);}}></input>
                                                        </div>
                                                        {errors.ppapellido && <h6 class="error">{errors.ppapellido}</h6>}
                                                    </div>

                                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                        <div class="input-group input-group-sm mb-3">
                                                            <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                <MuiThemeProvider theme={theme}>
                                                                    <Typography variant="h6" class="contenido">{"Segundo apellido"}</Typography>
                                                                </MuiThemeProvider>
                                                            </span>
                                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => {setSapellido(e.target.value);}}></input>
                                                        </div>
                                                        {errors.psapellido && <h6 class="error">{errors.psapellido}</h6>}
                                                    </div>
                                                </div>

                                                <div className="main row">
                                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                        <div class="input-group input-group-sm mb-3">
                                                            <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                <MuiThemeProvider theme={theme}>
                                                                    <Typography variant="h6" class="contenido">{"Fecha de nacimiento"}</Typography>
                                                                </MuiThemeProvider>
                                                            </span>
                                                            <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => {setFNacimiento(e.target.value);}}></input>
                                                        </div>
                                                        {errors.pfnacimiento && <h6 class="error">{errors.pfnacimiento}</h6>}
                                                    </div>

                                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                        <div class="input-group input-group-sm mb-3">
                                                            <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                <MuiThemeProvider theme={theme}>
                                                                    <Typography variant="h6" class="contenido">{"Género"}</Typography>
                                                                </MuiThemeProvider>
                                                            </span>
                                                            <select class="form-select" aria-label="Default select example" onChange={(e) => {setGenero(e.target.value);}}>
                                                                <option selected>Seleccionar</option>
                                                                <option value="Femenino">Femenino</option>
                                                                <option value="Masculino">Masculino</option>
                                                            </select>
                                                        </div>
                                                        {errors.pgenero && <h6 class="error">{errors.pgenero}</h6>}
                                                    </div>

                                                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                                                        <div class="input-group input-group-sm mb-3">
                                                            <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                <MuiThemeProvider theme={theme}>
                                                                    <Typography variant="h6" class="contenido">{"Correo electrónico"}</Typography>
                                                                </MuiThemeProvider>
                                                            </span>
                                                            <input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => {setEmail(e.target.value);}}></input>
                                                        </div>
                                                        {errors.pemail && <h6 class="error">{errors.pemail}</h6>}
                                                    </div>
                                                </div>

                                                <div className="main row">
                                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                        <div class="input-group input-group-sm mb-3">
                                                            <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                <MuiThemeProvider theme={theme}>
                                                                    <Typography variant="h6" class="contenido">{"Teléfono"}</Typography>
                                                                </MuiThemeProvider>
                                                            </span>
                                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => {setTelefono(e.target.value);}}></input>
                                                        </div>
                                                        {errors.ptelefono && <h6 class="error">{errors.ptelefono}</h6>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <br></br>

                                <div class="myform form">
                                    <div align="center">
                                        <div className="container">
                                            <div className="main row">
                                                <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h3" class="apartado">{"Datos del tutor"}</Typography>
                                                    </MuiThemeProvider>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            
                                            <div class="form-group">
                                                <div className="main row">
                                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                        <div class="input-group input-group-sm mb-3">
                                                            <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                <MuiThemeProvider theme={theme}>
                                                                    <Typography variant="h6" class="contenido">{"Nombre(s)"}</Typography>
                                                                </MuiThemeProvider>
                                                            </span>
                                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => {setTNombre(e.target.value);}}></input>
                                                        </div>
                                                        {errors.tnombre && <h6 class="error">{errors.tnombre}</h6>}
                                                    </div>

                                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                        <div class="input-group input-group-sm mb-3">
                                                            <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                <MuiThemeProvider theme={theme}>
                                                                    <Typography variant="h6" class="contenido">{"Primer apellido"}</Typography>
                                                                </MuiThemeProvider>
                                                            </span>
                                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => {setTPapellido(e.target.value);}}></input>
                                                        </div>
                                                        {errors.tpapellido && <h6 class="error">{errors.tpapellido}</h6>}
                                                    </div>

                                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                        <div class="input-group input-group-sm mb-3">
                                                            <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                <MuiThemeProvider theme={theme}>
                                                                    <Typography variant="h6" class="contenido">{"Segundo apellido"}</Typography>
                                                                </MuiThemeProvider>
                                                            </span>
                                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => {setTSapellido(e.target.value);}}></input>
                                                        </div>
                                                        {errors.tsapellido && <h6 class="error">{errors.tsapellido}</h6>}
                                                    </div>
                                                </div>

                                                <div className="main row">
                                                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                                                        <div class="input-group input-group-sm mb-3">
                                                            <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                <MuiThemeProvider theme={theme}>
                                                                    <Typography variant="h6" class="contenido">{"Correo electrónico"}</Typography>
                                                                </MuiThemeProvider>
                                                            </span>
                                                            <input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => {setTEmail(e.target.value);}}></input>
                                                        </div>
                                                        {errors.temail && <h6 class="error">{errors.temail}</h6>}
                                                    </div>

                                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                        <div class="input-group input-group-sm mb-3">
                                                            <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                <MuiThemeProvider theme={theme}>
                                                                    <Typography variant="h6" class="contenido">{"Teléfono"}</Typography>
                                                                </MuiThemeProvider>
                                                            </span>
                                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => {setTTelefono(e.target.value);}}></input>
                                                        </div>
                                                        {errors.ttelefono && <h6 class="error">{errors.ttelefono}</h6>}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="main row">
                                                <div align="center">
                                                    <div className="col-lg-3">
                                                        <div className="text-center">
                                                            <button type="submit" class="boton" onClick={() => window.location.reload()}>Regresar</button>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div class="text-center">
                                                            <button type="submit" class="boton" onClick={actualizar_paciente}>Guardar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Termina div de preguntas*/}

                            
                        </div>
                    </div>
                </div>
            </div>
            {/*Termina sección de preguntas*/}
        </div>
        
    );
}
	
export default EditarPaciente;