import Fnavigation from "/img/Fnavigation.png";

const OurServiceSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:mt-[1rem] md:flex-row md:justify-center items-center md:flex-wrap 2xl:gap-[5rem] mt-12 mb-12">
      <img alt="deal" src={Fnavigation} className=" md:h-auto mb-8 md:mb-0 ml-auto" />
      <div className="text-center md:text-start max-w-full md:max-w-[50%]">
        <h2 className="text-2xl md:text-4xl font-inria font-semibold">
          Your Reliable Guide in Financial Navigation
        </h2>
        <div className="flex items-start mt-4">
          <p
            className="text-sm md:text-base font-inter border-l-4 pl-5 lg:pr-[8rem]"
            style={{
              borderImage: "linear-gradient(to bottom, #4dc0b5, #3490dc) 1",
              MozBorderImage: "linear-gradient(to bottom, #4dc0b5, #3490dc) 1", // For Firefox
            }}
          >
            At Epiidosis Investments LLC, we empower individuals and
            organizations to achieve their financial goals by providing
            innovative investment solutions, strategic guidance, and
            unparalleled service.
          </p>
        </div>
        <p className="mt-4 text-sm md:text-base font-inter mr-4 lg:pr-[8rem]">
          We are committed to delivering superior returns for our investors,
          fostering economic growth in the communities we serve, and upholding
          the highest standards of integrity, transparency, and professionalism
          in all our endeavors.
        </p>
      </div>
      </div>
    </div>
  );
};

export default OurServiceSection;
