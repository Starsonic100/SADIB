import React, { useState } from 'react';
import '../../css/sign-log.css';
import AsignarPrueba from './AsignarPrueba';

const FormAsignarPrueba = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="container">
      <div className="main-row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <AsignarPrueba submitForm={submitForm} />
        </div>
      </div>
    </div>
  );
};

export default FormAsignarPrueba;