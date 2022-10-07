import React, {Component} from 'react';
import '../css/style.css';
import {createTheme, 
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core"
import siguiente from '../img/siguiente.png';
import anterior from '../img/anterior.png';

let theme=createTheme();
theme=responsiveFontSizes(theme);

export class ResultadosArbol extends Component {

    continuar = e => {
        e.preventDefault();
        this.props.siguiente();
    };

    regresar = e => {
        e.preventDefault();
        this.props.anterior();
    };
    render()
    {
        const { values, handleInputChange } = this.props;
        return(
            <MuiThemeProvider theme={theme}>
                <div className="container">
                    <div className="main row">
                        <div className="col-12">
                            <div className="container">
                                <div className="formulario">
                                    <div className="instrucciones">
                                        <div align="center">
                                            <Typography variant="h5" class="instrucciones">Interpretación-Dibujo de Árbol</Typography>
                                        </div>
                                    </div>
                                    <div className="preguntas">
                                        <div class="main row">
                                            <Typography variant="h5" gutterBottom>{"Rasgos normales"}</Typography>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">
                                                        {"Tiempo de 10-12 minutos, latencia menor que 30 minutos."}
                                                    </Typography></li> 
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r21" id="r21_s" value="1" onChange={handleInputChange('r21')} defaultValue={values.r21} checked />
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Sí</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r21" id="r21_n" value="0" onChange={handleInputChange('r21')} defaultValue={values.r21}/>
                                                        <label class="form-check-label" for="inlineRadio2">&nbsp; No</label>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">
                                                    Pocas borraduras</Typography></li> 
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r22" id="r22_s" value="1" onChange={handleInputChange('r22')} defaultValue={values.r22} checked />
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Sí</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r22" id="r22_n" onChange={handleInputChange('r22')} defaultValue={values.r22} value="0"/>
                                                        <label class="form-check-label" for="inlineRadio2">&nbsp; No</label>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Simetria</Typography></li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r23" id="r23_s" value="1" onChange={handleInputChange('r23')} defaultValue={values.r23} checked />
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Sí</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r23" id="r23_n" value="0" onChange={handleInputChange('r23')} defaultValue={values.r23}/>
                                                        <label class="form-check-label" for="inlineRadio2">&nbsp; No</label>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Líneas no esbozadas ni sobrenfatizadas.</Typography></li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r24" id="r24_s" value="1"  onChange={handleInputChange('r24')} defaultValue={values.r24}/>
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Sí</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r24" id="r24_n" value="0" onChange={handleInputChange('r24')} defaultValue={values.r24} checked/>
                                                        <label class="form-check-label" for="inlineRadio2">&nbsp; No</label>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Deficiencias aceptadas con humor</Typography></li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r25" id="r25_s" value="1" onChange={handleInputChange('r25')} defaultValue={values.r25} checked />
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Sí</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r25" id="r25_n" value="0" onChange={handleInputChange('r25')} defaultValue={values.r25}/>
                                                        <label class="form-check-label" for="inlineRadio2">&nbsp; No</label>
                                                    </div>
                                                </ul>
                                            </div>
                                            <Typography variant="h5" gutterBottom>Proporción</Typography>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Imagen/tamaño de la forma</Typography></li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r26" id="r26_s" value="1" onChange={handleInputChange('r26')} defaultValue={values.r21} checked />
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Grande</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r26" id="r26_n" value="0" onChange={handleInputChange('r26')} defaultValue={values.r21}/>
                                                        <label class="form-check-label" for="inlineRadio2">&nbsp; Pequeña</label>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Detalles en la imagen/símetria</Typography></li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r27" id="r16_x" value="1" onChange={handleInputChange('r27')} defaultValue={values.r27}/>
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Simetria excesiva</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r27" id="r27_y" value="0" onChange={handleInputChange('r27')} defaultValue={values.r27}/>
                                                        <label class="form-check-label" for="inlineRadio2">&nbsp; Obvias</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r27" id="r27_z" value="2" onChange={handleInputChange('r27')} defaultValue={values.r27}/>
                                                        <label class="form-check-label" for="inlineRadio3">&nbsp; Moderadas</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <label class="form-check-label" for="inlineRadio4">
                                                            Otros:</label>
                                                            <textarea class="form-control" name="r27" onChange={handleInputChange('r27')} defaultValue={values.r27}></textarea>
                                                    </div>
                                                </ul>
                                            </div>
                                            
                                            <Typography variant="h5" gutterBottom>Perspectiva</Typography>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Ubicación en la página</Typography></li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r28" id="r28_x" value="1" onChange={handleInputChange('r28')} defaultValue={values.r28}/>
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Izquierda</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r28" id="r28_y" value="0" onChange={handleInputChange('r28')} defaultValue={values.r28}/>
                                                        <label class="form-check-label" for="inlineRadio2">&nbsp; Derecha</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r28" id="r28_z" value="2" onChange={handleInputChange('r28')} defaultValue={values.r28}/>
                                                        <label class="form-check-label" for="inlineRadio3">&nbsp; Ubicación en la parte superior de la página</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r28" id="r28_w" value="3" onChange={handleInputChange('r28')} defaultValue={values.r28}/>
                                                        <label class="form-check-label" for="inlineRadio4">&nbsp; Ubicación en la porción superior izquierda</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r28" id="r28_v" value="4" onChange={handleInputChange('r28')} defaultValue={values.r28}/>
                                                        <label class="form-check-label" for="inlineRadio5">&nbsp; Ubicación en la porción inferior de la página</label>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Relación con el observador</Typography></li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r29" id="r29_x" value="1" onChange={handleInputChange('r29')} defaultValue={values.r29}/>
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Visto desde arriba</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r29" id="r29_y" value="0" onChange={handleInputChange('r29')} defaultValue={values.r29}/>
                                                        <label class="form-check-label" for="inlineRadio2">&nbsp; Visto desde abajo</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r29" id="r29_z" value="2" onChange={handleInputChange('r29')} defaultValue={values.r29}/>
                                                        <label class="form-check-label" for="inlineRadio3">&nbsp; Visto desde lejos</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r29" id="r29_w" value="3" onChange={handleInputChange('r29')} defaultValue={values.r29}/>
                                                        <label class="form-check-label" for="inlineRadio4">&nbsp; Presentación no frontal</label>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Línea base</Typography></li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r30" id="r30_x" value="1" onChange={handleInputChange('r30')} defaultValue={values.r30}/>
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Sí</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r30" id="r30_y" value="0" onChange={handleInputChange('r30')} defaultValue={values.r30}/>
                                                        <label class="form-check-label" for="inlineRadio2">&nbsp; No</label>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Transparencias</Typography></li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r31" id="r31_x" value="1" onChange={handleInputChange('r31')} defaultValue={values.r31}/>
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Sí</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r31" id="r31_y" value="0" onChange={handleInputChange('r31')} defaultValue={values.r31}/>
                                                        <label class="form-check-label" for="inlineRadio2">&nbsp; No</label>
                                                    </div>
                                                </ul>
                                            </div>
                                            <Typography variant="h5" gutterBottom>Detalles</Typography>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Excesivos</Typography></li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r32" id="r32_x" value="1" onChange={handleInputChange('r32')} defaultValue={values.r32}/>
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Sí</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r32" id="r32_y" value="0" onChange={handleInputChange('r32')} defaultValue={values.r32}/>
                                                        <label class="form-check-label" for="inlineRadio2">&nbsp; No</label>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Carencia</Typography></li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r33" id="r33_x" value="1" onChange={handleInputChange('r33')} defaultValue={values.r33}/>
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Sí</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r33" id="r33_y" value="0" onChange={handleInputChange('r33')} defaultValue={values.r33}/>
                                                        <label class="form-check-label" for="inlineRadio2">&nbsp; No</label>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Extravagantes</Typography></li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r34" id="r34_x" value="1" onChange={handleInputChange('r34')} defaultValue={values.r34}/>
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Sí</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r34" id="r34_y" value="0" onChange={handleInputChange('r34')} defaultValue={values.r34}/>
                                                        <label class="form-check-label" for="inlineRadio2">&nbsp; No</label>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Detalles esenciales</Typography></li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name="r35" id="r35_a" value="1" onChange={handleInputChange('r35')} defaultValue={values.r35}/>
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Ramas</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name="r35" id="r35_b" value="0" onChange={handleInputChange('r35')} defaultValue={values.r35}/>
                                                        <label class="form-check-label" for="inlineRadio2">&nbsp; Copa</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name="r35" id="r35_c" value="2" onChange={handleInputChange('r35')} defaultValue={values.r35}/>
                                                        <label class="form-check-label" for="inlineRadio3">&nbsp; Línea base</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name="r35" id="r35_d" value="3" onChange={handleInputChange('r35')} defaultValue={values.r35}/>
                                                        <label class="form-check-label" for="inlineRadio4">&nbsp; En forma de "ojo de cerradura" o "de Nigg"</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name="r35" id="r35_e" value="4" onChange={handleInputChange('r35')} defaultValue={values.r35}/>
                                                        <label class="form-check-label" for="inlineRadio5">&nbsp; Omisiones</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name="r35" id="r35_f" value="5" onChange={handleInputChange('r35')} defaultValue={values.r35}/>
                                                        <label class="form-check-label" for="inlineRadio6">&nbsp; Desgarramientos</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name="r35" id="r35_g" value="6" onChange={handleInputChange('r35')} defaultValue={values.r35}/>
                                                        <label class="form-check-label" for="inlineRadio7">&nbsp; Tronco</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <label class="form-check-label" for="inlineRadio8">
                                                            Tipo:</label>
                                                            <textarea class="form-control" name="r35" onChange={handleInputChange('r35')} defaultValue={values.r35}>
                                                        </textarea>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Detalles no esenciales</Typography></li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name="r36" id="r36_a" value="1" onChange={handleInputChange('r36')} defaultValue={values.r36}/>
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Corteza/enfatizada </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name="r36" id="r36_b" value="0" onChange={handleInputChange('r36')} defaultValue={values.r36}/>
                                                        <label class="form-check-label" for="inlineRadio2">&nbsp; Meticolusidad </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name="r36" id="r36_c" value="2" onChange={handleInputChange('r36')} defaultValue={values.r36}/>
                                                        <label class="form-check-label" for="inlineRadio3">&nbsp; Hojas/desprendidas </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name="r36" id="r36_d" value="3" onChange={handleInputChange('r36')} defaultValue={values.r36}/>
                                                        <label class="form-check-label" for="inlineRadio4">&nbsp; Grandes </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name="r36" id="r36_e" value="4" onChange={handleInputChange('r36')} defaultValue={values.r36}/>
                                                        <label class="form-check-label" for="inlineRadio5">&nbsp; Raíces/omitidas </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name="r36" id="r36_f" value="5" onChange={handleInputChange('r36')} defaultValue={values.r36}/>
                                                        <label class="form-check-label" for="inlineRadio6">&nbsp; Garras </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name="r36" id="r36_g" value="6" onChange={handleInputChange('r36')} defaultValue={values.r36}/>
                                                        <label class="form-check-label" for="inlineRadio7">&nbsp; Delgadas/transparentes/muertas </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name="r36" id="r36_h" value="7" onChange={handleInputChange('r36')} defaultValue={values.r36}/>
                                                        <label class="form-check-label" for="inlineRadio8">&nbsp; Enredaderas </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name="r36" id="r36_i" value="8" onChange={handleInputChange('r36')} defaultValue={values.r36}/>
                                                        <label class="form-check-label" for="inlineRadio9">&nbsp; Fruta </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <label class="form-check-label" for="inlineRadio10">
                                                            Otros:</label>
                                                            <textarea class="form-control" name="r36" onChange={handleInputChange('r36')} defaultValue={values.r36}>
                                                            </textarea>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Detalles irrelevantes</Typography></li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name="r37" id="r37_a" value="0"  onChange={handleInputChange('r37')} defaultValue={values.r37}/>
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Nubes, sombras </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <label class="form-check-label" for="inlineRadio2">
                                                            Otros:</label>
                                                            <textarea class="form-control" name="r37" onChange={handleInputChange('r37')} defaultValue={values.r37}>
                                                            </textarea>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Sombreado de los detalles</Typography></li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r38" id="r38_a" value="1"  onChange={handleInputChange('r38')} defaultValue={values.r38}/>
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Sí </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r38" id="r38_b" value="0"  onChange={handleInputChange('r38')} defaultValue={values.r38}/>
                                                        <label class="form-check-label" for="inlineRadio2">&nbsp; No </label>                  
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Calidad de la línea</Typography></li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r39" id="r39_a" value="1" onChange={handleInputChange('r39')} defaultValue={values.r39}/>
                                                        <label class="form-check-label" for="inlineRadio1">&nbsp; Recargada </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r39" id="r39_b" value="0" onChange={handleInputChange('r39')} defaultValue={values.r39}/>
                                                        <label class="form-check-label" for="inlineRadio2">&nbsp; Débil </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="r39" id="r39_c" value="2" onChange={handleInputChange('r39')} defaultValue={values.r39}/>
                                                        <label class="form-check-label" for="inlineRadio3">&nbsp; Fragmentada/díficultad con los ángulos </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <label class="form-check-label" for="inlineRadio4">
                                                            Otros: </label>
                                                            <textarea class="form-control" name="r39" onChange={handleInputChange('r39')} defaultValue={values.r39}>
                                                            </textarea>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Observaciones</Typography></li>
                                                    <div class="form-check">
                                                        <label class="form-check-label" for="inlineRadio1"></label>
                                                            <textarea class="form-control" name="r40" onChange={handleInputChange('r40')} defaultValue={values.r40}>
                                                            </textarea>
                                                    </div>
                                                </ul>
                                            </div>    
                                            <div className="main row">
                                                <div className="col-lg-10">                                 
                                                    <button class="button" onClick={this.regresar}><img src={anterior}/></button>
                                                </div>
                                                <div className="col-lg-1">
                                                    <button class="button"onClick={this.continuar}><img src={siguiente}/></button>
                                            </div>
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

}
export default ResultadosArbol;