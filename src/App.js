import './App.css';
import MainP from './MainP';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';

function App() {
  return (
    
        <Router>
                      <Navbar/>

            <Routes>
              <Route exact path="/" element={<MainP/>} />
           </Routes>

        </Router>
  ); 
}


export default App;