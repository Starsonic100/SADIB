module.exports = (resultados,dd,mm,yyyy) => {
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
                <h6>Paciente</h6>
                <h6>Género</h6>
                <h6>Edad</h6>
            <h6>
                <table class="table-tamai">
                    <thead class="table-tamai">
                        <tr style="background-color: #16c8e0;">
                            <th class="table-tamai">Nivel 2</th>
                            <th class="table-tamai"></th>
                            <th class="table-tamai">PD</th>
                            <th class="table-tamai">Muy bajo</th>
                            <th class="table-tamai">Bajo</th>
                            <th class="table-tamai">Medio bajo</th>
                            <th class="table-tamai">Medio</th>
                            <th class="table-tamai">Medio alto</th>
                            <th class="table-tamai">Alto</th>
                            <th class="table-tamai">Muy alto</th>
                        </tr>
                    </thead>
                    
                    <tbody class="table-tamai">
                        <tr>
                            <td class="table-tamai">Inadaptación General</td>
                            <td class="table-tamai">G</td>
                            <td class="table-tamai"><div align="center">${resultados.rg}</div></td>
                            <td class="table-tamai"></td>
                            <td class="table-tamai"></td>
                            <td class="table-tamai"></td>
                            <td class="table-tamai"></td>
                            <td class="table-tamai"></td>
                            <td class="table-tamai"></td>
                            <td class="table-tamai"></td>
                        </tr>
                        <tr>
                            <td class="table-tamai">Inadaptación Personal</td>
                            <td class="table-tamai">P</td>
                            <td class="table-tamai"><div align="center">${resultados.rp}</div></td>
                            <td class="table-tamai" id="PMB"></td>
                            <td class="table-tamai" id="PB"></td>
                            <td class="table-tamai" id="PMEB"></td>
                            <td class="table-tamai" id="PM"></td>
                            <td class="table-tamai" id="PMEA"></td>
                            <td class="table-tamai" id="PA"></td>
                            <td class="table-tamai" id="PMA"></td>
                        </tr>
                        <script>
                            var PMB = document.getElementById('PMB');
                            var PB = document.getElementById('PB');
                            var PMEB = document.getElementById('PMEB');
                            var PM = document.getElementById('PM');
                            var PMEA = document.getElementById('PMEA');
                            var PA = document.getElementById('PA');
                            var PMA = document.getElementById('PMA');
                            if(${resultados.per_P}>=1&&${resultados.per_P}<=5){
                                PMB.style.background  = "#003acb";
                            }
                            if(${resultados.per_P}>=6&&${resultados.per_P}<=20){
                                PB.style.background  = "#003acb";
                            }
                            if(${resultados.per_P}>=21&&${resultados.per_P}<=40){
                                PMEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_P}>=41&&${resultados.per_P}<=60){
                                PM.style.background  = "#003acb";
                            }
                            if(${resultados.per_P}>=61&&${resultados.per_P}<=80){
                                PMEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_P}>=81&&${resultados.per_P}<=95){
                                PA.style.background  = "#003acb";
                            }
                            if(${resultados.per_P}>=96&&${resultados.per_P}<=99){
                                PMA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub table-tamai">Insatisfacción personal</td>
                            <td class="table-tamai">P1</td>
                            <td class="table-tamai"><div align="center">${resultados.rp1}</div></td>
                            <td class="table-tamai" id="P1MB"></td>
                            <td class="table-tamai" id="P1B"></td>
                            <td class="table-tamai" id="P1MEB"></td>
                            <td class="table-tamai" id="P1M"></td>
                            <td class="table-tamai" id="P1MEA"></td>
                            <td class="table-tamai" id="P1A"></td>
                            <td class="table-tamai" id="P1MA"></td>
                        </tr>
                        <script>
                            var P1MB = document.getElementById('P1MB');
                            var P1B = document.getElementById('P1B');
                            var P1MEB = document.getElementById('P1MEB');
                            var P1M = document.getElementById('P1M');
                            var P1MEA = document.getElementById('P1MEA');
                            var P1A = document.getElementById('P1A');
                            var P1MA = document.getElementById('P1MA');
                            if(${resultados.per_P1}>=1&&${resultados.per_P1}<=5){
                                P1MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_P1}>=6&&${resultados.per_P1}<=20){
                                P1B.style.background  = "#003acb";
                            }
                            if(${resultados.per_P1}>=21&&${resultados.per_P1}<=40){
                                P1MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_P1}>=41&&${resultados.per_P1}<=60){
                                P1M.style.background  = "#003acb";
                            }
                            if(${resultados.per_P1}>=61&&${resultados.per_P1}<=80){
                                P1MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_P1}>=81&&${resultados.per_P1}<=95){
                                P1A.style.background  = "#003acb";
                            }
                            if(${resultados.per_P1}>=96&&${resultados.per_P1}<=99){
                                P1MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr >
                            <td class="sub table-tamai">Desajuste afectivo</td>
                            <td class="table-tamai">P2</td>
                            <td class="table-tamai"><div align="center">${resultados.rp2}</div></td>
                            <td class="table-tamai" id="P2MB"></td>
                            <td class="table-tamai" id="P2B"></td>
                            <td class="table-tamai" id="P2MEB"></td>
                            <td class="table-tamai" id="P2M"></td>
                            <td class="table-tamai" id="P2MEA"></td>
                            <td class="table-tamai" id="P2A"></td>
                            <td class="table-tamai" id="P2MA"></td>
                        </tr>
                        <script>
                            var P2MB = document.getElementById('P2MB');
                            var P2B = document.getElementById('P2B');
                            var P2MEB = document.getElementById('P2MEB');
                            var P2M = document.getElementById('P2M');
                            var P2MEA = document.getElementById('P2MEA');
                            var P2A = document.getElementById('P2A');
                            var P2MA = document.getElementById('P2MA');
                            if(${resultados.per_P2}>=1&&${resultados.per_P2}<=5){
                                P2MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_P2}>=6&&${resultados.per_P2}<=20){
                                P2B.style.background  = "#003acb";
                            }
                            if(${resultados.per_P2}>=21&&${resultados.per_P2}<=40){
                                P2MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_P2}>=41&&${resultados.per_P2}<=60){
                                P2M.style.background  = "#003acb";
                            }
                            if(${resultados.per_P2}>=61&&${resultados.per_P2}<=80){
                                P2MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_P2}>=81&&${resultados.per_P2}<=95){
                                P2A.style.background  = "#003acb";
                            }
                            if(${resultados.per_P2}>=96&&${resultados.per_P2}<=99){
                                P2MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub1 table-tamai">Cogniafección</td>
                            <td class="table-tamai">P21</td>
                            <td class="table-tamai"><div align="center">${resultados.rp21}</div></td>
                            <td class="table-tamai" id="P21MB"></td>
                            <td class="table-tamai" id="P21B"></td>
                            <td class="table-tamai" id="P21MEB"></td>
                            <td class="table-tamai" id="P21M"></td>
                            <td class="table-tamai" id="P21MEA"></td>
                            <td class="table-tamai" id="P21A"></td>
                            <td class="table-tamai" id="P21MA"></td>
                        </tr>
                        <script>
                            var P21MB = document.getElementById('P21MB');
                            var P21B = document.getElementById('P21B');
                            var P21MEB = document.getElementById('P21MEB');
                            var P21M = document.getElementById('P21M');
                            var P21MEA = document.getElementById('P21MEA');
                            var P21A = document.getElementById('P21A');
                            var P21MA = document.getElementById('P21MA');
                            if(${resultados.per_P21}>=1&&${resultados.per_P21}<=5){
                                P21MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_P21}>=6&&${resultados.per_P21}<=20){
                                P21B.style.background  = "#003acb";
                            }
                            if(${resultados.per_P21}>=21&&${resultados.per_P21}<=40){
                                P21MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_P21}>=41&&${resultados.per_P21}<=60){
                                P21M.style.background  = "#003acb";
                            }
                            if(${resultados.per_P21}>=61&&${resultados.per_P21}<=80){
                                P21MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_P21}>=81&&${resultados.per_P21}<=95){
                                P21A.style.background  = "#003acb";
                            }
                            if(${resultados.per_P21}>=96&&${resultados.per_P21}<=99){
                                P21MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub1 table-tamai">Cognipunición</td>
                            <td class="table-tamai">P22</td>
                            <td class="table-tamai"><div align="center">${resultados.rp22}</div></td>
                            <td class="table-tamai" id="P22MB"></td>
                            <td class="table-tamai" id="P22B"></td>
                            <td class="table-tamai" id="P22MEB"></td>
                            <td class="table-tamai" id="P22M"></td>
                            <td class="table-tamai" id="P22MEA"></td>
                            <td class="table-tamai" id="P22A"></td>
                            <td class="table-tamai" id="P22MA"></td>
                        </tr>
                        <script>
                            var P22MB = document.getElementById('P22MB');
                            var P22B = document.getElementById('P22B');
                            var P22MEB = document.getElementById('P22MEB');
                            var P22M = document.getElementById('P22M');
                            var P22MEA = document.getElementById('P22MEA');
                            var P22A = document.getElementById('P22A');
                            var P22MA = document.getElementById('P22MA');
                            if(${resultados.per_P22}>=1&&${resultados.per_P22}<=5){
                                P22MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_P22}>=6&&${resultados.per_P22}<=20){
                                P22B.style.background  = "#003acb";
                            }
                            if(${resultados.per_P22}>=21&&${resultados.per_P22}<=40){
                                P22MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_P22}>=41&&${resultados.per_P22}<=60){
                                P22M.style.background  = "#003acb";
                            }
                            if(${resultados.per_P22}>=61&&${resultados.per_P22}<=80){
                                P22MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_P22}>=81&&${resultados.per_P22}<=95){
                                P22A.style.background  = "#003acb";
                            }
                            if(${resultados.per_P22}>=96&&${resultados.per_P22}<=99){
                                P22MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub2 table-tamai">Somatización</td>
                            <td class="table-tamai">P221</td>
                            <td class="table-tamai"><div align="center">${resultados.rp221}</div></td>
                            <td class="table-tamai" id="P221MB"></td>
                            <td class="table-tamai" id="P221B"></td>
                            <td class="table-tamai" id="P221MEB"></td>
                            <td class="table-tamai" id="P221M"></td>
                            <td class="table-tamai" id="P221MEA"></td>
                            <td class="table-tamai" id="P221A"></td>
                            <td class="table-tamai" id="P221MA"></td>
                        </tr>
                        <script>
                            var P221MB = document.getElementById('P221MB');
                            var P221B = document.getElementById('P221B');
                            var P221MEB = document.getElementById('P221MEB');
                            var P221M = document.getElementById('P221M');
                            var P221MEA = document.getElementById('P221MEA');
                            var P221A = document.getElementById('P221A');
                            var P221MA = document.getElementById('P221MA');
                            if(${resultados.per_P221}>=1&&${resultados.per_P221}<=5){
                                P221MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_P221}>=6&&${resultados.per_P221}<=20){
                                P221B.style.background  = "#003acb";
                            }
                            if(${resultados.per_P221}>=21&&${resultados.per_P221}<=40){
                                P221MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_P221}>=41&&${resultados.per_P221}<=60){
                                P221M.style.background  = "#003acb";
                            }
                            if(${resultados.per_P221}>=61&&${resultados.per_P221}<=80){
                                P221MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_P221}>=81&&${resultados.per_P221}<=95){
                                P221A.style.background  = "#003acb";
                            }
                            if(${resultados.per_P221}>=96&&${resultados.per_P221}<=99){
                                P221MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub2 table-tamai">Depresión-intrapunición</td>
                            <td class="table-tamai">P222</td>
                            <td class="table-tamai"><div align="center">${resultados.rp222}</div></td>
                            <td class="table-tamai" id="P222MB"></td>
                            <td class="table-tamai" id="P222B"></td>
                            <td class="table-tamai" id="P222MEB"></td>
                            <td class="table-tamai" id="P222M"></td>
                            <td class="table-tamai" id="P222MEA"></td>
                            <td class="table-tamai" id="P222A"></td>
                            <td class="table-tamai" id="P222MA"></td>
                        </tr>
                        <script>
                            var P222MB = document.getElementById('P222MB');
                            var P222B = document.getElementById('P222B');
                            var P222MEB = document.getElementById('P222MEB');
                            var P222M = document.getElementById('P222M');
                            var P222MEA = document.getElementById('P222MEA');
                            var P222A = document.getElementById('P222A');
                            var P222MA = document.getElementById('P222MA');
                            if(${resultados.per_P222}>=1&&${resultados.per_P222}<=5){
                                P222MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_P222}>=6&&${resultados.per_P222}<=20){
                                P222B.style.background  = "#003acb";
                            }
                            if(${resultados.per_P222}>=21&&${resultados.per_P222}<=40){
                                P222MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_P222}>=41&&${resultados.per_P222}<=60){
                                P222M.style.background  = "#003acb";
                            }
                            if(${resultados.per_P222}>=61&&${resultados.per_P222}<=80){
                                P222MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_P222}>=81&&${resultados.per_P222}<=95){
                                P222A.style.background  = "#003acb";
                            }
                            if(${resultados.per_P222}>=96&&${resultados.per_P222}<=99){
                                P222MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub table-tamai">Autosuficiencia defensiva</td>
                            <td class="table-tamai">P3</td>
                            <td class="table-tamai"><div align="center">${resultados.rp3}</div></td>
                            <td class="table-tamai" id="P3MB"></td>
                            <td class="table-tamai" id="P3B"></td>
                            <td class="table-tamai" id="P3MEB"></td>
                            <td class="table-tamai" id="P3M"></td>
                            <td class="table-tamai" id="P3MEA"></td>
                            <td class="table-tamai" id="P3A"></td>
                            <td class="table-tamai" id="P3MA"></td>
                        </tr>
                        <script>
                            var P3MB = document.getElementById('P3MB');
                            var P3B = document.getElementById('P3B');
                            var P3MEB = document.getElementById('P3MEB');
                            var P3M = document.getElementById('P3M');
                            var P3MEA = document.getElementById('P3MEA');
                            var P3A = document.getElementById('P3A');
                            var P3MA = document.getElementById('P3MA');
                            if(${resultados.per_P3}>=1&&${resultados.per_P3}<=5){
                                P3MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_P3}>=6&&${resultados.per_P3}<=20){
                                P3B.style.background  = "#003acb";
                            }
                            if(${resultados.per_P3}>=21&&${resultados.per_P3}<=40){
                                P3MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_P3}>=41&&${resultados.per_P3}<=60){
                                P3M.style.background  = "#003acb";
                            }
                            if(${resultados.per_P3}>=61&&${resultados.per_P3}<=80){
                                P3MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_P3}>=81&&${resultados.per_P3}<=95){
                                P3A.style.background  = "#003acb";
                            }
                            if(${resultados.per_P3}>=96&&${resultados.per_P3}<=99){
                                P3MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="table-tamai">INADAPTACIÓN ESCOLAR</td>
                            <td class="table-tamai">E</td>
                            <td class="table-tamai"><div align="center">${resultados.re}</div></td>
                            <td class="table-tamai" id="EMB"></td>
                            <td class="table-tamai" id="EB"></td>
                            <td class="table-tamai" id="EMEB"></td>
                            <td class="table-tamai" id="EM"></td>
                            <td class="table-tamai" id="EMEA"></td>
                            <td class="table-tamai" id="EA"></td>
                            <td class="table-tamai" id="EMA"></td>
                        </tr>
                        <script>
                            var EMB = document.getElementById('EMB');
                            var EB = document.getElementById('EB');
                            var EMEB = document.getElementById('EMEB');
                            var EM = document.getElementById('EM');
                            var EMEA = document.getElementById('EMEA');
                            var EA = document.getElementById('EA');
                            var EMA = document.getElementById('EMA');
                            if(${resultados.per_e}>=1&&${resultados.per_e}<=5){
                                EMB.style.background  = "#003acb";
                            }
                            if(${resultados.per_e}>=6&&${resultados.per_e}<=20){
                                EB.style.background  = "#003acb";
                            }
                            if(${resultados.per_e}>=21&&${resultados.per_e}<=40){
                                EMEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_e}>=41&&${resultados.per_e}<=60){
                                EM.style.background  = "#003acb";
                            }
                            if(${resultados.per_e}>=61&&${resultados.per_e}<=80){
                                EMEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_e}>=81&&${resultados.per_e}<=95){
                                EA.style.background  = "#003acb";
                            }
                            if(${resultados.per_e}>=96&&${resultados.per_e}<=99){
                                EMA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub table-tamai">Aversión a la instrucción</td>
                            <td class="table-tamai">E1</td>
                            <td class="table-tamai"><div align="center">${resultados.re1}</div></td>
                            <td class="table-tamai" id="E1MB"></td>
                            <td class="table-tamai" id="E1B"></td>
                            <td class="table-tamai" id="E1MEB"></td>
                            <td class="table-tamai" id="E1M"></td>
                            <td class="table-tamai" id="E1MEA"></td>
                            <td class="table-tamai" id="E1A"></td>
                            <td class="table-tamai" id="E1MA"></td>
                        </tr>
                        <script>
                            var E1MB = document.getElementById('E1MB');
                            var E1B = document.getElementById('E1B');
                            var E1MEB = document.getElementById('E1MEB');
                            var E1M = document.getElementById('E1M');
                            var E1MEA = document.getElementById('E1MEA');
                            var E1A = document.getElementById('E1A');
                            var E1MA = document.getElementById('E1MA');
                            if(${resultados.per_e1}>=1&&${resultados.per_e1}<=5){
                                E1MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_e1}>=6&&${resultados.per_e1}<=20){
                                E1B.style.background  = "#003acb";
                            }
                            if(${resultados.per_e1}>=21&&${resultados.per_e1}<=40){
                                E1MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_e1}>=41&&${resultados.per_e1}<=60){
                                E1M.style.background  = "#003acb";
                            }
                            if(${resultados.per_e1}>=61&&${resultados.per_e1}<=80){
                                E1MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_e1}>=81&&${resultados.per_e1}<=95){
                                E1A.style.background  = "#003acb";
                            }
                            if(${resultados.per_e1}>=96&&${resultados.per_e1}<=99){
                                E1MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub1 table-tamai">Hipolaboriosidad</td>
                            <td class="table-tamai">E11</td>
                            <td class="table-tamai"><div align="center">${resultados.re11}</div></td>
                            <td class="table-tamai" id="E11MB"></td>
                            <td class="table-tamai" id="E11B"></td>
                            <td class="table-tamai" id="E11MEB"></td>
                            <td class="table-tamai" id="E11M"></td>
                            <td class="table-tamai" id="E11MEA"></td>
                            <td class="table-tamai" id="E11A"></td>
                            <td class="table-tamai" id="E11MA"></td>
                        </tr>
                        <script>
                            var E11MB = document.getElementById('E11MB');
                            var E11B = document.getElementById('E11B');
                            var E11MEB = document.getElementById('E11MEB');
                            var E11M = document.getElementById('E11M');
                            var E11MEA = document.getElementById('E11MEA');
                            var E11A = document.getElementById('E11A');
                            var E11MA = document.getElementById('E11MA');
                            if(${resultados.per_e11}>=1&&${resultados.per_e11}<=5){
                                E11MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_e11}>=6&&${resultados.per_e11}<=20){
                                E11B.style.background  = "#003acb";
                            }
                            if(${resultados.per_e11}>=21&&${resultados.per_e11}<=40){
                                E11MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_e11}>=41&&${resultados.per_e11}<=60){
                                E11M.style.background  = "#003acb";
                            }
                            if(${resultados.per_e11}>=61&&${resultados.per_e11}<=80){
                                E11MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_e11}>=81&&${resultados.per_e11}<=95){
                                E11A.style.background  = "#003acb";
                            }
                            if(${resultados.per_e11}>=96&&${resultados.per_e11}<=99){
                                E11MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub1 table-tamai">Hipomotivación</td>
                            <td class="table-tamai">E12</td>
                            <td class="table-tamai"><div align="center">${resultados.re12}</div></td>
                            <td class="table-tamai" id="E12MB"></td>
                            <td class="table-tamai" id="E12B"></td>
                            <td class="table-tamai" id="E12MEB"></td>
                            <td class="table-tamai" id="E12M"></td>
                            <td class="table-tamai" id="E12MEA"></td>
                            <td class="table-tamai" id="E12A"></td>
                            <td class="table-tamai" id="E12MA"></td>
                        </tr>
                        <script>
                            var E12MB = document.getElementById('E12MB');
                            var E12B = document.getElementById('E12B');
                            var E12MEB = document.getElementById('E12MEB');
                            var E12M = document.getElementById('E12M');
                            var E12MEA = document.getElementById('E12MEA');
                            var E12A = document.getElementById('E12A');
                            var E12MA = document.getElementById('E12MA');
                            if(${resultados.per_e12}>=1&&${resultados.per_e12}<=5){
                                E12MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_e12}>=6&&${resultados.per_e12}<=20){
                                E12B.style.background  = "#003acb";
                            }
                            if(${resultados.per_e12}>=21&&${resultados.per_e12}<=40){
                                E12MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_e12}>=41&&${resultados.per_e12}<=60){
                                E12M.style.background  = "#003acb";
                            }
                            if(${resultados.per_e12}>=61&&${resultados.per_e12}<=80){
                                E12MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_e12}>=81&&${resultados.per_e12}<=95){
                                E12A.style.background  = "#003acb";
                            }
                            if(${resultados.per_e12}>=96&&${resultados.per_e12}<=99){
                                E12MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub1 table-tamai">Aversión al profesor</td>
                            <td class="table-tamai">E13</td>
                            <td class="table-tamai"><div align="center">${resultados.re13}</div></td>
                            <td class="table-tamai" id="E13MB"></td>
                            <td class="table-tamai" id="E13B"></td>
                            <td class="table-tamai" id="E13MEB"></td>
                            <td class="table-tamai" id="E13M"></td>
                            <td class="table-tamai" id="E13MEA"></td>
                            <td class="table-tamai" id="E13A"></td>
                            <td class="table-tamai" id="E13MA"></td>
                        </tr>
                        <script>
                            var E13MB = document.getElementById('E13MB');
                            var E13B = document.getElementById('E13B');
                            var E13MEB = document.getElementById('E13MEB');
                            var E13M = document.getElementById('E13M');
                            var E13MEA = document.getElementById('E13MEA');
                            var E13A = document.getElementById('E13A');
                            var E13MA = document.getElementById('E13MA');
                            if(${resultados.per_e13}>=1&&${resultados.per_e13}<=5){
                                E13MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_e13}>=6&&${resultados.per_e13}<=20){
                                E13B.style.background  = "#003acb";
                            }
                            if(${resultados.per_e13}>=21&&${resultados.per_e13}<=40){
                                E13MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_e13}>=41&&${resultados.per_e13}<=60){
                                E13M.style.background  = "#003acb";
                            }
                            if(${resultados.per_e13}>=61&&${resultados.per_e13}<=80){
                                E13MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_e13}>=81&&${resultados.per_e13}<=95){
                                E13A.style.background  = "#003acb";
                            }
                            if(${resultados.per_e13}>=96&&${resultados.per_e13}<=99){
                                E13MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub table-tamai">Indisciplina</td>
                            <td class="table-tamai">E2</td>
                            <td class="table-tamai"><div align="center">${resultados.re2}</div></td>
                            <td class="table-tamai" id="E2MB"></td>
                            <td class="table-tamai" id="E2B"></td>
                            <td class="table-tamai" id="E2MEB"></td>
                            <td class="table-tamai" id="E2M"></td>
                            <td class="table-tamai" id="E2MEA"></td>
                            <td class="table-tamai" id="E2A"></td>
                            <td class="table-tamai" id="E2MA"></td>
                        </tr>
                        <script>
                            var E2MB = document.getElementById('E2MB');
                            var E2B = document.getElementById('E2B');
                            var E2MEB = document.getElementById('E2MEB');
                            var E2M = document.getElementById('E2M');
                            var E2MEA = document.getElementById('E2MEA');
                            var E2A = document.getElementById('E2A');
                            var E2MA = document.getElementById('E2MA');
                            if(${resultados.per_e2}>=1&&${resultados.per_e2}<=5){
                                E2MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_e2}>=6&&${resultados.per_e2}<=20){
                                E2B.style.background  = "#003acb";
                            }
                            if(${resultados.per_e2}>=21&&${resultados.per_e2}<=40){
                                E2MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_e2}>=41&&${resultados.per_e2}<=60){
                                E2M.style.background  = "#003acb";
                            }
                            if(${resultados.per_e2}>=61&&${resultados.per_e2}<=80){
                                E2MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_e2}>=81&&${resultados.per_e2}<=95){
                                E2A.style.background  = "#003acb";
                            }
                            if(${resultados.per_e2}>=96&&${resultados.per_e2}<=99){
                                E2MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="table-tamai">INADAPTACIÓN SOCIAL</td>
                            <td class="table-tamai">S</td>
                            <td class="table-tamai"><div align="center">${resultados.rs}</div></td>
                            <td class="table-tamai" id="SMB"></td>
                            <td class="table-tamai" id="SB"></td>
                            <td class="table-tamai" id="SMEB"></td>
                            <td class="table-tamai" id="SM"></td>
                            <td class="table-tamai" id="SMEA"></td>
                            <td class="table-tamai" id="SA"></td>
                            <td class="table-tamai" id="SMA"></td>
                        </tr>
                        <script>
                            var SMB = document.getElementById('SMB');
                            var SB = document.getElementById('SB');
                            var SMEB = document.getElementById('SMEB');
                            var SM = document.getElementById('SM');
                            var SMEA = document.getElementById('SMEA');
                            var SA = document.getElementById('SA');
                            var SMA = document.getElementById('SMA');
                            if(${resultados.per_S}>=1&&${resultados.per_S}<=5){
                                SMB.style.background  = "#003acb";
                            }
                            if(${resultados.per_S}>=6&&${resultados.per_S}<=20){
                                SB.style.background  = "#003acb";
                            }
                            if(${resultados.per_S}>=21&&${resultados.per_S}<=40){
                                SMEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_S}>=41&&${resultados.per_S}<=60){
                                SM.style.background  = "#003acb";
                            }
                            if(${resultados.per_S}>=61&&${resultados.per_S}<=80){
                                SMEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_S}>=81&&${resultados.per_S}<=95){
                                SA.style.background  = "#003acb";
                            }
                            if(${resultados.per_S}>=96&&${resultados.per_S}<=99){
                                SMA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub table-tamai">Autodesajuste social</td>
                            <td class="table-tamai">S1</td>
                            <td class="table-tamai"><div align="center">${resultados.rs1}</div></td>
                            <td class="table-tamai" id="S1MB"></td>
                            <td class="table-tamai" id="S1B"></td>
                            <td class="table-tamai" id="S1MEB"></td>
                            <td class="table-tamai" id="S1M"></td>
                            <td class="table-tamai" id="S1MEA"></td>
                            <td class="table-tamai" id="S1A"></td>
                            <td class="table-tamai" id="S1MA"></td>
                        </tr>
                        <script>
                            var S1MB = document.getElementById('S1MB');
                            var S1B = document.getElementById('S1B');
                            var S1MEB = document.getElementById('S1MEB');
                            var S1M = document.getElementById('S1M');
                            var S1MEA = document.getElementById('S1MEA');
                            var S1A = document.getElementById('S1A');
                            var S1MA = document.getElementById('S1MA');
                            if(${resultados.per_S1}>=1&&${resultados.per_S1}<=5){
                                S1MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_S1}>=6&&${resultados.per_S1}<=20){
                                S1B.style.background  = "#003acb";
                            }
                            if(${resultados.per_S1}>=21&&${resultados.per_S1}<=40){
                                S1MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_S1}>=41&&${resultados.per_S1}<=60){
                                S1M.style.background  = "#003acb";
                            }
                            if(${resultados.per_S1}>=61&&${resultados.per_S1}<=80){
                                S1MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_S1}>=81&&${resultados.per_S1}<=95){
                                S1A.style.background  = "#003acb";
                            }
                            if(${resultados.per_S1}>=96&&${resultados.per_S1}<=99){
                                S1MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub1 table-tamai">Agresividad social</td>
                            <td class="table-tamai">S11</td>
                            <td class="table-tamai"><div align="center">${resultados.rs11}</div></td>
                            <td class="table-tamai" id="S11MB"></td>
                            <td class="table-tamai" id="S11B"></td>
                            <td class="table-tamai" id="S11MEB"></td>
                            <td class="table-tamai" id="S11M"></td>
                            <td class="table-tamai" id="S11MEA"></td>
                            <td class="table-tamai" id="S11A"></td>
                            <td class="table-tamai" id="S11MA"></td>
                        </tr>
                        <script>
                            var S11MB = document.getElementById('S11MB');
                            var S11B = document.getElementById('S11B');
                            var S11MEB = document.getElementById('S11MEB');
                            var S11M = document.getElementById('S11M');
                            var S11MEA = document.getElementById('S11MEA');
                            var S11A = document.getElementById('S11A');
                            var S11MA = document.getElementById('S11MA');
                            if(${resultados.per_S11}>=1&&${resultados.per_S11}<=5){
                                S11MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_S11}>=6&&${resultados.per_S11}<=20){
                                S11B.style.background  = "#003acb";
                            }
                            if(${resultados.per_S11}>=21&&${resultados.per_S11}<=40){
                                S11MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_S11}>=41&&${resultados.per_S11}<=60){
                                S11M.style.background  = "#003acb";
                            }
                            if(${resultados.per_S11}>=61&&${resultados.per_S11}<=80){
                                S11MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_S11}>=81&&${resultados.per_S11}<=95){
                                S11A.style.background  = "#003acb";
                            }
                            if(${resultados.per_S11}>=96&&${resultados.per_S11}<=99){
                                S11MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub1 table-tamai">Disnomia</td>
                            <td class="table-tamai">S12</td>
                            <td class="table-tamai"><div align="center">${resultados.rs12}</div></td>
                            <td class="table-tamai" id="S12MB"></td>
                            <td class="table-tamai" id="S12B"></td>
                            <td class="table-tamai" id="S12MEB"></td>
                            <td class="table-tamai" id="S12M"></td>
                            <td class="table-tamai" id="S12MEA"></td>
                            <td class="table-tamai" id="S12A"></td>
                            <td class="table-tamai" id="S12MA"></td>
                        </tr>
                        <script>
                            var S12MB = document.getElementById('S12MB');
                            var S12B = document.getElementById('S12B');
                            var S12MEB = document.getElementById('S12MEB');
                            var S12M = document.getElementById('S12M');
                            var S12MEA = document.getElementById('S12MEA');
                            var S12A = document.getElementById('S12A');
                            var S12MA = document.getElementById('S12MA');
                            if(${resultados.per_S12}>=1&&${resultados.per_S12}<=5){
                                S12MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_S12}>=6&&${resultados.per_S12}<=20){
                                S12B.style.background  = "#003acb";
                            }
                            if(${resultados.per_S12}>=21&&${resultados.per_S12}<=40){
                                S12MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_S12}>=41&&${resultados.per_S12}<=60){
                                S12M.style.background  = "#003acb";
                            }
                            if(${resultados.per_S12}>=61&&${resultados.per_S12}<=80){
                                S12MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_S12}>=81&&${resultados.per_S12}<=95){
                                S12A.style.background  = "#003acb";
                            }
                            if(${resultados.per_S12}>=96&&${resultados.per_S12}<=99){
                                S12MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub table-tamai">Restricción social</td>
                            <td class="table-tamai">S2</td>
                            <td class="table-tamai"><div align="center">${resultados.rs2}</div></td>
                            <td class="table-tamai" id="S2MB"></td>
                            <td class="table-tamai" id="S2B"></td>
                            <td class="table-tamai" id="S2MEB"></td>
                            <td class="table-tamai" id="S2M"></td>
                            <td class="table-tamai" id="S2MEA"></td>
                            <td class="table-tamai" id="S2A"></td>
                            <td class="table-tamai" id="S2MA"></td>
                        </tr>
                        <script>
                            var S2MB = document.getElementById('S2MB');
                            var S2B = document.getElementById('S2B');
                            var S2MEB = document.getElementById('S2MEB');
                            var S2M = document.getElementById('S2M');
                            var S2MEA = document.getElementById('S2MEA');
                            var S2A = document.getElementById('S2A');
                            var S2MA = document.getElementById('S2MA');
                            if(${resultados.per_S2}>=1&&${resultados.per_S2}<=5){
                                S2MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_S2}>=6&&${resultados.per_S2}<=20){
                                S2B.style.background  = "#003acb";
                            }
                            if(${resultados.per_S2}>=21&&${resultados.per_S2}<=40){
                                S2MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_S2}>=41&&${resultados.per_S2}<=60){
                                S2M.style.background  = "#003acb";
                            }
                            if(${resultados.per_S2}>=61&&${resultados.per_S2}<=80){
                                S2MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_S2}>=81&&${resultados.per_S2}<=95){
                                S2A.style.background  = "#003acb";
                            }
                            if(${resultados.per_S2}>=96&&${resultados.per_S2}<=99){
                                S2MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="table-tamai">INSATISFACCIÓN AMBIENTE FAMILIAR</td>
                            <td class="table-tamai">F</td>
                            <td class="table-tamai"><div align="center">${resultados.rf}</div></td>
                            <td class="table-tamai" id="FMB"></td>
                            <td class="table-tamai" id="FB"></td>
                            <td class="table-tamai" id="FMEB"></td>
                            <td class="table-tamai" id="FM"></td>
                            <td class="table-tamai" id="FMEA"></td>
                            <td class="table-tamai" id="FA"></td>
                            <td class="table-tamai" id="FMA"></td>
                        </tr>
                        <script>
                            var FMB = document.getElementById('FMB');
                            var FB = document.getElementById('FB');
                            var FMEB = document.getElementById('FMEB');
                            var FM = document.getElementById('FM');
                            var FMEA = document.getElementById('FMEA');
                            var FA = document.getElementById('FA');
                            var FMA = document.getElementById('FMA');
                            if(${resultados.per_f}>=1&&${resultados.per_f}<=5){
                                FMB.style.background  = "#003acb";
                            }
                            if(${resultados.per_f}>=6&&${resultados.per_f}<=20){
                                FB.style.background  = "#003acb";
                            }
                            if(${resultados.per_f}>=21&&${resultados.per_f}<=40){
                                FMEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_f}>=41&&${resultados.per_f}<=60){
                                FM.style.background  = "#003acb";
                            }
                            if(${resultados.per_f}>=61&&${resultados.per_f}<=80){
                                FMEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_f}>=81&&${resultados.per_f}<=95){
                                FA.style.background  = "#003acb";
                            }
                            if(${resultados.per_f}>=96&&${resultados.per_f}<=99){
                                FMA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="table-tamai">INSATISFACCIÓN CON LOS HERMANOS</td>
                            <td class="table-tamai">H</td>
                            <td class="table-tamai"><div align="center">${resultados.rh}</div></td>
                            <td class="table-tamai" id="HMB"></td>
                            <td class="table-tamai" id="HB"></td>
                            <td class="table-tamai" id="HMEB"></td>
                            <td class="table-tamai" id="HM"></td>
                            <td class="table-tamai" id="HMEA"></td>
                            <td class="table-tamai" id="HA"></td>
                            <td class="table-tamai" id="HMA"></td>
                        </tr>
                        <script>
                            var HMB = document.getElementById('HMB');
                            var HB = document.getElementById('HB');
                            var HMEB = document.getElementById('HMEB');
                            var HM = document.getElementById('HM');
                            var HMEA = document.getElementById('HMEA');
                            var HA = document.getElementById('HA');
                            var HMA = document.getElementById('HMA');
                            if(${resultados.per_h}>=1&&${resultados.per_h}<=5){
                                HMB.style.background  = "#003acb";
                            }
                            if(${resultados.per_h}>=6&&${resultados.per_h}<=20){
                                HB.style.background  = "#003acb";
                            }
                            if(${resultados.per_h}>=21&&${resultados.per_h}<=40){
                                HMEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_h}>=41&&${resultados.per_h}<=60){
                                HM.style.background  = "#003acb";
                            }
                            if(${resultados.per_h}>=61&&${resultados.per_h}<=80){
                                HMEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_h}>=81&&${resultados.per_h}<=95){
                                HA.style.background  = "#003acb";
                            }
                            if(${resultados.per_h}>=96&&${resultados.per_h}<=99){
                                HMA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="table-tamai">EDUCACIÓN ADECUADA PADRE</td>
                            <td class="table-tamai">Pa</td>
                            <td class="table-tamai"><div align="center">${resultados.rpa}</div></td>
                            <td class="table-tamai" id="PaMB"></td>
                            <td class="table-tamai" id="PaB"></td>
                            <td class="table-tamai" id="PaMEB"></td>
                            <td class="table-tamai" id="PaM"></td>
                            <td class="table-tamai" id="PaMEA"></td>
                            <td class="table-tamai" id="PaA"></td>
                            <td class="table-tamai" id="PaMA"></td>
                        </tr>
                        <script>
                            var PaMB = document.getElementById('PaMB');
                            var PaB = document.getElementById('PaB');
                            var PaMEB = document.getElementById('PaMEB');
                            var PaM = document.getElementById('PaM');
                            var PaMEA = document.getElementById('PaMEA');
                            var PaA = document.getElementById('PaA');
                            var PaMA = document.getElementById('PaMA');
                            if(${resultados.per_pa}>=1&&${resultados.per_pa}<=5){
                                PaMB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa}>=6&&${resultados.per_pa}<=20){
                                PaB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa}>=21&&${resultados.per_pa}<=40){
                                PaMEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa}>=41&&${resultados.per_pa}<=60){
                                PaM.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa}>=61&&${resultados.per_pa}<=80){
                                PaMEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa}>=81&&${resultados.per_pa}<=95){
                                PaA.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa}>=96&&${resultados.per_pa}<=99){
                                PaMA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub table-tamai">Educación asistencial personal</td>
                            <td class="table-tamai">Pa1</td>
                            <td class="table-tamai"><div align="center">${resultados.rpa1}</div></td>
                            <td class="table-tamai" id="Pa1MB"></td>
                            <td class="table-tamai" id="Pa1B"></td>
                            <td class="table-tamai" id="Pa1MEB"></td>
                            <td class="table-tamai" id="Pa1M"></td>
                            <td class="table-tamai" id="Pa1MEA"></td>
                            <td class="table-tamai" id="Pa1A"></td>
                            <td class="table-tamai" id="Pa1MA"></td>
                        </tr>
                        <script>
                            var Pa1MB = document.getElementById('Pa1MB');
                            var Pa1B = document.getElementById('Pa1B');
                            var Pa1MEB = document.getElementById('Pa1MEB');
                            var Pa1M = document.getElementById('Pa1M');
                            var Pa1MEA = document.getElementById('Pa1MEA');
                            var Pa1A = document.getElementById('Pa1A');
                            var Pa1MA = document.getElementById('Pa1MA');
                            if(${resultados.per_pa1}>=1&&${resultados.per_pa1}<=5){
                                Pa1MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa1}>=6&&${resultados.per_pa1}<=20){
                                Pa1B.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa1}>=21&&${resultados.per_pa1}<=40){
                                Pa1MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa1}>=41&&${resultados.per_pa1}<=60){
                                Pa1M.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa1}>=61&&${resultados.per_pa1}<=80){
                                Pa1MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa1}>=81&&${resultados.per_pa1}<=95){
                                Pa1A.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa1}>=96&&${resultados.per_pa1}<=99){
                                Pa1MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub table-tamai">Permisivismo</td>
                            <td class="table-tamai">Pa2</td>
                            <td class="table-tamai"><div align="center">${resultados.rpa2}</div></td>
                            <td class="table-tamai" id="Pa2MB"></td>
                            <td class="table-tamai" id="Pa2B"></td>
                            <td class="table-tamai" id="Pa2MEB"></td>
                            <td class="table-tamai" id="Pa2M"></td>
                            <td class="table-tamai" id="Pa2MEA"></td>
                            <td class="table-tamai" id="Pa2A"></td>
                            <td class="table-tamai" id="Pa2MA"></td>
                        </tr>
                        <script>
                            var Pa2MB = document.getElementById('Pa2MB');
                            var Pa2B = document.getElementById('Pa2B');
                            var Pa2MEB = document.getElementById('Pa2MEB');
                            var Pa2M = document.getElementById('Pa2M');
                            var Pa2MEA = document.getElementById('Pa2MEA');
                            var Pa2A = document.getElementById('Pa2A');
                            var Pa2MA = document.getElementById('Pa2MA');
                            if(${resultados.per_pa2}>=1&&${resultados.per_pa2}<=5){
                                Pa2MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa2}>=6&&${resultados.per_pa2}<=20){
                                Pa2B.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa2}>=21&&${resultados.per_pa2}<=40){
                                Pa2MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa2}>=41&&${resultados.per_pa2}<=60){
                                Pa2M.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa2}>=61&&${resultados.per_pa2}<=80){
                                Pa2MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa2}>=81&&${resultados.per_pa2}<=95){
                                Pa2A.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa2}>=96&&${resultados.per_pa2}<=99){
                                Pa2MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub table-tamai">Restricción</td>
                            <td class="table-tamai">Pa3</td>
                            <td class="table-tamai"><div align="center">${resultados.rpa3}</div></td>
                            <td class="table-tamai" id="Pa3MB"></td>
                            <td class="table-tamai" id="Pa3B"></td>
                            <td class="table-tamai" id="Pa3MEB"></td>
                            <td class="table-tamai" id="Pa3M"></td>
                            <td class="table-tamai" id="Pa3MEA"></td>
                            <td class="table-tamai" id="Pa3A"></td>
                            <td class="table-tamai" id="Pa3MA"></td>
                        </tr>
                        <script>
                            var Pa3MB = document.getElementById('Pa3MB');
                            var Pa3B = document.getElementById('Pa3B');
                            var Pa3MEB = document.getElementById('Pa3MEB');
                            var Pa3M = document.getElementById('Pa3M');
                            var Pa3MEA = document.getElementById('Pa3MEA');
                            var Pa3A = document.getElementById('Pa3A');
                            var Pa3MA = document.getElementById('Pa3MA');
                            if(${resultados.per_pa3}>=1&&${resultados.per_pa3}<=5){
                                Pa3MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa3}>=6&&${resultados.per_pa3}<=20){
                                Pa3B.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa3}>=21&&${resultados.per_pa3}<=40){
                                Pa3MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa3}>=41&&${resultados.per_pa3}<=60){
                                Pa3M.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa3}>=61&&${resultados.per_pa3}<=80){
                                Pa3MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa3}>=81&&${resultados.per_pa3}<=95){
                                Pa3A.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa3}>=96&&${resultados.per_pa3}<=99){
                                Pa3MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub1 table-tamai">Perfeccionismo hipernómico</td>
                            <td class="table-tamai">Pa31</td>
                            <td class="table-tamai"><div align="center">${resultados.rpa31}</div></td>
                            <td class="table-tamai" id="Pa31MB"></td>
                            <td class="table-tamai" id="Pa31B"></td>
                            <td class="table-tamai" id="Pa31MEB"></td>
                            <td class="table-tamai" id="Pa31M"></td>
                            <td class="table-tamai" id="Pa31MEA"></td>
                            <td class="table-tamai" id="Pa31A"></td>
                            <td class="table-tamai" id="Pa31MA"></td>
                        </tr>
                        <script>
                            var Pa31MB = document.getElementById('Pa31MB');
                            var Pa31B = document.getElementById('Pa31B');
                            var Pa31MEB = document.getElementById('Pa31MEB');
                            var Pa31M = document.getElementById('Pa31M');
                            var Pa31MEA = document.getElementById('Pa31MEA');
                            var Pa31A = document.getElementById('Pa31A');
                            var Pa31MA = document.getElementById('Pa31MA');
                            if(${resultados.per_pa31}>=1&&${resultados.per_pa31}<=5){
                                Pa31MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa31}>=6&&${resultados.per_pa31}<=20){
                                Pa31B.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa31}>=21&&${resultados.per_pa31}<=40){
                                Pa31MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa31}>=41&&${resultados.per_pa31}<=60){
                                Pa31M.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa31}>=61&&${resultados.per_pa31}<=80){
                                Pa31MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa31}>=81&&${resultados.per_pa31}<=95){
                                Pa31A.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa31}>=96&&${resultados.per_pa31}<=99){
                                Pa31MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub1 table-tamai">Estilo aversivo</td>
                            <td class="table-tamai">Pa32</td>
                            <td class="table-tamai"><div align="center">${resultados.rpa32}</div></td>
                            <td class="table-tamai" id="Pa32MB"></td>
                            <td class="table-tamai" id="Pa32B"></td>
                            <td class="table-tamai" id="Pa32MEB"></td>
                            <td class="table-tamai" id="Pa32M"></td>
                            <td class="table-tamai" id="Pa32MEA"></td>
                            <td class="table-tamai" id="Pa32A"></td>
                            <td class="table-tamai" id="Pa32MA"></td>
                        </tr>
                        <script>
                            var Pa32MB = document.getElementById('Pa32MB');
                            var Pa32B = document.getElementById('Pa32B');
                            var Pa32MEB = document.getElementById('Pa32MEB');
                            var Pa32M = document.getElementById('Pa32M');
                            var Pa32MEA = document.getElementById('Pa32MEA');
                            var Pa32A = document.getElementById('Pa32A');
                            var Pa32MA = document.getElementById('Pa32MA');
                            if(${resultados.per_pa32}>=1&&${resultados.per_pa32}<=5){
                                Pa32MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa32}>=6&&${resultados.per_pa32}<=20){
                                Pa32B.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa32}>=21&&${resultados.per_pa32}<=40){
                                Pa32MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa32}>=41&&${resultados.per_pa32}<=60){
                                Pa32M.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa32}>=61&&${resultados.per_pa32}<=80){
                                Pa32MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa32}>=81&&${resultados.per_pa32}<=95){
                                Pa32A.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa32}>=96&&${resultados.per_pa32}<=99){
                                Pa32MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub2 table-tamai">Rechazo afectivo</td>
                            <td class="table-tamai">Pa321</td>
                            <td class="table-tamai"><div align="center">${resultados.rpa321}</div></td>
                            <td class="table-tamai" id="Pa321MB"></td>
                            <td class="table-tamai" id="Pa321B"></td>
                            <td class="table-tamai" id="Pa321MEB"></td>
                            <td class="table-tamai" id="Pa321M"></td>
                            <td class="table-tamai" id="Pa321MEA"></td>
                            <td class="table-tamai" id="Pa321A"></td>
                            <td class="table-tamai" id="Pa321MA"></td>
                        </tr>
                        <script>
                            var Pa321MB = document.getElementById('Pa321MB');
                            var Pa321B = document.getElementById('Pa321B');
                            var Pa321MEB = document.getElementById('Pa321MEB');
                            var Pa321M = document.getElementById('Pa321M');
                            var Pa321MEA = document.getElementById('Pa321MEA');
                            var Pa321A = document.getElementById('Pa321A');
                            var Pa321MA = document.getElementById('Pa321MA');
                            if(${resultados.per_pa321}>=1&&${resultados.per_pa321}<=5){
                                Pa321MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa321}>=6&&${resultados.per_pa321}<=20){
                                Pa321B.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa321}>=21&&${resultados.per_pa321}<=40){
                                Pa321MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa321}>=41&&${resultados.per_pa321}<=60){
                                Pa321M.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa321}>=61&&${resultados.per_pa321}<=80){
                                Pa321MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa321}>=81&&${resultados.per_pa321}<=95){
                                Pa321A.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa321}>=96&&${resultados.per_pa321}<=99){
                                Pa321MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub2 table-tamai">Perfeccionismo hostil</td>
                            <td class="table-tamai">Pa322</td>
                            <td class="table-tamai"><div align="center">${resultados.rpa322}</div></td>
                            <td class="table-tamai" id="Pa322MB"></td>
                            <td class="table-tamai" id="Pa322B"></td>
                            <td class="table-tamai" id="Pa322MEB"></td>
                            <td class="table-tamai" id="Pa322M"></td>
                            <td class="table-tamai" id="Pa322MEA"></td>
                            <td class="table-tamai" id="Pa322A"></td>
                            <td class="table-tamai" id="Pa322MA"></td>
                        </tr>
                        <script>
                            var Pa322MB = document.getElementById('Pa322MB');
                            var Pa322B = document.getElementById('Pa322B');
                            var Pa322MEB = document.getElementById('Pa322MEB');
                            var Pa322M = document.getElementById('Pa322M');
                            var Pa322MEA = document.getElementById('Pa322MEA');
                            var Pa322A = document.getElementById('Pa322A');
                            var Pa322MA = document.getElementById('Pa322MA');
                            if(${resultados.per_pa322}>=1&&${resultados.per_pa322}<=5){
                                Pa322MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa322}>=6&&${resultados.per_pa322}<=20){
                                Pa322B.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa322}>=21&&${resultados.per_pa322}<=40){
                                Pa322MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa322}>=41&&${resultados.per_pa322}<=60){
                                Pa322M.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa322}>=61&&${resultados.per_pa322}<=80){
                                Pa322MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa322}>=81&&${resultados.per_pa322}<=95){
                                Pa322A.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa322}>=96&&${resultados.per_pa322}<=99){
                                Pa322MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub2 table-tamai">Marginación afectiva</td>
                            <td class="table-tamai">Pa323</td>
                            <td class="table-tamai"><div align="center">${resultados.rpa323}</div></td>
                            <td class="table-tamai" id="Pa323MB"></td>
                            <td class="table-tamai" id="Pa323B"></td>
                            <td class="table-tamai" id="Pa323MEB"></td>
                            <td class="table-tamai" id="Pa323M"></td>
                            <td class="table-tamai" id="Pa323MEA"></td>
                            <td class="table-tamai" id="Pa323A"></td>
                            <td class="table-tamai" id="Pa323MA"></td>
                        </tr>
                        <script>
                            var Pa323MB = document.getElementById('Pa323MB');
                            var Pa323B = document.getElementById('Pa323B');
                            var Pa323MEB = document.getElementById('Pa323MEB');
                            var Pa323M = document.getElementById('Pa323M');
                            var Pa323MEA = document.getElementById('Pa323MEA');
                            var Pa323A = document.getElementById('Pa323A');
                            var Pa323MA = document.getElementById('Pa323MA');
                            if(${resultados.per_pa323}>=1&&${resultados.per_pa323}<=5){
                                Pa323MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa323}>=6&&${resultados.per_pa323}<=20){
                                Pa323B.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa323}>=21&&${resultados.per_pa323}<=40){
                                Pa323MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa323}>=41&&${resultados.per_pa323}<=60){
                                Pa323M.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa323}>=61&&${resultados.per_pa323}<=80){
                                Pa323MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa323}>=81&&${resultados.per_pa323}<=95){
                                Pa323A.style.background  = "#003acb";
                            }
                            if(${resultados.per_pa323}>=96&&${resultados.per_pa323}<=99){
                                Pa323MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="table-tamai">EDUCACIÓN ADECUADA MADRE</td>
                            <td class="table-tamai">M</td>
                            <td class="table-tamai"><div align="center">${resultados.rm}</div></td>
                            <td class="table-tamai" id="MMB"></td>
                            <td class="table-tamai" id="MB"></td>
                            <td class="table-tamai" id="MMEB"></td>
                            <td class="table-tamai" id="MM"></td>
                            <td class="table-tamai" id="MMEA"></td>
                            <td class="table-tamai" id="MA"></td>
                            <td class="table-tamai" id="MMA"></td>
                        </tr>
                        <script>
                            var MMB = document.getElementById('MMB');
                            var MB = document.getElementById('MB');
                            var MMEB = document.getElementById('MMEB');
                            var MM = document.getElementById('MM');
                            var MMEA = document.getElementById('MMEA');
                            var MA = document.getElementById('MA');
                            var MMA = document.getElementById('MMA');
                            if(${resultados.per_m}>=1&&${resultados.per_m}<=5){
                                MMB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m}>=6&&${resultados.per_m}<=20){
                                MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m}>=21&&${resultados.per_m}<=40){
                                MMEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m}>=41&&${resultados.per_m}<=60){
                                MM.style.background  = "#003acb";
                            }
                            if(${resultados.per_m}>=61&&${resultados.per_m}<=80){
                                MMEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_m}>=81&&${resultados.per_m}<=95){
                                MA.style.background  = "#003acb";
                            }
                            if(${resultados.per_m}>=96&&${resultados.per_m}<=99){
                                MMA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub table-tamai">Educación asistencial-personal</td>
                            <td class="table-tamai">M1</td>
                            <td class="table-tamai"><div align="center">${resultados.rm1}</div></td>
                            <td class="table-tamai" id="M1MB"></td>
                            <td class="table-tamai" id="M1B"></td>
                            <td class="table-tamai" id="M1MEB"></td>
                            <td class="table-tamai" id="M1M"></td>
                            <td class="table-tamai" id="M1MEA"></td>
                            <td class="table-tamai" id="M1A"></td>
                            <td class="table-tamai" id="M1MA"></td>
                        </tr>
                        <script>
                            var M1MB = document.getElementById('M1MB');
                            var M1B = document.getElementById('M1B');
                            var M1MEB = document.getElementById('M1MEB');
                            var M1M = document.getElementById('M1M');
                            var M1MEA = document.getElementById('M1MEA');
                            var M1A = document.getElementById('M1A');
                            var M1MA = document.getElementById('M1MA');
                            if(${resultados.per_m1}>=1&&${resultados.per_m1}<=5){
                                M1MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m1}>=6&&${resultados.per_m1}<=20){
                                M1B.style.background  = "#003acb";
                            }
                            if(${resultados.per_m1}>=21&&${resultados.per_m1}<=40){
                                M1MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m1}>=41&&${resultados.per_m1}<=60){
                                M1M.style.background  = "#003acb";
                            }
                            if(${resultados.per_m1}>=61&&${resultados.per_m1}<=80){
                                M1MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_m1}>=81&&${resultados.per_m1}<=95){
                                M1A.style.background  = "#003acb";
                            }
                            if(${resultados.per_m1}>=96&&${resultados.per_m1}<=99){
                                M1MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub table-tamai">Permisivismo</td>
                            <td class="table-tamai">M2</td>
                            <td class="table-tamai"><div align="center">${resultados.rm2}</div></td>
                            <td class="table-tamai" id="M2MB"></td>
                            <td class="table-tamai" id="M2B"></td>
                            <td class="table-tamai" id="M2MEB"></td>
                            <td class="table-tamai" id="M2M"></td>
                            <td class="table-tamai" id="M2MEA"></td>
                            <td class="table-tamai" id="M2A"></td>
                            <td class="table-tamai" id="M2MA"></td>
                        </tr>
                        <script>
                            var M2MB = document.getElementById('M2MB');
                            var M2B = document.getElementById('M2B');
                            var M2MEB = document.getElementById('M2MEB');
                            var M2M = document.getElementById('M2M');
                            var M2MEA = document.getElementById('M2MEA');
                            var M2A = document.getElementById('M2A');
                            var M2MA = document.getElementById('M2MA');
                            if(${resultados.per_m2}>=1&&${resultados.per_m2}<=5){
                                M2MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m2}>=6&&${resultados.per_m2}<=20){
                                M2B.style.background  = "#003acb";
                            }
                            if(${resultados.per_m2}>=21&&${resultados.per_m2}<=40){
                                M2MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m2}>=41&&${resultados.per_m2}<=60){
                                M2M.style.background  = "#003acb";
                            }
                            if(${resultados.per_m2}>=61&&${resultados.per_m2}<=80){
                                M2MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_m2}>=81&&${resultados.per_m2}<=95){
                                M2A.style.background  = "#003acb";
                            }
                            if(${resultados.per_m2}>=96&&${resultados.per_m2}<=99){
                                M2MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub table-tamai">Restricción</td>
                            <td class="table-tamai">M3</td>
                            <td class="table-tamai"><div align="center">${resultados.rm3}</div></td>
                            <td class="table-tamai" id="M3MB"></td>
                            <td class="table-tamai" id="M3B"></td>
                            <td class="table-tamai" id="M3MEB"></td>
                            <td class="table-tamai" id="M3M"></td>
                            <td class="table-tamai" id="M3MEA"></td>
                            <td class="table-tamai" id="M3A"></td>
                            <td class="table-tamai" id="M3MA"></td>
                        </tr>
                        <script>
                            var M3MB = document.getElementById('M3MB');
                            var M3B = document.getElementById('M3B');
                            var M3MEB = document.getElementById('M3MEB');
                            var M3M = document.getElementById('M3M');
                            var M3MEA = document.getElementById('M3MEA');
                            var M3A = document.getElementById('M3A');
                            var M3MA = document.getElementById('M3MA');
                            if(${resultados.per_m3}>=1&&${resultados.per_m3}<=5){
                                M3MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m3}>=6&&${resultados.per_m3}<=20){
                                M3B.style.background  = "#003acb";
                            }
                            if(${resultados.per_m3}>=21&&${resultados.per_m3}<=40){
                                M3MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m3}>=41&&${resultados.per_m3}<=60){
                                M3M.style.background  = "#003acb";
                            }
                            if(${resultados.per_m3}>=61&&${resultados.per_m3}<=80){
                                M3MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_m3}>=81&&${resultados.per_m3}<=95){
                                M3A.style.background  = "#003acb";
                            }
                            if(${resultados.per_m3}>=96&&${resultados.per_m3}<=99){
                                M3MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub1 table-tamai">Asistencia restrictiva</td>
                            <td class="table-tamai">M31</td>
                            <td class="table-tamai"><div align="center">${resultados.rm31}</div></td>
                            <td class="table-tamai" id="M31MB"></td>
                            <td class="table-tamai" id="M31B"></td>
                            <td class="table-tamai" id="M31MEB"></td>
                            <td class="table-tamai" id="M31M"></td>
                            <td class="table-tamai" id="M31MEA"></td>
                            <td class="table-tamai" id="M31A"></td>
                            <td class="table-tamai" id="M31MA"></td>
                        </tr>
                        <script>
                            var M31MB = document.getElementById('M31MB');
                            var M31B = document.getElementById('M31B');
                            var M31MEB = document.getElementById('M31MEB');
                            var M31M = document.getElementById('M31M');
                            var M31MEA = document.getElementById('M31MEA');
                            var M31A = document.getElementById('M31A');
                            var M31MA = document.getElementById('M31MA');
                            if(${resultados.per_m31}>=1&&${resultados.per_m31}<=5){
                                M31MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m31}>=6&&${resultados.per_m31}<=20){
                                M31B.style.background  = "#003acb";
                            }
                            if(${resultados.per_m31}>=21&&${resultados.per_m31}<=40){
                                M31MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m31}>=41&&${resultados.per_m31}<=60){
                                M31M.style.background  = "#003acb";
                            }
                            if(${resultados.per_m31}>=61&&${resultados.per_m31}<=80){
                                M31MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_m31}>=81&&${resultados.per_m31}<=95){
                                M31A.style.background  = "#003acb";
                            }
                            if(${resultados.per_m31}>=96&&${resultados.per_m31}<=99){
                                M31MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub2 table-tamai">Marginación afectiva</td>
                            <td class="table-tamai">M311</td>
                            <td class="table-tamai"><div align="center">${resultados.rm311}</div></td>
                            <td class="table-tamai" id="M311MB"></td>
                            <td class="table-tamai" id="M311B"></td>
                            <td class="table-tamai" id="M311MEB"></td>
                            <td class="table-tamai" id="M311M"></td>
                            <td class="table-tamai" id="M311MEA"></td>
                            <td class="table-tamai" id="M311A"></td>
                            <td class="table-tamai" id="M311MA"></td>
                        </tr>
                        <script>
                            var M311MB = document.getElementById('M311MB');
                            var M311B = document.getElementById('M311B');
                            var M311MEB = document.getElementById('M311MEB');
                            var M311M = document.getElementById('M311M');
                            var M311MEA = document.getElementById('M311MEA');
                            var M311A = document.getElementById('M311A');
                            var M311MA = document.getElementById('M311MA');
                            if(${resultados.per_m311}>=1&&${resultados.per_m311}<=5){
                                M311MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m311}>=6&&${resultados.per_m311}<=20){
                                M311B.style.background  = "#003acb";
                            }
                            if(${resultados.per_m311}>=21&&${resultados.per_m311}<=40){
                                M311MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m311}>=41&&${resultados.per_m311}<=60){
                                M311M.style.background  = "#003acb";
                            }
                            if(${resultados.per_m311}>=61&&${resultados.per_m311}<=80){
                                M311MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_m311}>=81&&${resultados.per_m311}<=95){
                                M311A.style.background  = "#003acb";
                            }
                            if(${resultados.per_m311}>=96&&${resultados.per_m311}<=99){
                                M311MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub2 table-tamai">Rechazo afectivo</td>
                            <td class="table-tamai">M312</td>
                            <td class="table-tamai"><div align="center">${resultados.rm312}</div></td>
                            <td class="table-tamai" id="M312MB"></td>
                            <td class="table-tamai" id="M312B"></td>
                            <td class="table-tamai" id="M312MEB"></td>
                            <td class="table-tamai" id="M312M"></td>
                            <td class="table-tamai" id="M312MEA"></td>
                            <td class="table-tamai" id="M312A"></td>
                            <td class="table-tamai" id="M312MA"></td>
                        </tr>
                        <script>
                            var M312MB = document.getElementById('M312MB');
                            var M312B = document.getElementById('M312B');
                            var M312MEB = document.getElementById('M312MEB');
                            var M312M = document.getElementById('M312M');
                            var M312MEA = document.getElementById('M312MEA');
                            var M312A = document.getElementById('M312A');
                            var M312MA = document.getElementById('M312MA');
                            if(${resultados.per_m312}>=1&&${resultados.per_m312}<=5){
                                M312MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m312}>=6&&${resultados.per_m312}<=20){
                                M312B.style.background  = "#003acb";
                            }
                            if(${resultados.per_m312}>=21&&${resultados.per_m312}<=40){
                                M312MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m312}>=41&&${resultados.per_m312}<=60){
                                M312M.style.background  = "#003acb";
                            }
                            if(${resultados.per_m312}>=61&&${resultados.per_m312}<=80){
                                M312MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_m312}>=81&&${resultados.per_m312}<=95){
                                M312A.style.background  = "#003acb";
                            }
                            if(${resultados.per_m312}>=96&&${resultados.per_m312}<=99){
                                M312MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub1 table-tamai">Personalización restrictiva</td>
                            <td class="table-tamai">M32</td>
                            <td class="table-tamai"><div align="center">${resultados.rm32}</div></td>
                            <td class="table-tamai" id="M32MB"></td>
                            <td class="table-tamai" id="M32B"></td>
                            <td class="table-tamai" id="M32MEB"></td>
                            <td class="table-tamai" id="M32M"></td>
                            <td class="table-tamai" id="M32MEA"></td>
                            <td class="table-tamai" id="M32A"></td>
                            <td class="table-tamai" id="M32MA"></td>
                        </tr>
                        <script>
                            var M32MB = document.getElementById('M32MB');
                            var M32B = document.getElementById('M32B');
                            var M32MEB = document.getElementById('M32MEB');
                            var M32M = document.getElementById('M32M');
                            var M32MEA = document.getElementById('M32MEA');
                            var M32A = document.getElementById('M32A');
                            var M32MA = document.getElementById('M32MA');
                            if(${resultados.per_m32}>=1&&${resultados.per_m32}<=5){
                                M32MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m32}>=6&&${resultados.per_m32}<=20){
                                M32B.style.background  = "#003acb";
                            }
                            if(${resultados.per_m32}>=21&&${resultados.per_m32}<=40){
                                M32MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m32}>=41&&${resultados.per_m32}<=60){
                                M32M.style.background  = "#003acb";
                            }
                            if(${resultados.per_m32}>=61&&${resultados.per_m32}<=80){
                                M32MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_m32}>=81&&${resultados.per_m32}<=95){
                                M32A.style.background  = "#003acb";
                            }
                            if(${resultados.per_m32}>=96&&${resultados.per_m32}<=99){
                                M32MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub2 table-tamai">Perfección. hostil</td>
                            <td class="table-tamai">M321</td>
                            <td class="table-tamai"><div align="center">${resultados.rm321}</div></td>
                            <td class="table-tamai" id="M321MB"></td>
                            <td class="table-tamai" id="M321B"></td>
                            <td class="table-tamai" id="M321MEB"></td>
                            <td class="table-tamai" id="M321M"></td>
                            <td class="table-tamai" id="M321MEA"></td>
                            <td class="table-tamai" id="M321A"></td>
                            <td class="table-tamai" id="M321MA"></td>
                        </tr>
                        <script>
                            var M321MB = document.getElementById('M321MB');
                            var M321B = document.getElementById('M321B');
                            var M321MEB = document.getElementById('M321MEB');
                            var M321M = document.getElementById('M321M');
                            var M321MEA = document.getElementById('M321MEA');
                            var M321A = document.getElementById('M321A');
                            var M321MA = document.getElementById('M321MA');
                            if(${resultados.per_m321}>=1&&${resultados.per_m321}<=5){
                                M321MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m321}>=6&&${resultados.per_m321}<=20){
                                M321B.style.background  = "#003acb";
                            }
                            if(${resultados.per_m321}>=21&&${resultados.per_m321}<=40){
                                M321MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m321}>=41&&${resultados.per_m321}<=60){
                                M321M.style.background  = "#003acb";
                            }
                            if(${resultados.per_m321}>=61&&${resultados.per_m321}<=80){
                                M321MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_m321}>=81&&${resultados.per_m321}<=95){
                                M321A.style.background  = "#003acb";
                            }
                            if(${resultados.per_m321}>=96&&${resultados.per_m321}<=99){
                                M321MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="sub2 table-tamai">Perfección. hipernómico</td>
                            <td class="table-tamai">M322</td>
                            <td class="table-tamai"><div align="center">${resultados.rm322}</div></td>
                            <td class="table-tamai" id="M322MB"></td>
                            <td class="table-tamai" id="M322B"></td>
                            <td class="table-tamai" id="M322MEB"></td>
                            <td class="table-tamai" id="M322M"></td>
                            <td class="table-tamai" id="M322MEA"></td>
                            <td class="table-tamai" id="M322A"></td>
                            <td class="table-tamai" id="M322MA"></td>
                        </tr>
                        <script>
                            var M322MB = document.getElementById('M322MB');
                            var M322B = document.getElementById('M322B');
                            var M322MEB = document.getElementById('M322MEB');
                            var M322M = document.getElementById('M322M');
                            var M322MEA = document.getElementById('M322MEA');
                            var M322A = document.getElementById('M322A');
                            var M322MA = document.getElementById('M322MA');
                            if(${resultados.per_m322}>=1&&${resultados.per_m322}<=5){
                                M322MB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m322}>=6&&${resultados.per_m322}<=20){
                                M322B.style.background  = "#003acb";
                            }
                            if(${resultados.per_m322}>=21&&${resultados.per_m322}<=40){
                                M322MEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_m322}>=41&&${resultados.per_m322}<=60){
                                M322M.style.background  = "#003acb";
                            }
                            if(${resultados.per_m322}>=61&&${resultados.per_m322}<=80){
                                M322MEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_m322}>=81&&${resultados.per_m322}<=95){
                                M322A.style.background  = "#003acb";
                            }
                            if(${resultados.per_m322}>=96&&${resultados.per_m322}<=99){
                                M322MA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="table-tamai">DISCREPANCIA EDUCATIVA</td>
                            <td class="table-tamai">Dis</td>
                            <td class="table-tamai"><div align="center">${resultados.rdis}</div></td>
                            <td class="table-tamai" id="DisMB"></td>
                            <td class="table-tamai" id="DisB"></td>
                            <td class="table-tamai" id="DisMEB"></td>
                            <td class="table-tamai" id="DisM"></td>
                            <td class="table-tamai" id="DisMEA"></td>
                            <td class="table-tamai" id="DisA"></td>
                            <td class="table-tamai" id="DisMA"></td>
                        </tr>
                        <tr>
                            <td class="table-tamai">PRO-IMAGEN</td>
                            <td class="table-tamai">PI</td>
                            <td class="table-tamai"><div align="center">${resultados.rpi}</div></td>
                            <td class="table-tamai" id="PIMB"></td>
                            <td class="table-tamai" id="PIB"></td>
                            <td class="table-tamai" id="PIMEB"></td>
                            <td class="table-tamai" id="PIM"></td>
                            <td class="table-tamai" id="PIMEA"></td>
                            <td class="table-tamai" id="PIA"></td>
                            <td class="table-tamai" id="PIMA"></td>
                        </tr>
                        <script>
                            var PIMB = document.getElementById('PIMB');
                            var PIB = document.getElementById('PIB');
                            var PIMEB = document.getElementById('PIMEB');
                            var PIM = document.getElementById('PIM');
                            var PIMEA = document.getElementById('PIMEA');
                            var PIA = document.getElementById('PIA');
                            var PIMA = document.getElementById('PIMA');
                            if(${resultados.per_pi}>=1&&${resultados.per_pi}<=5){
                                PIMB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pi}>=6&&${resultados.per_pi}<=20){
                                PIB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pi}>=21&&${resultados.per_pi}<=40){
                                PIMEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_pi}>=41&&${resultados.per_pi}<=60){
                                PIM.style.background  = "#003acb";
                            }
                            if(${resultados.per_pi}>=61&&${resultados.per_pi}<=80){
                                PIMEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_pi}>=81&&${resultados.per_pi}<=95){
                                PIA.style.background  = "#003acb";
                            }
                            if(${resultados.per_pi}>=96&&${resultados.per_pi}<=99){
                                PIMA.style.background  = "#003acb";
                            }
                        </script>
                        <tr>
                            <td class="table-tamai">CONTRADICCIONES</td>
                            <td class="table-tamai">Contr</td>
                            <td class="table-tamai"><div align="center">${resultados.rcontr}</div></td>
                            <td class="table-tamai" id="ContrMB"></td>
                            <td class="table-tamai" id="ContrB"></td>
                            <td class="table-tamai" id="ContrMEB"></td>
                            <td class="table-tamai" id="ContrM"></td>
                            <td class="table-tamai" id="ContrMEA"></td>
                            <td class="table-tamai" id="ContrA"></td>
                            <td class="table-tamai" id="ContrMA"></td>
                        </tr>
                        <script>
                            var ContrMB = document.getElementById('ContrMB');
                            var ContrB = document.getElementById('ContrB');
                            var ContrMEB = document.getElementById('ContrMEB');
                            var ContrM = document.getElementById('ContrM');
                            var ContrMEA = document.getElementById('ContrMEA');
                            var ContrA = document.getElementById('ContrA');
                            var ContrMA = document.getElementById('ContrMA');
                            if(${resultados.per_contr}>=1&&${resultados.per_contr}<=5){
                                ContrMB.style.background  = "#003acb";
                            }
                            if(${resultados.per_contr}>=6&&${resultados.per_contr}<=20){
                                ContrB.style.background  = "#003acb";
                            }
                            if(${resultados.per_contr}>=21&&${resultados.per_contr}<=40){
                                ContrMEB.style.background  = "#003acb";
                            }
                            if(${resultados.per_contr}>=41&&${resultados.per_contr}<=60){
                                ContrM.style.background  = "#003acb";
                            }
                            if(${resultados.per_contr}>=61&&${resultados.per_contr}<=80){
                                ContrMEA.style.background  = "#003acb";
                            }
                            if(${resultados.per_contr}>=81&&${resultados.per_contr}<=95){
                                ContrA.style.background  = "#003acb";
                            }
                            if(${resultados.per_contr}>=96&&${resultados.per_contr}<=99){
                                ContrMA.style.background  = "#003acb";
                            }
                        </script>
                    </tbody>
                </table>
            </h6>
            <h6>${dd}-${mm}-${yyyy}</h6>
            <h6>Este documento carece de validez oficial y requiere de un profesional para un diagnóstico más preciso y seguimiento.</h6>                
        </body>
    </html>
    `;
};