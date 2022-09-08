import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from "axios";

const useAccess = (callback, validar) => {
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
            setErrores(validar(valores));
            setIsSubmitting(true);
            login();
    } 

    const login = () => {
        Axios.post("http://localhost:3001/access", {
            codigo: valores.Fcodigo
        }).then((response) => {
          if (response.data.message) {
            setLoginStatus(response.data.message);
          } else {
            setLoginStatus(response.data[0].codigo);
          }
        });
      };
    
    useEffect(() => {
        Axios.get("http://localhost:3001/access").then((response) => {
          if (response.data.loggedIn == true) {
            setLoginStatus(response.data.user[0].token);
          }
        });
      }, []);
    
      return { handleChange, handleSubmit, valores, errores, loginStatus };
}

export default useAccess;