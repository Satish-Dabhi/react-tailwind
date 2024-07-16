import PropTypes from 'prop-types';
import { useState } from 'react';

const ValueCard = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-[#E8F6FF] p-6 rounded-none shadow-md transition duration-300 ease-in-out transform hover:scale-105 ml-10`}
      style={{ width: '400px', height: '250px', color: '#5F5D5E', position: 'relative' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
      {isHovered && (
        <div className="absolute inset-0 bg-transparent"></div>
      )}
    </div>
  );
};

ValueCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ValueCard;
