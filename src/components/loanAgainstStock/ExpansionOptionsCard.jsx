import PropTypes from 'prop-types';
import { Button } from '@material-tailwind/react';

const ExpansionOptionsCard = ({ title, description, options }) => {
  return (
    <div className="container mx-auto p-4 mt-0 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4" style={{ color: '#5F5D5E' }}>{title}</h2>
      <p className="text-gray-600 mb-4" style={{ color: '#5F5D5E' }}>{description}</p>
      <div className="flex">
        {options.map((option, index) => (
          <div key={index} className="flex-1 p-4">
            <div className="flex items-center mb-2">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
              <h3 className="font-semibold" style={{ color: '#5F5D5E' }}>{option.country}</h3>
            </div>
            <p className="text-gray-600" style={{ color: '#5F5D5E' }}>{option.details}</p>
          </div>
        ))}
      </div>
      <Button className="bg-gradient-to-r from-[#1C5678] to-[#339FDE] px-4 py-2 text-white rounded-none mt-10">
        Contact Us
      </Button>
    </div>
  );
};

ExpansionOptionsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    country: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  })).isRequired,
};

export default ExpansionOptionsCard;
