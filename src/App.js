import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/footer';
import Principal from './components/Principal/PrincipalPage';
import TAMAI from './components/TAMAI/TAMAIPage';
import HTP from './components/HTP/HTPPage';
import Pacientes from './components/Pacientes/PacientesPage';
import SignLog from './components/SignUp-LogIn/cliente/SignUp-LogIn';
import VerPaciente from './components/Pacientes/VerPaciente';
import AgregarPaciente from './components/Pacientes/AgregarPaciente';
import EditarPaciente from './components/Pacientes/EditarPaciente';

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
          <Route path='/VerPaciente' element={<VerPaciente/>}/>
          <Route path='/AgregarPaciente' element={<AgregarPaciente/>}/>
          <Route path='/EditarPaciente' element={<EditarPaciente/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
