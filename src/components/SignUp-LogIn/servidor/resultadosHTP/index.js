module.exports = (resultados,dd,mm,yyyy,pac,edad,genero) => {
    return `
    <!doctype html>
    <html>
        <head>
        <meta charset="utf-8">
            <style>
            html, body{
                overflow-x: hidden;
            }
            
            
            h3{
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-style: normal;
                font-size: 15px;
                line-height: 20px;
                color: black;
            }
            
            
            h5{
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-style: normal;
                font-size: 25px;
                color: black;
            }
            
            
            h6{
                font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-style: normal;
                font-size: 15px;
                line-height: auto;
                color: black;
                text-shadow:none;
            }
            
            table {
                border-collapse: collapse;
                width: auto;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
            
            td{
                border: 1px solid #ddd;
                padding: 8px;
                background-color: #0edcf8;
            }
            
            tr:nth-child(even){background-color: #0edcf8;}
            
            tr:hover {background-color: #0edcf8;}
            
            th {
                background-color: #3F81A7;
                color: white;
            }
            

            .table-tamai{
                border: 2.5px solid;
                background-color: "blue";
            }
            
            </style>
            <div align="center">
                <h5>Resultado prueba TAMAI</h5>
            </div>
        <head/>
        <body>            
            <h6>Paciente: ${pac}</h6>
            <h6>Género: ${genero}</h6>
            <h6>Edad: ${edad}</h6>
            <img style='display:block; width:300px;height:300px;' src='${resultados.bDc}' />
            <h6>Resultado de Casa: ${resultados.rDc}</h6>
            <img style='display:block; width:300;height:300px;' src='${resultados.bDa}' />
            <h6>Resultado de Árbol: ${resultados.rDa}</h6>
            <img style='display:block; width:300px;height:300px;' src='${resultados.bDp}' />
            <h6>Resultado de Persona: ${resultados.rDp}</h6>
            <h6>${dd}-${mm}-${yyyy}</h6>
            <h6>Este documento carece de validez oficial y requiere de un profesional para un diagnóstico más preciso y seguimiento.</h6>                
        </body>
    </html>
    `;
};