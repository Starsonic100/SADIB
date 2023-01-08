import React, { Component, useEffect, useRef, Fragment, useCallback, useState  } from 'react';
import '../css/style.css';
import siguiente from '../img/siguiente.png';
import lapiz from '../img/lapiz2.png';
import deshacer from '../img/deshacer.png';
import borrar from '../img/borrar.png';
import descargar from '../img/descargar.png';
import finalizar from '../img/finalizado.png';
import Axios from "axios";
import * as tf from '@tensorflow/tfjs';
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
            const [lineWidth, setLineWidth] = useState(5);
            const [lineColor, setLineColor] = useState("black");
            const [lineOpacity, setLineOpacity] = useState(100);
            const [base,setBase] = useState("");
            var inMemCanvas = document.createElement('canvas');
            var inMemCtx = inMemCanvas.getContext('2d');

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
                ctx.lineWidth = 5;
                ctxRef.current = ctx;
                window.addEventListener('resize', resizeCanvas, false);
                window.addEventListener('deviceorientation', resizeCanvas,false);
            }, [lineColor, lineOpacity, lineWidth]);

            const dibujos=(page,x)=>{     
                this.props.guardarDibujos(page,x);
            }
                   
            function resizeCanvas() {
                let canvas=document.getElementById("canvas");
                ctxRef.current.width = ctxRef.current.offsetWidth;
                ctxRef.current.height = ctxRef.current.offsetHeight;
                ctxRef.current.drawImage(ctxRef, 0, 0);
                            
                ;
            }

            // Function for starting the drawing
            const startDrawing = (e) => {
                let canvas=document.getElementById("canvas");
                ctxRef.current.beginPath();
                if (e.type == 'touchstart'){
                    let elementRect = e.target.getBoundingClientRect();
                    ctxRef.current.moveTo(e.touches[0].clientX-elementRect.left, e.touches[0].clientY-elementRect.top);
                  }
                else if(e.type=="mousedown"){
                ctxRef.current.moveTo(
                e.nativeEvent.offsetX,
                e.nativeEvent.offsetY
                );
            }
                setIsDrawing(true);
            };

            // Function for ending the drawing
            const endDrawing = () => {
                ctxRef.current.closePath();
                setIsDrawing(false);
            };

            const draw = (e) => {
                let canvas=document.getElementById("canvas");
                if (!isDrawing) {
                return;
                }
                e.preventDefault();
                if (e.type == 'touchmove'){
                    let elementRect = e.target.getBoundingClientRect();
                    ctxRef.current.lineTo(e.touches[0].clientX- elementRect.left, e.touches[0].clientY-elementRect.top);
                    ctxRef.current.stroke();
                  } else if (e.type == 'mousemove'){
                ctxRef.current.lineTo(
                e.nativeEvent.offsetX,
                e.nativeEvent.offsetY
                
                );
                ctxRef.current.stroke();
            }};

            const setToDraw = () =>{
                let canvas=document.getElementById("canvas");
                let context=canvas.getContext("2d");
                context.globalAlpha = 100;
                context.strokeStyle = "black";
                context.lineWidth = 5;
            }

            const setToErase = () =>{
                let canvas=document.getElementById("canvas");
                let context=canvas.getContext("2d");
                context.globalAlpha = 100;
                context.strokeStyle = "white";
                context.lineWidth = 20;
            }

            const setToClear = () =>{
                let canvas=document.getElementById("canvas");
                let context=canvas.getContext("2d");
                context.clearRect(0,0,canvas.width,canvas.height);
                context.fillStyle = "white";
                context.fillRect(0, 0, canvas.width, canvas.height);
            }

            const setToDownload = () =>{
                let resizedCanvas = document.createElement("canvas");
                let resizedContext = resizedCanvas.getContext("2d");

                resizedCanvas.height = "250";
                resizedCanvas.width = "250";

                let canvas=document.getElementById("canvas");
                
                resizedContext.drawImage(canvas, 0, 0, 250, 250);
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

            const uploadFile = () => {
                let resizedCanvas = document.createElement("canvas");
                let resizedContext = resizedCanvas.getContext("2d");
                resizedCanvas.height = "250";
                resizedCanvas.width = "250";
                let canvas=document.getElementById("canvas");
                resizedContext.drawImage(canvas, 0, 0, 250, 250);
                let dibujoB = resizedCanvas.toDataURL();
                let dibujo = dataURItoBlob(dibujoB);
                let fd = new FormData(document.forms[0]);
                predecir();
                fd.append('dibujo', dibujo);
                Axios({
                    url: 'http://54.144.147.250:3001/dibujoCasa',
                    method: "POST",
                    data: fd,
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                })
                
            };

            function predecir() {
                let resizedCanvas = document.createElement("canvas");
                let resizedContext = resizedCanvas.getContext("2d");
                resizedCanvas.height = "250";
                resizedCanvas.width = "250";
                let canvas=document.getElementById("canvas");
                resizedContext.drawImage(canvas, 0, 0, 250, 250);
                dibujos('bDc',canvas.toDataURL());
                //Pasar canvas a version 250x250
                resample_single(canvas, 250, 250, resizedCanvas);
                var imgData = resizedContext.getImageData(0,0,250,250);
                
                var arr = []; //El arreglo completo ya que se espera la imagen cuadrada
                var arr250 = []; //Al llegar a 250 posiciones se pone en 'arr' como un nuevo indice
                for (var p=0; p < imgData.data.length; p+=4) {
                    //Normalizamos el valor
                    var valor = imgData.data[p]/255;
                    arr250.push([valor]); //Agregar al arr250 y normalizar a 0-1. Aparte queda dentro de un arreglo en el indice 0.
                    if (arr250.length == 250) {
                        arr.push(arr250);
                        arr250 = [];
                    }
                }
                arr = [arr]; //Meter el arreglo en otro arreglo
                
                Axios.post("http://54.144.147.250:3001/analisisCasa", {
                    arreglo: arr
                  })
                .then((response) =>{
                // console.log(response);
                    console.log(response.data);
                    dibujos('rDc',response.data); 
                })
                .catch((error)=> {
                    console.log(error)
                });
            }

            function resample_single(canvas, width, height, resize_canvas) {
                var width_source = canvas.width;
                var height_source = canvas.height;
                width = Math.round(width);
                height = Math.round(height);
    
                var ratio_w = width_source / width;
                var ratio_h = height_source / height;
                var ratio_w_half = Math.ceil(ratio_w / 2);
                var ratio_h_half = Math.ceil(ratio_h / 2);
    
                var ctx = canvas.getContext("2d");
                var ctx2 = resize_canvas.getContext("2d");
                var img = ctx.getImageData(0, 0, width_source, height_source);
                var img2 = ctx2.createImageData(width, height);
                var data = img.data;
                var data2 = img2.data;
    
                for (var j = 0; j < height; j++) {
                    for (var i = 0; i < width; i++) {
                        var x2 = (i + j * width) * 4;
                        var weight = 0;
                        var weights = 0;
                        var weights_alpha = 0;
                        var gx_r = 0;
                        var gx_g = 0;
                        var gx_b = 0;
                        var gx_a = 0;
                        var center_y = (j + 0.5) * ratio_h;
                        var yy_start = Math.floor(j * ratio_h);
                        var yy_stop = Math.ceil((j + 1) * ratio_h);
                        for (var yy = yy_start; yy < yy_stop; yy++) {
                            var dy = Math.abs(center_y - (yy + 0.5)) / ratio_h_half;
                            var center_x = (i + 0.5) * ratio_w;
                            var w0 = dy * dy; //pre-calc part of w
                            var xx_start = Math.floor(i * ratio_w);
                            var xx_stop = Math.ceil((i + 1) * ratio_w);
                            for (var xx = xx_start; xx < xx_stop; xx++) {
                                var dx = Math.abs(center_x - (xx + 0.5)) / ratio_w_half;
                                var w = Math.sqrt(w0 + dx * dx);
                                if (w >= 1) {
                                    //pixel too far
                                    continue;
                                }
                                //hermite filter
                                weight = 2 * w * w * w - 3 * w * w + 1;
                                var pos_x = 4 * (xx + yy * width_source);
                                //alpha
                                gx_a += weight * data[pos_x + 3];
                                weights_alpha += weight;
                                //colors
                                if (data[pos_x + 3] < 255)
                                    weight = weight * data[pos_x + 3] / 250;
                                gx_r += weight * data[pos_x];
                                gx_g += weight * data[pos_x + 1];
                                gx_b += weight * data[pos_x + 2];
                                weights += weight;
                            }
                        }
                        data2[x2] = gx_r / weights;
                        data2[x2 + 1] = gx_g / weights;
                        data2[x2 + 2] = gx_b / weights;
                        data2[x2 + 3] = gx_a / weights_alpha;
                    }
                }
    
                for (var p=0; p < data2.length; p += 4) {
                    var gris = data2[p]; 
    
                    if (gris < 100) {
                        gris = 0; 
                    } else {
                        gris = 255;
                    }
    
                    data2[p] = gris;
                    data2[p+1] = gris;
                    data2[p+2] = gris;
                }
    
    
                ctx2.putImageData(img2, 0, 0);
            }

            return(
                <Fragment>
                    <div style={{height: 510, border: 'solid', borderColor: '#8F8F8F', touchAction:'none'}}>
                        <div className='draw-area' style={{height: 500, cursor:'pointer'}}>
                            <canvas id='canvas'
                            onMouseDown={startDrawing}
                            onMouseUp={endDrawing}
                            onMouseMove={draw}
                            onTouchStart={startDrawing}
                            onTouchEnd={endDrawing}
                            onTouchMove={draw}
                            ref={canvasRef}/>
                        </div>
                    </div>

                    <div className="container">
                        <div align="center">
                            <div className="barra-herramientas">
                                <button class="button-herramientas" onClick={setToDraw}><img src={lapiz} alt="Lápiz" title="Lápiz"/></button>

                                <button class="button-herramientas" onClick={setToErase}><img src={deshacer} alt="Borrar" title="Borrar"/></button>

                                <button class="button-herramientas" onClick={setToClear}><img src={borrar}  alt="Borrar pantalla" title="Borrar pantalla"/></button>

                                <button class="button-herramientas" onClick={setToDownload}><img src={descargar} alt="Descargar dibujo" title="Descargar dibujo"/></button>

                                <button class="button-herramientas" onClick={() =>{uploadFile();}}><img src={finalizar} alt="Finalizar dibujo" title="Finalizar dibujo"/></button>
                            </div>
                        </div>
                    </div> 
                </Fragment>
            )
        }

        return(
            <div className="container">
                {/* Comienza sección de preguntas*/}
                <div className="main-row">
                    <div className="col-12">
                        <div className="container">
                            <div className="formulario">
                                {/* Comienza div de instrucciones*/}
                                <div className="instrucciones">
                                    <div align="center">
                                        {/*
                                        <MuiThemeProvider theme={theme}>
                                            <Typography variant="h5" class="instrucciones">{"Realiza un dibujo que contenga una casa, un árbol y una persona"}</Typography>
                                        </MuiThemeProvider>
                                        */}
                                        <MuiThemeProvider theme={theme}>
                                            <Typography variant="h5" class="instrucciones">{"Realiza el dibujo de una casa. Al terminar da clic en el botón "}<img src={finalizar} alt="Finalizar dibujo" title="Finalizar dibujo" width="2%"/></Typography>
                                        </MuiThemeProvider>
                                    </div>
                                </div>
                                {/*Termina div de instrucciones*/}
    
                                {/* Comienza div de preguntas*/}  
                                <div className="preguntas">
                                    
                                    <div className="dibujo">
                                        <Drawing setBase={values.p0}/>
                                    </div>
                                    
                                    <div className="main-row">
                                        <div className="col-lg-11">
                                            <button class="button" onClick={this.continuar} id="continuar"><img src={siguiente}/></button>
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