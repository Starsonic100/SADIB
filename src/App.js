import MainP from './MainP';
import React, { useState, useEffect} from 'react';
import Axios from "axios";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import Footer from './components/footer/footer';
import MenuAdmin from './components/Navbar/MenuAdmin';
import ResultadosHTP from './components/ResultadosHTP/ResultadosHTP';
import ResultadosTAMAI from './components/ResultadosTAMAI/ResultadosTAMAI';
import HTPPage from './components/HTP/HTPPage';
import TAMAIPage from './components/TAMAI/TAMAIPage';
import FormSignUp from './components/SignUp-LogIn/cliente/SignUp/FormSignUp';
import FormLogin from './components/SignUp-LogIn/cliente/Login/FormLogin';
import EditarDatos from './components/Psicologo/EditarDatos/FormEditarDatos';
import AsignarPrueba from './components/Psicologo/AsignarPrueba/FormAsignarPrueba';
import VerPaciente from './components/Psicologo/VerPaciente';
import AgregarPaciente from './components/Psicologo/AgregarPaciente';
import EditarPaciente from './components/Psicologo/EditarPaciente';


function App() {
  const [rol, setRol] = useState(0);

    Axios.defaults.withCredentials = true;
    useEffect(() => {
      Axios.get("http://localhost:3001/login").then((response) => {
        if (response.data.loggedIn == true) {
          setRol(response.data.user[0].rol);
        }
        else{
          setRol(0);
        }
      });
    }, []);
  return (
        <div className="App">
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
              <Route exact path="/EditarPsic" element={<EditarDatos/>}/>
              <Route exact path="/AsignarPrueba" element={<AsignarPrueba/>}/>
              <Route path='/VerPaciente' element={<VerPaciente/>}/>
              <Route path='/AgregarPaciente' element={<AgregarPaciente/>}/>
              <Route path='/EditarPaciente' element={<EditarPaciente/>}/>
           </Routes>
           <Footer/>
        </Router>
        </div>
  ); 
}


export default App;