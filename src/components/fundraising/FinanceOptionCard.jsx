import PropTypes from 'prop-types';
import { Button } from '@material-tailwind/react';
import imgage1 from "../../../public/img/fundraising/pngwing.com (4) 1.png";

const FinanceOptionCard = ({ title, description, features, buttonText, onButtonClick, buttonStyle }) => {
  return (
    <div className="flex items-center bg-white p-6 shadow-md rounded-none">
      <div className="w-1/2">
        <img src={imgage1} alt="Finance Options" className="w-full h-auto" />
      </div>
      <div className="w-1/2 pl-6">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: '#5F5D5E' }}>{title}</h2>
        <p className="text-gray-600 mb-4" style={{ color: '#5F5D5E' }}>{description}</p>
        <ul className="text-gray-600 mb-4">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="flex justify-between mb-4 mt-10 items-start">
          <FeatureCard 
            title="Diverse Funding Solutions"
            description="Epidosis Investments offers a range of funding options including capital markets funds, private equity, and private debt platforms, tailored to meet diverse project requirements."
          />
          <div className="h-40 w-px bg-black mx-4"></div> {/* Separator line */}
          <FeatureCard 
            title="Flexibility and Scalability"
            description="Our flexible investment options ensure scalability to support projects of varying sizes and stages."
          />
        </div>
        <Button 
          className="bg-gradient-to-r from-[#1C5678] to-[#339FDE] text-white rounded-none mt-10" 
          onClick={onButtonClick}
          style={buttonStyle} // Apply custom button styles
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="flex flex-col w-1/2 pr-4 my-0"> {/* Removed margin-bottom */}
      <span className="w-2 h-2 rounded-full bg-blue-500 mb-1"></span>
      <div>
        <h3 className="font-semibold mb-2" style={{ color: '#5F5D5E' }}>{title}</h3>
        <p className="text-gray-600" style={{ color: '#5F5D5E' }}>{description}</p>
      </div>
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
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FinanceOptionCard;
