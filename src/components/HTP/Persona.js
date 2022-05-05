import React, { Component } from 'react';
import '../css/style.css';
import logo from '../img/logo.png';
import anterior from '../img/anterior.png';
import siguiente from '../img/siguiente.png';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export class Persona extends Component {

    continuar = e => {
        e.preventDefault();
        this.props.siguiente();
    };

    regresar = e => {
        e.preventDefault();
        this.props.anterior();
    };

    render(){

        const { values, handleInputChange } = this.props;

        return(
            <div className="container">
                {/* Comienza Banner*/}
                <div className="main row">
                    <div className="col-12">
                        <div className="banner">
                            <div align="center"><img src={logo} alt="logoSADIB" title="logoSADIB" width="25%"/></div>
                        </div>
                    </div>
                </div>
                {/* Termina Banner*/}
                
                {/* Comienza sección de preguntas*/}
                <div className="main row">
                    <div className="col-12">
                        <div className="container">
                            <div className="formulario">
                                {/* Comienza div de instrucciones*/}
                                <div className="instrucciones">
                                    <div align="center">
                                        <MuiThemeProvider theme={theme}>
                                            <Typography variant="h5" class="instrucciones">{"Contesta las siguientes preguntas respecto a la persona"}</Typography>
                                        </MuiThemeProvider>
                                    </div>
                                </div>
                                {/*Termina div de instrucciones*/}
    
                                {/* Comienza div de preguntas*/}  
                                <div className="preguntas">
                                    
                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"45. ¿Es un hombre o una mujer?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p45" onChange={handleInputChange('p45')} defaultValue={values.p45}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"46. ¿Qué edad tiene?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p46" onChange={handleInputChange('p46')} defaultValue={values.p46}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"47. ¿Quién es?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p47" onChange={handleInputChange('p47')} defaultValue={values.p47}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"48. ¿Es un pariente, un amigo o quién? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p48" onChange={handleInputChange('p48')} defaultValue={values.p48}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"49. ¿En quién estaba pensando cuando dibujaba?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p49" onChange={handleInputChange('p49')} defaultValue={values.p44}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"50. ¿Qué está haciendo?, ¿dónde lo está haciendo? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p50" onChange={handleInputChange('p50')} defaultValue={values.p50}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"51. ¿En qué está pensando?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p51" onChange={handleInputChange('p51')} defaultValue={values.p51}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"52. ¿Cómo se siente?, ¿por qué?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p52" onChange={handleInputChange('p52')} defaultValue={values.p52}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"53. ¿Qué le hace pensar o qué le recuerda esa persona? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p53" onChange={handleInputChange('p53')} defaultValue={values.p53}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"54. ¿Qué más?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p54" onChange={handleInputChange('p54')} defaultValue={values.p54}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"55. ¿Está sana esa persona?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p55" onChange={handleInputChange('p55')} defaultValue={values.p55}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"56. ¿Qué es lo que le da esa impresión?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p56" onChange={handleInputChange('p56')} defaultValue={values.p56}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"57. ¿Es feliz esa persona?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p57" onChange={handleInputChange('p57')} defaultValue={values.p57}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"58. ¿Qué le da esa impresión? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p58" onChange={handleInputChange('p58')} defaultValue={values.p58}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"59. ¿Es así la mayoría de la gente?, ¿por qué?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p59" onChange={handleInputChange('p59')} defaultValue={values.p59}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"60. ¿Cree que le agradaría esa persona? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p60" onChange={handleInputChange('p60')} defaultValue={values.p60}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"61. ¿Por qué?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p61" onChange={handleInputChange('p61')} defaultValue={values.p61}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"62. ¿Cómo es el clima en el dibujo? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p62" onChange={handleInputChange('p62')} defaultValue={values.p62}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"63. ¿A quién le recuerda esa persona?, ¿por qué? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p63" onChange={handleInputChange('p63')} defaultValue={values.p63}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"64. ¿Qué es lo que más necesita esa persona?, ¿por qué? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p64" onChange={handleInputChange('p64')} defaultValue={values.p64}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"65. ¿Alguien ha herido alguna vez a esa persona?, ¿de qué manera? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p65" onChange={handleInputChange('p65')} defaultValue={values.p65}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"66. Si esto fuera una persona en lugar de (cualquier objeto dibujado aparte de la persona), ¿quién sería?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p66" onChange={handleInputChange('p66')} defaultValue={values.p66}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"67. ¿Qué tipo de ropa lleva puesta esta persona?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p67" onChange={handleInputChange('p67')} defaultValue={values.p67}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"68. (Pídale al sujeto que dibuje al Sol y la línea base en cada dibujo) Suponga que el Sol fuera alguna persona que usted conoce ¿quién sería? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p68" onChange={handleInputChange('p68')} defaultValue={values.p68}></textarea>
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
	
export default Persona;