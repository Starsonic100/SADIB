import React, { Component, useEffect, useRef, Fragment, useCallback, useState } from 'react';
import '../css/style.css';
import siguiente from '../img/siguiente.png';
import lapiz from '../img/lapiz2.png';
import deshacer from '../img/deshacer.png';
import borrar from '../img/borrar.png';
import descargar from '../img/descargar.png';
import finalizar from '../img/finalizado.png'
import Axios from "axios";
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export class Dibujo extends Component {

    continuar = e => {
        e.preventDefault();
        this.props.siguiente();
    };

    render(){   
        const {values, handleInputChange} = this.props;     
        const Drawing = () => {
            const canvasRef = useRef(null);
            const ctxRef = useRef(null);
            const [isDrawing, setIsDrawing] = useState(false);
            const [lineWidth, setLineWidth] = useState(2.5);
            const [lineColor, setLineColor] = useState("black");
            const [lineOpacity, setLineOpacity] = useState(100);
            const [base,setBase] = useState("");

            useEffect(() => {
                const canvas = canvasRef.current;
                canvas.style.width = "100%";
                canvas.style.height = "100%";
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
                const ctx = canvas.getContext("2d");
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.globalAlpha = lineOpacity;
                ctx.strokeStyle = lineColor;
                ctx.lineWidth = lineWidth;
                ctxRef.current = ctx;
            }, [lineColor, lineOpacity, lineWidth]);

            // Function for starting the drawing
            const startDrawing = (e) => {
                ctxRef.current.beginPath();
                ctxRef.current.moveTo(
                e.nativeEvent.offsetX,
                e.nativeEvent.offsetY
                );
                setIsDrawing(true);
            };

            // Function for ending the drawing
            const endDrawing = () => {
                ctxRef.current.closePath();
                setIsDrawing(false);
            };

            const draw = (e) => {
                if (!isDrawing) {
                return;
                }
                ctxRef.current.lineTo(
                e.nativeEvent.offsetX,
                e.nativeEvent.offsetY
                );
                
                ctxRef.current.stroke();
            };

            const setToDraw = () =>{
                ctxRef.current.globalCompositeOperation = 'source-over';
            }

            const setToErase = () =>{
                ctxRef.current.globalCompositeOperation = 'destination-out';
            }
            const setToClear = () =>{
                let canvas=document.getElementById("canvas");
                let context=canvas.getContext("2d");
                context.clearRect(0,0,canvas.width,canvas.height);
            }


            const setToDownload = () =>{
                let resizedCanvas = document.createElement("canvas");
                let resizedContext = resizedCanvas.getContext("2d");

                resizedCanvas.height = "500";
                resizedCanvas.width = "500";

                let canvas=document.getElementById("canvas");
                
                resizedContext.drawImage(canvas, 0, 0, 500, 500);
                let image = resizedCanvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
                let link = document.createElement('a');
                link.download = "my-image.png";
                link.href = image;
                link.click();
             
            };

            function dataURItoBlob(dataURI) {
                let binary = atob(dataURI.split(',')[1]);
                let array = [];
                for(let i = 0; i < binary.length; i++) {
                    array.push(binary.charCodeAt(i));
                }
                return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
            }
            
            
            const uploadFile =() => {
                let resizedCanvas = document.createElement("canvas");
                let resizedContext = resizedCanvas.getContext("2d");
                resizedCanvas.height = "500";
                resizedCanvas.width = "500";
                let canvas=document.getElementById("canvas");
                resizedContext.drawImage(canvas, 0, 0, 500, 500);
                let dibujoB = resizedCanvas.toDataURL();
                let dibujo = dataURItoBlob(dibujoB);
                let fd = new FormData(document.forms[0]);
                fd.append('dibujo', dibujo);
                Axios({
                    url: 'http://localhost:3001/dibujo',
                    method: "POST",
                    data: fd,
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                })
                
            };

            return(  
                <Fragment>     
                        <div className="barra-herramientas">
                                <button class="button-herramientas" onClick={setToDraw}><img src={lapiz} alt="Lapiz" title="Lapiz"/></button>
                                <button class="button-herramientas" onClick={setToErase}><img src={deshacer} alt="Borrar" title="Borrar"/></button>
                                <button class="button-herramientas" onClick={setToClear}><img src={borrar}  alt="Borrar pantalla" title="Borrar pantalla"/></button>
                                <button class="button-herramientas" onClick={setToDownload}><img src={descargar} alt="Descargar dibujo" title="Descargar dibujo"/></button>
                                <button class="button-herramientas" onClick={uploadFile}><img src={finalizar} alt="Finalizar dibujo" title="Finalizar dibujo"/></button>
                        </div>
                        <div className='draw-area' >
                            <canvas id='canvas'
                            onMouseDown={startDrawing}
                            onMouseUp={endDrawing}
                            onMouseMove={draw}
                            onTouchStart={startDrawing}
                            onTouchEnd={endDrawing}
                            onTouchMove={draw}
                            ref={canvasRef}
                            />
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
                                    <div className="main row">
                                        <div className="dibujo">
                                            <Drawing setBase={values.p0}/>
                                        </div>
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