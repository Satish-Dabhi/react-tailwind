import image3 from "../../../public/img/aboutus/closeup-shot-spinning-globe-beige[1] 1.jpg";

function MissionSection() {
  return (
    <div 
      className="relative overflow-hidden font-helvetica"
      style={{
        width: '100%',
        height: '400px',
        marginTop: '225px',
        border: '1px solid transparent',
        backgroundImage: `url(${image3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 hover:opacity-40 transition-opacity duration-300"></div> {/* Overlay for text visibility */}
      <div className="absolute inset-0 flex flex-col justify-center text-white p-5">
        <h2 className="text-3xl font-bold mb-4 md:mb-10 text-center md:text-left ml-20">Our History</h2>
        <div className="mt-4 md:mt-0 md:flex md:flex-col md:justify-center md:h-full">
          <p className="md:text-xl ml-20 mr-20">
            Epiidosis Investments LLC has quickly risen to prominence since its inception in 2020. Founded with a vision to identify and capitalize on high-potential investment opportunities, we have established ourselves as a trusted partner in the global investment landscape. Our journey is marked by strategic milestones and significant achievements that underscore our commitment to excellence, innovation, and sustainable growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionSection;
