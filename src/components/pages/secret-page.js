import React from "react";
import { Navigate } from "react-router-dom";
import yodaImage from './baby-yoda.png';

const SecretPage = ({isLoggedIn}) => {

  if (isLoggedIn) {
    return(
      <div className="jumbotron text-center">
        <h3>This page is full of secrets!!!</h3>
        <img src={yodaImage} alt="baby-yoda"/>
      </div>
    );
  }

  return <Navigate to="/login" />;
};

export default SecretPage;