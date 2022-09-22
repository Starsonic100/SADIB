export default function validacion(valores)  {
    
    let errores={};

        if(valores.Fpacientes=="-1"){
            errores.Fpacientes="Se debe elegir el paciente";
        }
    
        if(valores.Fprueba1==""&&valores.Fprueba==""){
            errores.Fprueba="Debe elegir una o más pruebas";
        }
    

    return errores;
}

