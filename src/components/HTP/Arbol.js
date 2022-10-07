import React, { Component } from 'react';
import '../css/style.css';
import anterior from '../img/anterior.png';
import siguiente from '../img/siguiente.png';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export class Arbol extends Component {

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
                
                {/* Comienza sección de preguntas*/}
                <div className="main row">
                    <div className="col-12">
                        <div className="container">
                            <div className="formulario">
                                {/* Comienza div de instrucciones*/}
                                <div className="instrucciones">
                                    <div align="center">
                                        <MuiThemeProvider theme={theme}>
                                            <Typography variant="h5" class="instrucciones">{"Contesta las siguientes preguntas respecto al árbol"}</Typography>
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
                                                        <Typography variant="h6" class="tamai">{"22. ¿Qué clase de árbol es?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p22" onChange={handleInputChange('p22')} defaultValue={values.p22}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"23. ¿Dónde se encuentra realmente ese árbol?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p23" onChange={handleInputChange('p23')} defaultValue={values.p23}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"24. ¿Aproximadamente qué edad tiene el árbol?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p24" onChange={handleInputChange('p24')} defaultValue={values.p24}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"25. ¿Está vivo el árbol?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p25" onChange={handleInputChange('p25')} defaultValue={values.p25}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"26. ¿Qué hay en él que le dé la impresión de estar vivo?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p26" onChange={handleInputChange('p26')} defaultValue={values.p26}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"27. ¿Qué causó su muerte? (si no está vivo)"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p27" onChange={handleInputChange('p27')} defaultValue={values.p27}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"28.     ¿Volverá a estar vivo? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p28" onChange={handleInputChange('p28')} defaultValue={values.p28}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"29.     ¿Alguna parte del árbol está muerta?, ¿cuál?, ¿qué cree que ocasionó su muerte?, ¿por cuánto tiempo ha estado muerta? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p29" onChange={handleInputChange('p29')} defaultValue={values.p29}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"30. ¿A qué se parece más ese árbol, a un hombre o a una mujer?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p30" onChange={handleInputChange('p30')} defaultValue={values.p30}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"31. ¿Qué hay en el árbol que le da esa impresión?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p31" onChange={handleInputChange('p31')} defaultValue={values.p31}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"32. Si fuera una persona en lugar de un árbol, ¿hacia dónde estaría mirando? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p32" onChange={handleInputChange('p32')} defaultValue={values.p32}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"33. ¿El árbol se encuentra solo o dentro de un grupo de árboles? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p33" onChange={handleInputChange('p33')} defaultValue={values.p33}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"34. Cuando mira el árbol ¿tiene la impresión de que se encuentra por encima de usted, debajo de usted o al mismo nivel que usted? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p34" onChange={handleInputChange('p34')} defaultValue={values.p34}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"35. ¿Cómo es el clima en este dibujo?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p35" onChange={handleInputChange('p35')} defaultValue={values.p35}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"36. ¿Está soplando el viento en el dibujo?, ¿en qué dirección?, ¿qué clase de viento es?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p36" onChange={handleInputChange('p36')} defaultValue={values.p36}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"37. ¿Qué le recuerda ese árbol? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p37" onChange={handleInputChange('p37')} defaultValue={values.p37}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"38. ¿Qué más?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p38" onChange={handleInputChange('p38')} defaultValue={values.p38}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"39. ¿Es un árbol?, ¿qué le da esa impresión? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p39" onChange={handleInputChange('p39')} defaultValue={values.p39}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"40. ¿Es un árbol fuerte?, ¿qué le da esa impresión? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p40" onChange={handleInputChange('p40')} defaultValue={values.p40}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"41. ¿A quién le recuerda el árbol? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p41" onChange={handleInputChange('p41')} defaultValue={values.p41}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"42. ¿Qué es lo que más necesita el árbol?, ¿por qué?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p42" onChange={handleInputChange('p42')} defaultValue={values.p42}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"43.     ¿Alguien ha lastimado alguna vez al árbol?, ¿por qué?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p43" onChange={handleInputChange('p43')} defaultValue={values.p43}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"44. Si esto fuera una persona en lugar de (cualquier objeto dibujado aparte del árbol), ¿quién sería? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p44" onChange={handleInputChange('p44')} defaultValue={values.p44}></textarea>
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
	
export default Arbol;