import React, { Component } from 'react';
import '../css/style.css';
import logo from '../img/logo.png';
import anterior from '../img/anterior.png';
import siguiente from '../img/siguiente.png';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export class TAMAI2 extends Component {

    continuar = e => {
        e.preventDefault();
        this.props.siguiente();
    };

    regresar = e => {
        e.preventDefault();
        this.props.anterior();
    };
    
    render() {

        const { values, handleInputChange } = this.props;

        return(
            <div className="container">
                
                <div className="main row">
                    <div className="col-12">
                        <div className="banner">
                            <div align="center"><img src={logo} alt="logoSADIB" title="logoSADIB" width="25%"/></div>
                        </div>
                    </div>
                </div>
                
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
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"31. Soy revoltoso y desobediente."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p31" onChange={handleInputChange('p31')} value="1" defaultValue={values.p31}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p31" onChange={handleInputChange('p31')} value="0" defaultValue={values.p31}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"32. Me da igual saber que no saber."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p32" onChange={handleInputChange('p32')} value="1" defaultValue={values.p32}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p32" onChange={handleInputChange('p32')} value="0" defaultValue={values.p32}/>
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
                                                        <Typography variant="h6" class="tamai">{"33. Me aburre estudiar."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p33" onChange={handleInputChange('p33')} value="1" defaultValue={values.p33}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p33" onChange={handleInputChange('p33')} value="0" defaultValue={values.p33}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"34. Me gustaría que todo el año fueran vacaciones."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p34" onChange={handleInputChange('p34')} value="1" defaultValue={values.p34}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p34" onChange={handleInputChange('p34')} value="0" defaultValue={values.p34}/>
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
                                                        <Typography variant="h6" class="tamai">{"35. Me resulta aburrido todo lo que estudio."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p35" onChange={handleInputChange('p35')} value="1" defaultValue={values.p35}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p35" onChange={handleInputChange('p35')} value="0" defaultValue={values.p35}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"36. Me gustaría tener otros profesores."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p36" onChange={handleInputChange('p36')} value="1" defaultValue={values.p36}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p36" onChange={handleInputChange('p36')} value="0" defaultValue={values.p36}/>
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
                                                        <Typography variant="h6" class="tamai">{"37. Estoy a disgusto con el profesor o profesores que tengo."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p37" onChange={handleInputChange('p37')} value="1" defaultValue={values.p37}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p37" onChange={handleInputChange('p37')} value="0" defaultValue={values.p37}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"38. Me gustaría que los profesores fueran de otra manera."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p38" onChange={handleInputChange('p38')} value="1" defaultValue={values.p38}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p38" onChange={handleInputChange('p38')} value="0" defaultValue={values.p38}/>
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
                                                        <Typography variant="h6" class="tamai">{"39. Me fastidia ir al colegio."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p39" onChange={handleInputChange('p39')} value="1" defaultValue={values.p39}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p39" onChange={handleInputChange('p39')} value="0" defaultValue={values.p39}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"40. Deseo que se acaben las clases para marcharme."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p40" onChange={handleInputChange('p40')} value="1" defaultValue={values.p40}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p40" onChange={handleInputChange('p40')} value="0" defaultValue={values.p40}/>
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
                                                        <Typography variant="h6" class="tamai">{"41. Me aburro en clase."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p41" onChange={handleInputChange('p41')} value="1" defaultValue={values.p41}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p41" onChange={handleInputChange('p41')} value="0" defaultValue={values.p41}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"42. Prefiero cambiar de colegio."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p42" onChange={handleInputChange('p42')} value="1" defaultValue={values.p42}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p42" onChange={handleInputChange('p42')} value="0" defaultValue={values.p42}/>
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
                                                        <Typography variant="h6" class="tamai">{"43. Tengo muy pocos amigos."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p43" onChange={handleInputChange('p43')} value="1" defaultValue={values.p43}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p43" onChange={handleInputChange('p43')} value="0" defaultValue={values.p43}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"44. Jugando solo estoy más a gusto."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p44" onChange={handleInputChange('p44')} value="1" defaultValue={values.p44}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p44" onChange={handleInputChange('p44')} value="0" defaultValue={values.p44}/>
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
                                                        <Typography variant="h6" class="tamai">{"45. Suelo estar callado cuando estoy con los demás."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p45" onChange={handleInputChange('p45')} value="1" defaultValue={values.p45}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p45" onChange={handleInputChange('p45')} value="0" defaultValue={values.p45}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"46. Me cuesta ser amigo de los otros."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p46" onChange={handleInputChange('p46')} value="1" defaultValue={values.p46}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p46" onChange={handleInputChange('p46')} value="0" defaultValue={values.p46}/>
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
                                                        <Typography variant="h6" class="tamai">{"47. Prefiero estar con pocas personas."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p47" onChange={handleInputChange('p47')} value="1" defaultValue={values.p47}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p47" onChange={handleInputChange('p47')} value="0" defaultValue={values.p47}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"48. Los compañeros se están metiendo siempre conmigo."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p48" onChange={handleInputChange('p48')} value="1" defaultValue={values.p48}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p48" onChange={handleInputChange('p48')} value="0" defaultValue={values.p48}/>
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
                                                        <Typography variant="h6" class="tamai">{"49. Los demás son malos y envidiosos."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p49" onChange={handleInputChange('p49')} value="1" defaultValue={values.p49}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p49" onChange={handleInputChange('p49')} value="0" defaultValue={values.p49}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"50. Me gustaría ser muy poderoso para mandar."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p50" onChange={handleInputChange('p50')} value="1" defaultValue={values.p50}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p50" onChange={handleInputChange('p50')} value="0" defaultValue={values.p50}/>
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
                                                        <Typography variant="h6" class="tamai">{"51. Siempre estoy discutiendo"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p51" onChange={handleInputChange('p51')} value="1" defaultValue={values.p51}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p51" onChange={handleInputChange('p51')} value="0" defaultValue={values.p51}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"52. Me enfado muchas veces y peleo."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p52" onChange={handleInputChange('p52')} value="1" defaultValue={values.p52}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p52" onChange={handleInputChange('p52')} value="0" defaultValue={values.p52}/>
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
                                                        <Typography variant="h6" class="tamai">{"53. Tengo muy mal genio."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p53" onChange={handleInputChange('p53')} value="1" defaultValue={values.p53}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p53" onChange={handleInputChange('p53')} value="0" defaultValue={values.p53}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"54. Me suelen decir que soy inquieto."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p54" onChange={handleInputChange('p54')} value="1" defaultValue={values.p54}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p54" onChange={handleInputChange('p54')} value="0" defaultValue={values.p54}/>
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
                                                        <Typography variant="h6" class="tamai">{"55. Me suelen decir que soy revoltoso."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p55" onChange={handleInputChange('p55')} value="1" defaultValue={values.p55}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p55" onChange={handleInputChange('p55')} value="0" defaultValue={values.p55}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"56. Me suelen decir que soy sucio y descuidado."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p56" onChange={handleInputChange('p56')} value="1" defaultValue={values.p56}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p56" onChange={handleInputChange('p56')} value="0" defaultValue={values.p56}/>
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
                                                        <Typography variant="h6" class="tamai">{"57. Me suelen decir que soy desordenado."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p57" onChange={handleInputChange('p57')} value="1" defaultValue={values.p57}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p57" onChange={handleInputChange('p57')} value="0" defaultValue={values.p57}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"58. Rompo y ensucio enseguida las cosas."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p58" onChange={handleInputChange('p58')} value="1" defaultValue={values.p58}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p58" onChange={handleInputChange('p58')} value="0" defaultValue={values.p58}/>
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
                                                        <Typography variant="h6" class="tamai">{"59. Me aburro y me canso enseguida de lo que estoy haciendo."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p59" onChange={handleInputChange('p59')} value="1" defaultValue={values.p59}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p59" onChange={handleInputChange('p59')} value="0" defaultValue={values.p59}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"60. Me enfado, discuto y peleo con facilidad."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p60" onChange={handleInputChange('p60')} value="1" defaultValue={values.p60}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p60" onChange={handleInputChange('p60')} value="0" defaultValue={values.p60}/>
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
	
export default TAMAI2;