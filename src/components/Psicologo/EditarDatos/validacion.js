export default function validacion(valores)  {
    
    let errores={};

    
        if(!valores.Fnombre.trim()){
            errores.nombre="El nombre es requerido";
        }
    
        if(!valores.Fapellido.trim()){
            errores.papellido="El apellido es requerido";
        }
    
        if(!valores.Fsapellido.trim()){
            errores.sapellido="El apellido es requerido";
        }
    
        if(!valores.Fcorreo.trim()){
            errores.correo="El correo es requerido";
        }
    
        if(!valores.Ftelefono){
            errores.telefono="El teléfono es requerido";
        }else if(!/[0-9]/.test(valores.Ftelefono)||valores.Ftelefono.length<10||valores.Ftelefono.length>10){
            errores.telefono="El teléfono debe tener 10 dígitos";
        }
    
        if(!valores.Fcontrasenia){
            errores.contrasenia="La contraseña es requerida";
        }else if (valores.Fcontrasenia.length<8){
            errores.contrasenia="La contraseña debe tener mínimo ocho caracteres";
        }

    return errores;
}

