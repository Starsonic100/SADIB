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
                                                        <div className="col-xs-6 col-sm-6 col-md-8 col-lg-8">
                                                            <select class="form-select" aria-label="Default select example">
                                                                <option selected>Buscar paciente</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text-center ">
                                                    <button type="submit" class=" btn btn-block send-button tx-tfm" >Editar paciente</button>
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