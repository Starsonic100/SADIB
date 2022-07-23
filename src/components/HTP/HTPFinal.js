import React, { Component } from 'react';
import '../css/App.css';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export class HTPFinal extends Component{

    render(){
        const{
            values: {p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,
                p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,
                p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,
                p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,
                p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,
                p51,p52,p53,p54,p55,p56,p57,p58,p59,p60,
                p61,p62,p63,p64,p65,p66,p67,p68}
        } = this.props;

        return(
            <div className="container">

                <div className="main-row">
                    <div className="col-12">
                        <div className="container">
                            <div className="formulario">
                                <div className="main-row">
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

export default HTPFinal;