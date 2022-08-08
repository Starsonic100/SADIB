import React,{ useEffect,useState }  from 'react';
import '../../../css/sign-log.css';
import validar from './validacionAccess';
import useAccess from './useAccess';

const Acceso = ({ submitForm }) => {
    const { handleChange, handleSubmit, valores, errores, loginStatus } = useAccess(
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
                        <input type="text" class="form-control my-input" placeholder="Código de acceso" name='Fcodigo' value={valores.Fcodigo} onChange={handleChange}/>
                            {errores.codigo && <h6 class="error">{errores.codigo}</h6>}
                    </div>
                </div>
                <div class="text-center ">
                    <h6>{loginStatus}</h6>
                    <button  type="submit">Acceder</button>
                </div>
            </div>
        </form>
                           
    );
}

export default Acceso;