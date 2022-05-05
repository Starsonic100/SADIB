import './App.css';
import MainP from './MainP';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Principal from './components/Principal/PrincipalPage';
import TAMAI from './components/TAMAI/TAMAIPage';
import HTP from './components/HTP/HTPPage';

function App() {
  return (
    
        <Router>
                      <Navbar/>
                      
            <Routes>
              {/* <Route exact path="/" element={<MainP/>} />*/}
              <Route path='/' element={<Principal/>}/>
              <Route path='/TAMAI' element={<TAMAI/>}/>
              <Route path='/HTP' element={<HTP/>}/>
           </Routes>

        </Router>
  ); 
}


export default App;