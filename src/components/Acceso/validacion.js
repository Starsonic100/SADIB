export default function validacionAccess(valores)  {
    
    let errores={};


        if(!valores.Fcodigo){
            errores.codigo="El código es requerido";
        }


    return errores;
}
