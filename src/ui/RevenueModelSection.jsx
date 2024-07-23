
import PropTypes from 'prop-types';


const WhySection = ({ heading, description }) => {
  return (
    <section className="pt-8 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 font-inria">
          {heading}
        </h2>
        <p className="text-gray-600 text-md font-inter font-light">{description}</p>
      </div>
    </section>
  );
};

WhySection.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WhySection;
