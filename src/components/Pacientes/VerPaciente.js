import React, { Component } from 'react';
import { Link,useNavigate } from "react-router-dom";
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
        datosPaciente:[],
        expediente:0,
        datosExpediente:[]
    }

    componentDidMount(){
        Axios.get("http://54.144.147.250:3001/pacientes")
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
            Axios.get("http://54.144.147.250:3001/obtenerDatos",{
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
            Axios.get("http://54.144.147.250:3001/obtenerExpediente",{
                params: {
                    id_paci: id_paciente
                }
            })
            .then((response) =>{
                console.log(response);
                if(response.data.message){
                    this.setState({expediente:0,datosExpediente:[]});
                }
                else{
                    this.setState({expediente:1,datosExpediente:response.data});
                }
            })
            .catch((error)=> {
                console.log(error)
            });
            console.log(this.state.datosPaciente);
            console.log(this.state.datosExpediente);
        }

        const eliminar_paciente = () => {
            
            Axios.delete("http://54.144.147.250:3001/eliminar",{
                params: {
                    id_paci: id_paciente
                }
            })
            .then((response) =>{
                alert("Se eliminó el paciente");
                window.location.reload(true);
                console.log(response);
            })
            .catch((error)=> {
                console.log(error)
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
                                                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
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
                                                                    <option selected>Mostrar pacientes</option>
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
                                                                {this.state.expediente==0 ?
                                                                    <table className="table table-striped" id="documentos">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>No se cuentan con documentos de este paciente</td>
                                                                            </tr>
                                                                        </tbody> 
                                                                        </table>:
                                                                    <table className="table table-striped" id="documentos">
                                                                         <thead>
                                                                            <tr>
                                                                                <th>Token</th>
                                                                                <th>Prueba</th>
                                                                                <th>Respuestas</th>
                                                                                <th>Resultado</th>
                                                                                <th>Estado</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {this.state.datosExpediente.map((dexpediente)=>(
                                                                                dexpediente.estado=='Resuelto' ?
                                                                            <tr>
                                                                                <td>{dexpediente.token}</td>
                                                                                <td>{dexpediente.nombre}</td>
                                                                                <td><a href={dexpediente.respuesta} target="_blank">Respuestas de Prueba</a></td>
                                                                                <td><a href={dexpediente.resultado} target="_blank">Resultado de Prueba</a></td>
                                                                                <td>{dexpediente.estado}</td>
                                                                            </tr> 
                                                                                :
                                                                            <tr>
                                                                                <td>{dexpediente.token}</td>
                                                                                <td>{dexpediente.nombre}</td>
                                                                                <td>{dexpediente.respuesta}</td>
                                                                                <td>{dexpediente.resultado}</td>
                                                                                <td>{dexpediente.estado}</td>
                                                                            </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                }
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
                                                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
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
                                                                <span class="form-control">
                                                                    {this.state.datosPaciente.map(e => (
                                                                       <t>{e.nombre}</t>
                                                                    ))}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Primer apellido"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <span class="form-control">
                                                                    {this.state.datosPaciente.map(e => (
                                                                       <t>{e.apellidop}</t>
                                                                    ))}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Segundo apellido"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <span class="form-control">
                                                                    {this.state.datosPaciente.map(e => (
                                                                       <t>{e.apellidom}</t>
                                                                    ))}
                                                                </span>
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
                                                                <span class="form-control">
                                                                    {this.state.datosPaciente.map(e => (
                                                                       <t>{e.fecha_nac}</t>
                                                                    ))}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Género"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <span class="form-control">
                                                                    {this.state.datosPaciente.map(e => (
                                                                       <t>{e.genero}</t>
                                                                    ))}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Correo electrónico"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <span class="form-control">
                                                                    {this.state.datosPaciente.map(e => (
                                                                       <t>{e.correo}</t>
                                                                    ))}
                                                                </span>
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
                                                                <span class="form-control">
                                                                    {this.state.datosPaciente.map(e => (
                                                                       <t>{e.telefono}</t>
                                                                    ))}
                                                                </span>
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
                                                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
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
                                                                <span class="form-control">
                                                                    {this.state.datosPaciente.map(e => (
                                                                       <t>{e.nombret}</t>
                                                                    ))}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Primer apellido"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <span class="form-control">
                                                                    {this.state.datosPaciente.map(e => (
                                                                       <t>{e.apellidopt}</t>
                                                                    ))}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Segundo apellido"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <span class="form-control">
                                                                    {this.state.datosPaciente.map(e => (
                                                                       <t>{e.apellidomt}</t>
                                                                    ))}
                                                                </span>
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
                                                                <span class="form-control">
                                                                    {this.state.datosPaciente.map(e => (
                                                                       <t>{e.correot}</t>
                                                                    ))}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                            <div class="input-group input-group-sm mb-3">
                                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido">{"Teléfono"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <span class="form-control">
                                                                    {this.state.datosPaciente.map(e => (
                                                                       <t>{e.telefonot}</t>
                                                                    ))}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="main row">
                                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                        <div class="text-center">
                                                            <button type="submit" class="boton" onClick={eliminar_paciente}>Eliminar</button>
                                                        </div>
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