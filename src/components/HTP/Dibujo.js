import React, { Component } from 'react';
import '../css/style.css';
import logo from '../img/logo.png';
import siguiente from '../img/siguiente.png';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export class Dibujo extends Component {

    continuar = e => {
        e.preventDefault();
        this.props.siguiente();
    };

    render(){

        const { values, handleInputChange } = this.props;

        return(
            <div className="container">
                {/* Comienza Banner*/}
                <div className="main row">
                    <div className="col-12">
                        <div className="banner">
                            <div align="center"><img src={logo} alt="logoSADIB" title="logoSADIB" width="25%"/></div>
                        </div>
                    </div>
                </div>
                {/* Termina Banner*/}
                
                {/* Comienza sección de preguntas*/}
                <div className="main row">
                    <div className="col-12">
                        <div className="container">
                            <div className="formulario">
                                {/* Comienza div de instrucciones*/}
                                <div className="instrucciones">
                                    <div align="center">
                                        <MuiThemeProvider theme={theme}>
                                            <Typography variant="h5" class="instrucciones">{"Realiza un dibujo que contenga una casa, un árbol y una persona"}</Typography>
                                        </MuiThemeProvider>
                                    </div>
                                </div>
                                {/*Termina div de instrucciones*/}
    
                                {/* Comienza div de preguntas*/}  
                                <div className="preguntas">
                                    
                                    <div>Aquí va la pantalla de dibujo</div>

                                    <div className="main row">
                                        <div className="col-lg-11">
                                            <button class="button" onClick={this.continuar}><img src={siguiente}/></button>
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
	
export default Dibujo;