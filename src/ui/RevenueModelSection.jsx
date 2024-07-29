
import PropTypes from 'prop-types';


const WhySection = ({ heading }) => {
  return (
    <section className="pt-8 bg-white text-center">
      <div className="max-w-screen-xl container mx-auto">
        <h2 className="text-2xl font-bold mb-4 font-inria">
          {heading}
        </h2>
        <p className="text-gray-600 text-md font-inter font-light">At Epiidosis Investments, our revenue model is designed to maximize returns while fostering long-term growth.</p>
        <p className="text-gray-600 text-md font-inter font-light"> We leverage diverse investment opportunities across sectors to create value for our investments.</p>
      </div>
    </section>
  );
};

WhySection.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default WhySection;
