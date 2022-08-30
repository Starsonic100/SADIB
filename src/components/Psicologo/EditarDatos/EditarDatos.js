import React,{ useEffect,useState }  from 'react';
import '../../css/sign-log.css';
import validar from './validacion';
import Axios from "axios";
import useEditarDatos from './useEditarDatos';

const EditarDatos = ({ submitForm }) => {
    const { handleChange, handleSubmit, valores, errores } = useEditarDatos(
      submitForm,
      validar
    );
    useEffect(() => {
      Axios.get("http://localhost:3001/editarPsic").then((response) => {
          {valores.Fusuario=response.data.user[0].id_usuario};
          {valores.Fnombre=response.data.user[0].nombre};
          {valores.Fapellido=response.data.user[0].apellidop};
          {valores.Fsapellido=response.data.user[0].apellidom};
          {valores.Fcorreo=response.data.user[0].correo};
          {valores.Ftelefono=response.data.user[0].telefono};
          
    
      });
    }, []);
    return(
       
                            <form onSubmit={handleSubmit} className='form' noValidate>
                                <div class="form">
                                    <div align="center">
                                        <div class="form-group">
                                            <input type="text" class="form-control my-input" disabled="disabled"  name='Fusuario' id='Fusuario' value={valores.Fusuario} onChange={handleChange}/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control my-input" placeholder="Nombre(s)" name='Fnombre' id='Fnombre' value={valores.Fnombre} onChange={handleChange}/>
                                            {errores.nombre && <h6 class="error">{errores.nombre}</h6>}
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control my-input" placeholder="Primer apellido" name='Fapellido' id='Fapellido' value={valores.Fapellido} onChange={handleChange}/>
                                            {errores.papellido && <h6 class="error">{errores.papellido}</h6>}
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control my-input" placeholder="Segundo apellido" name='Fsapellido' id='Fsapellido' value={valores.Fsapellido} onChange={handleChange}/>
                                            {errores.sapellido && <h6 class="error">{errores.sapellido}</h6>}
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control my-input" placeholder="Correo electrónico" name='Fcorreo' id='Fcorreo' value={valores.Fcorreo} onChange={handleChange}/>
                                            {errores.correo && <h6 class="error">{errores.correo}</h6>}
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control my-input" placeholder="Teléfono" pattern="[0-9]" name='Ftelefono' id='Ftelefono' value={valores.Ftelefono} onChange={handleChange}/>
                                            {errores.telefono && <h6 class="error">{errores.telefono}</h6>}
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control my-input" placeholder="Contraseña" name='Fcontrasenia' id='Fcontrasenia' value={valores.Fcontrasenia} onChange={handleChange}/>
                                            {errores.contrasenia && <h6 class="error">{errores.contrasenia}</h6>}
                                        </div>
                                    </div>
                                    <div class="text-center ">
                                        <button  type="submit">Editar Datos</button>
                                    </div>
                                </div>
                            </form>
                           
    );
}

export default EditarDatos;