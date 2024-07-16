  import PropTypes from 'prop-types';
import { Button } from '@material-tailwind/react';

const AssetMonetizationOptions = ({ monetizationOptions, onButtonClick }) => {
  return (
    <div className="w-1/2 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4" style={{ color: '#5F5D5E' }}>Asset Monetization Options</h2>
      <p className="text-gray-600 mb-4" style={{ color: '#5F5D5E' }}>
        Showcase different asset types suitable for monetization. Different Classes of Assets Considered by Epiidosis Investments LLC
      </p>
      <div className="flex justify-between mb-4 mt-10 items-start">
        {monetizationOptions.map((option, index) => (
          <div key={index} className="flex-1 p-4">
            <div className="flex items-center mb-2">
              <h3 className="font-semibold" style={{ color: '#5F5D5E' }}>{option.title}</h3>
            </div>
            <ul className="text-gray-600 text-sm" style={{ color: '#5F5D5E' }}>
              {option.details.map((detail, i) => (
                <li key={i} className="flex items-center mb-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Button 
        className="bg-gradient-to-r from-[#1C5678] to-[#339FDE] px-4 py-2 text-white rounded-none mt-10" 
        onClick={onButtonClick}
      >
        Contact Us
      </Button>
    </div>
  );
};

AssetMonetizationOptions.propTypes = {
  monetizationOptions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default AssetMonetizationOptions;
