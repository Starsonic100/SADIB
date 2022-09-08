import React, { useState } from 'react';
import '../../../css/sign-log.css';
import lapiz from '../../../img/lapiz.png';
import SignUp from './SignUp';

const FormSignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="container">
    <div className="frame">
        <div className="main-row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="content-tabs">
                <div
                    className= "content  active-content"
                    >

          <SignUp submitForm={submitForm} />
 
       </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div align="center">
                            <img src={lapiz} width="90%" alt="Lapiz" title="Lapiz"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default FormSignUp;