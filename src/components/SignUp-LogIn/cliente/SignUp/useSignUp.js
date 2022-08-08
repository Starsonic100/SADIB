import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from "axios";
import props from 'prop-types';

const useSignUp = (callback, validar) => {
  const navigate = useNavigate();
    const[valores,setValores]=useState({
        Fusuario:'',
        Fnombre:'',
        Fapellido:'',
        Fsapellido:'',
        Fcorreo:'',
        Ftelefono:'',
        Fcontrasenia:''
    });
    const [errores, setErrores] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = e => {
      const { name, value } = e.target;
      setValores({
        ...valores,
        [name]: value
      });
    };
    /*const handleSubmit = e => {
        e.preventDefault();
    
        setErrores(validacion(valores));
        setIsSubmitting(true);
      };*/
    const handleSubmit = e => {
        e.preventDefault();
            setErrores(validar(valores));
            setIsSubmitting(true);
            
        
    } 
    
      useEffect(
        () => {
          if (Object.keys(errores).length === 0 && isSubmitting) {
            callback();
            Axios.post("http://localhost:3001/registro",{
            usuario: valores.Fusuario,
            nombre: valores.Fnombre,
            papellido: valores.Fapellido,
            sapellido: valores.Fsapellido,
            correo: valores.Fcorreo,
            telefono: valores.Ftelefono,
            contrasenia: valores.Fcontrasenia,
            
        }).then((response) => {
          console.log(response);
      }); 
        navigate("/");
          }
        },
        [errores]
      );
    
      return { handleChange, handleSubmit, valores, errores };
}

export default useSignUp;