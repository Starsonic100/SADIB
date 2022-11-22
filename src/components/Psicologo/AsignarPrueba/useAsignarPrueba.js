import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from "axios";
import props from 'prop-types';

const useAsignarPrueba = (callback, validar) => {
  const navigate = useNavigate();
    const[valores,setValores]=useState({
        Fpacientes:'-1',
        Fprueba1:'',
        Fprueba:''
    });
    const [errores, setErrores] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = e => {
      const { name, value } = e.target;
      console.log(name+" "+value);
      setValores({
        ...valores,
        [name]: value
      });
      if(e.target.type==='checkbox'&&!e.target.checked){
        setValores({
          ...valores,
          [name]: ""
        });
      }
      console.log(valores);
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
    
    function generate_token(length){
      let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
      let b = [];  
      for (let i=0; i<length; i++) {
          let j = (Math.random() * (a.length-1)).toFixed(0);
          b[i] = a[j];
      }
      return b.join("");
  }
    
      useEffect(
        () => {
          if (Object.keys(errores).length === 0 && isSubmitting) {
            let x=0;
            if(valores.Fprueba1!=""&&valores.Fprueba!=""){
              x=1;
            }
            for(let i=0;i<=x;i++){
            let tokenG=generate_token(10);
            Axios.post("http://54.144.147.250:3001/asignarPrueba",{
            token:tokenG,
            paciente: valores.Fpacientes,
            prueba1: valores.Fprueba1,
            prueba: valores.Fprueba
        }).then((response) => {
          console.log(response);
      });
          if(valores.Fprueba1!=""){
            alert("El paciente tiene asignado el token: "+tokenG+" para la prueba HTP");
          }
          else if(valores.Fprueba1==""&&valores.Fprueba){
            alert("El paciente tiene asignado el token: "+tokenG+" para la prueba TAMAI");
          }
          if(x==1){
            valores.Fprueba1="";
          }
      } 
            callback();
            navigate("/");
          }
        },
        [errores]
      );
    
      return { handleChange, handleSubmit, valores, errores };
}

export default useAsignarPrueba;