import React, { Component, Fragment } from 'react';
import '../css/style.css';
import dibujo from '../img/dibujo-digital.png';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export class HTPFinal extends Component{

    evaluar = e => {
        e.preventDefault();
        this.props.evaluacion();
    };

    render(){
        const{
            values: {p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,
                p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,
                p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,
                p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,
                p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,
                p51,p52,p53,p54,p55,p56,p57,p58,p59,p60,
                p61,p62,p63,p64,p65,p66,p67,p68,bDc, rDc,
                bDa,rDa,bDp,rDp}
        } = this.props;

        const Evaluar = () =>{

        
            return(
                <Fragment>
                    <div className="container">
                        <div align="center">
                            <button type="submit" class="enviar" onClick={this.evaluar}>Enviar</button>
                        </div>
                    </div>
                </Fragment>
            )
        }

        return(
            <div className="container">
                <div className="main row">
                    <div className="col-12">
                        <div className="container">
                            <div className="formulario">
                                <div className="main row">
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="container">
                                            <div className="final">
                                                <div align="center">
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h1" class="gracias">{"¡FELICIDADES!"}</Typography>
                                                        <Typography variant="h1" class="gracias">{"Has concluido tu prueba"}</Typography>
                                                        <Typography variant="h5" class="gracias">{"Da clic en el botón 'Enviar' para que sea evaluada"}</Typography>
                                                    </MuiThemeProvider>
                                                    <Evaluar/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="image-center-final">
                                            <div align="center">
                                                <img src={dibujo} width="100%" alt="Dibujo digital" title="Dibujo digital"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default HTPFinal;