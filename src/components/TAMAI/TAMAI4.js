import React, { Component } from 'react';
import '../css/style.css';
import anterior from '../img/anterior.png';
import siguiente from '../img/siguiente.png';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export class TAMAI4 extends Component {

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
                
                <div className="main-row">
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
    
                                    <div class="main-row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"91. Me aburro cuando estoy solo."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p91" onChange={handleInputChange('p91')} value="1" defaultValue={values.p91}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p91" onChange={handleInputChange('p91')} value="0" defaultValue={values.p91}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"92. Prefiero salir con los amigos que ver televisión."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p92" onChange={handleInputChange('p92')} value="1" defaultValue={values.p92}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p92" onChange={handleInputChange('p92')} value="0" defaultValue={values.p92}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div class="main-row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"93. Enseguida me hago amigo de los demás."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p93" onChange={handleInputChange('p93')} value="1" defaultValue={values.p93}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p93" onChange={handleInputChange('p93')} value="0" defaultValue={values.p93}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"94. Me comporto igual cuando estoy solo que con gente."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p94" onChange={handleInputChange('p94')} value="1" defaultValue={values.p94}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p94" onChange={handleInputChange('p94')} value="0" defaultValue={values.p94}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main-row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"95. Casi todas las personas que conozco son buenas."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p95" onChange={handleInputChange('p95')} value="1" defaultValue={values.p95}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p95" onChange={handleInputChange('p95')} value="0" defaultValue={values.p95}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"96. Normalmente prefiero callar que discutir."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p96" onChange={handleInputChange('p96')} value="1" defaultValue={values.p96}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p96" onChange={handleInputChange('p96')} value="0" defaultValue={values.p96}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main-row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"97. Me quedo muy tranquilo si se burlan de mí o me critican."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p97" onChange={handleInputChange('p97')} value="1" defaultValue={values.p97}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p97" onChange={handleInputChange('p97')} value="0" defaultValue={values.p97}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"98. Cuando pierdo en el juego me alegro por los que ganan."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p98" onChange={handleInputChange('p98')} value="1" defaultValue={values.p98}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p98" onChange={handleInputChange('p98')} value="0" defaultValue={values.p98}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main-row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"99. Prefiero ser uno más de la cuadrilla que ser el jefe."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p99" onChange={handleInputChange('p99')} value="1" defaultValue={values.p99}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p99" onChange={handleInputChange('p99')} value="0" defaultValue={values.p99}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"100. Soy muy cuidadoso con las cosas."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p100" onChange={handleInputChange('p100')} value="1" defaultValue={values.p100}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p100" onChange={handleInputChange('p100')} value="0" defaultValue={values.p100}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main-row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"101. Me dicen que soy muy obediente."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p101" onChange={handleInputChange('p101')} value="1" defaultValue={values.p101}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p101" onChange={handleInputChange('p101')} value="0" defaultValue={values.p101}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"102. Casi siempre hago las cosas sin resongar."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p102" onChange={handleInputChange('p102')} value="1" defaultValue={values.p102}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p102" onChange={handleInputChange('p102')} value="0" defaultValue={values.p102}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main-row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"103. Trato con mucho cariño a los animales."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p103" onChange={handleInputChange('p103')} value="1" defaultValue={values.p103}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p103" onChange={handleInputChange('p103')} value="0" defaultValue={values.p103}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"104. Me suelen decir que me porto bien y soy bueno."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p104" onChange={handleInputChange('p104')} value="1" defaultValue={values.p104}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p104" onChange={handleInputChange('p104')} value="0" defaultValue={values.p104}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main-row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"105. Siempre, siempre digo la verdad."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p105" onChange={handleInputChange('p105')} value="1" defaultValue={values.p105}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p105" onChange={handleInputChange('p105')} value="0" defaultValue={values.p105}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="seccion">
                                        <div align="center">
                                            <MuiThemeProvider theme={theme}>
                                                <Typography variant="h4" class="seccion">{"Contesta las preguntas marcadas (*) solo si conoces a ambos padres"}</Typography>
                                            </MuiThemeProvider>
                                        </div>
                                    </div>
    
                                    <div class="main-row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"106. Mi casa la encuentro triste, estoy a disgusto con ella."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p106" onChange={handleInputChange('p106')} value="1" defaultValue={values.p106}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p106" onChange={handleInputChange('p106')} value="0" defaultValue={values.p106}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"*107. Mis padres discuten muchas veces."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p107" onChange={handleInputChange('p107')} value="1" defaultValue={values.p107}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p107" onChange={handleInputChange('p107')} value="0" defaultValue={values.p107}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main-row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"*108. Mis padres muchas veces se enfadan."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p108" onChange={handleInputChange('p108')} value="1" defaultValue={values.p108}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p108" onChange={handleInputChange('p108')} value="0" defaultValue={values.p108}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"*109. Mis padres se quieren poco."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p109" onChange={handleInputChange('p109')} value="1" defaultValue={values.p109}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p109" onChange={handleInputChange('p109')} value="0" defaultValue={values.p109}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main-row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"110. En mi casa hay bastantes líos."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p110" onChange={handleInputChange('p110')} value="1" defaultValue={values.p110}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p110" onChange={handleInputChange('p110')} value="0" defaultValue={values.p110}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="seccion">
                                        <div align="center">
                                            <MuiThemeProvider theme={theme}>
                                                <Typography variant="h4" class="seccion">{"Contesta las siguientes preguntas solo si tienes hermanos"}</Typography>
                                            </MuiThemeProvider>
                                        </div>
                                    </div>
    
                                    <div class="main-row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"111. Peleo y me llevo mal con mis hermanos."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p111" onChange={handleInputChange('p111')} value="1" defaultValue={values.p111}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p111" onChange={handleInputChange('p111')} value="0" defaultValue={values.p111}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"112. Algunos hermanos se meten mucho conmigo."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p112" onChange={handleInputChange('p112')} value="1" defaultValue={values.p112}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p112" onChange={handleInputChange('p112')} value="0" defaultValue={values.p112}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main-row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"113. Me gustaría no tener hermanos."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p113" onChange={handleInputChange('p113')} value="1" defaultValue={values.p113}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p113" onChange={handleInputChange('p113')} value="0" defaultValue={values.p113}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"114. Algunos hermanos me tienen envidia."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p114" onChange={handleInputChange('p114')} value="1" defaultValue={values.p114}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p114" onChange={handleInputChange('p114')} value="0" defaultValue={values.p114}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="main-row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"115. Alguna vez desea que desaparezca algún hermano."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p115" onChange={handleInputChange('p115')} value="1" defaultValue={values.p115}/>
                                                    <label class="form-check-label" for="inlineRadio1"><h3>S&iacute;</h3></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="p115" onChange={handleInputChange('p115')} value="0" defaultValue={values.p115}/>
                                                    <label class="form-check-label" for="inlineRadio2"><h3>No</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div className="main-row">
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
	
export default TAMAI4;