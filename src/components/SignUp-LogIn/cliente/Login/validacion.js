export default function validacion(valores)  {
    
    let errores={};


        if(!valores.Fcorreo.trim()){
            errores.correo="El correo es requerido";
        }
    
        if(!valores.Fcontrasenia){
            errores.contrasenia="La contraseña es requerida";
        }


    return errores;
}

