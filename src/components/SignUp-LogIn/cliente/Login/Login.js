import React,{ useEffect,useState }  from 'react';
import '../../../css/sign-log.css';
import validar from './validacion';
import useLogin from './useLogin';

const Login = ({ submitForm }) => {
    const { handleChange, handleSubmit, valores, errores, loginStatus } = useLogin(
      submitForm,
      validar
    );

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
    return(
        <form onSubmit={handleSubmit} className='form' noValidate>
            <div class="form">
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
                <div class="text-center ">
                    <h6>{loginStatus}</h6>
                    <button  type="submit">Iniciar sesión</button>
                </div>
            </div>
        </form>
                           
    );
}

export default Login;