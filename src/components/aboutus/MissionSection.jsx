import image3 from "../../../public/img/aboutus/closeup-shot-spinning-globe-beige[1] 1.jpg";

function MissionSection() {
  return (
    <div
      className="relative overflow-hidden font-helvetica"
      style={{
        width: "100%",
        height: "400px",
        marginTop: "100px",
        border: "1px solid transparent",
        backgroundImage: `url(${image3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80 hover:opacity-50 transition-opacity duration-300"></div>{" "}
      {/* Overlay for text visibility */}
      <div className="text-white absolute inset-0 flex flex-col container mx-auto justify-center">
        <p className="text-white font-inria text-2xl lg:text-4xl my-5 font-semibold">
          OUR HISTORY
        </p>
        <p className="text-wrap text-md text-justify w-full text-white mt-2 md:mt-3 font-inter p-5 md:p-0 font-inter text-center">
          {/* <p className="mt-3 md:mt-12 text-white font-inter text-xs lg:text-xl font-extralight leading-36 leading-[25px] tracking-[0.01em]"> */}
          Epiidosis Investments LLC has quickly risen to prominence since its
          inception in 2020. Founded with a vision to identify and capitalize on
          high-potential investment opportunities, we have established ourselves
          as a trusted partner in the global investment landscape. Our journey
          is marked by strategic milestones and significant achievements that
          underscore our commitment to excellence, innovation, and
          sustainable growth.
        </p>
      </div>
    </div>
  );
}

export default MissionSection;
