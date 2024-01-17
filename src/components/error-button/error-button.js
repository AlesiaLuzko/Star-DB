import React, { useState } from "react";

import "./error-button.css";

const ErrorButton = () => {

  const [renderError, setRenderError] = useState(false);

  if (renderError) {
    throw new Error();
  }

  return (
    <button className="error-button btn btn-outline-danger"
    onClick={() => setRenderError(true)}>
      Throw Error
    </button>
  );
};

export default ErrorButton;