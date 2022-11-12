import React,{ useEffect,useState }  from 'react';
import '../../css/sign-log.css';
import validar from './validacion2';
import useLogin from './useLogin';

const Login = ({ submitForm }) => {
    const { handleChange, handleSubmit, valores, errores, loginStatus } = useLogin(
      submitForm,
      validar
    );
    
    return(
        <form onSubmit={handleSubmit} className='form' noValidate>
            <div class="myform form">
                <div align="center">
                    <div class="form-group">
                        <input type="email" class="form-control my-input" placeholder="Correo electrónico" name='Fcorreo' value={valores.Fcorreo} onChange={handleChange}/>
                        {errores.correo && <h6 class="error">{errores.correo}</h6>}
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control my-input" placeholder="Contraseña" name='Fcontrasenia' value={valores.Fcontrasenia} onChange={handleChange}/>
                        {errores.contrasenia && <h6 class="error">{errores.contrasenia}</h6>}
                    </div>
                </div>
                <div align="center">
                    <h6>{loginStatus}</h6>
                    <button type="submit" class="btn btn-block send-button tx-tfm">Iniciar sesión</button>
                </div>
            </div>
        </form>
    );
}
export default Login;