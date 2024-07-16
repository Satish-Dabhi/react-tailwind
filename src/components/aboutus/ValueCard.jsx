import PropTypes from 'prop-types';
import { useState } from 'react';

const ValueCard = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`text-center bg-[#E8F6FF] p-6 rounded-none shadow-2xl transition duration-300 ease-in-out transform hover:scale-105`}
      style={{ color: '#5F5D5E', position: 'relative' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm leading-[25px] tracking-[0.01em]">{description}</p>
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
