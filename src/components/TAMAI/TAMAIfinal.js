import React, { Component, Fragment } from 'react';
import '../css/style.css';
import unicornio from '../img/unicornio.png';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export class TAMAIfinal extends Component {
    
    continuar = e => {
        e.preventDefault();
        this.props.siguiente();
    };

    render() {

        const { values, handleInputChange } = this.props;

        let {
            values: { p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,
                p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,
                p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,
                p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,
                p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,
                p51,p52,p53,p54,p55,p56,p57,p58,p59,p60,
                p61,p62,p63,p64,p65,p66,p67,p68,p69,p70,
                p71,p72,p73,p74,p75,p76,p77,p78,p79,p80,
                p81,p82,p83,p84,p85,p86,p87,p88,p89,p90,
                p91,p92,p93,p94,p95,p96,p97,p98,p99,p100,
                p101,p102,p103,p104,p105,p106,p107,p108,p109,p110,
                p111,p112,p113,p114,p115,p116,p117,p118,p119,p120,
                p121,p122,p123,p124,p125,p126,p127,p128,p129,p130,
                p131,p132,p133,p134,p135,p136,p137,p138,p139,p140,
                p141,p142,p143,p144,p145,p146,p147,p148,p149,p150,
                p151,p152,p153,p154,p155,p156,p157,p158,p159,p160,
                p161,p162,p163,p164,p165,p166,p167,p168,p169,p170,
                p171,p172,p173,p174,p175,rG,rP,rP1,rP2,rP21,rP22,
                rP221,rP222,rP3,rE,rE1,rE11,rE12,rE13,rE2,rS,rS1,rS11,
                rS12,rS2,rF,rH,rPa,rPa1,rPa2,rPa3,rPa31,rPa32,rPa321,
                rPa322,rPa323,rM,rM1,rM2,rM3,rM31,rM311,rM312,rM32,
                rM321,rM322,rDis,rPI,rContr}
        } = this.props;

        const Evaluar = () =>{
            
            const evaluacion= () =>{
                /*Inadaptación personal*/
                rP1=parseFloat(p2)+parseFloat(p6)+parseFloat(p13)

                rP2=parseFloat(p1)+parseFloat(p5)+parseFloat(p7)+parseFloat(p9)+parseFloat(p14)

                rP21=parseFloat(p4)+parseFloat(p8)+parseFloat(p20)+parseFloat(p62)+parseFloat(p65)
                +parseFloat(p68)+parseFloat(p69)+parseFloat(p70)+parseFloat(p71)+parseFloat(p72)
                +parseFloat(p73)+parseFloat(p74)+parseFloat(p77)

                rP22=parseFloat(p3)+parseFloat(p11)+parseFloat(p12)+parseFloat(p15)+parseFloat(p16)
                +parseFloat(p19)+parseFloat(p22)+parseFloat(p64)+parseFloat(p66)+parseFloat(p75)+parseFloat(p76)

                rP221=parseFloat(p67)+parseFloat(p61)+parseFloat(p63)+parseFloat(p10)+parseFloat(p17)
                +parseFloat(p18)+parseFloat(p21)

                rP222=rP1+rP2+rP21

                rP3=rP22+rP221

                rP=rP1+rP2+rP21+rP22+rP221
                /*----------------------------------*/

                /*Inadaptación escolar*/
                rE1=parseFloat(p24)+parseFloat(p25)+parseFloat(p26)+parseFloat(p27)+parseFloat(p78)+parseFloat(p79)

                rE11=parseFloat(p23)+parseFloat(p28)+parseFloat(p33)+parseFloat(p34)+parseFloat(p38)+parseFloat(p39)
                +parseFloat(p40)+parseFloat(p83)+parseFloat(p84)+parseFloat(p85)
                
                rE12=parseFloat(p35)+parseFloat(p36)+parseFloat(p37)+parseFloat(p41)+parseFloat(p86)+parseFloat(p87)
                
                rE13=parseFloat(p29)+parseFloat(p30)+parseFloat(p31)+parseFloat(p32)+parseFloat(p42)+parseFloat(p80)+parseFloat(p81)+parseFloat(p82)+parseFloat(p88)

                rE2=rE1+rE11+rE12

                rE=rE1+rE11+rE12+rE13
                /*----------------------------------*/

                /*Inadaptación social*/
                rS1=parseFloat(p51)+parseFloat(p52)+parseFloat(p60)

                rS11=parseFloat(p50)+parseFloat(p53)+parseFloat(p54)+parseFloat(p55)+parseFloat(p56)+parseFloat(p57)+parseFloat(p58)+parseFloat(p59)+parseFloat(p94)+parseFloat(p97)+parseFloat(p100)+parseFloat(p101)+parseFloat(p102)+parseFloat(p104)+parseFloat(p105)
                
                rS12=parseFloat(p43)+parseFloat(p44)+parseFloat(p45)+parseFloat(p46)+parseFloat(p47)+parseFloat(p48)
                +parseFloat(p49)+parseFloat(p89)+parseFloat(p90)+parseFloat(p91)+parseFloat(p92)+parseFloat(p93)
                +parseFloat(p95)+parseFloat(p96)+parseFloat(p98)+parseFloat(p99)+parseFloat(p103)

                rS2=rS1+rS11

                rS=rS1+rS11+rS12
                /*----------------------------------*/

                /*Inadaptación familiar*/
                rF=parseFloat(p106)+parseFloat(p107)+parseFloat(p108)+parseFloat(p109)+parseFloat(p110)
                /*----------------------------------*/

                /*Relación con los hermanos*/
                rH=parseFloat(p111)+parseFloat(p112)+parseFloat(p113)+parseFloat(p114)+parseFloat(p115)
                /*----------------------------------*/

                /*Relación con el padre*/
                rPa1=parseFloat(p116)+parseFloat(p117)+parseFloat(p118)+parseFloat(p119)+parseFloat(p120)
                +parseFloat(p121)+parseFloat(p122)+parseFloat(p123)+parseFloat(p124)+parseFloat(p125)

                rPa2=parseFloat(p126)+parseFloat(p127)+parseFloat(p128)+parseFloat(p129)+parseFloat(p130)

                rPa3=parseFloat(p131)+parseFloat(p132)

                rPa31=parseFloat(p133)+parseFloat(p134)+parseFloat(p135)

                rPa32=parseFloat(p136)+parseFloat(p137)
                
                rPa321=parseFloat(p138)+parseFloat(p139)+parseFloat(p140)

                rPa322=parseFloat(p141)+parseFloat(p142)

                rPa323=+parseFloat(p143)+parseFloat(p144)+parseFloat(p145)

                rPa=rPa1+rPa2+rPa3+rPa31+rPa32
                /*----------------------------------*/

                /*Relación con la madre*/
                rM1=parseFloat(p146)+parseFloat(p147)+parseFloat(p148)+parseFloat(p149)+parseFloat(p150)
                +parseFloat(p151)+parseFloat(p152)+parseFloat(p153)+parseFloat(p154)+parseFloat(p155)

                rM2=parseFloat(p156)+parseFloat(p157)+parseFloat(p158)+parseFloat(p159)+parseFloat(p160)

                rM3=parseFloat(p161)+parseFloat(p162)

                rM31=parseFloat(p163)+parseFloat(p164)+parseFloat(p165)

                rM32=parseFloat(p166)+parseFloat(p167)

                rM311=parseFloat(p168)+parseFloat(p169)

                rM312=parseFloat(p170)+parseFloat(p171)

                rM321=parseFloat(p172)+parseFloat(p173)

                rM322=parseFloat(p174)+parseFloat(p175)

                rM=rM1+rM2+rM3+rM31+rM32
                /*----------------------------------*/

                /*Puntaje general*/
                rG=rP+rE+rS
                /*----------------------------------*/

                /*Discrepancia educativa*/
                rDis=Math.abs(rPa1-rM1)+Math.abs(rPa2-rM2)+Math.abs(rPa3-rM3)
                /*----------------------------------*/

                /*Puntaje proimagen*/
                rPI=parseFloat(p61)+parseFloat(p62)+parseFloat(p88)+parseFloat(p90)+parseFloat(p94)
                +parseFloat(p97)+parseFloat(p98)+parseFloat(p104)+parseFloat(p105)
                /*----------------------------------*/

                /*Contraindicaciones*/
                rContr=parseFloat(0)

                if(p14===p75){
                    rContr=rContr+parseFloat(2)
                }

                if(p26===p82){
                    rContr=rContr+parseFloat(2)
                }

                if(p41===p88){
                    rContr=rContr+parseFloat(2)
                }

                if(p76===p93){
                    rContr=rContr+parseFloat(2)
                }

                if(p49===p95){
                    rContr=rContr+parseFloat(2)
                }

                if(p51===p96){
                    rContr=rContr+parseFloat(2)
                }
                /*----------------------------------*/

                console.log(rG)
            }

            return(
                <Fragment>
                    <div className="container">
                        <div align="center">
                            <button type="submit" class="enviar" onClickCapture={evaluacion} onClick={this.continuar} >Enviar</button>
                        </div>
                    </div>
                </Fragment>
            )
        }

        return(
            <div className="container">
                <div className="main row">
                    <div className="col-12">
                        <div className="container">
                            <div className="formulario">
                                <div className="main row">
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="container">
                                            <div className="final">
                                                <div align="center">
                                                    <MuiThemeProvider theme={theme}>
                                                        <Typography variant="h1" class="gracias">{"¡FELICIDADES!"}</Typography>
                                                        <Typography variant="h1" class="gracias">{"Has concluido tu prueba"}</Typography>
                                                        <Typography variant="h5" class="gracias">{"Da clic en el botón 'Enviar' para que sea evaluada"}</Typography>
                                                    </MuiThemeProvider>
                                                    <Evaluar/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="image-center-final">
                                            <div align="center">
                                                <img src={unicornio} width="100%" alt="Unicornio" title="Unicornio"/>
                                            </div>
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
	
export default TAMAIfinal;