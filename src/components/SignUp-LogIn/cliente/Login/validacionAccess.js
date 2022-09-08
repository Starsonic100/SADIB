export default function validacionAccess(valores)  {
    
    let errores={};


        if(!valores.Fcodigo.trim()){
            errores.codigo="El correo es requerido";
        }


    return errores;
}

