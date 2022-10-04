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
    <div className="frame">
        <div className="main row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="content-tabs">
                <div
                    className= "content  active-content"
                    >

          <AsignarPrueba submitForm={submitForm} />
 
       </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
  );
};

export default FormAsignarPrueba;