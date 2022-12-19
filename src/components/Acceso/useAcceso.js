import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from "axios";

const useAccesso = (callback, validacion) => {
  const navigate = useNavigate();
    const[valores,setValores]=useState({
        Fcodigo:'',
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
            setErrores(validacion(valores));
            setIsSubmitting(true);
            login();
    } 

    const login = () => {
        Axios.post("http://54.144.147.250:3001/access", {
            codigo: valores.Fcodigo
        }).then((response) => {
          if (response.data.message) {
            setLoginStatus(response.data.message);
          } else {
            setLoginStatus(response.data[0].id_paci);
            if(response.data[0].id_prueba=="2014921"){
              navigate("/htp");
              navigate(0); 
            }
            else{
              navigate("/tamai");
              navigate(0);
            }
          }
        });
      };
    
    useEffect(() => {
        Axios.get("http://54.144.147.250:3001/access").then((response) => {
          if (response.data.loggedIn == true) {
            setLoginStatus(response.data.user[0].token);
          }
        });
      }, []);
    
      return { handleChange, handleSubmit, valores, errores, loginStatus };
}

export default useAccesso;