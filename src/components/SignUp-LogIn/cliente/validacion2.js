export default function validacion(valores)  {
    
    let errores={};

        if(!valores.Fcorreo.trim()){
            errores.correo="El correo es requerido";
        }else if(!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(valores.Fcorreo)){
            errores.correo="Formato de correo inválido";
        }
    
        if(!valores.Fcontrasenia){
            errores.contrasenia="La contraseña es requerida";
        }

    return errores;
}

