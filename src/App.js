import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Principal from './components/Principal/PrincipalPage';
import TAMAI from './components/TAMAI/TAMAIPage';
import HTP from './components/HTP/HTPPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Principal/>}/>
          <Route path='/TAMAI' element={<TAMAI/>}/>
          <Route path='/HTP' element={<HTP/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
