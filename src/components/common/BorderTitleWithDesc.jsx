import PropTypes from "prop-types";

function BorderTitleWithDesc({ title, description }) {
  return (
    <div className="container text-center py-[3rem] mx-auto">
      <p className="text-4xl font-inria font-semibold relative">
        <span className="relative">
          {title}
          <span className="absolute -bottom-[1rem] left-0 h-[4px] w-[30%] bg-gradient-to-r from-[#339FDE] to-[#1C5678]"></span>
        </span>
      </p>
      {description && <p className="text-gray-600 text-lg mt-10">{description}</p>}
    </div>
  );
}

BorderTitleWithDesc.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BorderTitleWithDesc;
