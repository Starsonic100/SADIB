import React, { useState } from 'react';
import '../../css/sign-log.css';
import EditarDatos from './EditarDatos';

const FormEditarDatos = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="container">
        <div className="main-row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <EditarDatos submitForm={submitForm} />
          </div>
        </div>
    </div>
  );
};

export default FormEditarDatos;