module.exports = (respuestas) => {
    return `
    <!doctype html>
    <html>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
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
                                       
                                    </div>
                                </div>
                                <div className="preguntas">
                                    
                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                                                                                   
                                                        <h6 class="tamai">1. ¿Cuántos pisos tiene la casa? (¿Tiene escaleras?).</h6>

                                                <textarea class="form-control" name="p1" >${respuestas.p1}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">2. ¿De qué está hecha la casa?</h6>
                                                <textarea class="form-control" name="p2" >${respuestas.p2}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">3. ¿Es suya?, ¿de quién es?</h6>
                                                <textarea class="form-control" name="p3" >${respuestas.p3}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">4. ¿En la casa de quién estaba pensando cuando la dibujaba? </h6>
                                                <textarea class="form-control" name="p4" >${respuestas.p4}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">5. ¿Le gustaría que fuera suya esa casa?, ¿por qué?</h6>
                                                <textarea class="form-control" name="p5" >${respuestas.p5}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">6. Si fuera dueño(a) de esa casa y pudiera hacer lo que quisiera con ella, ¿qué cuarto escogería para usted?, ¿por qué?</h6>
                                                <textarea class="form-control" name="p6" >${respuestas.p6}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">7. ¿Quién le gustaría que viviera en esa casa con usted? ¿Por qué?</h6>
                                                <textarea class="form-control" name="p7" >${respuestas.p7}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">8. Cuando mira la casa, ¿le parece que se encuentra cerca o lejos?</h6>
                                                <textarea class="form-control" name="p8" >${respuestas.p8}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">9. Cuando mira la casa, ¿tiene la impresión de que se encuentra por arriba de usted, debajo de usted o al mismo nivel que usted?</h6>
                                                <textarea class="form-control" name="p9" >${respuestas.p9}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">10. ¿Qué le hace pensar o recordar la casa?</h6>
                                                <textarea class="form-control" name="p10" >${respuestas.p10}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">11. ¿Qué más? </h6>
                                                <textarea class="form-control" name="p11" >${respuestas.p11}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">12. ¿Es una casa feliz y amistosa? </h6>
                                                <textarea class="form-control" name="p12" >${respuestas.p12}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">13. ¿Qué hay en la casa que le da esa impresión? </h6>
                                                <textarea class="form-control" name="p13" >${respuestas.p13}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">14.¿La mayoría de las casas son así?, ¿por qué piensa eso?</h6>
                                                <textarea class="form-control" name="p14" >${respuestas.p14}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">15. ¿Cómo es el clima en este dibujo? (época del año y momento del día, cielo, temperatura)</h6>
                                                <textarea class="form-control" name="p15" >${respuestas.p15}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">16. ¿Qué tipo de clima le gusta? </h6>
                                                <textarea class="form-control" name="p16" >${respuestas.p16}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">17. ¿A quién le recuerda esa casa?, ¿por qué? </h6>
                                                <textarea class="form-control" name="p17" >${respuestas.p17}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">18. ¿Qué es lo que más necesita la casa?, ¿por qué? </h6>
                                                <textarea class="form-control" name="p18" >${respuestas.p18}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">19. Si esto fuera una persona en lugar de cualquier objeto dibujado aparte de la casa, ¿quién sería?</h6>
                                                <textarea class="form-control" name="p19" >${respuestas.p19}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">20. ¿Hacía donde lleva la chimenea en esta casa?</h6>
                                                <textarea class="form-control" name="p20" >${respuestas.p20}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">21. Interrogatorio acerca de la distribución. (Dibujo y designación, por ejemplo, ¿Qué cuarto esta representado por cada ventana? ¿Quién se encuentra ahí generalmente?)</h6>
                                                <textarea class="form-control" name="p21">${respuestas.p21}</textarea>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">22. ¿Qué clase de árbol es?</h6>
                                                <textarea class="form-control" name="p22" >${respuestas.p22}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">23. ¿Dónde se encuentra realmente ese árbol?</h6>
                                                <textarea class="form-control" name="p23" >${respuestas.p23}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">24. ¿Aproximadamente qué edad tiene el árbol?</h6>
                                                <textarea class="form-control" name="p24" >${respuestas.p24}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">25. ¿Está vivo el árbol?</h6>
                                                <textarea class="form-control" name="p25" >${respuestas.p25}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">26. ¿Qué hay en él que le dé la impresión de estar vivo?</h6>
                                                <textarea class="form-control" name="p26" >${respuestas.p26}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">27. ¿Qué causó su muerte? (si no está vivo)</h6>
                                                <textarea class="form-control" name="p27" >${respuestas.p27}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">28.     ¿Volverá a estar vivo? </h6>
                                                <textarea class="form-control" name="p28" >${respuestas.p28}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">29.     ¿Alguna parte del árbol está muerta?, ¿cuál?, ¿qué cree que ocasionó su muerte?, ¿por cuánto tiempo ha estado muerta? </h6>
                                                <textarea class="form-control" name="p29" >${respuestas.p29}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">30. ¿A qué se parece más ese árbol, a un hombre o a una mujer?</h6>
                                                <textarea class="form-control" name="p30" >${respuestas.p30}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">31. ¿Qué hay en el árbol que le da esa impresión?</h6>
                                                <textarea class="form-control" name="p31" >${respuestas.p31}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">32. Si fuera una persona en lugar de un árbol, ¿hacia dónde estaría mirando? </h6>
                                                <textarea class="form-control" name="p32" >${respuestas.p32}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">33. ¿El árbol se encuentra solo o dentro de un grupo de árboles? </h6>
                                                <textarea class="form-control" name="p33" >${respuestas.p33}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">34. Cuando mira el árbol ¿tiene la impresión de que se encuentra por encima de usted, debajo de usted o al mismo nivel que usted? </h6>
                                                <textarea class="form-control" name="p34" >${respuestas.p34}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">35. ¿Cómo es el clima en este dibujo?</h6>
                                                <textarea class="form-control" name="p35" >${respuestas.p35}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">36. ¿Está soplando el viento en el dibujo?, ¿en qué dirección?, ¿qué clase de viento es?</h6>
                                                <textarea class="form-control" name="p36" >${respuestas.p36}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">37. ¿Qué le recuerda ese árbol? </h6>
                                                <textarea class="form-control" name="p37" >${respuestas.p37}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">38. ¿Qué más?</h6>
                                                <textarea class="form-control" name="p38" >${respuestas.p38}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">39. ¿Es un árbol?, ¿qué le da esa impresión? </h6>
                                                <textarea class="form-control" name="p39" >${respuestas.p39}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">40. ¿Es un árbol fuerte?, ¿qué le da esa impresión? </h6>
                                                <textarea class="form-control" name="p40" >${respuestas.p40}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">41. ¿A quién le recuerda el árbol? </h6>
                                                <textarea class="form-control" name="p41" >${respuestas.p41}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">42. ¿Qué es lo que más necesita el árbol?, ¿por qué?</h6>
                                                <textarea class="form-control" name="p42" >${respuestas.p42}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">43.     ¿Alguien ha lastimado alguna vez al árbol?, ¿por qué?</h6>
                                                <textarea class="form-control" name="p43" >${respuestas.p43}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">44. Si esto fuera una persona en lugar de (cualquier objeto dibujado aparte del árbol), ¿quién sería? </h6>
                                                <textarea class="form-control" name="p44" >${respuestas.p44}</textarea>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">45. ¿Es un hombre o una mujer?</h6>
                                                <textarea class="form-control" name="p45" >${respuestas.p45}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">46. ¿Qué edad tiene?</h6>
                                                <textarea class="form-control" name="p46" >${respuestas.p46}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">47. ¿Quién es?</h6>
                                                <textarea class="form-control" name="p47" >${respuestas.p47}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">48. ¿Es un pariente, un amigo o quién? </h6>
                                                <textarea class="form-control" name="p48" >${respuestas.p48}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">49. ¿En quién estaba pensando cuando dibujaba?</h6>
                                                <textarea class="form-control" name="p49" >${respuestas.p49}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">50. ¿Qué está haciendo?, ¿dónde lo está haciendo? </h6>
                                                <textarea class="form-control" name="p50" >${respuestas.p50}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">51. ¿En qué está pensando?</h6>
                                                <textarea class="form-control" name="p51" >${respuestas.p51}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">52. ¿Cómo se siente?, ¿por qué?</h6>
                                                <textarea class="form-control" name="p52" >${respuestas.p52}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">53. ¿Qué le hace pensar o qué le recuerda esa persona? </h6>
                                                <textarea class="form-control" name="p53" >${respuestas.p53}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">54. ¿Qué más?</h6>
                                                <textarea class="form-control" name="p54" >${respuestas.p54}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">55. ¿Está sana esa persona?</h6>
                                                <textarea class="form-control" name="p55" >${respuestas.p55}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">56. ¿Qué es lo que le da esa impresión?</h6>
                                                <textarea class="form-control" name="p56" >${respuestas.p56}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">57. ¿Es feliz esa persona?</h6>
                                                <textarea class="form-control" name="p57" >${respuestas.p57}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">58. ¿Qué le da esa impresión? </h6>
                                                <textarea class="form-control" name="p58" >${respuestas.p58}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">59. ¿Es así la mayoría de la gente?, ¿por qué?</h6>
                                                <textarea class="form-control" name="p59" >${respuestas.p59}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">60. ¿Cree que le agradaría esa persona? </h6>
                                                <textarea class="form-control" name="p60" >${respuestas.p60}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">61. ¿Por qué?</h6>
                                                <textarea class="form-control" name="p61" >${respuestas.p61}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">62. ¿Cómo es el clima en el dibujo? </h6>
                                                <textarea class="form-control" name="p62" >${respuestas.p62}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">63. ¿A quién le recuerda esa persona?, ¿por qué? </h6>
                                                <textarea class="form-control" name="p63" >${respuestas.p63}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">64. ¿Qué es lo que más necesita esa persona?, ¿por qué? </h6>
                                                <textarea class="form-control" name="p64" >${respuestas.p64}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">65. ¿Alguien ha herido alguna vez a esa persona?, ¿de qué manera? </h6>
                                                <textarea class="form-control" name="p65" >${respuestas.p65}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">66. Si esto fuera una persona en lugar de (cualquier objeto dibujado aparte de la persona), ¿quién sería?</h6>
                                                <textarea class="form-control" name="p66" >${respuestas.p66}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">67. ¿Qué tipo de ropa lleva puesta esta persona?</h6>
                                                <textarea class="form-control" name="p67" >${respuestas.p67}</textarea>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="main row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul class="htp">
                                               <h6 class="tamai">68. (Pídale al sujeto que dibuje al Sol y la línea base en cada dibujo) Suponga que el Sol fuera alguna persona que usted conoce ¿quién sería? </h6>
                                                <textarea class="form-control" name="p68" >${respuestas.p68}</textarea>
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
        </meta charset="utf-8">
    </html>
`;
};