import React, { Component, Fragment } from 'react';
import Axios from "axios";
import '../css/style.css';
import unicornio from '../img/unicornio.png';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export class TAMAIfinal extends Component {

    render() {

        const {
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
                p171,p172,p173,p174,p175}
        } = this.props;

        const Evaluar = () =>{
            
            const evaluacion= () =>{

                ////////////////Primera iteración de evaluacion////////////////
                /*Inadaptación personal*/
                const rP1=parseFloat(p2)+parseFloat(p6)+parseFloat(p13)

                const rP2=parseFloat(p1)+parseFloat(p5)+parseFloat(p7)+parseFloat(p9)+parseFloat(p14)

                const rP21=parseFloat(p4)+parseFloat(p8)+parseFloat(p20)+parseFloat(p62)+parseFloat(p65)
                +parseFloat(p68)+parseFloat(p69)+parseFloat(p70)+parseFloat(p71)+parseFloat(p72)
                +parseFloat(p73)+parseFloat(p74)+parseFloat(p77)

                const rP22=parseFloat(p3)+parseFloat(p11)+parseFloat(p12)+parseFloat(p15)+parseFloat(p16)
                +parseFloat(p19)+parseFloat(p22)+parseFloat(p64)+parseFloat(p66)+parseFloat(p75)+parseFloat(p76)

                const rP221=parseFloat(p67)+parseFloat(p61)+parseFloat(p63)+parseFloat(p10)+parseFloat(p17)
                +parseFloat(p18)+parseFloat(p21)

                const rP222=rP1+rP2+rP21

                const rP3=rP22+rP221

                const rP=rP1+rP2+rP21+rP22+rP221
                /*----------------------------------*/

                /*Inadaptación escolar*/
                const rE1=parseFloat(p24)+parseFloat(p25)+parseFloat(p26)+parseFloat(p27)+parseFloat(p78)+parseFloat(p79)

                const rE11=parseFloat(p23)+parseFloat(p28)+parseFloat(p33)+parseFloat(p34)+parseFloat(p38)+parseFloat(p39)
                +parseFloat(p40)+parseFloat(p83)+parseFloat(p84)+parseFloat(p85)
                
                const rE12=parseFloat(p35)+parseFloat(p36)+parseFloat(p37)+parseFloat(p41)+parseFloat(p86)+parseFloat(p87)
                
                const rE13=parseFloat(p29)+parseFloat(p30)+parseFloat(p31)+parseFloat(p32)+parseFloat(p42)+parseFloat(p80)+parseFloat(p81)+parseFloat(p82)+parseFloat(p88)

                const rE2=rE1+rE11+rE12

                const rE=rE1+rE11+rE12+rE13
                /*----------------------------------*/

                /*Inadaptación social*/
                const rS1=parseFloat(p51)+parseFloat(p52)+parseFloat(p60)

                const rS11=parseFloat(p50)+parseFloat(p53)+parseFloat(p54)+parseFloat(p55)+parseFloat(p56)+parseFloat(p57)+parseFloat(p58)+parseFloat(p59)+parseFloat(p94)+parseFloat(p97)+parseFloat(p100)+parseFloat(p101)+parseFloat(p102)+parseFloat(p104)+parseFloat(p105)
                
                const rS12=parseFloat(p43)+parseFloat(p44)+parseFloat(p45)+parseFloat(p46)+parseFloat(p47)+parseFloat(p48)
                +parseFloat(p49)+parseFloat(p89)+parseFloat(p90)+parseFloat(p91)+parseFloat(p92)+parseFloat(p93)
                +parseFloat(p95)+parseFloat(p96)+parseFloat(p98)+parseFloat(p99)+parseFloat(p103)

                const rS2=rS1+rS11

                const rS=rS1+rS11+rS12
                /*----------------------------------*/

                /*Inadaptación familiar*/
                const rF=parseFloat(p106)+parseFloat(p107)+parseFloat(p108)+parseFloat(p109)+parseFloat(p110)
                /*----------------------------------*/

                /*Relación con los hermanos*/
                const rH=parseFloat(p111)+parseFloat(p112)+parseFloat(p113)+parseFloat(p114)+parseFloat(p115)
                /*----------------------------------*/

                /*Relación con el padre*/
                const rPa1=parseFloat(p116)+parseFloat(p117)+parseFloat(p118)+parseFloat(p119)+parseFloat(p120)
                +parseFloat(p121)+parseFloat(p122)+parseFloat(p123)+parseFloat(p124)+parseFloat(p125)

                const rPa2=parseFloat(p126)+parseFloat(p127)+parseFloat(p128)+parseFloat(p129)+parseFloat(p130)

                const rPa3=parseFloat(p131)+parseFloat(p132)

                const rPa31=parseFloat(p133)+parseFloat(p134)+parseFloat(p135)

                const rPa32=parseFloat(p136)+parseFloat(p137)
                
                const rPa321=parseFloat(p138)+parseFloat(p139)+parseFloat(p140)

                const rPa322=parseFloat(p141)+parseFloat(p142)

                const rPa323=+parseFloat(p143)+parseFloat(p144)+parseFloat(p145)

                const rPa=rPa1+rPa2+rPa3+rPa31+rPa32
                /*----------------------------------*/

                /*Relación con la madre*/
                const rM1=parseFloat(p146)+parseFloat(p147)+parseFloat(p148)+parseFloat(p149)+parseFloat(p150)
                +parseFloat(p151)+parseFloat(p152)+parseFloat(p153)+parseFloat(p154)+parseFloat(p155)

                const rM2=parseFloat(p156)+parseFloat(p157)+parseFloat(p158)+parseFloat(p159)+parseFloat(p160)

                const rM3=parseFloat(p161)+parseFloat(p162)

                const rM31=parseFloat(p163)+parseFloat(p164)+parseFloat(p165)

                const rM32=parseFloat(p166)+parseFloat(p167)

                const rM311=parseFloat(p168)+parseFloat(p169)

                const rM312=parseFloat(p170)+parseFloat(p171)

                const rM321=parseFloat(p172)+parseFloat(p173)

                const rM322=parseFloat(p174)+parseFloat(p175)

                const rM=rM1+rM2+rM3+rM31+rM32
                /*----------------------------------*/

                /*Puntaje general*/
                const rG=rP+rE+rS
                /*----------------------------------*/

                /*Discrepancia educativa*/
                const rDis=Math.abs(rPa1-rM1)+Math.abs(rPa2-rM2)+Math.abs(rPa3-rM3)
                /*----------------------------------*/

                /*Puntaje proimagen*/
                const rPI=parseFloat(p61)+parseFloat(p62)+parseFloat(p88)+parseFloat(p90)+parseFloat(p94)
                +parseFloat(p97)+parseFloat(p98)+parseFloat(p104)+parseFloat(p105)
                /*----------------------------------*/

                /*Contraindicaciones*/
                let rContr=0

                if(p14===p75){
                    rContr=rContr+2
                }

                if(p26===p82){
                    rContr=rContr+2
                }

                if(p41===p88){
                    rContr=rContr+2
                }

                if(p76===p93){
                    rContr=rContr+2
                }

                if(p49===p95){
                    rContr=rContr+2
                }

                if(p51===p96){
                    rContr=rContr+2
                }
                /*----------------------------------*/

                ////////////////Segunda iteración de evaluacion////////////////
                let per_p=0
                let per_p1=0
                let per_p2=0
                let per_p21=0
                let per_p22=0
                let per_p221=0
                let per_p222=0
                let per_p3=0
                let per_E=0
                let per_E1=0
                let per_E11=0
                let per_E12=0
                let per_E13=0
                let per_E2=0
                let per_s=0
                let per_s1=0
                let per_s11=0
                let per_s12=0
                let per_s2=0
                let per_F=0
                let per_H=0
                let per_Pa=0
                let per_Pa1=0
                let per_Pa2=0
                let per_Pa3=0
                let per_Pa31=0
                let per_Pa32=0
                let per_Pa321=0
                let per_Pa322=0
                let per_Pa323=0
                let per_M=0
                let per_M1=0
                let per_M2=0
                let per_M3=0
                let per_M31=0
                let per_M311=0
                let per_M312=0
                let per_M32=0
                let per_M321=0
                let per_M322=0
                let per_PI=0
                let per_Contr=0

                if(rP>=0&&rP<=3){
                    per_p=5
                }else if(rP==4||rP==5){
                    per_p=20
                }else if(rP==6||rP==7){
                    per_p=40
                }else if(rP==8||rP==9){
                    per_p=60
                }else if(rP==10||rP==11){
                    per_p=80
                }else if(rP==12||rP==13){
                    per_p=95
                }else if(rP>=14){
                    per_p=99
                }

                switch(rP1){
                    case 0: per_p1=40
                    break;
                    case 1: per_p1=80
                    break;
                    case 2: per_p1=95
                    break;
                    default: per_p1=99
                    break;
                }

                switch(rP2){
                    case 0: per_p2=20
                    break;
                    case 1: per_p2=40
                    break;
                    case 2: per_p2=60
                    break;
                    case 3: per_p2=80
                    break;
                    case 4: per_p2=95
                    break;
                    default: per_p2=99
                    break;
                }

                switch(rP21){
                    case 0: per_p21=5
                    break;
                    case 1: per_p21=20
                    break;
                    case 2: per_p21=40
                    break;
                    case 3: per_p21=60
                    break;
                    case 4: per_p21=80
                    break;
                    case 5: per_p21=95
                    break;
                    case 6: per_p21=95
                    break;
                    default: per_p21=99
                    break;
                }

                switch(rP22){
                    case 0: per_p22=5
                    break;
                    case 1: per_p22=20
                    break;
                    case 2: per_p22=40
                    break;
                    case 3: per_p22=60
                    break;
                    case 4: per_p22=80
                    break;
                    case 5: per_p22=95
                    break;
                    case 6: per_p22=95
                    break;
                    default: per_p22=99
                    break;
                }

                switch(rP221){
                    case 0: per_p221=40
                    break;
                    case 1: per_p221=80
                    break;
                    case 2: per_p221=95
                    break;
                    default: per_p221=99
                    break;
                }

                switch(rP222){
                    case 0: per_p222=1
                    break;
                    case 1: per_p222=1
                    break;
                    case 2: per_p222=1
                    break;
                    case 3: per_p222=5
                    break;
                    case 4: per_p222=20
                    break;
                    case 5: per_p222=40
                    break;
                    case 6: per_p222=60
                    break;
                    case 7: per_p222=80
                    break;
                    case 8: per_p222=80
                    break;
                    case 9: per_p222=95
                    break;
                    case 10: per_p222=95
                    break;
                    default: per_p222=99
                    break;
                }

                switch(rP3){
                    case 0: per_p3=1
                    break;
                    case 1: per_p3=1
                    break;
                    case 2: per_p3=1
                    break;
                    case 3: per_p3=5
                    break;
                    case 4: per_p3=20
                    break;
                    case 5: per_p3=40
                    break;
                    case 6: per_p3=60
                    break;
                    case 7: per_p3=80
                    break;
                    case 8: per_p3=95
                    break;
                    case 9: per_p3=95
                    break;
                    default: per_p3=99
                    break;
                }

                if(rE>=0&&rE<=2){
                    per_E=5
                }else if(rE==3||rE==4){
                    per_E=20
                }else if(rE==5||rE==6){
                    per_E=40
                }else if(rE==7||rE==8){
                    per_E=60
                }else if(rE>=9&&rE<=11){
                    per_E=80
                }else if(rE==12||rE==13){
                    per_E=95
                }else if(rE>=14){
                    per_E=99
                }

                switch(rE1){
                    case 0: per_E1=20
                    break;
                    case 1: per_E1=40
                    break;
                    case 2: per_E1=60
                    break;
                    case 3: per_E1=80
                    break;
                    case 4: per_E1=80
                    break;
                    case 5: per_E1=95
                    break;
                    default: per_E1=99
                    break;
                }

                switch(rE11){
                    case 0: per_E11=1
                    break;
                    case 1: per_E11=5
                    break;
                    case 2: per_E11=20
                    break;
                    case 3: per_E11=40
                    break;
                    case 4: per_E11=60
                    break;
                    case 5: per_E11=80
                    break;
                    case 6: per_E11=80
                    break;
                    case 7: per_E11=95
                    break;
                    case 8: per_E11=95
                    break;
                    default: per_E11=99
                    break;
                }

                switch(rE12){
                    case 0: per_E12=5
                    break;
                    case 1: per_E12=20
                    break;
                    case 2: per_E12=40
                    break;
                    case 3: per_E12=60
                    break;
                    case 4: per_E12=80
                    break;
                    case 5: per_E12=95
                    break;
                    default: per_E12=99
                    break;
                }

                switch(rE13){
                    case 0: per_E13=1
                    break;
                    case 1: per_E13=5
                    break;
                    case 2: per_E13=20
                    break;
                    case 3: per_E13=40
                    break;
                    case 4: per_E13=60
                    break;
                    case 5: per_E13=80
                    break;
                    case 6: per_E13=95
                    break;
                    case 7: per_E13=95
                    break;
                    default: per_E13=99
                    break;
                }

                if(rE2==0||rE2==1){
                    per_E2=1
                }else if(rE2==2){
                    per_E2=5
                }else if(rE2==3||rE2==4){
                    per_E2=20
                }else if(rE2==5||rE2==6){
                    per_E2=40
                }else if(rE2==7||rE2==8){
                    per_E2=60
                }else if(rE2==9||rE2==10){
                    per_E2=80
                }else if(rE2==11||rE2==12){
                    per_E2=95
                }else if(rE2>=13){
                    per_E2=99
                }

                if(rS>=0&&rS<=2){
                    per_s=5
                }else if(rS==3||rS==4){
                    per_s=20
                }else if(rS==5||rS==6){
                    per_s=40
                }else if(rS==7||rS==8){
                    per_s=60
                }else if(rS>=9&&rS<=11){
                    per_s=80
                }else if(rS==12||rS==13){
                    per_s=95
                }else if(rS>=14){
                    per_s=99
                }

                switch(rS1){
                    case 0: per_s1=40
                    break;
                    case 1: per_s1=80
                    break;
                    case 2: per_s1=95
                    break;
                    default: per_s1=99
                    break;
                }

                if(rS11==0){
                    per_s11=1
                }else if(rS11==1){
                    per_s11=5
                }else if(rS11==2){
                    per_s11=20
                }else if(rS11==3){
                    per_s11=40
                }else if(rS11==4){
                    per_s11=60
                }else if(rS11>=5&&rS11<=6){
                    per_s11=80
                }else if(rS11>=7&&rS11<=9){
                    per_s11=95
                }else if(rS11>=12){
                    per_s11=99
                }

                if(rS12==0||rS12==1){
                    per_s12=1
                }else if(rS12==2){
                    per_s12=5
                }else if(rS12==3){
                    per_s12=20
                }else if(rS12==4){
                    per_s12=40
                }else if(rS12==5){
                    per_s12=60
                }else if(rS12>=6&&rS12<=8){
                    per_s12=80
                }else if(rS12>=9&&rS12<=10){
                    per_s12=95
                }else if(rS12>=11){
                    per_s12=99
                }

                if(rS2==0||rS2==1){
                    per_s2=1
                }else if(rS2==2){
                    per_s2=5
                }else if(rS2==3){
                    per_s2=20
                }else if(rS2==4){
                    per_s2=40
                }else if(rS2==5){
                    per_s2=60
                }else if(rS2>=6&&rS2<=8){
                    per_s2=80
                }else if(rS2>=9&&rS2<=10){
                    per_s2=95
                }else if(rS2>=11){
                    per_s2=99
                }

                switch(rF){
                    case 0: per_F=20
                    break;
                    case 1: per_F=40
                    break;
                    case 2: per_F=60
                    break;
                    case 3: per_F=80
                    break;
                    case 4: per_F=95
                    break;
                    default: per_F=99
                    break;
                }

                switch(rH){
                    case 0: per_H=20
                    break;
                    case 1: per_H=40
                    break;
                    case 2: per_H=60
                    break;
                    case 3: per_H=80
                    break;
                    case 4: per_H=95
                    break;
                    default: per_H=99
                    break;
                }

                if(rPa>=0&&rPa<=2){
                    per_Pa=5
                }else if(rPa==3||rPa==4){
                    per_Pa=20
                }else if(rPa==5||rPa==6){
                    per_Pa=40
                }else if(rPa==7||rPa==8){
                    per_Pa=60
                }else if(rPa>=9&&rPa<=11){
                    per_Pa=80
                }else if(rPa==12||rPa==13){
                    per_Pa=95
                }else if(rPa>=14){
                    per_Pa=99
                }

                if(rPa1>=0&&rPa1<=2){
                    per_Pa1=5
                }else if(rPa1==3||rPa1==4){
                    per_Pa1=20
                }else if(rPa1==5||rPa1==6){
                    per_Pa1=40
                }else if(rPa1==7||rPa1==8){
                    per_Pa1=60
                }else if(rPa1>=9&&rPa1<=11){
                    per_Pa1=80
                }else if(rPa1==12||rPa1==13){
                    per_Pa1=95
                }else if(rPa>=14){
                    per_Pa1=99
                }

                if(rPa2>=0&&rPa2<=2){
                    per_Pa2=5
                }else if(rPa2==3||rPa2==4){
                    per_Pa2=20
                }else if(rPa2==5||rPa2==6){
                    per_Pa2=40
                }else if(rPa2==7||rPa2==8){
                    per_Pa2=60
                }else if(rPa2>=9&&rPa2<=11){
                    per_Pa2=80
                }else if(rPa2==12||rPa2==13){
                    per_Pa2=95
                }else if(rPa2>=14){
                    per_Pa2=99
                }

                if(rPa3>=0&&rPa3<=2){
                    per_Pa3=5
                }else if(rPa3==3||rPa3==4){
                    per_Pa3=20
                }else if(rPa3==5||rPa3==6){
                    per_Pa3=40
                }else if(rPa3==7||rPa3==8){
                    per_Pa3=60
                }else if(rPa3>=9&&rPa3<=11){
                    per_Pa3=80
                }else if(rPa3==12||rPa3==13){
                    per_Pa3=95
                }else if(rPa3>=14){
                    per_Pa3=99
                }

                if(rPa31>=0&&rPa31<=2){
                    per_Pa31=5
                }else if(rPa31==3||rPa31==4){
                    per_Pa31=20
                }else if(rPa31==5||rPa31==6){
                    per_Pa31=40
                }else if(rPa31==7||rPa31==8){
                    per_Pa31=60
                }else if(rPa31>=9&&rPa31<=11){
                    per_Pa31=80
                }else if(rPa31==12||rPa31==13){
                    per_Pa31=95
                }else if(rPa31>=14){
                    per_Pa31=99
                }

                if(rPa32>=0&&rPa32<=2){
                    per_Pa32=5
                }else if(rPa32==3||rPa32==4){
                    per_Pa32=20
                }else if(rPa32==5||rPa32==6){
                    per_Pa32=40
                }else if(rPa32==7||rPa32==8){
                    per_Pa32=60
                }else if(rPa32>=9&&rPa32<=11){
                    per_Pa32=80
                }else if(rPa32==12||rPa32==13){
                    per_Pa32=95
                }else if(rPa32>=14){
                    per_Pa32=99
                }

                if(rPa321>=0&&rPa321<=2){
                    per_Pa321=5
                }else if(rPa321==3||rPa321==4){
                    per_Pa321=20
                }else if(rPa321==5||rPa321==6){
                    per_Pa321=40
                }else if(rPa321==7||rPa321==8){
                    per_Pa321=60
                }else if(rPa321>=9&&rPa321<=11){
                    per_Pa321=80
                }else if(rPa321==12||rPa321==13){
                    per_Pa321=95
                }else if(rPa321>=14){
                    per_Pa321=99
                }

                if(rPa322>=0&&rPa322<=2){
                    per_Pa322=5
                }else if(rPa322==3||rPa322==4){
                    per_Pa322=20
                }else if(rPa322==5||rPa322==6){
                    per_Pa322=40
                }else if(rPa322==7||rPa322==8){
                    per_Pa322=60
                }else if(rPa322>=9&&rPa322<=11){
                    per_Pa322=80
                }else if(rPa322==12||rPa322==13){
                    per_Pa322=95
                }else if(rPa322>=14){
                    per_Pa322=99
                }

                if(rPa323>=0&&rPa323<=2){
                    per_Pa323=5
                }else if(rPa323==3||rPa323==4){
                    per_Pa323=20
                }else if(rPa323==5||rPa323==6){
                    per_Pa323=40
                }else if(rPa323==7||rPa323==8){
                    per_Pa323=60
                }else if(rPa323>=9&&rPa323<=11){
                    per_Pa323=80
                }else if(rPa323==12||rPa323==13){
                    per_Pa323=95
                }else if(rPa323>=14){
                    per_Pa323=99
                }

                if(rM>=0&&rM<=2){
                    per_M=5
                }else if(rM==3||rM==4){
                    per_M=20
                }else if(rM==5||rM==6){
                    per_M=40
                }else if(rM==7||rM==8){
                    per_M=60
                }else if(rM>=9&&rM<=11){
                    per_M=80
                }else if(rM==12||rM==13){
                    per_M=95
                }else if(rM>=14){
                    per_M=99
                }

                if(rM1>=0&&rM1<=2){
                    per_M1=5
                }else if(rM1==3||rM1==4){
                    per_M1=20
                }else if(rM1==5||rM1==6){
                    per_M1=40
                }else if(rM1==7||rM1==8){
                    per_M1=60
                }else if(rM1>=9&&rM1<=11){
                    per_M1=80
                }else if(rM1==12||rM1==13){
                    per_M1=95
                }else if(rM1>=14){
                    per_M1=99
                }

                if(rM2>=0&&rM2<=2){
                    per_M2=5
                }else if(rM2==3||rM2==4){
                    per_M2=20
                }else if(rM2==5||rM2==6){
                    per_M2=40
                }else if(rM2==7||rM2==8){
                    per_M2=60
                }else if(rM2>=9&&rM2<=11){
                    per_M2=80
                }else if(rM2==12||rM2==13){
                    per_M2=95
                }else if(rM2>=14){
                    per_M2=99
                }

                if(rM3>=0&&rM3<=2){
                    per_M3=5
                }else if(rM3==3||rM3==4){
                    per_M3=20
                }else if(rM3==5||rM3==6){
                    per_M3=40
                }else if(rM3==7||rM3==8){
                    per_M3=60
                }else if(rM3>=9&&rM3<=11){
                    per_M3=80
                }else if(rM3==12||rM3==13){
                    per_M3=95
                }else if(rM3>=14){
                    per_M3=99
                }

                if(rM31>=0&&rM31<=2){
                    per_M31=5
                }else if(rM31==3||rM31==4){
                    per_M31=20
                }else if(rM31==5||rM31==6){
                    per_M31=40
                }else if(rM31==7||rM31==8){
                    per_M31=60
                }else if(rM31>=9&&rM31<=11){
                    per_M31=80
                }else if(rM31==12||rM31==13){
                    per_M31=95
                }else if(rM31>=14){
                    per_M31=99
                }

                if(rM311>=0&&rM311<=2){
                    per_M311=5
                }else if(rM311==3||rM311==4){
                    per_M311=20
                }else if(rM311==5||rM311==6){
                    per_M311=40
                }else if(rM311==7||rM311==8){
                    per_M311=60
                }else if(rM311>=9&&rM311<=11){
                    per_M311=80
                }else if(rM311==12||rM31==13){
                    per_M311=95
                }else if(rM311>=14){
                    per_M311=99
                }

                if(rM312>=0&&rM312<=2){
                    per_M312=5
                }else if(rM312==3||rM312==4){
                    per_M312=20
                }else if(rM312==5||rM312==6){
                    per_M312=40
                }else if(rM312==7||rM312==8){
                    per_M312=60
                }else if(rM312>=9&&rM312<=11){
                    per_M312=80
                }else if(rM312==12||rM312==13){
                    per_M312=95
                }else if(rM312>=14){
                    per_M312=99
                }

                if(rM32>=0&&rM32<=2){
                    per_M32=5
                }else if(rM32==3||rM32==4){
                    per_M32=20
                }else if(rM32==5||rM32==6){
                    per_M32=40
                }else if(rM32==7||rM32==8){
                    per_M32=60
                }else if(rM32>=9&&rM32<=11){
                    per_M32=80
                }else if(rM32==12||rM32==13){
                    per_M32=95
                }else if(rM32>=14){
                    per_M32=99
                }

                if(rM321>=0&&rM321<=2){
                    per_M321=5
                }else if(rM321==3||rM321==4){
                    per_M321=20
                }else if(rM321==5||rM321==6){
                    per_M321=40
                }else if(rM321==7||rM321==8){
                    per_M321=60
                }else if(rM321>=9&&rM321<=11){
                    per_M321=80
                }else if(rM321==12||rM321==13){
                    per_M321=95
                }else if(rM321>=14){
                    per_M321=99
                }

                if(rM322>=0&&rM322<=2){
                    per_M322=5
                }else if(rM322==3||rM322==4){
                    per_M322=20
                }else if(rM322==5||rM322==6){
                    per_M322=40
                }else if(rM322==7||rM322==8){
                    per_M322=60
                }else if(rM322>=9&&rM322<=11){
                    per_M322=80
                }else if(rM322==12||rM322==13){
                    per_M322=95
                }else if(rM322>=14){
                    per_M322=99
                }

                switch(rPI){
                    case 0: per_PI=5
                    break;
                    case 1: per_PI=20
                    break;
                    case 2: per_PI=40
                    break;
                    case 3: per_PI=60
                    break;
                    case 4: per_PI=80
                    break;
                    case 5: per_PI=95
                    break;
                    default: per_PI=99
                    break;
                }

                switch(rContr){
                    case 0: per_Contr=40
                    break;
                    case 2: per_Contr=60
                    break;
                    case 4: per_Contr=80
                    break;
                    case 6: per_Contr=95
                    break;
                    default: per_Contr=99
                    break;
                }

                
                
            }

            return(
                <Fragment>
                    <div className="container">
                        <div align="center">
                            <button type="submit" class="enviar" onClick={evaluacion} >Enviar</button>
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