import React, { Component } from 'react';
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
                                <div className="titulo">
                                    <div align="center">
                                        <MuiThemeProvider theme={theme}>
                                            <Typography variant="h5" class="titulo">{"PACIENTES"}</Typography>
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
                                                            <Typography variant="h3" class="seccion">{"Consultar paciente"}</Typography>
                                                        </MuiThemeProvider>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div class="form-group">
                                                    <div className="main row">
                                                        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                                                            <MuiThemeProvider theme={theme}>
                                                                <Typography variant="h6" class="contenido">{"Seleccionar paciente"}</Typography>
                                                            </MuiThemeProvider>
                                                        </div>
                                                        <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7">
                                                            <select class="form-select" aria-label="Default select example">
                                                                <option selected>Buscar paciente</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="main row">
                                                        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                                                            <MuiThemeProvider theme={theme}>
                                                                <Typography variant="h6" class="contenido">{"Seleccionar expediente"}</Typography>
                                                            </MuiThemeProvider>
                                                        </div>
                                                        <div className="col-xs-6 col-sm-6 col-md-5 col-lg-5">
                                                            <select class="form-select" aria-label="Default select example">
                                                                <option selected>Buscar expediente</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="container">
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                <th scope="col">Folio</th>
                                                                <th scope="col">Documento</th>
                                                                <th scope="col">Fecha</th>
                                                                <th scope="col">Estado</th>
                                                                </tr>
                                                            </thead>
                                                    
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">123456789</th>
                                                                    <td>Resultado_folio.pdf</td>
                                                                    <td>16/08/22 11:52:13</td>
                                                                    <td>Concluido</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
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
                                                            <Typography variant="h3" class="seccion">{"Datos del paciente"}</Typography>
                                                        </MuiThemeProvider>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                
                                                <div class="form-group">
                                                    <div className="main row">
                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">Nombre(s)</span>
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">Primer apellido</span>
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">Segundo apellido</span>
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="main row">
                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">Fecha de nacimiento</span>
                                                                <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">Género</span>
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">Edad</span>
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="main row">
                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">Correo electrónico</span>
                                                                <input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">Teléfono</span>
                                                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="main row">
                                                    <div className="col-7">
                                                        <div class="text-center">
                                                            <button type="submit" class="btn">Editar</button>
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