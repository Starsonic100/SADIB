import React, { useState } from 'react';
import '../../../css/sign-log.css';
import lapiz from '../../../img/lapiz.png';
import Login from './Login';
import Acceso from './Acceso';

const FormLogin = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="container">
        <div className="frame">
            <div className="main-row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="bloc-tabs">
                        <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                        >
                        Iniciar Sesión
                        </button>
                        <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                        >
                        Acceder a Prueba
                        </button>
                    </div>
                    <div className="content-tabs">
                        <div className= {toggleState === 1 ? "content  active-content"  : "content"}>
                            <Login/>
                        </div>
                        <div className= {toggleState === 2 ? "content  active-content"  : "content"}>
                            <Acceso/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default FormLogin;