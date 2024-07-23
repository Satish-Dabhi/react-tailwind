import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonPrimaryUi = ({ to, children }) => {
  return (
    <Link to={to}>
      <button
        className="font-inria text-white font-bold py-2 px-6 rounded-none bg-gradient-to-r from-[#1E8DCD] to-[#0F4767] border-2 border-transparent hover:border-white transition-all duration-300"
      >
        {children}
      </button>
    </Link>
  );
};

ButtonPrimaryUi.propTypes = {
  to: PropTypes.string.isRequired, // Ensure 'to' is a string, not node
  children: PropTypes.node.isRequired,
};

export default ButtonPrimaryUi;
