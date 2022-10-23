import React,{ useEffect,useState }  from 'react';
import '../../css/psicologo.css';
import dibujo from '../../img/dibujo.png';
import validar from './validacion';
import Axios from "axios";
import useAsignarPrueba from './useAsignarPrueba';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";
let theme = createTheme();
theme = responsiveFontSizes(theme);

const AsignarPrueba = ({ submitForm }) => {
    const { handleChange, handleSubmit, valores, errores } = useAsignarPrueba(
      submitForm,
      validar
    );
    const [pacientes,setPacientes]=useState([]);
    
    useEffect(() => {
        Axios.get("http://3.215.192.63:3001/datosPaciente")
        .then((response) =>{
            console.log(response);
            setPacientes(response.data);
        })
        .catch((error)=> {
            console.log(error);
        });
    }, [setPacientes]);

    return(
        <div className="container">
            {/* Comienza sección de preguntas*/}
            <div className="main row">
                
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="image-center">
                        <div align="center">
                            <img src={dibujo} width="75%" alt="Dibujando" title="Dibujando"/>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="container">
                        <div className="formulario-psicologo">
                            {/* Comienza div de instrucciones*/}
                            <div className="encabezado-psicologo">
                                <div align="center">
                                    <MuiThemeProvider theme={theme}>
                                        <Typography variant="h5" class="encabezado-psicologo">{"ASIGNAR PRUEBA"}</Typography>
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
                                                            <Typography variant="h3" class="apartado">{"Datos"}</Typography>
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
                                                                        <Typography variant="h6" class="contenido-psicologo">{"Seleccionar paciente"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <select class="form-select" aria-label="Default select example" name="Fpacientes" onChange={handleChange}>
                                                                    <option selected value='-1'>Selecciona Paciente</option>
                                                                    {pacientes.map(elemento=>(
                                                                    <option key={elemento.id_paci} value={elemento.id_paci}>{elemento.nombre} {elemento.apellidop} {elemento.apellidom}</option>))}
                                                                </select>
                                                            </div>
                                                            {errores.Fpacientes && <h6 class="error">{errores.Fpacientes}</h6>}
                                                        </div> 
                                                    </div>

                                                    <div className="main row">
                                                        <div className="col-12">
                                                            <div class="input-group-sm">
                                                                <span>
                                                                    <MuiThemeProvider theme={theme}>
                                                                        <Typography variant="h6" class="contenido-psicologo">{"Seleccionar prueba"}</Typography>
                                                                    </MuiThemeProvider>
                                                                </span>
                                                                <hr></hr>
                                                                <div className="main row">
                                                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                                        <input type="checkbox" class="my-input" name='Fprueba1' value="2014921" onChange={handleChange}></input>
                                                                        <input class="form-control my-input" type='hidden' value="-" name='Fprueba1' onChange={handleChange}/>
                                                                        <label><h6>Prueba HTP</h6></label>
                                                                    </div>

                                                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                                        <input type="checkbox" class="my-input" name='Fprueba1' value="2014921" onChange={handleChange}></input>
                                                                        <input class="form-control my-input" type='hidden' value="-" name='Fprueba' onChange={handleChange}></input>
                                                                        <label><h6>Test TAMAI</h6></label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {errores.Fprueba && <h6 class="error">{errores.Fprueba}</h6>}
                                                        </div>
                                                    </div>

                                                    <div className="main row">
                                                        <div className="col-8">
                                                            <div align="center">
                                                                <div class="text-center ">
                                                                    <button type="submit"class="botonp">Asignar</button>
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
            </div>
            {/*Termina sección de preguntas*/}
        </div>  
    );
}

export default AsignarPrueba;