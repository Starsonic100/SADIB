import React, { Component, useEffect, useRef, Fragment, useCallback, useState } from 'react';
import { useSvgDrawing } from 'react-hooks-svgdrawing';
import '../css/style.css';
import siguiente from '../img/siguiente.png';
import lapiz from '../img/lapiz2.png';
import deshacer from '../img/deshacer.png';
import borrar from '../img/borrar.png';
import descargar from '../img/descargar.png';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export class Dibujo extends Component {

    continuar = e => {
        e.preventDefault();
        this.props.siguiente();
    };


    render(){

        const Drawing = () => {
            const [renderRef, {
                instance,
                changePenWidth,
                getSvgXML,
                download,
                undo,
                clear
              }] = useSvgDrawing({
                penWidth: 2.25, // Ancho del lápiz
                penColor: '#000000', // Color del lápiz
            })

        const [xml, setXml] = useState('')

        const handleChangeXML = useCallback(() => {
            setXml(getSvgXML())
        }, [getSvgXML])
            
            return(
                <Fragment>
                    <div className="container">
                        <div className="barra-herramientas">
                            <label>
                                <button class="button-herramientas" onClick={() => changePenWidth(2.25)}><img src={lapiz} alt="Lápiz" title="Lápiz"/></button>

                                <button class="button-herramientas" onClick={undo}><img src={deshacer} alt="Borrar" title="Borrar"/></button>

                                <button class="button-herramientas" onClick={clear}><img src={borrar}  alt="Borrar pantalla" title="Borrar pantalla"/></button>

                                <button class="button-herramientas" onClick={() => download("svg")}><img src={descargar} alt="Descargar dibujo" title="Descargar dibujo"/></button>
                            </label>
                        </div>
                    </div>

                    <div style={{ /*width: 500, */height: 500, border: 'solid', borderColor: '#8F8F8F' }} ref={renderRef} onTouchEnd={handleChangeXML} onMouseLeave={handleChangeXML}/>

                    <div>
                        <div dangerouslySetInnerHTML={{ __html: xml}} />
                    </div>
                </Fragment>
            )
          }

        return(
            <div className="container">
                
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
                                    
                                    <div className="dibujo">
                                        <Drawing/>
                                    </div>

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