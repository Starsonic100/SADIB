const validacion = (usuario,nombre,papellido,sapellido,correo,telefono,contrasenia) => {
    
    let errors={};

        if(usuario.length===0){
            errors.usuario="El usuario es requerido";
        }else if(usuario.length<5){
            errors.usuario="El usuario debe tener mínimo 5 caracteres"
        }else if(usuario.length>10){
            errors.usuario="El usuario no debe tener más de 10 caracteres"
        }
    
        if(!nombre){
            errors.nombre="El nombre es requerido";
        }
    
        if(!papellido){
            errors.papellido="El apellido es requerido";
        }
    
        if(!sapellido){
            errors.sapellido="El apellido es requerido";
        }
    
        if(!correo){
            errors.correo="El correo es requerido";
        }
    
        if(!telefono){
            errors.telefono="El teléfono es requerido";
        }else if(!/[0-9]/.test(telefono)||telefono.length<10||telefono.length>10){
            errors.telefono="El teléfono debe tener 10 dígitos";
        }
    
        if(contrasenia.length===0){
            errors.contrasenia="La contraseña es requerida";
        }else if (contrasenia.length<8){
            errors.contrasenia="La contraseña debe tener mínimo ocho caracteres";
        }

    return errors;
}

export default validacion;