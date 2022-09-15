import React, { Component } from 'react';
import '../css/style.css';
import anterior from '../img/anterior.png';
import siguiente from '../img/siguiente.png';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export class Casa extends Component {

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
                                            <Typography variant="h5" class="instrucciones">{"Contesta las siguientes preguntas respecto a la casa"}</Typography>
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
                                                        <Typography variant="h6" class="tamai">{"1. ¿Cuántos pisos tiene la casa? (¿Tiene escaleras?)."}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p1" onChange={handleInputChange('p1')} defaultValue={values.p1}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"2. ¿De qué está hecha la casa?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p2" onChange={handleInputChange('p2')} defaultValue={values.p2}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"3. ¿Es suya?, ¿de quién es?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p3" onChange={handleInputChange('p3')} defaultValue={values.p3}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"4. ¿En la casa de quién estaba pensando cuando la dibujaba? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p4" onChange={handleInputChange('p4')} defaultValue={values.p4}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"5. ¿Le gustaría que fuera suya esa casa?, ¿por qué?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p5" onChange={handleInputChange('p5')} defaultValue={values.p5}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"6. Si fuera dueño(a) de esa casa y pudiera hacer lo que quisiera con ella, ¿qué cuarto escogería para usted?, ¿por qué?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p6" onChange={handleInputChange('p6')} defaultValue={values.p6}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"7. ¿Quién le gustaría que viviera en esa casa con usted? ¿Por qué?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p7" onChange={handleInputChange('p7')} defaultValue={values.p7}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"8. Cuando mira la casa, ¿le parece que se encuentra cerca o lejos?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p8" onChange={handleInputChange('p8')} defaultValue={values.p8}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"9. Cuando mira la casa, ¿tiene la impresión de que se encuentra por arriba de usted, debajo de usted o al mismo nivel que usted?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p9" onChange={handleInputChange('p9')} defaultValue={values.p9}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"10. ¿Qué le hace pensar o recordar la casa?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p10" onChange={handleInputChange('p10')} defaultValue={values.p10}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"11. ¿Qué más? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p11" onChange={handleInputChange('p11')} defaultValue={values.p11}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"12. ¿Es una casa feliz y amistosa? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p12" onChange={handleInputChange('p12')} defaultValue={values.p12}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"13. ¿Qué hay en la casa que le da esa impresión? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p13" onChange={handleInputChange('p13')} defaultValue={values.p13}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"14.¿La mayoría de las casas son así?, ¿por qué piensa eso?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p14" onChange={handleInputChange('p14')} defaultValue={values.p14}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"15. ¿Cómo es el clima en este dibujo? (época del año y momento del día, cielo, temperatura)"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p15" onChange={handleInputChange('p15')} defaultValue={values.p15}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"16. ¿Qué tipo de clima le gusta? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p16" onChange={handleInputChange('p16')} defaultValue={values.p16}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"17. ¿A quién le recuerda esa casa?, ¿por qué? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p17" onChange={handleInputChange('p17')} defaultValue={values.p17}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"18. ¿Qué es lo que más necesita la casa?, ¿por qué? "}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p18" onChange={handleInputChange('p18')} defaultValue={values.p18}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"19. Si esto fuera una persona en lugar de cualquier objeto dibujado aparte de la casa, ¿quién sería?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p19" onChange={handleInputChange('p19')} defaultValue={values.p19}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"20. ¿Hacía donde lleva la chimenea en esta casa?"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p20" onChange={handleInputChange('p20')} defaultValue={values.p20}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">{"21. Interrogatorio acerca de la distribución. (Dibujo y designación, por ejemplo, ¿Qué cuarto esta representado por cada ventana? ¿Quién se encuentra ahí generalmente?)"}</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <textarea class="form-control" name="p21" onChange={handleInputChange('p21')} defaultValue={values.p21}></textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div className="col-lg-10">
                                            <button class="button" onClick={this.regresar}><img src={anterior}/></button>
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
	
export default Casa;