import React, { Component } from 'react';
import '../css/style.css';
import notfound from '../img/not-found.png';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export class NotFound extends Component {

    render(){

        return(
            <div className="container">
                <div className="main row">
                    <div className="col-12">
                        <div className="container">
                            <div align="center">
                                <MuiThemeProvider theme={theme}>
                                    <Typography variant="h2">{"Página no encontrada"}</Typography>
                                </MuiThemeProvider>
                            </div>
                            <div className="image-center-not-found">
                                <div align="center">
                                    <img src={notfound} width="50%" alt="NotFound" title="NotFound"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
	
export default NotFound;