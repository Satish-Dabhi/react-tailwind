import PropTypes from 'prop-types';

const FutureExpansion = ({ options }) => {
  return (
    <div className="w-1/2 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4" style={{ color: '#5F5D5E' }}>Future Expansion</h2>
      <p className="text-gray-600 mb-4" style={{ color: '#5F5D5E' }}>
        Epidosis Investments LLC is committed to expanding its asset classes to these jurisdictions soon, providing a broader range of investment opportunities for asset owners and investors.
      </p>
      <div>
        {options.map((option, index) => (
          <div key={index} className="mb-4 flex items-start">
            <span className="w-3 h-3 rounded-full bg-blue-500 mr-2 mt-1"></span>
            <div>
              <h3 className="font-semibold" style={{ color: '#5F5D5E' }}>{option.country}</h3>
              <p className="text-gray-600" style={{ color: '#5F5D5E' }}>{option.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

FutureExpansion.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    country: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  })).isRequired,
};

export default FutureExpansion;
