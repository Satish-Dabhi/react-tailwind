import PropTypes from "prop-types";

const FounderCard = ({ image, name, title, description }) => {
  return (
    <div className="bg-[#E8F6FF] p-6 md:p-10">
      <div className="bg-white rounded-xl p-6 md:p-10 flex flex-col md:flex-row">
        <img
          src={image}
          alt={name}
          className="w-full md:w-64 h-40 md:h-80 rounded object-cover shadow-md mb-4 md:mb-0"
        />
        <div className="md:ml-5 md:mr-10">
          <p className="font-inria text-base font-light">{title}</p>
          <p className="font-inria text-3xl my-2 md:my-3 font-bold">{name}</p>
          <div className="flex flex-wrap">
            {description &&
              description.length > 0 &&
              description.map((item, index) => (
                <p key={index} className="font-inter text-base font-light mb-2 mr-2">
                  {item}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

FounderCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FounderCard;
