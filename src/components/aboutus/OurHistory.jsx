import ourHistory from "/img/aboutus/our-history.png";

const OurHistory = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${ourHistory})` }}
        className="relative w-full h-[380px] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-[#102741] bg-opacity-60"></div>
        <div className="mt-12 text-white absolute inset-0 flex flex-col px-12 lg:px-24">
          <p className="text-white font-inria text-4xl my-5 font-semibold">
            OUR HISTORY
          </p>
          <p className="mt-12 text-white font-inter text-base font-light leading-36">
            Epiidosis Investments LLC has quickly risen to prominence since its
            inception in 2020. Founded with a vision to identify and capitalize
            on high-potential investment opportunities, we have established
            ourselves as a trusted partner in the global investment landscape.
            Our journey is marked by strategic milestones and significant
            achievements that underscore our commitment to excellence,
            innovation, and sustainable growth.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurHistory;
