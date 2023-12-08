import React from "react";

import './row.css';

const Row = ({ left, right }) => {
  return (
    <div className="content-list d-flex">
      <div className="content-item">
        {left}
      </div>
      <div className="content-item">
        {right}
      </div>
    </div>
  );
};

export default Row;