import React from "react";
import '../css/footer.css';
import{ createTheme, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Footer = () => {
    return (
        <footer class="bg-info">
            <div class="text-center">
                <MuiThemeProvider theme={theme}>
                    <Typography variant="h5" class="text-center">{"Trabajo Terminal No. 2021-A064: Sistema de Análisis de Dibujos para la detección de conductas negativas y positivas en adolescentes."}</Typography>
                </MuiThemeProvider>
                <div className="main row">

                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                        <br></br>
                        <MuiThemeProvider theme={theme}>
                            <Typography variant="h5" class="text-center2">{"Instituto Politécnico Nacional"}</Typography>
                        </MuiThemeProvider>

                        <MuiThemeProvider theme={theme}>
                            <Typography variant="h5" class="text-center2">{"Escuela Superior de Cómputo"}</Typography>
                        </MuiThemeProvider>
                    </div>

                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                        
                        <MuiThemeProvider theme={theme}>
                            <Typography variant="h5" class="text-center">{"Integrantes"}</Typography>
                        </MuiThemeProvider>

                        <MuiThemeProvider theme={theme}>
                            <Typography variant="h5" class="text-center2">{"Espinosa Flores Isam David (iespinosaf1200@alumno.ipn.mx)"}</Typography>
                        </MuiThemeProvider>

                        <MuiThemeProvider theme={theme}>
                            <Typography variant="h5" class="text-center2">{"Rodríguez Peña Alexia Monserrat (arodriguezp1506@alumno.ipn.mx)"}</Typography>
                        </MuiThemeProvider>

                         <MuiThemeProvider theme={theme}>
                            <Typography variant="h5" class="text-center2">{"Rojas Fernández Rafael (rrojasf1300@alumno.ipn.mx)"}</Typography>
                        </MuiThemeProvider> 
                    </div>

                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                        <MuiThemeProvider theme={theme}>
                            <Typography variant="h5" class="text-center">{"Directores"}</Typography>
                        </MuiThemeProvider>

                        <MuiThemeProvider theme={theme}>
                            <Typography variant="h5" class="text-center2">{"M. en C. Cordero López Martha Rosa"}</Typography>
                        </MuiThemeProvider>

                        <MuiThemeProvider theme={theme}>
                            <Typography variant="h5" class="text-center2">{"M. en C. Dorantes González Marco Antonio"}</Typography>
                        </MuiThemeProvider>
                    </div>
                </div>
            </div>
        </footer>
    );
  };
  export default Footer;