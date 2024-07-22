import PropTypes from "prop-types";
import ellipse from "/img/aboutus/ellipse.png";

const FutureExpansion = ({ options }) => {
  return (
    <div className="p-6">
      <p className="text-2xl font-inria font-semibold relative">
        <span className="relative">
          Future Expansion
          <span className="absolute -bottom-4 left-0 h-1 w-20 bg-[#339FDE]"></span>
        </span>
      </p>
      <p className="text-gray-600 text-lg mt-4 lg:mt-6">
        Epiidosis Investments LLC is committed to expanding its asset classes to
        these jurisdictions soon, providing a broader range of investment
        opportunities for asset owners and investors.
      </p>

      <div>
        {options.map((option, index) => (
          <div key={index} className="mb-4 flex items-start">
            <img src={ellipse} height={35} width={35} className="mr-2" />
            
            {/* <span className="w-3 h-3 rounded-full bg-blue-500 mr-2 mt-1"></span> */}
            <h3
              className="font-semibold fonr-inter mr-2"
              style={{ color: "#5F5D5E" }}
            >
              {option.country}:
            </h3>
            <p
              className="text-gray-600 font-inter"
              style={{ color: "#5F5D5E" }}
            >
              {option.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

FutureExpansion.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FutureExpansion;
