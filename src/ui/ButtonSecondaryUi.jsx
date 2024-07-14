/* eslint-disable react/prop-types */

const ButtonSecondaryUi = ({ children }) => {
  return (
    <button className="bg-white font-inria hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-800 rounded shadow">
      {children}
    </button>
  );
};

export default ButtonSecondaryUi;
