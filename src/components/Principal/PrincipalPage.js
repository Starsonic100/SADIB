import React, { Component } from 'react';
import '../css/style.css';
import ninio from '../img/ninio.png';
import escribe from '../img/escribe.jpg';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, ThemeProvider, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

class PrincipalPage extends Component {
    render(){
        return(
            <div className="container">
                
				
				<div className="main row">
					<div className="col-12">
						<div className="container">
							<div className="bienvenida">
								<div className="main row">
									<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
										<div align="center"><img src={ninio} width="70%"/></div>
									</div>
									<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
										<div align="center">
											<p>
												<MuiThemeProvider theme={theme}>
													<Typography variant="h1" gutterBottom class="titulo">{"¡Bienvenido/a!"}</Typography>
												</MuiThemeProvider>
											</p>
											<br/>
											<p>
												<MuiThemeProvider theme={theme}>
													<Typography variant="h4" gutterBottom class="nombre">{"Sistema de Análisis de Dibujos para la detección de conductas negativas y positivas en adolescentes."}</Typography>
												</MuiThemeProvider>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="main row">
					<div className="col-12">
						<div className="container">
							<div className="descripcion">
								<div className="main row">
									<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
									 	Aquí va la descripción que todavía no pongo :v
									</div>
									<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
										<div align="center"><img src={escribe} width="40%"/></div>
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
	
export default PrincipalPage;