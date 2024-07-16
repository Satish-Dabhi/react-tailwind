import PropTypes from 'prop-types';

const FounderCard = ({ image, name, title, description }) => {
  return (
    <div className="bg-blue-100 w-full py-16 flex justify-center">
      <div className="bg-white p-8 rounded-tl-2xl w-[1350px] h-[500px] flex items-center shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
        <img
          src={image}
          alt={name}
          className="w-[320px] h-[400px] rounded object-cover mr-6 ml-20"
        />
        <div className="max-w-[900px] ml-20 mr-20">
          <h3 className="text-gray-700 text-sm font-medium pt-10">{title}</h3>
          <h2 className="text-2xl font-bold text-gray-700 mb-2 pt-10">{name}</h2>
          <p className="text-gray-700 text-sm pt-10">{description}</p>
        </div>
      </div>
    </div>
  );
};

FounderCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FounderCard;
