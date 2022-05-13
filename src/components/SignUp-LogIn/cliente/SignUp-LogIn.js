import React, { Component } from 'react';
import '../../css/sign-log.css';
import lapiz from '../../img/lapiz.png';
import { useState } from "react";
import Axios from "axios";
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Registro(){ 
    /*Para el menú tabs*/
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    /*Para formulario de registro*/
    const [Fusuario, setFusuario] = useState("");
    const [Fnombre, setFnombre] = useState("");
    const [Fpapellido, setFpapellido] = useState("");
    const [Fsapellido, setFsapellido] = useState("");
    const [Fcorreo, setFcorreo] = useState("");
    const [Ftelefono, setFtelefono] = useState("");
    const [Fcontrasenia, setFcontrasenia] = useState("");
    
    /*Para el formulario de inicio de sesión */
    const [correol, setCorreol] = useState("");
    const [contrasenial, setContrasenial] = useState("");

    const registro = () => {
        Axios.post("http://localhost:3001/registro",{
            usuario: Fusuario,
            nombre: Fnombre,
            papellido: Fpapellido,
            sapellido: Fsapellido,
            correo: Fcorreo,
            telefono: Ftelefono,
            contrasenia: Fcontrasenia,
        }).then((response) => {
            console.log(response);
            alert('Registro exitoso. Inicie sesión ahora');
        });
    };

    const login = () => {
        Axios.post("http://localhost:3001/login",{
            correologin: correol,
            contrasenialogin: contrasenial,
        }).then((response) => {
            console.log(response);
        });
    };

    return(
        <div className="container">
            <div className="frame">
                <div className="main row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="bloc-tabs">
                            <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                            >
                            Registrarse
                            </button>
                            <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                            >
                            Iniciar sesión
                            </button>
                        </div>

                        <div className="content-tabs">
                            <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                            >
                                <div class="myform form">
                                    <div align="center">
                                        <div class="form-group">
                                            <input type="text" class="form-control my-input" placeholder="Usuario" onChange={(e) => {setFusuario(e.target.value);}}/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control my-input" placeholder="Nombre(s)" onChange={(e) => {setFnombre(e.target.value);}}/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control my-input" placeholder="Primer apellido" onChange={(e) => {setFpapellido(e.target.value);}}/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control my-input" placeholder="Segundo apellido" onChange={(e) => {setFsapellido(e.target.value);}}/>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control my-input" placeholder="Correo electrónico" onChange={(e) => {setFcorreo(e.target.value);}}/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control my-input" placeholder="Teléfono" onChange={(e) => {setFtelefono(e.target.value);}}/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control my-input" placeholder="Contraseña" onChange={(e) => {setFcontrasenia(e.target.value);}}/>
                                        </div>
                                    </div>
                                    <div class="text-center ">
                                        <button type="submit" class=" btn btn-block send-button tx-tfm" onClick={registro}>Crear cuenta</button>
                                    </div>
                                </div>
                            </div>

                            <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                            >
                                <div class="myform form">
                                    <div align="center">
                                        <div class="form-group">
                                            <input type="email" class="form-control my-input" placeholder="Correo electrónico" onChange={(e) => {setCorreol(e.target.value);}} />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control my-input" placeholder="Contraseña" onChange={(e) => {setContrasenial(e.target.value);}} />
                                        </div>
                                    </div>
                                    <div class="text-center ">
                                        <button type="submit" class=" btn btn-block send-button tx-tfm" onClick={login}>Iniciar sesión</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div align="center">
                            <img src={lapiz} width="90%" alt="Lápiz" title="Lápiz"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registro;