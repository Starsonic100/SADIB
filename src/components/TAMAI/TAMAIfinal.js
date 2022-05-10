import React, { Component } from 'react';
import '../css/style.css';
import { List, ListItem, ListItemText } from '@material-ui/core/';
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
                p171,p172,p173,p174,p175 }
        } = this.props;

        return(
            <div className="container">

                <div className="main row">
                    <div className="col-12">
                        <div className="container">
                            <div className="formulario">
                                <div className="main row">
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <List>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 1" secondary={p1} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 2" secondary={p2} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 3" secondary={p3} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 4" secondary={p4} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 5" secondary={p5} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 6" secondary={p6} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 7" secondary={p7} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 8" secondary={p8} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 9" secondary={p9} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 10" secondary={p10} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 11" secondary={p11} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 12" secondary={p12} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 13" secondary={p13} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 14" secondary={p14} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 15" secondary={p15} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 16" secondary={p16} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 17" secondary={p17} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 18" secondary={p18} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 19" secondary={p19} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 20" secondary={p20} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 21" secondary={p21} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 22" secondary={p22} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 23" secondary={p23} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 24" secondary={p24} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 25" secondary={p25} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 26" secondary={p26} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 27" secondary={p27} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 28" secondary={p28} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 29" secondary={p29} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 30" secondary={p30} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 31" secondary={p31} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 32" secondary={p32} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 33" secondary={p33} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 34" secondary={p34} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 35" secondary={p35} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 36" secondary={p36} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 37" secondary={p37} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 38" secondary={p38} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 39" secondary={p39} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 40" secondary={p40} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 41" secondary={p41} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 42" secondary={p42} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 43" secondary={p43} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 44" secondary={p44} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 45" secondary={p45} />
                                            </ListItem>
                                        </List>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <List>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 46" secondary={p46} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 47" secondary={p47} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 48" secondary={p48} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 49" secondary={p49} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 50" secondary={p50} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 51" secondary={p51} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 52" secondary={p52} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 53" secondary={p53} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 54" secondary={p54} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 55" secondary={p55} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 56" secondary={p56} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 57" secondary={p57} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 58" secondary={p58} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 59" secondary={p59} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 60" secondary={p60} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 61" secondary={p61} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 62" secondary={p62} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 63" secondary={p63} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 64" secondary={p64} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 65" secondary={p65} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 66" secondary={p66} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 67" secondary={p67} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 68" secondary={p68} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 69" secondary={p69} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 70" secondary={p70} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 71" secondary={p71} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 72" secondary={p72} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 73" secondary={p73} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 74" secondary={p74} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 75" secondary={p75} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 76" secondary={p76} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 77" secondary={p77} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 78" secondary={p78} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 79" secondary={p79} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 80" secondary={p80} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 81" secondary={p81} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 82" secondary={p82} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 83" secondary={p83} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 84" secondary={p84} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 85" secondary={p85} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 86" secondary={p86} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 87" secondary={p87} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 88" secondary={p88} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 89" secondary={p89} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 90" secondary={p90} />
                                            </ListItem>
                                        </List>
                                    </div>
                                    
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <List>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 91" secondary={p91} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 92" secondary={p92} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 93" secondary={p93} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 94" secondary={p94} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 95" secondary={p95} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 96" secondary={p96} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 97" secondary={p97} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 98" secondary={p98} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 99" secondary={p99} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 100" secondary={p100} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 101" secondary={p101} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 102" secondary={p102} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 103" secondary={p103} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 104" secondary={p104} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 105" secondary={p105} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 106" secondary={p106} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 107" secondary={p107} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 108" secondary={p108} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 109" secondary={p109} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 110" secondary={p110} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 111" secondary={p111} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 112" secondary={p112} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 113" secondary={p113} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 114" secondary={p114} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 115" secondary={p115} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 116" secondary={p116} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 117" secondary={p117} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 118" secondary={p118} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 119" secondary={p119} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 120" secondary={p120} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 121" secondary={p121} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 122" secondary={p122} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 123" secondary={p123} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 124" secondary={p124} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 125" secondary={p125} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 126" secondary={p126} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 127" secondary={p127} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 128" secondary={p128} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 129" secondary={p129} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 130" secondary={p130} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 131" secondary={p131} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 132" secondary={p132} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 133" secondary={p133} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 134" secondary={p134} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 135" secondary={p135} />
                                            </ListItem>
                                        </List>
                                    </div>
                                    
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <List>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 136" secondary={p136} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 137" secondary={p137} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 138" secondary={p138} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 139" secondary={p139} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 140" secondary={p140} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 141" secondary={p141} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 142" secondary={p142} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 143" secondary={p143} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 144" secondary={p144} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 145" secondary={p145} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 146" secondary={p146} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 147" secondary={p147} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 148" secondary={p148} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 149" secondary={p149} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 150" secondary={p150} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 151" secondary={p151} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 152" secondary={p152} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 153" secondary={p153} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 154" secondary={p154} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 155" secondary={p155} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 156" secondary={p156} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 157" secondary={p157} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 158" secondary={p158} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 159" secondary={p159} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 160" secondary={p160} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 161" secondary={p161} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 162" secondary={p162} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 163" secondary={p163} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 164" secondary={p164} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 165" secondary={p165} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 166" secondary={p166} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 167" secondary={p167} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 168" secondary={p168} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 169" secondary={p169} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 170" secondary={p170} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 171" secondary={p171} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 172" secondary={p172} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 173" secondary={p173} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 174" secondary={p174} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Respuesta 175" secondary={p175} />
                                            </ListItem>
                                        </List>
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