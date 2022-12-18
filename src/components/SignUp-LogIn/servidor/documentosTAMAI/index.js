module.exports = (respuestas) => {
    return `
    <!doctype html>
    <html>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> 
        <style>
        

        html, body{
            overflow-x: hidden;
        }
        
        .container{
            width: 100%;
            height: auto;
        }
        
        .formulario{
            position: relative;
            width: 100%;
            margin-top:6%;
            background: #FFFFFF;
            /*background: #94CBBD;*/
            border-radius: 10px 10px 10px 10px;
        }
        
        .instrucciones{
            position:relative;
            width: 100%;
            height: auto;
            background: rgba(36, 105, 160, 0.76);
            border-radius: 10px 10px 10px 10px;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        
        .preguntas{
            position:relative;
            width: 100%;
            padding-left: 5%;
            padding-top: 3%;
            padding-bottom: 15%;
        }
        
        .seccion{
            position: relative;
            width: 95%;
            height: auto;
            background: rgba(36, 105, 160, 0.76);
            border-radius: 10px 10px 10px 10px;
            padding-top: 7.5px;
            padding-bottom: 5px;
        }
        
        .form-control{
            width: 65%;
            resize: none;
        }
        
        h1.titulo{
            font-family: 'Gothic A1';
            font-style: normal;
            font-weight: 700;
            line-height: 7vw;
            color: #2469A0;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        
        h1.gracias{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-style: normal;
            font-weight: 700;
            line-height: 5.5vw;
            font-size: 35px;
            color: #2469A0;
        }
        
        h5.gracias{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-style: normal;
            line-height: 4vw;
            color: #2469A0;
            font-size: 22px;
        }
        
        h3{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-style: normal;
            font-size: 15px;
            line-height: 20px;
            color: black;
        }
        
        h4.nombre{
            font-family: 'Gothic A1';
            font-style: normal;
            font-weight: 700;
            line-height: auto;
            color: #2469A0;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        
        h6.desc{
            font-family: 'Gothic A1';
            font-style: normal;
            font-weight: 500;
            line-height: auto;
            color: rgba(0, 0, 0, 0.8);
        }
        
        h1.func{
            font-family: 'Gothic A1';
            font-style: normal;
            font-weight: 700;
            line-height: auto;
            color: #2469A0;
        }
        
        h3.cuad{
            font-family: 'Gothic A1';
            font-style: normal;
            font-weight: 400;
            line-height: auto;
            color: rgba(0, 0, 0, 0.8);
        }
        
        h4.seccion{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 110%;
            text-align: center;
            color: #FFFFFF;
            background:none;
        }
        
        h5{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-style: normal;
            font-size: 50px;
            color: #FFFFFF;
            padding-top: 1.5%;
            padding-bottom: 1.5%;
            padding-left: 2%;
            padding-right: 2%;
        }
        
        h5.instrucciones{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 125%;
            text-align: center;
            color: #FFFFFF;
            background:none;
        }
        
        h6.tamai{
            font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-style: normal;
            font-size: 15px;
            line-height: auto;
            color: black;
            text-shadow:none;
        }
        
        ul.tamai{
            padding-top: 3%;
            list-style-image: url('../img/vineta.png');
            list-style-position: outside;
            position: relative;
        }
        
        ul.htp{
            padding-top: 3%;
            list-style-image: url('../img/vineta.png');
            list-style-position: outside;
            position: relative;
        }
        
        .image-center-final{
            position: relative;
            top: 10%;
            margin-bottom: 20%;
            margin-right: 5%;
            margin-left: 5%;
        }
        
        .final{
            width: 100%;
            height: auto;
            margin-top: 25%;
        }
        
        </style>
        <meta charset="utf-8">
        <body>
            <div className="container">    
                <div className="main row">
                    <div className="col-12">
                        <div className="container">
                            <div className="formulario">
                               
                                <div className="instrucciones">
                                    <div align="center">
                                            <h5 class="instrucciones">Respuestas dadas por el paciente</h5>
                                            <h5 class="instrucciones">Sí = 1 </h5>
                                            <h5 class="instrucciones">No = 0 </h5>
                                    </div>
                                </div>
                                <div className="preguntas">
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">1. Me gustaría tener menos edad.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p1}</h3></label>
                                                </div>
                                            </ul>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">2. Me gustaría nacer de nuevo y ser distinto de cómo soy.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p2}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">3. Todo me sale mal.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p3}</h3></label>
                                                </div>
                                            </ul>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">4. Pienso mucho en la muerte.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p4}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">5. Los demás son más fuertes que yo.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p5}</h3></label>
                                                </div>
                                            </ul>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">6. Me aburro jugando.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p6}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">7. Soy muy miedoso.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p7}</h3></label>
                                                </div>
                                            </ul>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">8. Casi siempre sueño cosas tristes.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p8}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">9. Si hubiera una catástrofe, seguro moriría.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p9}</h3></label>
                                                </div>
                                            </ul>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">10. Me da miedo la gente.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p10}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">11. Me asusto y lloro muchas veces.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p11}</h3></label>
                                                </div>
                                            </ul>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">12. Creo que soy malo.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p12}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">13. Creo que soy bastante tonto.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p13}</h3></label>
                                                </div>
                                            </ul>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">14. Soy muy vergonzoso.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p14}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">15. Muchas veces siento pena y lloro.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p15}</h3></label>
                                                </div>
                                            </ul>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">16. A veces siento que soy un desastre.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p16}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">17. La vida muchas veces es triste.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p17}</h3></label>
                                                </div>
                                            </ul>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">18. Hay veces que me cuesta concentrarme en lo que hago.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p18}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">19. Algunas veces tengo ganas de morirme.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p19}</h3></label>
                                                </div>
                                            </ul>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">20. Suelo sentir molestias y dolores en todo el cuerpo.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p20}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">21. Me tengo rabia a mí mismo alguna vez</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p21}</h3></label>
                                                </div>
                                            </ul>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">22. A veces siento que soy inútil.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p22}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">23. Me fastidia estudiar.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p23}</h3></label>
                                                </div>
                                            </ul>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">24. Saco malas notas.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p24}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">25. Paso mucho tiempo distraído.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p25}</h3></label>
                                                </div>
                                            </ul>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">26. Estudio y trabajo poco.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p26}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">27. Creo que soy bastante vago.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p27}</h3></label>
                                                </div>
                                            </ul>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">28. Me canso rápidamente cuando trabajo o estudio.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p28}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">29. Me porto muy mal en clase.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p29}</h3></label>
                                                </div>
                                            </ul>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">30. Suelo estar hablando y molestando.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p30}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">31. Soy revoltoso y desobediente.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p31}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">32. Me da igual saber que no saber.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p32}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">33. Me aburre estudiar.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p33}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">34. Me gustaría que todo el año fueran vacaciones.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p34}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">35. Me resulta aburrido todo lo que estudio.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p35}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">36. Me gustaría tener otros profesores.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p36}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">37. Estoy a disgusto con el profesor o profesores que tengo.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p37}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">38. Me gustaría que los profesores fueran de otra manera.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p38}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">39. Me fastidia ir al colegio.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p39}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">40. Deseo que se acaben las clases para marcharme.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p40}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">41. Me aburro en clase.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p41}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">42. Prefiero cambiar de colegio.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p42}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">43. Tengo muy pocos amigos.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p43}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">44. Jugando solo estoy más a gusto.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p44}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">45. Suelo estar callado cuando estoy con los demás.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p45}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">46. Me cuesta ser amigo de los otros.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p46}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">47. Prefiero estar con pocas personas.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p47}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">48. Los compañeros se están metiendo siempre conmigo.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p48}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">49. Los demás son malos y envidiosos.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p49}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">50. Me gustaría ser muy poderoso para mandar.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p50}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">51. Siempre estoy discutiendo</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p51}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">52. Me enfado muchas veces y peleo.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p52}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">53. Tengo muy mal genio.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p53}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">54. Me suelen decir que soy inquieto.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p54}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">55. Me suelen decir que soy revoltoso.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p55}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">56. Me suelen decir que soy sucio y descuidado.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p56}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">57. Me suelen decir que soy desordenado.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p57}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">58. Rompo y ensucio enseguida las cosas.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p58}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">59. Me aburro y me canso enseguida de lo que estoy haciendo.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p59}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">60. Me enfado, discuto y peleo con facilidad.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p60}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">61. Creo que soy bueno, guapo, listo, trabajador y alegre.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p61}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">62. Casi siempre estoy alegre.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p62}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">63. Los demás piensan que soy valiente.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p63}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">64. Casi siempre estoy tranquilo, sin temblar ni enrojecer.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p64}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">65. Normalmente estoy bien, sin mareos ni ahogos.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p65}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">66. Creo que soy una persona tranquila y sin preocupaciones.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p66}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">67. La culpa de lo malo que me pasa la suelen tener los demás.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p67}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">68. Me gustaría ser de la misma forma que soy ahora.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p68}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">69. Cuando me levanto me encuentro bien, sin dolores.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p69}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">70. Normalmente estoy bien, sin marearme ni ganas de devolver.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p70}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">71. Casi siempre tengo bien el estómago.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p71}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">72. Casi siempre tengo bien la cabeza.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p72}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">73. Como con mucho apetito y duermo bien.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p73}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">74. Tengo muy buena salud.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p74}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">75. Hablo con las personas mayores, sin vergüenza y tranquilo.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p75}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">76. Todo el mundo me quiere.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p76}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">77. Soy una persona muy feliz.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p77}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">78. Estudio y trabajo bastante.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p78}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">79. Saco buenas notas.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p79}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">80. Normalmente estoy atento y aplicado.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p80}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">81. Acostumbro a estar en silencio en clase</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p81}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">82. Mis profesores están contentos con mi comportamiento.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p82}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">83. Me agrada hacer los trabajos de matemáticas.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p83}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">84. Me gusta estudiar las ciencias naturales y sociales.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p84}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">85. Me gustan los ejercicios de conocimientos de lenguaje.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p85}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">86. Mis profesores son buenos y amables.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p86}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">87. Mis profesores enseñan bien.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p87}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">88. En clase estoy más a gusto que en una fiesta.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p88}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">89. Me gusta estar con mucha gente.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p89}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">90. Soy muy chistoso y hablador.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p90}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">91. Me aburro cuando estoy solo.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p91}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">92. Prefiero salir con los amigos que ver televisión.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p92}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">93. Enseguida me hago amigo de los demás.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p93}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">94. Me comporto igual cuando estoy solo que con gente.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p94}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">95. Casi todas las personas que conozco son buenas.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p95}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">96. Normalmente prefiero callar que discutir.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p96}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">97. Me quedo muy tranquilo si se burlan de mí o me critican.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p97}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">98. Cuando pierdo en el juego me alegro por los que ganan.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p98}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">99. Prefiero ser uno más de la cuadrilla que ser el jefe.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p99}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">100. Soy muy cuidadoso con las cosas.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p100}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">101. Me dicen que soy muy obediente.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p101}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">102. Casi siempre hago las cosas sin resongar.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p102}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">103. Trato con mucho cariño a los animales.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p103}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">104. Me suelen decir que me porto bien y soy bueno.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p104}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">105. Siempre, siempre digo la verdad.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p105}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="seccion">
                                        <div align="center">
                                            <MuiThemeProvider theme={theme}>
                                                <Typography variant="h4" class="seccion">Contesta las preguntas marcadas (*) solo si conoces a ambos padres</Typography>
                                            </MuiThemeProvider>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">106. Mi casa la encuentro triste, estoy a disgusto con ella.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p106}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">*107. Mis padres discuten muchas veces.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p107}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">*108. Mis padres muchas veces se enfadan.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p108}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">*109. Mis padres se quieren poco.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p109}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">110. En mi casa hay bastantes líos.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p110}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="seccion">
                                        <div align="center">
                                            <MuiThemeProvider theme={theme}>
                                                <Typography variant="h4" class="seccion">Contesta las siguientes preguntas solo si tienes hermanos</Typography>
                                            </MuiThemeProvider>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">111. Peleo y me llevo mal con mis hermanos.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p111}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">112. Algunos hermanos se meten mucho conmigo.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p112}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">113. Me gustaría no tener hermanos.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p113}</h3></label>
                                                </div>
                                            </ul>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">114. Algunos hermanos me tienen envidia.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p114}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">115. Alguna vez desea que desaparezca algún hermano.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p115}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">116. Me trata muy bien, como a una persona mayor.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p116}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">117. Me quiere mucho.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p117}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">118. Me anima a hacer las cosas.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p118}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">119. Me castiga o riñe pocas veces, cuando es necesario.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p119}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">120. Me deja actuar a mí solo, tiene confianza en mí.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p120}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">121. Está muy pendiente de mí, preocupado por lo que hago.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p121}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">122. Suele estar con miedo de que me pase algo.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p122}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">123. Me ayuda demasiado en lo que tengo que hacer.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p123}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">124. Se preocupa de lo que he hecho y con quien he estado.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p124}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">125. Me defiende contra todos los que me hacen algo.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p125}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">126. Me deja hacer todo lo que yo quiero.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p126}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">127. Le hace gracia lo que digo o hago.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p127}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">128. Muy pocas veces me castiga o riñe.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p128}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">129. Casi todo lo que pido me lo concede.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p129}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">130. Llorando o enfadándome consigo siempre lo que deseo de él.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p130}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">131. Siempre me está llamando la atención.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p131}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">132. Quiere que sea como una persona mayor.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p132}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">133. Me exige y me controla todo lo que hago.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p133}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">134. Todo lo que hago le parece mal.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p134}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">135. Se enfada por cualquier cosa que hago.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p135}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">136. Me hace poco caso cuando hablo</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p136}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">137. Habla poco conmigo.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p137}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">138. Quiere a otros hermanos más que a mí.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p138}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">139. Se preocupa poco por mí.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p139}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">140. Muchas veces siento que me tiene abandonado.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p140}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">141. Me suele pegar muchas veces.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p141}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">142. Siempre me está molestando.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p142}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">143. Me quiere poco.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p143}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">144. Es serio conmigo.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p144}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">145. Me tiene manía.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p145}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">146. Me trata muy bien, como a una persona mayor.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p146}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">147. Me quiere mucho.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p147}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">148. Me anima a hacer las cosas.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p148}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">149. Me castiga o riñe pocas veces, cuando es necesario.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p149}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">150. Me deja actuar a mí solo, tiene confianza en mí.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p150}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">151. Está muy pendiente de mí, preocupada por lo que hago.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p151}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">152. Suele estar con miedo de que me pase algo.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p152}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">153. Me ayuda demasiado en lo que tengo que hacer.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p153}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">154. Se preocupa de lo que he hecho y con quien he estado.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p154}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">155. Me defiende contra todos los que me hacen algo.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p155}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">156. Me deja hacer todo lo que yo quiero.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p156}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">157. Le hace gracia lo que digo o hago.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p157}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">158. Muy pocas veces me castiga o riñe.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p158}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">159. Casi todo lo que pido me lo concede.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p159}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">160. Llorando o enfadándome consigo siempre lo que deseo de ella.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p160}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">161. Siempre me está llamando la atención.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p161}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">162. Quiere que sea como una persona mayor.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p162}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">163. Me exige y me controla todo lo que hago.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p163}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">164. Todo lo que hago le parece mal.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p164}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">165. Se enfada por cualquier cosa que hago.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p165}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">166. Me hace poco caso cuando hablo</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p166}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">167. Habla poco conmigo.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p167}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">168. Quiere a otros hermanos más que a mí.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p168}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">169. Se preocupa poco por mí.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p169}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">170. Muchas veces siento que me tiene abandonado.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p170}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">171. Me suele pegar muchas veces.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p171}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">172. Siempre me está molestando.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p172}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">173. Me quiere poco.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p173}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div class="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">174. Es seria conmigo.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p174}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
    
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <ul class="tamai">
                                                <li>
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h6" class="tamai">175. Me tiene manía.</Typography>
                                                    </MuiThemeProvider>
                                                </li>
                                                <div class="form-check">
                                                    <label class="form-check-label" for="inlineRadio1"><h3>${respuestas.p175}</h3></label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </body>
        </html>
    `;
};