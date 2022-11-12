import React,{ useEffect,useState }  from 'react';
import '../../css/sign-log.css';
import validar from './validacion';
import useSignUp from './useSignUp';

const SignUp = ({ submitForm }) => {
    const { handleChange, handleSubmit, valores, errores } = useSignUp(
      submitForm,
      validar
    );
    return(
        <form onSubmit={handleSubmit} className='form' noValidate>
            <div class="myform form">
                <div align="center">
                    <div class="form-group">
                        <input type="text" class="form-control my-input" placeholder="Usuario" name='Fusuario' value={valores.Fusuario} onChange={handleChange}/>
                        {errores.usuario && <h6 class="error">{errores.usuario}</h6>}
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control my-input" placeholder="Nombre(s)" name='Fnombre' value={valores.Fnombre} onChange={handleChange}/>
                        {errores.nombre && <h6 class="error">{errores.nombre}</h6>}
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control my-input" placeholder="Primer apellido" name='Fapellido' value={valores.Fapellido} onChange={handleChange}/>
                        {errores.papellido && <h6 class="error">{errores.papellido}</h6>}
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control my-input" placeholder="Segundo apellido" name='Fsapellido' value={valores.Fsapellido} onChange={handleChange}/>
                        {errores.sapellido && <h6 class="error">{errores.sapellido}</h6>}
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control my-input" placeholder="Correo electrónico" name='Fcorreo' value={valores.Fcorreo} onChange={handleChange}/>
                        {errores.correo && <h6 class="error">{errores.correo}</h6>}
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control my-input" placeholder="Teléfono"  name='Ftelefono' value={valores.Ftelefono} onChange={handleChange}/>
                        {errores.telefono && <h6 class="error">{errores.telefono}</h6>}
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control my-input" placeholder="Contraseña" name='Fcontrasenia' value={valores.Fcontrasenia} onChange={handleChange}/>
                        {errores.contrasenia && <h6 class="error">{errores.contrasenia}</h6>}
                    </div>
                </div>
                <div align="center">
                    <button type="submit" class=" btn btn-block send-button tx-tfm">Crear cuenta</button>
                </div>
            </div>
        </form>
    );
}

export default SignUp;