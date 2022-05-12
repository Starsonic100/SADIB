import React from 'react';
import '../css/App.css';
import {createMuiTheme, 
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core"
import siguiente from '../img/siguiente.png';


let theme=createMuiTheme();
theme=responsiveFontSizes(theme);

export class ResultadosCasa extends React.Component {

    continuar = e => {
        e.preventDefault();
        this.props.siguiente();
    };

    regresar = e => {
        e.preventDefault();
        this.props.anterior();
    };
    render()
    {
        const { values, handleInputChange } = this.props;
        return(
            <MuiThemeProvider theme={theme}>
            <div className='main'>
     
                         <div className="formulario">
     
                             <div className="instrucciones">
                                     <Typography variant="h5" gutterBottom>Interpretación-Dibujo de Casa</Typography>
                             </div>
     
                                 
                             <div className="preguntas">
                             <Typography variant="h5" gutterBottom>{"Rasgos normales"}</Typography>
                                         <ul class="tamai">
                                         <Typography variant="h6" gutterBottom class="tamai">
                                             <li>{"Tiempo de 10-12 minutos, latencia menor que 30 minutos."}
                                         </li></Typography> 
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check"><label class="form-check-label" for="inlineRadio1"><br/>
                                                 <input class="form-check-input" type="radio" name="r1" id="r1_s" value="1"  onChange={handleInputChange('r1')} defaultValue={values.r1} checked />
                                                      &nbsp; Sí</label>
                                                 <label class="form-check-label" for="inlineRadio2">  <br/>
                                                 <input class="form-check-input" type="radio" name="r1" id="r1_n" value="0" onChange={handleInputChange('r1')} defaultValue={values.r1}/>
                                                    &nbsp; No</label>
                                                    </Typography>
                                             </div>
                                         </ul>
     
                                         <ul class="tamai">
                                         <Typography variant="h6" gutterBottom class="tamai">
                                             <li>Pocas borraduras</li></Typography> 
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 <label class="form-check-label" for="inlineRadio1"><br/>
                                                     <input class="form-check-input" type="radio" name="r2" id="r2_s" value="1" onChange={handleInputChange('r2')} defaultValue={values.r2} checked />
                                                      &nbsp; Sí</label>
                                                 <label class="form-check-label" for="inlineRadio2"><br/>
                                                 <input class="form-check-input" type="radio" name="r2" id="r2_n" value="0" onChange={handleInputChange('r2')} defaultValue={values.r2}/>
                                                    &nbsp; No</label>
                                                    </Typography>
                                             </div>
                                         </ul>
     
                                         <ul class="tamai">
                                             <li><Typography variant="h6" gutterBottom class="tamai">Simetria</Typography></li>
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 <label class="form-check-label" for="inlineRadio1"><br/>
                                                     <input class="form-check-input" type="radio" name="r3" id="r3_s" value="1" onChange={handleInputChange('r3')} defaultValue={values.r3} checked />
                                                      &nbsp; Sí</label>
                                                 <label class="form-check-label" for="inlineRadio2">  <br/>
                                                 <input class="form-check-input" type="radio" name="r3" id="r3_n" value="0" onChange={handleInputChange('r3')} defaultValue={values.r3}/>
                                                    &nbsp; No</label>
                                             </Typography>
                                             </div>
                                         </ul>
     
                                         <ul class="tamai">
                                             <li><Typography variant="h6" gutterBottom class="tamai">Líneas no esbozadas ni sobrenfatizadas.</Typography></li>
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 <label class="form-check-label" for="inlineRadio1"><br/>
                                                     <input class="form-check-input" type="radio" name="r4" id="r4_s" value="1"  onChange={handleInputChange('r4')} defaultValue={values.r4}/>
                                                      &nbsp; Sí</label>
                                                 <label class="form-check-label" for="inlineRadio2">  <br/>
                                                 <input class="form-check-input" type="radio" name="r4" id="r4_n" value="0" onChange={handleInputChange('r4')} defaultValue={values.r4} checked/>
                                                    &nbsp; No</label>
                                                    </Typography>
                                             </div>
                                         </ul>
     
                                         <ul class="tamai">
                                             <li><Typography variant="h6" gutterBottom class="tamai">Deficiencias aceptadas con humor</Typography></li>
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 <label class="form-check-label" for="inlineRadio1"><br/>
                                                     <input class="form-check-input" type="radio" name="r5" id="r5_s" value="1" onChange={handleInputChange('r5')} defaultValue={values.r5} checked />
                                                      &nbsp; Sí</label>
                                                 <label class="form-check-label" for="inlineRadio2">  <br/>
                                                 <input class="form-check-input" type="radio" name="r5" id="r5_n" value="0" onChange={handleInputChange('r5')} defaultValue={values.r5}/>
                                                    &nbsp; No</label>
                                                    </Typography>
                                             </div>
                                         </ul>
                                         <Typography variant="h5" gutterBottom>Proporción</Typography>
                                         <ul class="tamai">
                                             <li><Typography variant="h6" gutterBottom class="tamai">Imagen/tamaño de la forma</Typography></li>
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 <label class="form-check-label" for="inlineRadio1"><br/>
                                                     <input class="form-check-input" type="radio" name="r6" id="r6_s" value="1" onChange={handleInputChange('r6')} defaultValue={values.r6} checked />
                                                      &nbsp; Grande</label>
                                                 <label class="form-check-label" for="inlineRadio2">  <br/>
                                                 <input class="form-check-input" type="radio" name="r6" id="r6_n" value="0" onChange={handleInputChange('r6')} defaultValue={values.r6}/>
                                                    &nbsp; Pequeña</label>
                                                    </Typography>
                                             </div>
                                         </ul>
     
                                         <ul class="tamai">
                                         <li><Typography variant="h6" gutterBottom class="tamai">Detalles en la imagen/símetria</Typography></li>
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 <label class="form-check-label" for="inlineRadio1"><br/>
                                                     <input class="form-check-input" type="radio" name="r7" id="r7_x" value="1" onChange={handleInputChange('r7')} defaultValue={values.r7}/>
                                                      &nbsp; Simetria excesiva</label>
                                                 <label class="form-check-label" for="inlineRadio2">  <br/>
                                                 <input class="form-check-input" type="radio" name="r7" id="r7_y" value="0" onChange={handleInputChange('r7')} defaultValue={values.r7}/>
                                                    &nbsp; Obvias</label>
                                                 <label class="form-check-label" for="inlineRadio3">  <br/>
                                                 <input class="form-check-input" type="radio" name="r7" id="r7_z" value="2" onChange={handleInputChange('r7')} defaultValue={values.r7}/>
                                                    &nbsp; Moderadas</label>
                                                    <label class="form-check-label" for="inlineRadio4">
                                                <br/>Otros:
                                                  <textarea class="form-control" name="r7" onChange={handleInputChange('r7')} defaultValue={values.r7}></textarea></label>
                                                    </Typography>
                                             </div>
                                         </ul>
                                         <Typography variant="h5" gutterBottom>Perspectiva</Typography>
                                         <ul class="tamai">
                                         <li><Typography variant="h6" gutterBottom class="tamai">Ubicación en la página</Typography></li>
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 <label class="form-check-label" for="inlineRadio1"><br/>
                                                     <input class="form-check-input" type="radio" name="r8" id="r8_x" value="1" onChange={handleInputChange('r8')} defaultValue={values.r8}/>
                                                      &nbsp; Izquierda</label>
                                                 <label class="form-check-label" for="inlineRadio2">  <br/>
                                                 <input class="form-check-input" type="radio" name="r8" id="r8_y" value="0" onChange={handleInputChange('r8')} defaultValue={values.r8}/>
                                                    &nbsp; Derecha</label>
                                                 <label class="form-check-label" for="inlineRadio3">  <br/>
                                                 <input class="form-check-input" type="radio" name="r8" id="r8_z" value="2" onChange={handleInputChange('r8')} defaultValue={values.r8}/>
                                                    &nbsp; Ubicación en la parte superior de la página</label>
                                                    <label class="form-check-label" for="inlineRadio4"><br/>
                                                    <input class="form-check-input" type="radio" name="r8" id="r8_w" value="3" onChange={handleInputChange('r8')} defaultValue={values.r8}/>
                                                    &nbsp; Ubicación en la porción superior izquierda</label>
                                                    <label class="form-check-label" for="inlineRadio5"><br/>
                                                    <input class="form-check-input" type="radio" name="r8" id="r8_v" value="4" onChange={handleInputChange('r8')} defaultValue={values.r8}/>
                                                    &nbsp; Ubicación en la porción inferior de la página</label>
                                                    </Typography>
                                             </div>
                                         </ul>
     
                                         <ul class="tamai">
                                         <li><Typography variant="h6" gutterBottom class="tamai">Relación con el observador</Typography></li>
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 <label class="form-check-label" for="inlineRadio1"><br/>
                                                     <input class="form-check-input" type="radio" name="r9" id="r9_x" value="1" onChange={handleInputChange('r9')} defaultValue={values.r9}/>
                                                      &nbsp; Visto desde arriba</label>
                                                 <label class="form-check-label" for="inlineRadio2">  <br/>
                                                 <input class="form-check-input" type="radio" name="r9" id="r9_y" value="0" onChange={handleInputChange('r9')} defaultValue={values.r9}/>
                                                    &nbsp; Visto desde abajo</label>
                                                 <label class="form-check-label" for="inlineRadio3">  <br/>
                                                 <input class="form-check-input" type="radio" name="r9" id="r9_z" value="2" onChange={handleInputChange('r9')} defaultValue={values.r9}/>
                                                    &nbsp; Visto a distancia</label>
                                                    <label class="form-check-label" for="inlineRadio4"><br/>
                                                    <input class="form-check-input" type="radio" name="r9" id="r9_w" value="3" onChange={handleInputChange('r9')} defaultValue={values.r9}/>
                                                    &nbsp; Dibujo de espaldas</label>
                                                    </Typography>
                                             </div>
                                         </ul>
     
                                         <ul class="tamai">
                                         <li><Typography variant="h6" gutterBottom class="tamai">Línea base</Typography></li>
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 <label class="form-check-label" for="inlineRadio1"><br/>
                                                     <input class="form-check-input" type="radio" name="r10" id="r10_x" value="1" onChange={handleInputChange('r10')} defaultValue={values.r10}/>
                                                      &nbsp; Sí</label>
                                                 <label class="form-check-label" for="inlineRadio2">  <br/>
                                                 <input class="form-check-input" type="radio" name="r10" id="r10_y" value="0" onChange={handleInputChange('r10')} defaultValue={values.r10}/>
                                                    &nbsp; No</label>
                                                    </Typography>
                                             </div>
                                         </ul>
            
                                         <ul class="tamai">
                                         <li><Typography variant="h6" gutterBottom class="tamai">Transparencias</Typography></li>
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 <label class="form-check-label" for="inlineRadio1"><br/>
                                                     <input class="form-check-input" type="radio" name="r11" id="r11_x" value="1" onChange={handleInputChange('r11')} defaultValue={values.r11}/>
                                                      &nbsp; Sí</label>
                                                 <label class="form-check-label" for="inlineRadio2">  <br/>
                                                 <input class="form-check-input" type="radio" name="r11" id="r11_y" value="0" onChange={handleInputChange('r11')} defaultValue={values.r11}/>
                                                    &nbsp; No</label>
                                                    </Typography>
                                             </div>
                                         </ul>
                                         <Typography variant="h5" gutterBottom>Detalles</Typography>
                                         <ul class="tamai">
                                         <li><Typography variant="h6" gutterBottom class="tamai">Excesivos</Typography></li>
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 <label class="form-check-label" for="inlineRadio1"><br/>
                                                     <input class="form-check-input" type="radio" name="r12" id="r12_x" value="1" onChange={handleInputChange('r12')} defaultValue={values.r12}/>
                                                      &nbsp; Sí</label>
                                                 <label class="form-check-label" for="inlineRadio2">  <br/>
                                                 <input class="form-check-input" type="radio" name="r12" id="r12_y" value="0" onChange={handleInputChange('r12')} defaultValue={values.r12}/>
                                                    &nbsp; No</label>
                                                    </Typography>
                                             </div>
                                         </ul>
     
                                         <ul class="tamai">
                                         <li><Typography variant="h6" gutterBottom class="tamai">Carencia</Typography></li>
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 <label class="form-check-label" for="inlineRadio1"><br/>
                                                     <input class="form-check-input" type="radio" name="r13" id="r13_x" value="1" onChange={handleInputChange('r13')} defaultValue={values.r13}/>
                                                      &nbsp; Sí</label>
                                                 <label class="form-check-label" for="inlineRadio2">  <br/>
                                                 <input class="form-check-input" type="radio" name="r13" id="r13_y" value="0" onChange={handleInputChange('r13')} defaultValue={values.r13}/>
                                                    &nbsp; No</label>
                                                    </Typography>
                                             </div>
                                         </ul>
     
                                         <ul class="tamai">
                                         <li><Typography variant="h6" gutterBottom class="tamai">Extravagantes</Typography></li>
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 <label class="form-check-label" for="inlineRadio1"><br/>
                                                     <input class="form-check-input" type="radio" name="r14" id="r14_x" value="1" onChange={handleInputChange('r14')} defaultValue={values.r14}/>
                                                      &nbsp; Sí</label>
                                                 <label class="form-check-label" for="inlineRadio2">  <br/>
                                                 <input class="form-check-input" type="radio" name="r14" id="r14_y" value="0" onChange={handleInputChange('r14')} defaultValue={values.r14}/>
                                                    &nbsp; No</label>
                                                    </Typography>
                                             </div>
                                         </ul>
     
                                         <ul class="tamai">
                                         <li><Typography variant="h6" gutterBottom class="tamai">Detalles esenciales</Typography></li>
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 <label class="form-check-label" for="inlineRadio1"><br/>
                                                     <input class="form-check-input" type="checkbox" name="r15" id="r15_a" value="1" onChange={handleInputChange('r15')} defaultValue={values.r15}/>
                                                      &nbsp; Antropomórficos</label>
                                                 <label class="form-check-label" for="inlineRadio2">  <br/>
                                                 <input class="form-check-input" type="checkbox" name="r15" id="r15_b" value="0" onChange={handleInputChange('r15')} defaultValue={values.r15}/>
                                                    &nbsp; Chimenea</label>
                                                    <label class="form-check-label" for="inlineRadio3">  <br/>
                                                 <input class="form-check-input" type="checkbox" name="r15" id="r15_c" value="2" onChange={handleInputChange('r15')} defaultValue={values.r15}/>
                                                    &nbsp; Puerta</label>
                                                    <label class="form-check-label" for="inlineRadio4">  <br/>
                                                 <input class="form-check-input" type="checkbox" name="r15" id="r15_d" value="3" onChange={handleInputChange('r15')} defaultValue={values.r15}/>
                                                    &nbsp; Omisiones</label>
                                                    <label class="form-check-label" for="inlineRadio5">  <br/>
                                                 <input class="form-check-input" type="checkbox" name="r15" id="r15_e" value="4" onChange={handleInputChange('r15')} defaultValue={values.r15}/>
                                                    &nbsp; Techo</label>
                                                    <label class="form-check-label" for="inlineRadio6">  <br/>
                                                 <input class="form-check-input" type="checkbox" name="r15" id="r15_f" value="5" onChange={handleInputChange('r15')} defaultValue={values.r15}/>
                                                    &nbsp; Muros</label>
                                                    <label class="form-check-label" for="inlineRadio7">  <br/>
                                                 <input class="form-check-input" type="checkbox" name="r15" id="r15_g" value="6" onChange={handleInputChange('r15')} defaultValue={values.r15}/>
                                                    &nbsp; Ventanas</label>
                                                    </Typography>
                                             </div>
                                         </ul>
     
                                         <ul class="tamai">
                                         <li><Typography variant="h6" gutterBottom class="tamai">Detalles no esenciales</Typography></li>
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 <label class="form-check-label" for="inlineRadio1"><br/>
                                                     <input class="form-check-input" type="checkbox" name="r16" id="r16_a" value="1" onChange={handleInputChange('r16')} defaultValue={values.r16}/>
                                                      &nbsp; Cortinas/enfatizadas </label>
                                                 <label class="form-check-label" for="inlineRadio2">  <br/>
                                                 <input class="form-check-input" type="checkbox" name="r16" id="r16_b" value="0" onChange={handleInputChange('r16')} defaultValue={values.r16}/>
                                                    &nbsp; Canaletas/enfatizadas </label>
                                                    <label class="form-check-label" for="inlineRadio3">  <br/>
                                                 <input class="form-check-input" type="checkbox" name="r16" id="r16_c" value="2" onChange={handleInputChange('r16')} defaultValue={values.r16}/>
                                                    &nbsp; Contraventanas/cerradas </label>
                                                    <label class="form-check-label" for="inlineRadio4">
                                                <br/>Otros:
                                                  <textarea class="form-control" name="r16" onChange={handleInputChange('r16')} defaultValue={values.r16}>
                                                    </textarea></label>
                                                    </Typography>
                                             </div>
                                         </ul>
     
                                         <ul class="tamai">
                                         <li><Typography variant="h6" gutterBottom class="tamai">Detalles irrelevantes</Typography></li>
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 <label class="form-check-label" for="inlineRadio1"><br/>
                                                     <input class="form-check-input" type="checkbox" name="r17" id="r17_a" value="1" onChange={handleInputChange('r17')} defaultValue={values.r17}/>
                                                      &nbsp; Nubes, sombras </label>
                                                 <label class="form-check-label" for="inlineRadio2">  <br/>
                                                 <input class="form-check-input" type="checkbox" name="r17" id="r17_b" value="0" onChange={handleInputChange('r17')} defaultValue={values.r17}/>
                                                    &nbsp; Escalones y caminos largos o angostos </label>
                                                    <label class="form-check-label" for="inlineRadio3">  <br/>
                                                 <input class="form-check-input" type="checkbox" name="r17" id="r17_c" value="2" onChange={handleInputChange('r17')} defaultValue={values.r17}/>
                                                    &nbsp; Arbustos/excesivos </label>
                                                    <label class="form-check-label" for="inlineRadio4">
                                                <br/>Otros:
                                                  <textarea class="form-control" name="r17" onChange={handleInputChange('r17')} defaultValue={values.r17}>
                                                    </textarea></label>
                                                    </Typography>
                                             </div>
                                         </ul>
     
                                         <ul class="tamai">
                                         <li><Typography variant="h6" gutterBottom class="tamai">Sombreado de los detalles</Typography></li>
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 <label class="form-check-label" for="inlineRadio1"><br/>
                                                     <input class="form-check-input" type="radio" name="r18" id="r18_a" value="1" onChange={handleInputChange('r18')} defaultValue={values.r18}/>
                                                      &nbsp; Sí </label>
                                                 <label class="form-check-label" for="inlineRadio2">  <br/>
                                                 <input class="form-check-input" type="radio" name="r18" id="r18_b" value="0" onChange={handleInputChange('r18')} defaultValue={values.r18}/>
                                                    &nbsp; No </label>                  
                                                    </Typography>
                                             </div>
                                         </ul>
     
                                         <ul class="tamai">
                                         <li><Typography variant="h6" gutterBottom class="tamai">Calidad de la línea</Typography></li>
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 <label class="form-check-label" for="inlineRadio1"><br/>
                                                     <input class="form-check-input" type="radio" name="r19" id="r19_a" value="1" onChange={handleInputChange('r19')} defaultValue={values.r19}/>
                                                      &nbsp; Recargada </label>
                                                 <label class="form-check-label" for="inlineRadio2">  <br/>
                                                 <input class="form-check-input" type="radio" name="r19" id="r19_b" value="0" onChange={handleInputChange('r19')} defaultValue={values.r19}/>
                                                    &nbsp; Débil </label>
                                                    <label class="form-check-label" for="inlineRadio3">  <br/>
                                                 <input class="form-check-input" type="radio" name="r19" id="r19_c" value="2" onChange={handleInputChange('r19')} defaultValue={values.r19}/>
                                                    &nbsp; Fragmentada/díficultad con los ángulos </label>
                                                    <label class="form-check-label" for="inlineRadio4">
                                                <br/>Otros:
                                                  <textarea class="form-control" name="r19" onChange={handleInputChange('r19')} defaultValue={values.r19}>
                                                    </textarea></label>
                                                    </Typography>
                                             </div>
                                         </ul>
     
                                         <ul class="tamai">
                                         <li><Typography variant="h6" gutterBottom class="tamai">Observaciones</Typography></li>
                                             <div class="form-check">
                                             <Typography variant="h6" gutterBottom class="form-check">
                                                 
                                                    <label class="form-check-label" for="inlineRadio1">
                                                  <textarea class="form-control" name="r20" onChange={handleInputChange('r20')} defaultValue={values.r20}>
                                                    </textarea></label>
                                                    </Typography>
                                             </div>
                                         </ul>
                                       
                                     <button class="button-desp" onClick={this.continuar}><img src={siguiente}/></button>
                                     
     
                                
                 </div>
             </div>
            </div>    
            </MuiThemeProvider> 
        )
    }

}
export default ResultadosCasa;