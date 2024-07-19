import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return (
    <>
      <div className="p-3 font-bold bg-gradient-to-r from-[#1E8DCD] to-[#0F4767] h-64 flex justify-center items-center text-white text-3xl font-inria">
        <h2>{title}</h2>
      </div>
    </>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
