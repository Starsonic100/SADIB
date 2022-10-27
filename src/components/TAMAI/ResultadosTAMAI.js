import React, { useState, useEffect }  from 'react';
import '../css/style.css';
import Axios from "axios";
import {createTheme, responsiveFontSizes, MuiThemeProvider, Typography} from "@material-ui/core";


let theme=createTheme();
theme=responsiveFontSizes(theme);

function ResultadosTAMAI(props){

    /*const id_paciente=props.values.id_paciente;*/
    const id_paciente=833239;
    const [post, setPost] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/obtenerDatos",{
            params: {
                id_paci: id_paciente
            }
        }).then((response) => {
            setPost(response.data);
        });
    }, [setPost]);

    const fecha=new Date();

        return(
            <MuiThemeProvider theme={theme}>
                <div className="container">
                    <div className="main-row">
                        <div className="col-12">
                            <div className="container">
                                <div className="formulario">
                                    <div className="instrucciones">
                                        <div align="center">
                                            <Typography variant="h5" gutterBottom>Resultado prueba TAMAI</Typography>
                                        </div>
                                    </div>
                                    <div className="preguntas">
                                        <div className="container-fluid">
                                            <div className="main row">
                                                <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12">
                                                    <div class="myform form">
                                                        
                                                            <div className="main row">
                                                                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                                                                    <div class="input-group input-group-sm mb-3">
                                                                        <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                            <MuiThemeProvider theme={theme}>
                                                                                <Typography variant="h6" class="contenido">{"Paciente"}</Typography>
                                                                            </MuiThemeProvider>
                                                                        </span>
                                                                        {post.map((item) => (
                                                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={item.apellidop+' '+item.apellidom+' '+item.nombre}>
                                                                            </input>
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
                                                                        {post.map((item) => (
                                                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={item.genero}>
                                                                            </input>
                                                                        ))}
                                                                    </div>
                                                                </div>

                                                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                                    <div class="input-group input-group-sm mb-3">
                                                                        <span class="input-group-text" id="inputGroup-sizing-sm">
                                                                            <MuiThemeProvider theme={theme}>
                                                                                <Typography variant="h6" class="contenido">{"Edad"}</Typography>
                                                                            </MuiThemeProvider>
                                                                        </span>
                                                                        {post.map((item) => (
                                                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={item.edad}>
                                                                            </input>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12">
                                                    <Typography variant="h6" gutterBottom class="tabla-tamai">
                                                        <table class="table-tamai">
                                                            <thead class="table-tamai">
                                                                <tr>
                                                                    <th class="table-tamai">Nivel 2</th>
                                                                    <th class="table-tamai"></th>
                                                                    <th class="table-tamai">PD</th>
                                                                    <th class="table-tamai">Muy bajo</th>
                                                                    <th class="table-tamai">Bajo</th>
                                                                    <th class="table-tamai">Medio bajo</th>
                                                                    <th class="table-tamai">Medio</th>
                                                                    <th class="table-tamai">Medio alto</th>
                                                                    <th class="table-tamai">Alto</th>
                                                                    <th class="table-tamai">Muy alto</th>
                                                                </tr>
                                                            </thead>
                                                            
                                                            <tbody class="table-tamai">
                                                                <tr>
                                                                    <td class="table-tamai">Inadaptación General</td>
                                                                    <td class="table-tamai">G</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table-tamai">Inadaptación Personal</td>
                                                                    <td class="table-tamai">P</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub table-tamai">Insatisfacción personal</td>
                                                                    <td class="table-tamai">P1</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr >
                                                                    <td class="sub table-tamai">Desajuste afectivo</td>
                                                                    <td class="table-tamai">P2</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub1 table-tamai">Cogniafección</td>
                                                                    <td class="table-tamai">P21</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub1 table-tamai">Cognipunición</td>
                                                                    <td class="table-tamai">P22</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub2 table-tamai">Somatización</td>
                                                                    <td class="table-tamai">P221</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub2 table-tamai">Depresión-intrapunición</td>
                                                                    <td class="table-tamai">P222</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub table-tamai">Autosuficiencia defensiva</td>
                                                                    <td class="table-tamai">P3</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table-tamai">INADAPTACIÓN ESCOLAR</td>
                                                                    <td class="table-tamai">E</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub table-tamai">Aversión a la instrucción</td>
                                                                    <td class="table-tamai">E1</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub1 table-tamai">Hipolaboriosidad</td>
                                                                    <td class="table-tamai">E11</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub1 table-tamai">Hipomotivación</td>
                                                                    <td class="table-tamai">E12</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub1 table-tamai">Aversión al profesor</td>
                                                                    <td class="table-tamai">E13</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub table-tamai">Indisciplina</td>
                                                                    <td class="table-tamai">E2</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table-tamai">INADAPTACIÓN SOCIAL</td>
                                                                    <td class="table-tamai">S</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub table-tamai">Autodesajuste social</td>
                                                                    <td class="table-tamai">S1</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub1 table-tamai">Agresividad social</td>
                                                                    <td class="table-tamai">S11</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub1 table-tamai">Disnomia</td>
                                                                    <td class="table-tamai">S12</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub table-tamai">Restricción social</td>
                                                                    <td class="table-tamai">S2</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table-tamai">INSATISFACCIÓN AMBIENTE FAMILIAR</td>
                                                                    <td class="table-tamai">F</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table-tamai">INSATISFACCIÓN CON LOS HERMANOS</td>
                                                                    <td class="table-tamai">H</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table-tamai">EDUCACIÓN ADECUADA PADRE</td>
                                                                    <td class="table-tamai">Pa</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub table-tamai">Educación asistencial personal</td>
                                                                    <td class="table-tamai">Pa1</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub table-tamai">Permisivismo</td>
                                                                    <td class="table-tamai">Pa2</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub table-tamai">Restricción</td>
                                                                    <td class="table-tamai">Pa3</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub1 table-tamai">Perfeccionismo hipernómico</td>
                                                                    <td class="table-tamai">Pa31</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub1 table-tamai">Estilo aversivo</td>
                                                                    <td class="table-tamai">Pa32</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub2 table-tamai">Rechazo afectivo</td>
                                                                    <td class="table-tamai">Pa321</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub2 table-tamai">Perfeccionismo hostil</td>
                                                                    <td class="table-tamai">Pa322</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub2 table-tamai">Marginación afectiva</td>
                                                                    <td class="table-tamai">Pa323</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table-tamai">EDUCACIÓN ADECUADA MADRE</td>
                                                                    <td class="table-tamai">M</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub table-tamai">Educación asistencial-personal</td>
                                                                    <td class="table-tamai">M1</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub table-tamai">Permisivismo</td>
                                                                    <td class="table-tamai">M2</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub table-tamai">Restricción</td>
                                                                    <td class="table-tamai">M3</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub1 table-tamai">Asistencia restrictiva</td>
                                                                    <td class="table-tamai">M31</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub2 table-tamai">Marginación afectiva</td>
                                                                    <td class="table-tamai">M311</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub2 table-tamai">Rechazo afectivo</td>
                                                                    <td class="table-tamai">M312</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub1 table-tamai">Personalización restrictiva</td>
                                                                    <td class="table-tamai">M32</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub2 table-tamai">Perfección. hostil</td>
                                                                    <td class="table-tamai">M321</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="sub2 table-tamai">Perfección. hipernómico</td>
                                                                    <td class="table-tamai">M322</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table-tamai">DISCREPANCIA EDUCATIVA</td>
                                                                    <td class="table-tamai">Dis</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table-tamai">PRO-IMAGEN</td>
                                                                    <td class="table-tamai">PI</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table-tamai">CONTRADICCIONES</td>
                                                                    <td class="table-tamai">Contr</td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                    <td class="table-tamai"></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </Typography>
                                                </div>
                                            </div>
                                            <div className="main row">
                                                <MuiThemeProvider theme={theme}>
                                                    <Typography variant="h6" class="pie-tabla">{fecha.toString()}</Typography>
                                                </MuiThemeProvider>
                                                <MuiThemeProvider theme={theme}>
                                                    <Typography variant="h6" class="pie-tabla">{"Este documento carece de validez oficial y requiere de un profesional para un diagnóstico más preciso y seguimiento."}</Typography>
                                                </MuiThemeProvider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
}

export default ResultadosTAMAI;