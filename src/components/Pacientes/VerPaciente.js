import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/pacientes.css';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export class VerPaciente extends Component {

    render(){

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
                                            <Typography variant="h5" class="encabezado">{"PACIENTES"}</Typography>
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
                                                            <Typography variant="h3" class="apartado">{"Consultar paciente"}</Typography>
                                                        </MuiThemeProvider>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div class="form-group">
                                                    <div className="main row">
                                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Paciente"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <select class="form-select" aria-label="Default select example">
                                                                    <option selected>Buscar paciente</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="container-fluid">
                                                        <div className="main row">
                                                            <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12">
                                                                <div className="table-responsive">
                                                                    <table className="table table-striped">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Folio</th>
                                                                                <th>Documento</th>
                                                                                <th>Fecha</th>
                                                                                <th>Estado</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>0123456789</td>
                                                                                <td>Documento.pdf</td>
                                                                                <td>25/08/2022</td>
                                                                                <td>Completado</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>987654321</td>
                                                                                <td>Documento2.pdf</td>
                                                                                <td>25/08/2022</td>
                                                                                <td>Incompleto</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

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
                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Nombre(s)"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly"></input>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Primer apellido"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly"></input>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Segundo apellido"}</Typography>
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
                                                                        <Typography variant="h6" class="contenido">{"Fecha de nacimiento"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly"></input>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Género"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly"></input>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Correo electrónico"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly"></input>
                                                            </div>
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
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly"></input>
                                                            </div>
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
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly"></input>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Primer apellido"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly"></input>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Segundo apellido"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly"></input>
                                                            </div>
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
                                                                <input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly"></input>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Teléfono"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly"></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="main row">
                                                    <div className="col-lg-7">
                                                        <div class="text-center">
                                                            <Link to="/EditarPaciente">
                                                                <button type="submit" class="boton">Editar</button>
                                                            </Link>
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
}
	
export default VerPaciente;