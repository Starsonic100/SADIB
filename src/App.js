import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import Axios from "axios";
import Navbar from './components/Navbar/Navbar';
import MenuAdmin from './components/Navbar/MenuAdmin';
import Footer from './components/footer/footer';
import Principal from './components/Principal/PrincipalPage';
import TAMAI from './components/TAMAI/TAMAIPage';
import HTP from './components/HTP/HTPPage';
import SignLog from './components/SignUp-LogIn/cliente/SignUp-LogIn';
import Pacientes from './components/Pacientes/PacientesPage';
import AgregarPaciente from './components/Pacientes/AgregarPaciente';
import EditarDatos from './components/Psicologo/EditarDatos/FormEditarDatos';
import AsignarPrueba from './components/Psicologo/AsignarPrueba/FormAsignarPrueba';

function App() {
  
  const [rol, setRol] = useState(0);
  
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://3.215.192.63:3001/login").then((response) => {
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
        <Route path='/' element={<Principal/>}/>
        <Route path='/SignUp-LogIn' element={<SignLog/>}/>
        <Route path='/TAMAI' element={<TAMAI/>}/>
        <Route path='/HTP' element={<HTP/>}/>
        <Route path='/Pacientes' element={<Pacientes/>}/>
        <Route path='/AgregarPaciente' element={<AgregarPaciente/>}/>
        <Route path="/EditarPsic" element={<EditarDatos/>}/>
        <Route path="/AsignarPrueba" element={<AsignarPrueba/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
