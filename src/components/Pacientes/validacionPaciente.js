const validacionPaciente = (pnombre,ppapellido,psapellido,pfnacimiento,pgenero,pemail,ptelefono,tnombre,tpapellido,tsapellido,temail,ttelefono) => {
    
    let errors={};
    
        if(!pnombre.trim()){
            errors.pnombre="El nombre es requerido";
        }else if(pnombre.length<=2){
            errors.pnombre="El nombre no es válido"
        }else if(!/[A-Z][a-z]|[à-ú]|[À-Ú]/.test(pnombre)){
            errors.pnombre="El nombre solo debe contener letras"
        }

        if(!ppapellido.trim()){
            errors.ppapellido="El apellido es requerido";
        }else if(!/[A-Z][a-z]|[à-ú]|[À-Ú]/.test(ppapellido)){
            errors.ppapellido="El apellido solo debe contener letras"
        }

        if(!psapellido.trim()){
            errors.psapellido="El apellido es requerido";
        }else if(!/[A-Z][a-z]|[à-ú]|[À-Ú]/.test(psapellido)){
            errors.psapellido="El apellido solo debe contener letras"
        }

        if(!pfnacimiento){
            errors.pfnacimiento="El campo es requerido";
        }

        if(!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(pemail)){
            errors.pemail="Formato de correo inválido";
        }

        if(!pgenero){
            errors.pgenero="El campo es requerido";
        }

        if(ptelefono.length===0){
            errors.ptelefono="";
        }else if(!/[0-9]/.test(ptelefono)||ptelefono.length<10||ptelefono.length>10){
            errors.ptelefono="El teléfono debe tener 10 dígitos";
        }

        if(!tnombre.trim()){
            errors.tnombre="El nombre es requerido";
        }else if(!/[A-Z][a-z]/.test(tnombre)){
            errors.tnombre="El nombre solo debe contener letras"
        }
        
        if(!tpapellido.trim()){
            errors.tpapellido="El apellido es requerido";
        }else if(!/[A-Z][a-z]|[à-ú]|[À-Ú]/.test(tpapellido)){
            errors.tpapellido="El apellido solo debe contener letras"
        }

        if(!tsapellido.trim()){
            errors.tsapellido="El apellido es requerido";
        }else if(!/[A-Z][a-z]|[à-ú]|[À-Ú]/.test(tsapellido)){
            errors.tsapellido="El apellido solo debe contener letras"
        }

        if(!temail.trim()){
            errors.temail="El email es requerido";
        }else if(!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(temail)){
            errors.temail="Formato de correo inválido";
        }

        if(!ttelefono){
            errors.ttelefono="El teléfono es requerido";
        }else if(!/[0-9]/.test(ttelefono)||ttelefono.length<10||ttelefono.length>10){
            errors.ttelefono="El teléfono debe tener 10 dígitos";
        }

    return errors;
}

export default validacionPaciente;