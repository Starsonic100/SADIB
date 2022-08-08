import MainP from './MainP';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import ResultadosHTP from './components/ResultadosHTP/ResultadosHTP';
import ResultadosTAMAI from './components/ResultadosTAMAI/ResultadosTAMAI';
import HTPPage from './components/HTP/HTPPage';
import TAMAIPage from './components/TAMAI/TAMAIPage';
import FormSignUp from './components/SignUp-LogIn/cliente/SignUp/FormSignUp';
import FormLogin from './components/SignUp-LogIn/cliente/Login/FormLogin';

function App() {
  return (
    
        <Router>
                      <Navbar/>
                      
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