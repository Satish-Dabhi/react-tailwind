// import React from 'react';
import PropTypes from 'prop-types';

const ButtonPrimaryUi = ({ children }) => {
  return (
    <button
      className="font-inria text-white font-bold py-2 px-6 border border-white-700 rounded-none
                 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900
                 hover:text-gray-200 hover:border-transparent"
      style={{
        background: "linear-gradient(90deg, #1E8DCD 0%, #0F4767 96.77%)",
        borderRadius: "0",
      }}
    >
      {children}
    </button>
  );
};

ButtonPrimaryUi.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonPrimaryUi;
