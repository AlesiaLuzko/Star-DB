import React from "react";
import PropTypes from "prop-types";

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

Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
}

export default Row;