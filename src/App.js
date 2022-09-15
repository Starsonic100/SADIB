import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/footer';
import Principal from './components/Principal/PrincipalPage';
import TAMAI from './components/TAMAI/TAMAIPage';
import HTP from './components/HTP/HTPPage';
import SignLog from './components/SignUp-LogIn/cliente/SignUp-LogIn';
import Pacientes from './components/Pacientes/PacientesPage';
import AgregarPaciente from './components/Pacientes/AgregarPaciente';

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
          <Route path='/Pacientes' element={<Pacientes/>}/>
          <Route path='/AgregarPaciente' element={<AgregarPaciente/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
