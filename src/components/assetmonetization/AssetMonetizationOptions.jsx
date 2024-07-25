import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const AssetMonetizationOptions = ({ monetizationOptions, onButtonClick }) => {
  return (
    <div className=" p-6">
      <p className="text-2xl font-inria font-semibold relative">
        <span className="relative">
          Asset Monetization Options
          <span className="absolute -bottom-4 left-0 h-1 w-20 bg-[#339FDE]"></span>
        </span>
      </p>
      <p className="text-gray-600 text-lg mt-4 lg:mt-6">
        Showcase different asset types suitable for monetization. Different
        Classes of Assets Considered by Epiidosis Investments LLC
      </p>

      <div className="flex justify-between mb-4 mt-10 items-start">
        {monetizationOptions.map((option, index) => (
          <div key={index} className="flex-1 p-4">
            <div className="flex items-center mb-2">
              <h3 className="font-semibold" style={{ color: "#5F5D5E" }}>
                {option.title}
              </h3>
            </div>
            <ul className="text-gray-600 text-sm" style={{ color: "#5F5D5E" }}>
              {option.details.map((detail, i) => (
                <li key={i} className="flex items-center mb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link to={"/contact-us"}>
        <Button
          className="px-10 font-inria font-normal flex items-center mt-8 lg:mt-6 animate-slidein [--slidein-delay:700ms] opacity-0"
          style={{
            backgroundImage:
              "linear-gradient(278.35deg, #1C5678 14.04%, #339FDE 97.09%)",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "0",
            textAlign: "center",
          }}
          onClick={onButtonClick}
        >
          <span className="font-inria font-normal text-md lg:text-lg normal-case">
            Contact US
          </span>
        </Button>
      </Link>
    </div>
  );
};

AssetMonetizationOptions.propTypes = {
  monetizationOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      details: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default AssetMonetizationOptions;
