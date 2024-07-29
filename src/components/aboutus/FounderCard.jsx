import PropTypes from "prop-types";

const FounderCard = ({ image, name, title, description }) => {
  return (
    <div className="bg-[#E8F6FF] p-6 md:p-10">
      <div className="bg-white container mx-auto rounded-xl p-6 lg:p-[5rem] flex flex-col md:flex-row">
        <img
          src={image}
          alt={name}
          className="w-full lg:w-60 rounded object-cover shadow-2xl mb-4 md:mb-0"
        />
        <div className="md:ml-5 md:mr-10 lg:px-[4rem] flex flex-col justify-center">
          <p className="font-inria text-xl font-normal w-full">{title}</p>
          <p className="font-inria text-3xl my-2 md:my-4 font-bold">{name}</p>
          <div className="flex flex-wrap">
            {description &&
              description.length > 0 &&
              description.map((item, index) => (
                <p
                  key={index}
                  className="font-inter text-base font-light leading-normal mb-2 mr-2"
                >
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
