// import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonPrimaryUi = ({ to, children }) => {
  return (
    <Link to={to}>
    <button
      className="font-inria text-white font-bold py-2 px-6  rounded-none
                 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900
                 hover:text-gray-200 hover:border-transparent"
      style={{
        background: "linear-gradient(90deg, #1E8DCD 0%, #0F4767 96.77%)",
        borderRadius: "0",
      }}
    >
      {children}
    </button>
    </Link>
  );
};

ButtonPrimaryUi.propTypes = {
  to: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonPrimaryUi;
