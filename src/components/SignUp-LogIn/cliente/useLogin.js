import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from "axios";

const useLogin = (callback, validar) => {
  const navigate = useNavigate();
    const[valores,setValores]=useState({
        Fcorreo:'',
        Fcontrasenia:''
    });
    const [errores, setErrores] = useState({});
    const [loginStatus, setLoginStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = e => {
      const { name, value } = e.target;
      setValores({
        ...valores,
        [name]: value
      });
    };

    const handleSubmit = e => {
        e.preventDefault();
            setErrores(validar(valores));
            setIsSubmitting(true);
            login();
    } 

    const login = () => {
        Axios.post("http://3.215.192.63:3001/login", {
            correo: valores.Fcorreo,
            contrasenia: valores.Fcontrasenia
        }).then((response) => {
          if (response.data.message) {
            setLoginStatus(response.data.message);
          } else {
            setLoginStatus(response.data[0].id_usuario);
            navigate("/");
            navigate(0); 
          }
        });
        
      };
    
    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
          if (response.data.loggedIn == true) {
            setLoginStatus(response.data.user[0].id_usuario);
          }
        });
      }, []);
    
      return { handleChange, handleSubmit, valores, errores, loginStatus };
}

export default useLogin;