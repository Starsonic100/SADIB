import MainP from './MainP';
import React, { useState, useEffect} from 'react';
import Axios from "axios";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import MenuAdmin from './components/Navbar/MenuAdmin';
import ResultadosHTP from './components/ResultadosHTP/ResultadosHTP';
import ResultadosTAMAI from './components/ResultadosTAMAI/ResultadosTAMAI';
import HTPPage from './components/HTP/HTPPage';
import TAMAIPage from './components/TAMAI/TAMAIPage';
import FormSignUp from './components/SignUp-LogIn/cliente/SignUp/FormSignUp';
import FormLogin from './components/SignUp-LogIn/cliente/Login/FormLogin';


function App() {
  const [rol, setRol] = useState(0);

    Axios.defaults.withCredentials = true;
    useEffect(() => {
      Axios.get("http://localhost:3001/login").then((response) => {
        if (response.data.loggedIn == true) {
          setRol(response.data.user[0].rol);
        }
      });
    }, []);
  return (
    
        <Router>
                      {rol == 0 && <Navbar/>}
                      {rol == 2 && <MenuAdmin/>}
                      
            <Routes>
              <Route exact path="/" element={<MainP/>} />
              <Route exact path="/resultadosHTP" element={<ResultadosHTP/>}/>
              <Route exact path="/resultadosTAMAI" element={<ResultadosTAMAI/>}/>
              <Route exact path="/HTPPage" element={<HTPPage/>}/>
              <Route exact path="/TAMAIPage" element={<TAMAIPage/>}/>
              <Route exact path="/SignUp" element={<FormSignUp/>}/>
              <Route exact path="/Login" element={<FormLogin/>}/>
           </Routes>

        </Router>
  ); 
}


export default App;