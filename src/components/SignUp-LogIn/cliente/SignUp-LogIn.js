import React, { useState } from 'react';
import '../../css/sign-log.css';
import lapiz from '../../img/lapiz.png';
import SignUp from './SignUp';
import Login from './Login';

const SignUpLogin = () =>{
    
    /*Para el menú tabs*/
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    
    const [Fusuario, setFusuario] = useState("");
    const [Fnombre, setFnombre] = useState("");
    const [Fpapellido, setFpapellido] = useState("");
    const [Fsapellido, setFsapellido] = useState("");
    const [Fcorreo, setFcorreo] = useState("");
    const [Ftelefono, setFtelefono] = useState("");
    const [Fcontrasenia, setFcontrasenia] = useState("");
    
    const [errors, setErrors] = useState({});

    const registro = () => { 
        setErrors(validacion(Fusuario,Fnombre,Fpapellido,Fsapellido,Fcorreo,Ftelefono,Fcontrasenia));
        Axios.post("http://localhost:3001/registro",{
        usuario: Fusuario,
        nombre: Fnombre,
        papellido: Fpapellido,
        sapellido: Fsapellido,
        correo: Fcorreo,
        telefono: Ftelefono,
        contrasenia: Fcontrasenia,
        }).then((response) => {
            console.log(response);
        }); 
    };

    return(
        <div className="container">
            <div className="frame">
                <div className="main row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="bloc-tabs">
                            <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                            >Registrarse</button>
                            <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                            >Iniciar sesión</button>
                        </div>
                        <div className="content-tabs">
                            <div className={toggleState === 1 ? "content  active-content" : "content"}>
                                <SignUp submitForm={submitForm}/>    
                            </div>
                            <div className={toggleState === 2 ? "content  active-content" : "content"}>
                                <Login submitForm={submitForm}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="image-center">
                            <div align="center">
                                <img src={lapiz} width="90%" alt="Lápiz" title="Lápiz"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpLogin;