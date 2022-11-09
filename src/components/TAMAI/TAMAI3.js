import React, { Component } from 'react';
import '../css/style.css';
import anterior from '../img/anterior.png';
import siguiente from '../img/siguiente.png';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export class TAMAI3 extends Component {

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
                                                        <Typography variant="h6" class="tamai">{"61. Creo que soy bueno, guapo, listo, trabajador y alegre."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p61" onChange={handleInputChange('p61')} value="0" defaultValue={values.p61}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p61" onChange={handleInputChange('p61')} value="1" defaultValue={values.p61}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"62. Casi siempre estoy alegre."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p62" onChange={handleInputChange('p62')} value="0" defaultValue={values.p62}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p62" onChange={handleInputChange('p62')} value="1" defaultValue={values.p62}/>
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
                                                        <Typography variant="h6" class="tamai">{"63. Los demás piensan que soy valiente."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p63" onChange={handleInputChange('p63')} value="0" defaultValue={values.p63}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p63" onChange={handleInputChange('p63')} value="1" defaultValue={values.p63}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"64. Casi siempre estoy tranquilo, sin temblar ni enrojecer."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p64" onChange={handleInputChange('p64')} value="0" defaultValue={values.p64}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p64" onChange={handleInputChange('p64')} value="1" defaultValue={values.p64}/>
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
                                                        <Typography variant="h6" class="tamai">{"65. Normalmente estoy bien, sin mareos ni ahogos."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p65" onChange={handleInputChange('p65')} value="0" defaultValue={values.p65}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p65" onChange={handleInputChange('p65')} value="1" defaultValue={values.p65}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"66. Creo que soy una persona tranquila y sin preocupaciones."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p66" onChange={handleInputChange('p66')} value="0" defaultValue={values.p66}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p66" onChange={handleInputChange('p66')} value="1" defaultValue={values.p66}/>
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
                                                        <Typography variant="h6" class="tamai">{"67. La culpa de lo malo que me pasa la suelen tener los demás."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p67" onChange={handleInputChange('p67')} value="1" defaultValue={values.p67}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p67" onChange={handleInputChange('p67')} value="0" defaultValue={values.p67}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"68. Me gustaría ser de la misma forma que soy ahora."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p68" onChange={handleInputChange('p68')} value="0" defaultValue={values.p68}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p68" onChange={handleInputChange('p68')} value="1" defaultValue={values.p68}/>
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
                                                        <Typography variant="h6" class="tamai">{"69. Cuando me levanto me encuentro bien, sin dolores."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p69" onChange={handleInputChange('p69')} value="0" defaultValue={values.p69}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p69" onChange={handleInputChange('p69')} value="1" defaultValue={values.p69}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"70. Normalmente estoy bien, sin marearme ni ganas de devolver."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p70" onChange={handleInputChange('p70')} value="0" defaultValue={values.p70}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p70" onChange={handleInputChange('p70')} value="1" defaultValue={values.p70}/>
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
                                                        <Typography variant="h6" class="tamai">{"71. Casi siempre tengo bien el estómago."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p71" onChange={handleInputChange('p71')} value="0" defaultValue={values.p71}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p71" onChange={handleInputChange('p71')} value="1" defaultValue={values.p71}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"72. Casi siempre tengo bien la cabeza."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p72" onChange={handleInputChange('p72')} value="0" defaultValue={values.p72}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p72" onChange={handleInputChange('p72')} value="1" defaultValue={values.p72}/>
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
                                                        <Typography variant="h6" class="tamai">{"73. Como con mucho apetito y duermo bien."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p73" onChange={handleInputChange('p73')} value="0" defaultValue={values.p73}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p73" onChange={handleInputChange('p73')} value="1" defaultValue={values.p73}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"74. Tengo muy buena salud."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p74" onChange={handleInputChange('p74')} value="0" defaultValue={values.p74}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p74" onChange={handleInputChange('p74')} value="1" defaultValue={values.p74}/>
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
                                                        <Typography variant="h6" class="tamai">{"75. Hablo con las personas mayores, sin vergüenza y tranquilo."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p75" onChange={handleInputChange('p75')} value="0" defaultValue={values.p75}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p75" onChange={handleInputChange('p75')} value="1" defaultValue={values.p75}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"76. Todo el mundo me quiere."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p76" onChange={handleInputChange('p76')} value="0" defaultValue={values.p76}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p76" onChange={handleInputChange('p76')} value="1" defaultValue={values.p76}/>
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
                                                        <Typography variant="h6" class="tamai">{"77. Soy una persona muy feliz."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p77" onChange={handleInputChange('p77')} value="0" defaultValue={values.p77}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p77" onChange={handleInputChange('p77')} value="1" defaultValue={values.p77}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"78. Estudio y trabajo bastante."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p78" onChange={handleInputChange('p78')} value="0" defaultValue={values.p78}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p78" onChange={handleInputChange('p78')} value="1" defaultValue={values.p78}/>
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
                                                        <Typography variant="h6" class="tamai">{"79. Saco buenas notas."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p79" onChange={handleInputChange('p79')} value="0" defaultValue={values.p79}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p79" onChange={handleInputChange('p79')} value="1" defaultValue={values.p79}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"80. Normalmente estoy atento y aplicado."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p80" onChange={handleInputChange('p80')} value="0" defaultValue={values.p80}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p80" onChange={handleInputChange('p80')} value="1" defaultValue={values.p80}/>
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
                                                        <Typography variant="h6" class="tamai">{"81. Acostumbro a estar en silencio en clase"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p81" onChange={handleInputChange('p81')} value="0" defaultValue={values.p81}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p81" onChange={handleInputChange('p81')} value="1" defaultValue={values.p81}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"82. Mis profesores están contentos con mi comportamiento."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p82" onChange={handleInputChange('p82')} value="0" defaultValue={values.p82}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p82" onChange={handleInputChange('p82')} value="1" defaultValue={values.p82}/>
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
                                                        <Typography variant="h6" class="tamai">{"83. Me agrada hacer los trabajos de matemáticas."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p83" onChange={handleInputChange('p83')} value="0" defaultValue={values.p83}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p83" onChange={handleInputChange('p83')} value="1" defaultValue={values.p83}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"84. Me gusta estudiar las ciencias naturales y sociales."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p84" onChange={handleInputChange('p84')} value="0" defaultValue={values.p84}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p84" onChange={handleInputChange('p84')} value="1" defaultValue={values.p84}/>
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
                                                        <Typography variant="h6" class="tamai">{"85. Me gustan los ejercicios de conocimientos de lenguaje."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p85" onChange={handleInputChange('p85')} value="0" defaultValue={values.p85}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p85" onChange={handleInputChange('p85')} value="1" defaultValue={values.p85}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"86. Mis profesores son buenos y amables."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p86" onChange={handleInputChange('p86')} value="0" defaultValue={values.p86}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p86" onChange={handleInputChange('p86')} value="1" defaultValue={values.p86}/>
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
                                                        <Typography variant="h6" class="tamai">{"87. Mis profesores enseñan bien."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p87" onChange={handleInputChange('p87')} value="0" defaultValue={values.p87}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p87" onChange={handleInputChange('p87')} value="1" defaultValue={values.p87}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"88. En clase estoy más a gusto que en una fiesta."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p88" onChange={handleInputChange('p88')} value="1" defaultValue={values.p88}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p88" onChange={handleInputChange('p88')} value="0" defaultValue={values.p88}/>
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
                                                        <Typography variant="h6" class="tamai">{"89. Me gusta estar con mucha gente."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p89" onChange={handleInputChange('p89')} value="0" defaultValue={values.p89}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p89" onChange={handleInputChange('p89')} value="1" defaultValue={values.p89}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"90. Soy muy chistoso y hablador."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p90" onChange={handleInputChange('p90')} value="0" defaultValue={values.p90}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p90" onChange={handleInputChange('p90')} value="1" defaultValue={values.p90}/>
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
	
export default TAMAI3;