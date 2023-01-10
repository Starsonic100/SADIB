import React, { Component,useEffect, useState } from 'react';
import '../css/style.css';
import anterior from '../img/anterior.png';
import siguiente from '../img/siguiente.png';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export class TAMAI1 extends Component {

    continuar = e => {
        e.preventDefault();
        this.props.siguiente();
    };


    render(){
       

        const { values, handleInputChange } = this.props;

        return(
            <div className="container">
                <TAMAI/>
                {/* Comienza sección de preguntas*/}
                <div className="main row">
                    <div className="col-12">
                        <div className="container">
                            <div className="formulario">
                                {/* Comienza div de instrucciones*/}
                                <div className="instrucciones">
                                    <div align="center">
                                        <MuiThemeProvider theme={theme}>
                                            <Typography variant="h5" class="instrucciones">{"Contesta a cada pregunta con SÍ o NO según consideres"}</Typography>
                                        </MuiThemeProvider>
                                    </div>
                                </div>
                                {/*Termina div de instrucciones*/}
    
                                {/* Comienza div de preguntas*/}  
                                <div className="preguntas">
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"1. Me gustaría tener menos edad."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p1" onChange={handleInputChange('p1')} value="1" defaultValue={values.p1}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p1"  onChange={handleInputChange('p1')} value="0" defaultValue={values.p1}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"2. Me gustaría nacer de nuevo y ser distinto de cómo soy."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p2" onChange={handleInputChange('p2')} value="1" defaultValue={values.p2}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p2" onChange={handleInputChange('p2')} value="0" defaultValue={values.p2}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"3. Todo me sale mal."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p3" onChange={handleInputChange('p3')} value="1" defaultValue={values.p3}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p3" onChange={handleInputChange('p3')} value="0" defaultValue={values.p3}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"4. Pienso mucho en la muerte."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p4" onChange={handleInputChange('p4')} value="1" defaultValue={values.p4}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p4" onChange={handleInputChange('p4')} value="0" defaultValue={values.p4}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"5. Los demás son más fuertes que yo."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p5" onChange={handleInputChange('p5')} value="1" defaultValue={values.p5}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p5" onChange={handleInputChange('p5')} value="0" defaultValue={values.p5}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"6. Me aburro jugando."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p6" onChange={handleInputChange('p6')} value="1" defaultValue={values.p6}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p6" onChange={handleInputChange('p6')} value="0" defaultValue={values.p6}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"7. Soy muy miedoso."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p7" onChange={handleInputChange('p7')} value="1" defaultValue={values.p7}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p7" onChange={handleInputChange('p7')} value="0" defaultValue={values.p7}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"8. Casi siempre sueño cosas tristes."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p8" onChange={handleInputChange('p8')} value="1" defaultValue={values.p8}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p8" onChange={handleInputChange('p8')} value="0" defaultValue={values.p8}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"9. Si hubiera una catástrofe, seguro moriría."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p9" onChange={handleInputChange('p9')} value="1" defaultValue={values.p9}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p9" onChange={handleInputChange('p9')} value="0" defaultValue={values.p9}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"10. Me da miedo la gente."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p10" onChange={handleInputChange('p10')} value="1" defaultValue={values.p10}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p10" onChange={handleInputChange('p10')} value="0" defaultValue={values.p10}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"11. Me asusto y lloro muchas veces."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p11" onChange={handleInputChange('p11')} value="1" defaultValue={values.p11}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p11" onChange={handleInputChange('p11')} value="0" defaultValue={values.p11}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"12. Creo que soy malo."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p12" onChange={handleInputChange('p12')} value="1" defaultValue={values.p12}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p12" onChange={handleInputChange('p12')} value="0" defaultValue={values.p12}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"13. Creo que soy bastante tonto."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p13" onChange={handleInputChange('p13')} value="1" defaultValue={values.p13}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p13" onChange={handleInputChange('p13')} value="0" defaultValue={values.p13}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"14. Soy muy vergonzoso."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p14" onChange={handleInputChange('p14')} value="1" defaultValue={values.p14}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p14" onChange={handleInputChange('p14')} value="0" defaultValue={values.p14}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"15. Muchas veces siento pena y lloro."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p15" onChange={handleInputChange('p15')} value="1" defaultValue={values.p15}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p15" onChange={handleInputChange('p15')} value="0" defaultValue={values.p15}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"16. A veces siento que soy un desastre."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p16" onChange={handleInputChange('p16')} value="1" defaultValue={values.p16}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p16" onChange={handleInputChange('p16')} value="0" defaultValue={values.p16}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"17. La vida muchas veces es triste."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p17" onChange={handleInputChange('p17')} value="1" defaultValue={values.p17}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p17" onChange={handleInputChange('p17')} value="0" defaultValue={values.p17}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"18. Hay veces que me cuesta concentrarme en lo que hago."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p18" onChange={handleInputChange('p18')} value="1" defaultValue={values.p18}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p18" onChange={handleInputChange('p18')} value="0" defaultValue={values.p18}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"19. Algunas veces tengo ganas de morirme."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p19" onChange={handleInputChange('p19')} value="1" defaultValue={values.p19}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p19" onChange={handleInputChange('p19')} value="0" defaultValue={values.p19}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"20. Suelo sentir molestias y dolores en todo el cuerpo."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p20" onChange={handleInputChange('p20')} value="1" defaultValue={values.p20}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p20" onChange={handleInputChange('p20')} value="0" defaultValue={values.p20}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"21. Me tengo rabia a mí mismo alguna vez"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p21" onChange={handleInputChange('p21')} value="1" defaultValue={values.p21}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p21" onChange={handleInputChange('p21')} value="0" defaultValue={values.p21}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"22. A veces siento que soy inútil."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p22" onChange={handleInputChange('p22')} value="1" defaultValue={values.p22}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p22" onChange={handleInputChange('p22')} value="0" defaultValue={values.p22}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"23. Me fastidia estudiar."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p23" onChange={handleInputChange('p23')} value="1" defaultValue={values.p23}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p23" onChange={handleInputChange('p23')} value="0" defaultValue={values.p23}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"24. Saco malas notas."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p24" onChange={handleInputChange('p24')} value="1" defaultValue={values.p24}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p24" onChange={handleInputChange('p24')} value="0" defaultValue={values.p24}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"25. Paso mucho tiempo distraído."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p25" onChange={handleInputChange('p25')} value="1" defaultValue={values.p25}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p25" onChange={handleInputChange('p25')} value="0" defaultValue={values.p25}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"26. Estudio y trabajo poco."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p26" onChange={handleInputChange('p26')} value="1" defaultValue={values.p26}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p26" onChange={handleInputChange('p26')} value="0" defaultValue={values.p26}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"27. Creo que soy bastante vago."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p27" onChange={handleInputChange('p27')} value="1" defaultValue={values.p27}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p27" onChange={handleInputChange('p27')} value="0" defaultValue={values.p27}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"28. Me canso rápidamente cuando trabajo o estudio."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p28" onChange={handleInputChange('p28')} value="1" defaultValue={values.p28}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p28" onChange={handleInputChange('p28')} value="0" defaultValue={values.p28}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"29. Me porto muy mal en clase."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p29" onChange={handleInputChange('p29')} value="1" defaultValue={values.p29}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p29" onChange={handleInputChange('p29')} value="0" defaultValue={values.p29}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"30. Suelo estar hablando y molestando."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p30" onChange={handleInputChange('p30')} value="1" defaultValue={values.p30}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p30" onChange={handleInputChange('p30')} value="0" defaultValue={values.p30}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div className="main row">
                                        <div className="col-11">
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
	
export default TAMAI1;