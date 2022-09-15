import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/pacientes.css';
import Axios from "axios";
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);


class VerPaciente extends Component{
    
    continuar = e => {
        e.preventDefault();
        this.props.siguiente();
    };

    state={
        pacientes:[],
        datosPaciente:[]
    }

    componentDidMount(){
        Axios.get("http://localhost:3001/pacientes")
        .then((response) =>{
            console.log(response);
            this.setState({pacientes: response.data})
        })
        .catch((error)=> {
            console.log(error)
        });
    }


    render(){

        const { values, handleInputChange } = this.props;
        const{
            values: {id_paciente}
        } = this.props;

        const obtener_datos = () =>{
            Axios.get("http://localhost:3001/obtenerDatos",{
                params: {
                    id_paci: id_paciente
                }
            })
            .then((response) =>{
                console.log(response);
                this.setState({datosPaciente: response.data})
            })
            .catch((error)=> {
                console.log(error)
            });
        }

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
                                                    <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12">
                                                        <div align="right">
                                                            <Link to="/AgregarPaciente">
                                                                <button type="submit" class="boton">Nuevo paciente</button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br></br>
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
                                                                <select id="pac_sel" class="form-select" aria-label="Default select example" name="id_paciente" onChange={handleInputChange('id_paciente')} defaultValue={values.id_paciente} onClick={obtener_datos}>
                                                                    <option selected>Buscar paciente</option>
                                                                    {this.state.pacientes.map(elemento => (
                                                                        <option key={elemento.id_paci} value={elemento.id_paci}>{elemento.id_paci} - {elemento.apellidop} {elemento.apellidom} {elemento.nombre} </option>
                                                                    ))}
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
                                    <br></br>
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
                                                                {this.state.datosPaciente.map(e => (
                                                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly" value={e.nombre}></input>
                                                                ))} 
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Primer apellido"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                {this.state.datosPaciente.map(e => (
                                                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly" value={e.apellidop}></input>
                                                                ))} 
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Segundo apellido"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                {this.state.datosPaciente.map(e => (
                                                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly" value={e.apellidom}></input>
                                                                ))} 
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
                                                                {this.state.datosPaciente.map(e => (
                                                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly" value={e.fecha_nac}></input>
                                                                ))} 
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Género"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                {this.state.datosPaciente.map(e => (
                                                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly" value={e.genero}></input>
                                                                ))} 
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Correo electrónico"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                {this.state.datosPaciente.map(e => (
                                                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly" value={e.correo}></input>
                                                                ))} 
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
                                                                {this.state.datosPaciente.map(e => (
                                                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly" value={e.telefono}></input>
                                                                ))} 
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
                                                                {this.state.datosPaciente.map(e => (
                                                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly" value={e.nombret}></input>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Primer apellido"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                {this.state.datosPaciente.map(e => (
                                                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly" value={e.apellidopt}></input>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Segundo apellido"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                {this.state.datosPaciente.map(e => (
                                                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly" value={e.apellidomt}></input>
                                                                ))}
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
                                                                {this.state.datosPaciente.map(e => (
                                                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly" value={e.correot}></input>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Teléfono"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                {this.state.datosPaciente.map(e => (
                                                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readonly="readonly" value={e.telefonot}></input>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="main row">
                                                    <div className="col-lg-7">
                                                        <div class="text-center">
                                                            <button type="submit" class="boton" onClick={this.continuar}>Editar</button>
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