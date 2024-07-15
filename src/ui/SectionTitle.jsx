/* eslint-disable react/prop-types */

const SectionTitle = ({ title }) => {
  return (
    <div className="bg-gradient-to-r from-[#1E8DCD] to-[#0F4767] mx-auto flex flex-col items-center justify-center w-full py-[5rem]">
      <p className="text-4xl text-white font-bold text-center font-inria">
        {title}
      </p>
    </div>
  );
};

export default SectionTitle;
