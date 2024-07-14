/* eslint-disable react/prop-types */
const ButtonPrimaryUi = ({children}) => {
  return (
    <button className="bg-blue-500 font-inria hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
      {children}
    </button>
  );
};

export default ButtonPrimaryUi;
