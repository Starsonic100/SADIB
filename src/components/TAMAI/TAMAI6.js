import React, { Component,useEffect } from 'react';
import '../css/style.css';
import anterior from '../img/anterior.png';
import siguiente from '../img/siguiente.png';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export class TAMAI6 extends Component {

    continuar = e => {
        e.preventDefault();
        this.props.siguiente();
    };

    regresar = e => {
        e.preventDefault();
        this.props.anterior();
    };

    
    render() {

        useEffect(() => {
            window.scrollTo(0,0);
        });

        const { values, handleInputChange } = this.props;

        return(
            <div className="container">
                
                <div className="main row">
                    <div className="col-12">
                        <div className="container">
                            <div className="formulario">
    
                                <div className="instrucciones">
                                    <div align="center">
                                        <MuiThemeProvider theme={theme}>
                                            <Typography variant="h5" class="instrucciones">{"Contesta a cada pregunta con SÍ o NO según consideres"}</Typography>
                                        </MuiThemeProvider>
                                    </div>
                                </div>
                                    
                                <div className="preguntas">

                                    <div className="seccion">
                                        <div align="center">
                                            <MuiThemeProvider theme={theme}>
                                                <Typography variant="h4" class="seccion">{"Con respecto a mi madre..."}</Typography>
                                            </MuiThemeProvider>
                                        </div>
                                    </div>

                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"146. Me trata muy bien, como a una persona mayor."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p146" onChange={handleInputChange('p146')} value="1" defaultValue={values.p146}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p146" onChange={handleInputChange('p146')} value="0" defaultValue={values.p146}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"147. Me quiere mucho."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p147" onChange={handleInputChange('p147')} value="1" defaultValue={values.p147}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p147" onChange={handleInputChange('p147')} value="0" defaultValue={values.p147}/>
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
                                                        <Typography variant="h6" class="tamai">{"148. Me anima a hacer las cosas."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p148" onChange={handleInputChange('p148')} value="1" defaultValue={values.p148}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p148" onChange={handleInputChange('p148')} value="0" defaultValue={values.p148}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"149. Me castiga o riñe pocas veces, cuando es necesario."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p149" onChange={handleInputChange('p149')} value="1" defaultValue={values.p149}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p149" onChange={handleInputChange('p149')} value="0" defaultValue={values.p149}/>
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
                                                        <Typography variant="h6" class="tamai">{"150. Me deja actuar a mí solo, tiene confianza en mí."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p150" onChange={handleInputChange('p150')} value="1" defaultValue={values.p150}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p150" onChange={handleInputChange('p150')} value="0" defaultValue={values.p150}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"151. Está muy pendiente de mí, preocupada por lo que hago."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p151" onChange={handleInputChange('p151')} value="1" defaultValue={values.p151}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p151" onChange={handleInputChange('p151')} value="0" defaultValue={values.p151}/>
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
                                                        <Typography variant="h6" class="tamai">{"152. Suele estar con miedo de que me pase algo."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p152" onChange={handleInputChange('p152')} value="1" defaultValue={values.p152}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p152" onChange={handleInputChange('p152')} value="0" defaultValue={values.p152}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"153. Me ayuda demasiado en lo que tengo que hacer."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p153" onChange={handleInputChange('p153')} value="1" defaultValue={values.p153}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p153" onChange={handleInputChange('p153')} value="0" defaultValue={values.p153}/>
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
                                                        <Typography variant="h6" class="tamai">{"154. Se preocupa de lo que he hecho y con quien he estado."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p154" onChange={handleInputChange('p154')} value="1" defaultValue={values.p154}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p154" onChange={handleInputChange('p154')} value="0" defaultValue={values.p154}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"155. Me defiende contra todos los que me hacen algo."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p155" onChange={handleInputChange('p155')} value="1" defaultValue={values.p155}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p155" onChange={handleInputChange('p155')} value="0" defaultValue={values.p155}/>
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
                                                        <Typography variant="h6" class="tamai">{"156. Me deja hacer todo lo que yo quiero."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p156" onChange={handleInputChange('p156')} value="1" defaultValue={values.p156}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p156" onChange={handleInputChange('p156')} value="0" defaultValue={values.p156}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"157. Le hace gracia lo que digo o hago."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p157" onChange={handleInputChange('p157')} value="1" defaultValue={values.p157}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p157" onChange={handleInputChange('p157')} value="0" defaultValue={values.p157}/>
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
                                                        <Typography variant="h6" class="tamai">{"158. Muy pocas veces me castiga o riñe."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p158" onChange={handleInputChange('p158')} value="1" defaultValue={values.p158}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p158" onChange={handleInputChange('p158')} value="0" defaultValue={values.p158}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"159. Casi todo lo que pido me lo concede."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p159" onChange={handleInputChange('p159')} value="1" defaultValue={values.p159}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p159" onChange={handleInputChange('p159')} value="0" defaultValue={values.p159}/>
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
                                                        <Typography variant="h6" class="tamai">{"160. Llorando o enfadándome consigo siempre lo que deseo de ella."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p160" onChange={handleInputChange('p160')} value="1" defaultValue={values.p160}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p160" onChange={handleInputChange('p160')} value="0" defaultValue={values.p160}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"161. Siempre me está llamando la atención."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p161" onChange={handleInputChange('p161')} value="1" defaultValue={values.p161}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p161" onChange={handleInputChange('p161')} value="0" defaultValue={values.p161}/>
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
                                                        <Typography variant="h6" class="tamai">{"162. Quiere que sea como una persona mayor."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p162" onChange={handleInputChange('p162')} value="1" defaultValue={values.p162}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p162" onChange={handleInputChange('p162')} value="0" defaultValue={values.p162}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"163. Me exige y me controla todo lo que hago."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p163" onChange={handleInputChange('p163')} value="1" defaultValue={values.p163}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p163" onChange={handleInputChange('p163')} value="0" defaultValue={values.p163}/>
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
                                                        <Typography variant="h6" class="tamai">{"164. Todo lo que hago le parece mal."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p164" onChange={handleInputChange('p164')} value="1" defaultValue={values.p164}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p164" onChange={handleInputChange('p164')} value="0" defaultValue={values.p164}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"165. Se enfada por cualquier cosa que hago."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p165" onChange={handleInputChange('p165')} value="1" defaultValue={values.p165}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p165" onChange={handleInputChange('p165')} value="0" defaultValue={values.p165}/>
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
                                                        <Typography variant="h6" class="tamai">{"166. Me hace poco caso cuando hablo"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p166" onChange={handleInputChange('p166')} value="1" defaultValue={values.p166}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p166" onChange={handleInputChange('p166')} value="0" defaultValue={values.p166}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"167. Habla poco conmigo."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p167" onChange={handleInputChange('p167')} value="1" defaultValue={values.p167}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p167" onChange={handleInputChange('p167')} value="0" defaultValue={values.p167}/>
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
                                                        <Typography variant="h6" class="tamai">{"168. Quiere a otros hermanos más que a mí."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p168" onChange={handleInputChange('p168')} value="1" defaultValue={values.p168}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p168" onChange={handleInputChange('p168')} value="0" defaultValue={values.p168}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"169. Se preocupa poco por mí."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p169" onChange={handleInputChange('p169')} value="1" defaultValue={values.p169}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p169" onChange={handleInputChange('p169')} value="0" defaultValue={values.p169}/>
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
                                                        <Typography variant="h6" class="tamai">{"170. Muchas veces siento que me tiene abandonado."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p170" onChange={handleInputChange('p170')} value="1" defaultValue={values.p170}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p170" onChange={handleInputChange('p170')} value="0" defaultValue={values.p170}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"171. Me suele pegar muchas veces."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p171" onChange={handleInputChange('p171')} value="1" defaultValue={values.p171}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p171" onChange={handleInputChange('p171')} value="0" defaultValue={values.p171}/>
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
                                                        <Typography variant="h6" class="tamai">{"172. Siempre me está molestando."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p172" onChange={handleInputChange('p172')} value="1" defaultValue={values.p172}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p172" onChange={handleInputChange('p172')} value="0" defaultValue={values.p172}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"173. Me quiere poco."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p173" onChange={handleInputChange('p173')} value="1" defaultValue={values.p173}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p173" onChange={handleInputChange('p173')} value="0" defaultValue={values.p173}/>
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
                                                        <Typography variant="h6" class="tamai">{"174. Es seria conmigo."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p174" onChange={handleInputChange('p174')} value="1" defaultValue={values.p174}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p174" onChange={handleInputChange('p174')} value="0" defaultValue={values.p174}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"175. Me tiene manía."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p175" onChange={handleInputChange('p175')} value="1" defaultValue={values.p175}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p175" onChange={handleInputChange('p175')} value="0" defaultValue={values.p175}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div className="main row">
                                        <div className="col-lg-10">
                                            <button class="button"onClick={this.regresar}><img src={anterior}/></button>
                                        </div>
                                        <div className="col-lg-1">
                                            <button class="button" onClick={this.continuar}><img src={siguiente}/></button>
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
	
export default TAMAI6;