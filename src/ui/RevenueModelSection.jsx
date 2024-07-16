
import PropTypes from 'prop-types';

const WhySection = ({ heading, description }) => {
  return (
    <section className="py-8 bg-white text-center mt-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-600 ">
          {heading}
          <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2"></span>
        </h2>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </section>
  );
};

WhySection.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WhySection;
