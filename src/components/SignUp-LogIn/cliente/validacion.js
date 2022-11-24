export default function validacion(valores)  {
    
    let errores={};

        if(!valores.Fusuario.trim()){
            errores.usuario="El usuario es requerido";
        }else if(valores.Fusuario.length<5){
            errores.usuario="El usuario debe tener mínimo 5 caracteres";
        }else if(valores.Fusuario.length>10){
            errores.usuario="El usuario no debe tener más de 10 caracteres";
        }
    
        if(!valores.Fnombre.trim()){
            errores.nombre="El nombre es requerido";
        }else if(!/[A-Z][a-z]/.test(valores.Fnombre)){
            errores.nombre="El nombre solo debe contener letras"
        }
    
    
        if(!valores.Fapellido.trim()){
            errores.papellido="El apellido es requerido";
        }else if(!/[A-Z][a-z]/.test(valores.Fapellido)){
            errores.papellido="El apellido solo debe contener letras"
        }
    
        if(!valores.Fsapellido.trim()){
            errores.sapellido="El apellido es requerido";
        }else if(!/[A-Z][a-z]/.test(valores.Fsapellido)){
            errores.sapellido="El apellido solo debe contener letras"
        }
    
        if(!valores.Fcorreo.trim()){
            errores.correo="El correo es requerido";
        }else if(!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(valores.Fcorreo)){
            errores.correo="Formato de correo inválido";
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

