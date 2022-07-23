import React, {Component} from 'react';
import '../css/App.css';
import {createTheme, 
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core"
import siguiente from '../img/siguiente.png';
import anterior from '../img/anterior.png';

let theme=createTheme();
theme=responsiveFontSizes(theme);

export class ResultadosPersona extends Component {

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
                    <div className="main-row">
                        <div className="col-12">
                            <div className="container">
                                <div className="formulario">     
                                    <div className="instrucciones">
                                        <div align="center">
                                            <Typography variant="h5" class="instrucciones">Interpretación-Dibujo de Persona</Typography>
                                        </div>
                                    </div>                            
                                    <div className="preguntas">
                                        <div class="main-row">                      
                                            <Typography variant="h5" gutterBottom>{"Rasgos normales"}</Typography>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <Typography variant="h6" class="tamai">
                                                        <li>{"Tiempo de 10-12 minutos, latencia menor que 30 minutos."}
                                                        </li></Typography> 
                                                    <Typography variant="h6" gutterBottom class="form-check">
                                                        <div class="form-check">
                                                            <label class="form-check-label" for="inlineRadio1"><br/>
                                                                <input class="form-check-input" type="radio" name="r41" id="r41_s" value="1" onChange={handleInputChange('r41')} defaultValue={values.r41} checked />
                                                            &nbsp; Sí</label>
                                                            <label class="form-check-label" for="inlineRadio2">  <br/>
                                                            <input class="form-check-input" type="radio" name="r41" id="r41_n" value="0" onChange={handleInputChange('r41')} defaultValue={values.r41}/>
                                                        &nbsp; No</label>
                                                        </div>
                                                    </Typography>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <Typography variant="h6" gutterBottom class="tamai">
                                                        <li>Pocas borraduras</li></Typography> 
                                                    <div class="form-check">
                                                        <Typography variant="h6" gutterBottom class="form-check">
                                                            <label class="form-check-label" for="inlineRadio1"><br/>
                                                                <input class="form-check-input" type="radio" name="r42" id="r42_s" value="1" onChange={handleInputChange('r42')} defaultValue={values.r42} checked />
                                                                &nbsp; Sí</label>
                                                            <label class="form-check-label" for="inlineRadio2"><br/>
                                                                <input class="form-check-input" type="radio" name="r42" id="r42_n" value="0" onChange={handleInputChange('r42')} defaultValue={values.r42}/>
                                                            &nbsp; No</label>
                                                        </Typography>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Simetria</Typography></li>
                                                    <div class="form-check">
                                                        <Typography variant="h6" gutterBottom class="form-check">
                                                            <label class="form-check-label" for="inlineRadio1"><br/>
                                                                <input class="form-check-input" type="radio" name="r43" id="r43_s" value="1" onChange={handleInputChange('r43')} defaultValue={values.r43} checked />
                                                                &nbsp; Sí</label>
                                                            <label class="form-check-label" for="inlineRadio2">  <br/>
                                                                <input class="form-check-input" type="radio" name="r43" id="r43_n" value="0" onChange={handleInputChange('r43')} defaultValue={values.r43}/>
                                                            &nbsp; No</label>
                                                        </Typography>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Líneas no esbozadas ni sobrenfatizadas.</Typography></li>
                                                    <div class="form-check">
                                                        <Typography variant="h6" gutterBottom class="form-check">
                                                            <label class="form-check-label" for="inlineRadio1"><br/>
                                                                <input class="form-check-input" type="radio" name="r44" id="r44_s" value="1" onChange={handleInputChange('r44')} defaultValue={values.r44}/>
                                                                &nbsp; Sí</label>
                                                            <label class="form-check-label" for="inlineRadio2">  <br/>
                                                                <input class="form-check-input" type="radio" name="r44" id="r44_n" value="0" onChange={handleInputChange('r44')} defaultValue={values.r44} checked/>
                                                            &nbsp; No</label>
                                                        </Typography>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Deficiencias aceptadas con humor</Typography></li>
                                                    <div class="form-check">
                                                        <Typography variant="h6" gutterBottom class="form-check">
                                                            <label class="form-check-label" for="inlineRadio1"><br/>
                                                                <input class="form-check-input" type="radio" name="r45" id="r45_s" value="1" onChange={handleInputChange('r45')} defaultValue={values.r45}  checked />
                                                                &nbsp; Sí</label>
                                                            <label class="form-check-label" for="inlineRadio2">  <br/>
                                                                <input class="form-check-input" type="radio" name="r45" id="r45_n" value="0" onChange={handleInputChange('r45')} defaultValue={values.r45} />
                                                                &nbsp; No</label>
                                                        </Typography>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Se dibujó primero una persona 
                                                    del mismo sexo y fue más elaborado</Typography></li>
                                                    <div class="form-check">
                                                        <Typography variant="h6" gutterBottom class="form-check">
                                                            <label class="form-check-label" for="inlineRadio1"><br/>
                                                                <input class="form-check-input" type="radio" name="r46" id="r46_s" value="1" onChange={handleInputChange('r46')} defaultValue={values.r46}  checked />
                                                                &nbsp; Sí</label>
                                                            <label class="form-check-label" for="inlineRadio2">  <br/>
                                                                <input class="form-check-input" type="radio" name="r46" id="r46_n" value="0" onChange={handleInputChange('r46')} defaultValue={values.r46} />
                                                                &nbsp; No</label>
                                                        </Typography>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Características sexuales secundarias
                                                    incluidas en adultos</Typography></li>
                                                    <div class="form-check">
                                                        <Typography variant="h6" gutterBottom class="form-check">
                                                            <label class="form-check-label" for="inlineRadio1"><br/>
                                                                <input class="form-check-input" type="radio" name="r47" id="r47_s" value="1" checked onChange={handleInputChange('r47')} defaultValue={values.r47} />
                                                                &nbsp; Sí</label>
                                                            <label class="form-check-label" for="inlineRadio2">  <br/>
                                                                <input class="form-check-input" type="radio" name="r47" id="r47_n" value="0" onChange={handleInputChange('r47')} defaultValue={values.r47} />
                                                                &nbsp; No</label>
                                                        </Typography>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Pupilas dibujadas</Typography></li>
                                                    <div class="form-check">
                                                        <Typography variant="h6" gutterBottom class="form-check">
                                                            <label class="form-check-label" for="inlineRadio1"><br/>
                                                                <input class="form-check-input" type="radio" name="r48" id="r48_s" value="1" checked onChange={handleInputChange('r48')} defaultValue={values.r48} />
                                                                &nbsp; Sí</label>
                                                            <label class="form-check-label" for="inlineRadio2">  <br/>
                                                                <input class="form-check-input" type="radio" name="r48" id="r48_n" value="0" onChange={handleInputChange('r48')} defaultValue={values.r48} />
                                                                &nbsp; No</label>
                                                        </Typography>
                                                    </div>  
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Nariz sin orificios</Typography></li>
                                                    <div class="form-check">
                                                        <Typography variant="h6" gutterBottom class="form-check">
                                                            <label class="form-check-label" for="inlineRadio1"><br/>
                                                                <input class="form-check-input" type="radio" name="r49" id="r49_s" value="1" onChange={handleInputChange('r49')} defaultValue={values.r49} checked/>
                                                                &nbsp; Sí</label>
                                                            <label class="form-check-label" for="inlineRadio2">  <br/>
                                                                <input class="form-check-input" type="radio" name="r49" id="r49_n" value="0" onChange={handleInputChange('r49')} defaultValue={values.r49} />
                                                                &nbsp; No</label>
                                                        </Typography>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Ropa y cinturón indicados</Typography></li>
                                                    <div class="form-check">
                                                    <Typography variant="h6" gutterBottom class="form-check">
                                                        <label class="form-check-label" for="inlineRadio1"><br/>
                                                            <input class="form-check-input" type="radio" name="r50" id="r50_s" value="1" onChange={handleInputChange('r50')} defaultValue={values.r50} checked />
                                                            &nbsp; Sí</label>
                                                        <label class="form-check-label" for="inlineRadio2">  <br/>
                                                        <input class="form-check-input" type="radio" name="r50" id="r50_n" value="0" onChange={handleInputChange('r50')} defaultValue={values.r50}/>
                                                            &nbsp; No</label>
                                                            </Typography>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Pies y orejas</Typography></li>
                                                    <div class="form-check">
                                                        <Typography variant="h6" gutterBottom class="form-check">
                                                            <label class="form-check-label" for="inlineRadio1"><br/>
                                                                <input class="form-check-input" type="radio" name="r51" id="r51_s" value="1" onChange={handleInputChange('r51')} defaultValue={values.r51} checked />
                                                                &nbsp; Sí</label>
                                                            <label class="form-check-label" for="inlineRadio2">  <br/>
                                                                <input class="form-check-input" type="radio" name="r51" id="r51_n" value="0" onChange={handleInputChange('r51')} defaultValue={values.r51}/>
                                                                &nbsp; No</label>
                                                        </Typography>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <ul class="tamai">
                                                    <li><Typography variant="h6" gutterBottom class="tamai">Solamente omisiones menores</Typography></li>
                                                    <div class="form-check">
                                                        <Typography variant="h6" gutterBottom class="form-check">
                                                            <label class="form-check-label" for="inlineRadio1"><br/>
                                                                <input class="form-check-input" type="radio" name="r52" id="r52_s" value="1" onChange={handleInputChange('r52')} defaultValue={values.r52} checked />
                                                                &nbsp; Sí</label>
                                                            <label class="form-check-label" for="inlineRadio2">  <br/>
                                                                <input class="form-check-input" type="radio" name="r52" id="r52_n" value="0" onChange={handleInputChange('r52')} defaultValue={values.r52}/>
                                                                &nbsp; No</label>
                                                        </Typography>
                                                    </div>
                                                </ul>
                                            </div>
                                         <Typography variant="h5" gutterBottom>Proporción</Typography>
                                         <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Imagen/tamaño de la forma</Typography></li>
                                                <div class="form-check">
                                                    <Typography variant="h6" gutterBottom class="form-check">
                                                        <label class="form-check-label" for="inlineRadio1"><br/>
                                                            <input class="form-check-input" type="radio" name="r53" id="53_s" value="1" onChange={handleInputChange('r53')} defaultValue={values.r53} checked />
                                                            &nbsp; Grande</label>
                                                        <label class="form-check-label" for="inlineRadio2">  <br/>
                                                            <input class="form-check-input" type="radio" name="r53" id="r53_n" value="0" onChange={handleInputChange('r53')} defaultValue={values.r53}/>
                                                            &nbsp; Pequeña</label>
                                                    </Typography>
                                                </div>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Detalles en la imagen/símetria</Typography></li>
                                                <div class="form-check">
                                                    <Typography variant="h6" gutterBottom class="form-check">
                                                        <label class="form-check-label" for="inlineRadio1"><br/>
                                                            <input class="form-check-input" type="radio" name="r54" id="r54_x" value="1" onChange={handleInputChange('r54')} defaultValue={values.r54}/>
                                                            &nbsp; Simetria excesiva</label>
                                                        <label class="form-check-label" for="inlineRadio2">  <br/>
                                                            <input class="form-check-input" type="radio" name="r54" id="r54_y" value="0" onChange={handleInputChange('r54')} defaultValue={values.r54}/>
                                                            &nbsp; Asimetría</label>
                                                        <label class="form-check-label" for="inlineRadio3">  <br/>
                                                            <input class="form-check-input" type="radio" name="r54" id="r54_z" value="2" onChange={handleInputChange('r54')} defaultValue={values.r54}/>
                                                            &nbsp; Obvias</label>
                                                        <label class="form-check-label" for="inlineRadio4">  <br/>
                                                            <input class="form-check-input" type="radio" name="r54" id="r54_w" value="3" onChange={handleInputChange('r54')} defaultValue={values.r54}/>
                                                            &nbsp; Moderadas</label>
                                                        <label class="form-check-label" for="inlineRadio5">
                                                            <br/>Otros:
                                                            <textarea class="form-control" name="r54" onChange={handleInputChange('r54')} defaultValue={values.r54}></textarea></label>
                                                    </Typography>
                                                </div>
                                            </ul>
                                        </div>
                                        <Typography variant="h5" gutterBottom>Perspectiva</Typography>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Ubicación en la página</Typography></li>
                                                <div class="form-check">
                                                    <Typography variant="h6" gutterBottom class="form-check">
                                                        <label class="form-check-label" for="inlineRadio1"><br/>
                                                            <input class="form-check-input" type="radio" name="r55" id="r55_x" value="1" onChange={handleInputChange('r55')} defaultValue={values.r55}/>
                                                            &nbsp; Izquierda</label>
                                                        <label class="form-check-label" for="inlineRadio2">  <br/>
                                                            <input class="form-check-input" type="radio" name="r55" id="r55_y" value="0" onChange={handleInputChange('r55')} defaultValue={values.r55}/>
                                                            &nbsp; Derecha</label>
                                                        <label class="form-check-label" for="inlineRadio3">  <br/>
                                                            <input class="form-check-input" type="radio" name="r55" id="r55_z" value="2" onChange={handleInputChange('r55')} defaultValue={values.r55}/>
                                                            &nbsp; Ubicación en la parte superior de la página</label>
                                                        <label class="form-check-label" for="inlineRadio4"><br/>
                                                            <input class="form-check-input" type="radio" name="r55" id="r55_w" value="3" onChange={handleInputChange('r55')} defaultValue={values.r55}/>
                                                            &nbsp; Ubicación en la porción superior izquierda</label>
                                                        <label class="form-check-label" for="inlineRadio5"><br/>
                                                            <input class="form-check-input" type="radio" name="r55" id="r55_v" value="4" onChange={handleInputChange('r55')} defaultValue={values.r55}/>
                                                            &nbsp; Ubicación en la porción inferior de la página</label>
                                                    </Typography>
                                                </div>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Relación con el observador</Typography></li>
                                                <div class="form-check">
                                                    <Typography variant="h6" gutterBottom class="form-check">
                                                        <label class="form-check-label" for="inlineRadio1"><br/>
                                                            <input class="form-check-input" type="radio" name="r56" id="r56_a" value="1" onChange={handleInputChange('r56')} defaultValue={values.r56}/>
                                                            &nbsp; Visto desde arriba</label>
                                                        <label class="form-check-label" for="inlineRadio2">  <br/>
                                                            <input class="form-check-input" type="radio" name="r56" id="r56_b" value="0" onChange={handleInputChange('r56')} defaultValue={values.r56}/>
                                                            &nbsp; Visto desde abajo</label>
                                                        <label class="form-check-label" for="inlineRadio3">  <br/>
                                                            <input class="form-check-input" type="radio" name="r56" id="r56_c" value="2" onChange={handleInputChange('r56')} defaultValue={values.r56}/>
                                                            &nbsp; A la distancia</label>
                                                        <label class="form-check-label" for="inlineRadio4"><br/>
                                                            <input class="form-check-input" type="radio" name="r56" id="r56_d" value="3" onChange={handleInputChange('r56')} defaultValue={values.r56}/>
                                                            &nbsp; Completamente de perfil o de espaldas</label>
                                                        <label class="form-check-label" for="inlineRadio5"><br/>
                                                            <input class="form-check-input" type="radio" name="r56" id="r56_e" value="4" onChange={handleInputChange('r56')} defaultValue={values.r56}/>
                                                            &nbsp; Postura grotesca</label>
                                                        <label class="form-check-label" for="inlineRadio6"><br/>
                                                        <input class="form-check-input" type="radio" name="r56" id="r56_f" value="5" onChange={handleInputChange('r56')} defaultValue={values.r56}/>
                                                        &nbsp; Mezcla de perfil con vista de frente</label>
                                                    </Typography>
                                                </div>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                            <li><Typography variant="h6" gutterBottom class="tamai">Línea base</Typography></li>
                                                <div class="form-check">
                                                    <Typography variant="h6" gutterBottom class="form-check">
                                                        <label class="form-check-label" for="inlineRadio1"><br/>
                                                            <input class="form-check-input" type="radio" name="r57" id="r57_x" value="1" onChange={handleInputChange('r57')} defaultValue={values.r57}/>
                                                            &nbsp; Sí</label>
                                                        <label class="form-check-label" for="inlineRadio2">  <br/>
                                                            <input class="form-check-input" type="radio" name="r57" id="r57_y" value="0" onChange={handleInputChange('r57')} defaultValue={values.r57}/>
                                                            &nbsp; No</label>
                                                    </Typography>
                                                </div>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Transparencias</Typography></li>
                                                <div class="form-check">
                                                    <Typography variant="h6" gutterBottom class="form-check">
                                                        <label class="form-check-label" for="inlineRadio1"><br/>
                                                            <input class="form-check-input" type="radio" name="r58" id="r58_x" value="1" onChange={handleInputChange('r58')} defaultValue={values.r58}/>
                                                            &nbsp; Sí</label>
                                                        <label class="form-check-label" for="inlineRadio2">  <br/>
                                                            <input class="form-check-input" type="radio" name="r58" id="r58_y" value="0" onChange={handleInputChange('r58')} defaultValue={values.r58}/>
                                                            &nbsp; No</label>
                                                    </Typography>
                                                </div>
                                            </ul>
                                        </div>
                                        <Typography variant="h5" gutterBottom>Detalles</Typography>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Excesivos</Typography></li>
                                                <div class="form-check">
                                                    <Typography variant="h6" gutterBottom class="form-check">
                                                        <label class="form-check-label" for="inlineRadio1"><br/>
                                                            <input class="form-check-input" type="radio" name="r59" id="r59_x" value="1" onChange={handleInputChange('r59')} defaultValue={values.r59}/>
                                                            &nbsp; Sí</label>
                                                        <label class="form-check-label" for="inlineRadio2">  <br/>
                                                            <input class="form-check-input" type="radio" name="r59" id="r59_y" value="0" onChange={handleInputChange('r59')} defaultValue={values.r59}/>
                                                            &nbsp; No</label>
                                                    </Typography>
                                                </div>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Carencia</Typography></li>
                                                <div class="form-check">
                                                    <Typography variant="h6" gutterBottom class="form-check">
                                                        <label class="form-check-label" for="inlineRadio1"><br/>
                                                            <input class="form-check-input" type="radio" name="r60" id="r60_x" value="1" onChange={handleInputChange('r60')} defaultValue={values.r60}/>
                                                            &nbsp; Sí</label>
                                                        <label class="form-check-label" for="inlineRadio2">  <br/>
                                                            <input class="form-check-input" type="radio" name="r60" id="r60_y" value="0" onChange={handleInputChange('r60')} defaultValue={values.r60}/>
                                                            &nbsp; No</label>
                                                    </Typography>
                                                </div>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Extravagantes</Typography></li>
                                                <div class="form-check">
                                                    <Typography variant="h6" gutterBottom class="form-check">
                                                        <label class="form-check-label" for="inlineRadio1"><br/>
                                                            <input class="form-check-input" type="radio" name="r61" id="r61_x" value="1" onChange={handleInputChange('r61')} defaultValue={values.r61}/>
                                                            &nbsp; Sí</label>
                                                        <label class="form-check-label" for="inlineRadio2">  <br/>
                                                            <input class="form-check-input" type="radio" name="r61" id="r61_y" value="0" onChange={handleInputChange('r61')} defaultValue={values.r61}/>
                                                            &nbsp; No</label>
                                                    </Typography>
                                                </div>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Detalles esenciales</Typography></li>
                                                <div class="form-check">
                                                    <Typography variant="h6" gutterBottom class="form-check">
                                                        <label class="form-check-label" for="inlineRadio1"><br/>
                                                            <input class="form-check-input" type="checkbox" name="r62" id="r62_a" value="1" onChange={handleInputChange('r62')} defaultValue={values.r62}/>
                                                            &nbsp; Brazos</label>
                                                        <label class="form-check-label" for="inlineRadio2">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r62" id="r62_b" value="0" onChange={handleInputChange('r62')} defaultValue={values.r62}/>
                                                            &nbsp; Cabeza</label>
                                                        <label class="form-check-label" for="inlineRadio3">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r62" id="r62_c" value="2" onChange={handleInputChange('r62')} defaultValue={values.r62}/>
                                                            &nbsp; Rasgos faciales</label>
                                                        <label class="form-check-label" for="inlineRadio4">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r62" id="r62_d" value="3" onChange={handleInputChange('r62')} defaultValue={values.r62}/>
                                                            &nbsp; Ojos</label>
                                                        <label class="form-check-label" for="inlineRadio5">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r62" id="r62_e" value="4" onChange={handleInputChange('r62')} defaultValue={values.r62}/>
                                                            &nbsp; Orejas</label>
                                                        <label class="form-check-label" for="inlineRadio6">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r62" id="r62_f" value="5" onChange={handleInputChange('r62')} defaultValue={values.r62}/>
                                                            &nbsp; Boca</label>
                                                        <label class="form-check-label" for="inlineRadio7">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r62" id="r62_g" value="6" onChange={handleInputChange('r62')} defaultValue={values.r62}/>
                                                            &nbsp; Nariz</label>
                                                        <label class="form-check-label" for="inlineRadio7">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r62" id="r62_h" value="7" onChange={handleInputChange('r62')} defaultValue={values.r62}/>
                                                            &nbsp; Género</label>
                                                        <label class="form-check-label" for="inlineRadio7">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r62" id="r62_i" value="8" onChange={handleInputChange('r62')} defaultValue={values.r62}/>
                                                            &nbsp; Piernas</label>
                                                        <label class="form-check-label" for="inlineRadio7">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r62" id="r62_j" value="9" onChange={handleInputChange('r62')} defaultValue={values.r62}/>
                                                            &nbsp; Omisiones</label>
                                                        <label class="form-check-label" for="inlineRadio7">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r62" id="r62_k" value="10" onChange={handleInputChange('r62')} defaultValue={values.r62}/>
                                                            &nbsp; Torso y cuerpo inconclusoos, fragmentados u omitidos</label>
                                                    </Typography>
                                                </div>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Detalles no esenciales</Typography></li>
                                                <div class="form-check">
                                                    <Typography variant="h6" gutterBottom class="form-check">
                                                        <label class="form-check-label" for="inlineRadio1"><br/>
                                                            <input class="form-check-input" type="checkbox" name="r63" id="r63_a" value="1" onChange={handleInputChange('r63')} defaultValue={values.r63}/>
                                                            &nbsp; Ropa </label>
                                                        <label class="form-check-label" for="inlineRadio2">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r63" id="r63_b" value="0" onChange={handleInputChange('r63')} defaultValue={values.r63}/>
                                                            &nbsp; Genitales dibujados </label>
                                                        <label class="form-check-label" for="inlineRadio3">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r63" id="r63_c" value="2" onChange={handleInputChange('r63')} defaultValue={values.r63}/>
                                                            &nbsp; Pies omitidos o trozados</label>
                                                        <label class="form-check-label" for="inlineRadio4">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r63" id="r63_d" value="3" onChange={handleInputChange('r63')} defaultValue={values.r63}/>
                                                            &nbsp; Dedos de los pies en una figura vestida</label>
                                                        <label class="form-check-label" for="inlineRadio5">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r63" id="r63_e" value="4" onChange={handleInputChange('r63')} defaultValue={values.r63}/>
                                                            &nbsp; Cabello enfatizado u omitido</label>
                                                        <label class="form-check-label" for="inlineRadio6">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r63" id="r63_f" value="5" onChange={handleInputChange('r63')} defaultValue={values.r63}/>
                                                            &nbsp; Manos/dedos enguantados</label>
                                                        <label class="form-check-label" for="inlineRadio7">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r63" id="r63_g" value="6" onChange={handleInputChange('r63')} defaultValue={values.r63}/>
                                                            &nbsp; Manos/dedos en forma de púas</label>
                                                        <label class="form-check-label" for="inlineRadio8">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r63" id="r63_h" value="7" onChange={handleInputChange('r63')} defaultValue={values.r63}/>
                                                            &nbsp; Manos/dedos en forma de pétalos</label>
                                                        <label class="form-check-label" for="inlineRadio9">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r63" id="r63_i" value="8" onChange={handleInputChange('r63')} defaultValue={values.r63}/>
                                                            &nbsp; Cuello enfatizado</label>  
                                                        <label class="form-check-label" for="inlineRadio10">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r63" id="r63_j" value="9" onChange={handleInputChange('r63')} defaultValue={values.r63}/>
                                                            &nbsp; Cuello como espagueti</label>      
                                                        <label class="form-check-label" for="inlineRadio11">  <br/>
                                                            <input class="form-check-input" type="checkbox" name="r63" id="r63_k" value="10" onChange={handleInputChange('r63')} defaultValue={values.r63}/>
                                                            &nbsp; Cuello omitido</label>                                
                                                        <label class="form-check-label" for="inlineRadio12">
                                                            <br/>Otros:
                                                            <textarea class="form-control" name="r63" onChange={handleInputChange('r63')} defaultValue={values.r63}>
                                                            </textarea></label>
                                                    </Typography>
                                                </div>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Detalles irrelevantes</Typography></li>
                                                <div class="form-check">
                                                    <Typography variant="h6" gutterBottom class="form-check">
                                                        <label class="form-check-label" for="inlineRadio1"><br/>
                                                            <input class="form-check-input" type="checkbox" name="r64" id="r64_a" value="1" onChange={handleInputChange('r64')} defaultValue={values.r64}/>
                                                            &nbsp; Bastones, espadas, armas</label>
                                                        <label class="form-check-label" for="inlineRadio2">
                                                            <br/>Otros:
                                                            <textarea class="form-control" name="r64" onChange={handleInputChange('r64')} defaultValue={values.r64}>
                                                        </textarea></label>
                                                    </Typography>
                                                </div>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Sombreado de los detalles</Typography></li>
                                                <div class="form-check">
                                                    <Typography variant="h6" gutterBottom class="form-check">
                                                        <label class="form-check-label" for="inlineRadio1"><br/>
                                                            <input class="form-check-input" type="radio" name="r65" id="r65_a" value="1" onChange={handleInputChange('r65')} defaultValue={values.r65}/>
                                                            &nbsp; Sí </label>
                                                        <label class="form-check-label" for="inlineRadio2">  <br/>
                                                            <input class="form-check-input" type="radio" name="r65" id="65_b" value="0" onChange={handleInputChange('r65')} defaultValue={values.r65}/>
                                                            &nbsp; No </label>                  
                                                    </Typography>
                                                </div>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Calidad de la línea</Typography></li>
                                                <div class="form-check">
                                                    <Typography variant="h6" gutterBottom class="form-check">
                                                        <label class="form-check-label" for="inlineRadio1"><br/>
                                                            <input class="form-check-input" type="radio" name="r66" id="r66_a" value="1" onChange={handleInputChange('r66')} defaultValue={values.r66}/>
                                                            &nbsp; Recargada </label>
                                                        <label class="form-check-label" for="inlineRadio2">  <br/>
                                                            <input class="form-check-input" type="radio" name="r66" id="r66_b" value="0" onChange={handleInputChange('r66')} defaultValue={values.r66}/>
                                                            &nbsp; Débil </label>
                                                        <label class="form-check-label" for="inlineRadio3">  <br/>
                                                            <input class="form-check-input" type="radio" name="r66" id="r66_c" value="2" onChange={handleInputChange('r66')} defaultValue={values.r66}/>
                                                            &nbsp; Fragmentada/díficultad con los ángulos </label>
                                                        <label class="form-check-label" for="inlineRadio4">
                                                            <br/>Otros:
                                                            <textarea class="form-control" name="r66" onChange={handleInputChange('r66')} defaultValue={values.r66}>
                                                            </textarea></label>
                                                    </Typography>
                                                </div>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li><Typography variant="h6" gutterBottom class="tamai">Observaciones</Typography></li>
                                                    <div class="form-check">
                                                    <Typography variant="h6" gutterBottom class="form-check">                                              
                                                        <label class="form-check-label" for="inlineRadio1">
                                                            <textarea class="form-control" name="r67" onChange={handleInputChange('r67')} defaultValue={values.r67}>
                                                        </textarea></label>
                                                    </Typography>
                                                </div>
                                            </ul>
                                        </div>
                                 
                                        <div className="main-row">
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
export default ResultadosPersona;