import heroSectionAboutUs from "/img/aboutus/about-us.jpeg";

const HerosectionAboutUs = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${heroSectionAboutUs})` }}
        className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-[#102741] bg-opacity-60"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <p className="text-center text-white font-inria text-5xl my-5 font-semibold  md:text-center">
            About Epiidosis Investments LLC
          </p>
          <p className="text-white p-5 lg:w-[75%] font-inter text-base font-light text-center leading-36">
            Epiidosis Investments LLC, headquartered in Dubai, is a leading
            investment firm dedicated to unlocking high-potential opportunities
            across diversified asset classes. We focus on sectors with robust
            demand fundamentals, particularly those prioritized by governments
            in the Middle East and East Africa.
          </p>
        </div>
      </div>
    </>
  );
};

export default HerosectionAboutUs;
