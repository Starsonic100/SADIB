import './components/css/App.css';
import MainP from './MainP';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import ResultadosHTP from './components/ResultadosHTP/ResultadosHTP';
import ResultadosTAMAI from './components/ResultadosTAMAI/ResultadosTAMAI';
function App() {
  return (
    
        <Router>
                      <Navbar/>
                      
            <Routes>
              <Route exact path="/" element={<MainP/>} />
              <Route exact path="/resultadosHTP" element={<ResultadosHTP/>}/>
              <Route exact path="/resultadosTAMAI" element={<ResultadosTAMAI/>}/>
           </Routes>

        </Router>
  ); 
}


export default App;