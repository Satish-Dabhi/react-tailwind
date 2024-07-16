import SampleImage from "../../../public/img/home/hero-2 1.jpg"; // Adjust the path as per your project structure

const TargetRegin = () => {
  // Calculate the width of the hr element based on the text content of the heading
  // const hrWidth = `${Math.ceil(50)}%`; // Adjust percentage as per your requirement

  return (
    <div className="flex flex-col justify-center items-center text-white text-center min-h-[50vh]  font-helvetica text-[2.5rem]">
      <div className="container text-center py-[3rem] mx-auto">
        <p className="text-4xl text-[#5F5D5E] font-inria font-semibold">
          Targeted Region
        </p>
        <div className="flex justify-center">
          <div className="bg-primary h-1 w-[16rem] mt-3"></div>
        </div>
      </div>
      <div
        className="relative w-full h-screen overflow-hidden"
        style={{
          backgroundImage: `url(${SampleImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default TargetRegin;
