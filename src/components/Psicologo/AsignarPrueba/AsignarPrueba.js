import React,{ useEffect,useState }  from 'react';
import '../../css/sign-log.css';
import validar from './validacion';
import Axios from "axios";

import useAsignarPrueba from './useAsignarPrueba';

const AsignarPrueba = ({ submitForm }) => {
    const { handleChange, handleSubmit, valores, errores } = useAsignarPrueba(
      submitForm,
      validar
    );
    const [pacientes,setPacientes]=useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3001/datosPaciente").then((response) => {
            console.log(response.data);
            for(let i=0;i<response.data.length;i++){
                pacientes.push(response.data[i]);
            }
            console.log(pacientes);
        });
      }, []);
    return(
        
       
                            <form onSubmit={handleSubmit} className='form' noValidate>
                                <div class="form">
                                    <div align="center">
                                        <div class="form-group">
                                            <select name="Fpacientes" class="form-control" onChange={handleChange}>
                                                <option value='-1'>Selecciona Paciente</option>
                                                {pacientes.map(elemento=>(
                                                <option key={elemento.id_paci} value={elemento.id_paci}>{elemento.nombre} {elemento.apellidop} {elemento.apellidom}</option>
                                                )
                                                )    
                                                }
                                            </select>
                                            {errores.Fpacientes && <h6 class="error">{errores.Fpacientes}</h6>}
                                        </div>
                                        
                                        <div class="form-group">
                                            <input type="checkbox" class="form-control my-input" name='Fprueba1' value="2014921" onChange={handleChange}/>
                                            <input class="form-control my-input" type='hidden' value="-" name='Fprueba1' onChange={handleChange}/>
                                            <h5>Prueba HTP</h5>
                                            <input type="checkbox" class="form-control my-input" name='Fprueba' value="2014922" onChange={handleChange}/>
                                            <input class="form-control my-input" type='hidden' value="-" name='Fprueba' onChange={handleChange}></input>
                                            <h5>Prueba TAMAI</h5>
                                            {errores.Fprueba && <h6 class="error">{errores.Fprueba}</h6>}
                                        </div>
                                    </div>
                                    <div class="text-center ">
                                        <button  type="submit">Asignar Prueba</button>
                                    </div>
                                </div>
                            </form>
                           
    );
}

export default AsignarPrueba;