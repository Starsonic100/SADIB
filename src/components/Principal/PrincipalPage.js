import React, { Component } from 'react';
import '../css/style.css';
import ninio from '../img/ninio.png';
import escribe from '../img/escribe.jpg';
import sesion from '../img/sesion.png';
import agregar from '../img/agregar.png';
import seleccionar from '../img/seleccionar.png';
import paciente from '../img/paciente.png';
import prediagnostico from '../img/prediagnostico.png';
import expediente from '../img/expediente.png';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

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
										<div align="center"><img src={ninio} width="70%" alt="Niño" title="Niño"/></div>
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
									 	<div align="center">
										 	<p>
												<MuiThemeProvider theme={theme}>
													<Typography variant="h6" gutterBottom class="desc">{"ACERCA DEL SITIO"}</Typography>
												</MuiThemeProvider>
											</p>
										</div>
										<div align="justify">
											<p>
												<MuiThemeProvider theme={theme}>
													<Typography variant="h6" gutterBottom class="desc">{"Este sitio va dirigido a psicólogos. A través de él, podrán registrar a sus pacientes y aplicar en ellos pruebas como HTP (House-Tree-Person) y Test TAMAI."}</Typography>
												</MuiThemeProvider>
											</p>
											<p>
												<MuiThemeProvider theme={theme}>
													<Typography variant="h6" gutterBottom class="desc">{"El prediagnóstico obtenido con la plataforma podrá ser revisado, editado y guardado por el especialista."}</Typography>
												</MuiThemeProvider>
											</p>
										</div>
									</div>
									<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
										<div align="center"><img src={escribe} width="40%"/></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="main row">
					<div className="col-12">
						<div className="container">
							<div className="funcion">
								<div className="main row">
									<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
									 	<div align="center">
										 	<p>
												<MuiThemeProvider theme={theme}>
													<Typography variant="h1" gutterBottom class="func">{"¿Cómo funciona?"}</Typography>
												</MuiThemeProvider>
											</p>
										</div>
									</div>
								</div>

								<div className="main row">
									<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
									 	<div className="cuadro">
											<div align="center">
												<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
													<div align="center"><img src={sesion} width="60%" alt="Iniciar sesión" title="Iniciar sesión"/></div>
												</div>
												<br></br>
												<p>
													<MuiThemeProvider theme={theme}>
														<Typography variant="h3" gutterBottom class="cuad">{"El psicólogo inicia sesión"}</Typography>
													</MuiThemeProvider>
												</p>
											</div>
										</div>
									</div>

									<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
									 	<div className="cuadro">
											<div align="center">
												<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
													<div align="center"><img src={agregar} width="60%" alt="Agregar paciente" title="Agregar paciente"/></div>
												</div>
												<br></br>
												<p>
													<MuiThemeProvider theme={theme}>
														<Typography variant="h3" gutterBottom class="cuad">{"Registra a sus pacientes"}</Typography>
													</MuiThemeProvider>
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="main row">
									<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
									 	<div className="cuadro">
											<div align="center">
												<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
													<div align="center"><img src={seleccionar} width="60%" alt="Seleccionar prueba" title="Seleccionar prueba"/></div>
												</div>
												<br></br>
												<p>
													<MuiThemeProvider theme={theme}>
														<Typography variant="h3" gutterBottom class="cuad">{"Elige las pruebas a aplicar y genera código"}</Typography>
													</MuiThemeProvider>
												</p>
											</div>
										</div>
									</div>

									<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
									 	<div className="cuadro">
											<div align="center">
												<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
													<div align="center"><img src={paciente} width="60%" alt="Realizar prueba" title="Realizar prueba"/></div>
												</div>
												<br></br>
												<p>
													<MuiThemeProvider theme={theme}>
														<Typography variant="h3" gutterBottom class="cuad">{"El paciente ingresa el código y realiza las pruebas"}</Typography>
													</MuiThemeProvider>
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="main row">
									<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
									 	<div className="cuadro">
											<div align="center">
												<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
													<div align="center"><img src={prediagnostico} width="60%" alt="Prediagnóstico" title="Prediagnóstico"/></div>
												</div>
												<br></br>
												<p>
													<MuiThemeProvider theme={theme}>
														<Typography variant="h3" gutterBottom class="cuad">{"Se obtiene el prediagnóstico"}</Typography>
													</MuiThemeProvider>
												</p>
											</div>
										</div>
									</div>

									<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
									 	<div className="cuadro">
											<div align="center">
												<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
													<div align="center"><img src={expediente} width="60%" alt="Guardar expediente" title="Guardar expediente"/></div>
												</div>
												<br></br>
												<p>
													<MuiThemeProvider theme={theme}>
														<Typography variant="h3" gutterBottom class="cuad">{"El psicólogo puede ver, editar y guardar los resultados"}</Typography>
													</MuiThemeProvider>
												</p>
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
	
export default PrincipalPage;