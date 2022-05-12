import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Principal from './components/Principal/PrincipalPage';
import TAMAI from './components/TAMAI/TAMAIPage';
import HTP from './components/HTP/HTPPage';
import SignLog from './components/SignUp-LogIn/cliente/SignUp-LogIn'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Principal/>}/>
          <Route path='/SignUp-LogIn' element={<SignLog/>}/>
          <Route path='/TAMAI' element={<TAMAI/>}/>
          <Route path='/HTP' element={<HTP/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
