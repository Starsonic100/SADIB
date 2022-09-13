const validacionPaciente = (pnombre,ppapellido,psapellido,pfnacimiento,pgenero,pemail,ptelefono,tnombre,tpapellido,tsapellido,temail,ttelefono) => {
    
    let errors={};
    
        if(!pnombre){
            errors.pnombre="El nombre es requerido";
        }else if(pnombre.length<=2){
            errors.pnombre="El nombre no es válido"
        }

        if(!ppapellido){
            errors.ppapellido="El apellido es requerido";
        }

        if(!psapellido){
            errors.psapellido="El apellido es requerido";
        }

        if(!pfnacimiento){
            errors.pfnacimiento="El campo es requerido";
        }

        if(!pgenero){
            errors.pgenero="El campo es requerido";
        }

        if(ptelefono.length===0){
            errors.ptelefono="";
        }else if(!/[0-9]/.test(ptelefono)||ptelefono.length<10||ptelefono.length>10){
            errors.ptelefono="El teléfono debe tener 10 dígitos";
        }

        if(!tnombre){
            errors.tnombre="El nombre es requerido";
        }
        
        if(!tpapellido){
            errors.tpapellido="El apellido es requerido";
        }

        if(!tsapellido){
            errors.tsapellido="El apellido es requerido";
        }

        if(!temail){
            errors.temail="El email es requerido";
        }

        if(!ttelefono){
            errors.ttelefono="El teléfono es requerido";
        }else if(!/[0-9]/.test(ttelefono)||ttelefono.length<10||ttelefono.length>10){
            errors.ttelefono="El teléfono debe tener 10 dígitos";
        }

    return errors;
}

export default validacionPaciente;