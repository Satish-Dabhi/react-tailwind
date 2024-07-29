import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import imgage1 from "../../../public/img/fundraising/pngwing.com (4) 1.png";
import { Link } from "react-router-dom";

const FinanceOptionCard = ({
  title,
  description,
  features,
  buttonText,
  onButtonClick,
  buttonLink,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pr-6">
        <img src={imgage1} alt="Finance Options" className="w-full h-auto" />
      </div>

      {/* Text Content Section */}
      <div className="w-full lg:w-1/2">
        <p className="text-2xl font-inria font-semibold relative">
          <span className="relative">
            {title}
            <span className="absolute -bottom-4 left-0 h-1 w-20 bg-[#339FDE]"></span>
          </span>
        </p>
        {description && (
          <p className="text-gray-600 text-lg mt-4 lg:mt-6">{description}</p>
        )}
        <ul className="list-disc text-gray-600 mb-4 pl-5 mt-6">
          {features.map((feature, index) => (
            <li key={index} className="mb-1">
              {feature}
            </li>
           ))}
        </ul>

        {/* Feature Cards Section */}
        <div className="flex flex-col lg:flex-row justify-between mt-6 lg:mt-10 gap-3">
          <FeatureCard
            title="Diverse Funding Solutions"
            description="Epidosis Investments offers a range of funding options including capital markets funds, private equity, and private debt platforms, tailored to meet diverse project requirements."
          />
          <div className="h-0 lg:h-auto w-px bg-black my-4 lg:my-0 ml-3"></div>
          {/* Separator line */}
          <FeatureCard
            title="Flexibility and Scalability"
            description="Our flexible investment options ensure scalability to support projects of varying sizes and stages."
          />
        </div>

        {/* Button Section */}
        <Link to={buttonLink}>
          <Button
            className="px-10 font-inria font-normal flex items-center mt-8 lg:mt-10 animate-slidein [--slidein-delay:700ms] opacity-0"
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
              {buttonText}
            </span>{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};

FinanceOptionCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="flex flex-col w-full lg:w-1/2 mb-6 lg:mb-0">
      <div className="flex items-center mb-2">
        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
        <h3 className="font-semibold text-base lg:text-lg text-gray-800">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

FinanceOptionCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object, // Add prop type for custom button styles
  buttonLink: PropTypes.string.isRequired,
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FinanceOptionCard;
