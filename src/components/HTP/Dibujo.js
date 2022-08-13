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
                penWidth: 2, // Ancho del lápiz
                penColor: '#000000', // Color del lápiz
            })

            const [xml, setXml] = useState('')

            const handleChangeXML = useCallback(() => {
                setXml(getSvgXML())
            }, [getSvgXML])

            function getBase64Img() {
                return "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAMFBMVEX////7+/vr6+vNzc2qqqplywBWrQD/Y5T/JTf+AADmAABeeEQvNydqAAAGBAMAAAGoF14oAAAEBUlEQVR42u2WTUwUVxzA/2925LIojsyqCLtMqSQeFJeFROPHstjdNkZdkaiX9mRTovYgSYNFE43Rg5IeNG5SqyaVcGzXkvTm7hZWq9bKriAYYzSLBI3WAplp0jY2kV3fzPuYGcBxD/bmO0zevPeb//f7v0FQ5EDvwf8LFG89ixYDol9Wo+smKal2sHF6kM6q7qbE5tY03d7SHR6ygiuvwY1txkzIlPaD3NQ4Zryk/PCP1wKibBlI97dq+idXUxqgcEkVnruS/smRpuWaCbrHU5pc/wyTQsata0U77wVBTlRP9UNkT9oE61K9AHL9VERbeTVurMjNm54mqrFw8CwKmWBfpf6V2Dx/TdxN3YjMf2JwIEZ8JnjnEbEjvLAQZ1EKlxkciJ9UcdD1Z5ztDmgsgPIrMkWtMgfd41xOYXZOIjUcLB3tdchypHWIgb5k2gH0nE0zMHjRCRTLWxgY/VQrDuybcAQ/DDEwmwEn8COlSDBcTUE0GXcEjRzqoDDhDH7sfccg2szAt9hogjBFQFRmDyd9N1VTEFegXXKEVKQFJHEUd0DSKhLthIm0HSQpnNdCNizgq147GP0m7QTygNMye6NqM9ekwlG4kLI5I4cMZ+bVhMA8MwX1rw9oIjakAYX6jXlBRRJ4BF6PwmRSfQyLFhJwWy/IG8khKuirljODG0DfGAd3qCBNEol5vCqFAxqYLeUyB0H2A2Q0DspRD3BQfJEc5KBl6KprG6pNEPqqfkKzOQBsha2bQeVw6g3nSySaGYgb99ylhsLDLVYQ3E+oozOGHKzVbCBs+HkuUm6ivd4E0ZYeNTPTTrn51+0wA9TJgpZVLeaV1y+4yS8c64W0/AcFTBCHK/fFEMwFAmo4KRldE0ZxsF8cGbTuzYqHtOz8t6e8TMk5CcjNSC+kdcfgPyag9AoDhUQARmvAcIiAW3v0JzWJg64BJXdBQ21+/b4zwMqRW5dA2h3I7+onYJd+Y4i3FbyMxz4hxE7hS2MBdSq6Fgq6Bny/dxv6Sk76COj6Yz91ZG8dToQ7oYNCqu4QjX9FK5UoPt/PXO701mruhwcxGP2ecahzzxBtUtlzLHclsXtBA6wc+a2brlUc8TCvg5cPM7LiaOPT8Y4ub3bpAbqy+MQ18xRmvIe5nr83YXDt8Nca0/GveWniSHByybEVwx1dD1ccYB/6yF8DTaGcYLFA391o6DjjohaWfKXQ/xCWazmhPDhNbYf2WH4fse9zhRUkLwrXlUD+9iVD5HR77KWheclxkqsZ1bM+pqcWZ2xVe0zXjPb6pyO8IK1l5trcA7mLKuo48+VpQG0BuPmZeTbs9Vi+9oQyqv6Ieyou4FybU+HqRS4o+TH1VG7MvgFFjvfguwFfA4FobmCxcnTPAAAAAElFTkSuQmCC";
            }

            const base64img = getBase64Img();
            function Base64ToImage(base64img, callback) {
                var img = new Image();
                img.onload = function() {
                    callback(img);
                };
                img.src = base64img;
            }

            return(
                <Fragment>
                    <div className="container">
                        <div className="barra-herramientas">
                            <label>
                                <button class="button-herramientas" onClick={() => changePenWidth(2)}><img src={lapiz} alt="Lápiz" title="Lápiz"/></button>

                                <button class="button-herramientas" onClick={undo}><img src={deshacer} alt="Borrar" title="Borrar"/></button>

                                <button class="button-herramientas" onClick={clear}><img src={borrar}  alt="Borrar pantalla" title="Borrar pantalla"/></button>

                                <button class="button-herramientas" onClick={() => download()}><img src={descargar} alt="Descargar dibujo" title="Descargar dibujo"/></button>
                            </label>
                        </div>
                    </div>

                    <div style={{height: 500, border: 'solid', borderColor: '#8F8F8F' }} ref={renderRef} onTouchEnd={handleChangeXML} onMouseLeave={handleChangeXML}/>

                    <div>
                        <img src={base64img}/>
                        {xml}
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