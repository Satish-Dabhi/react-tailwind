import second from "/logos/financial-navigation.jpg";

const FinancialNavigation = () => {
  return (
    <div className="container mx-auto md:justify-center flex flex-wrap md:gap-28 mt-[10rem] mb-12">
      <img alt="deal" src={second} className="w-[30rem] h-auto" />
      <div className="text-start text-wrap ">
        <p className="text-3xl md:text-4xl font-semibold font-inria text-center mt-5 md:text-start md:p-0">
        Your Reliable Guide in Financial       </p>
        <p className="text-3xl md:text-4xl font-semibold font-inria text-center md:text-start md:p-0">
        Navigation 
        </p>
        <div className="main-body absolute">
          {/* <div
            className="h-[6rem] bg-primary mt-5 animate-slidein [--slidein-delay:100ms] opacity-0"
            style={{ width: "5px" }}
          ></div>{" "} */}
          <p className="pl-3 text-wrap text-md w-full md:w-[30rem] pl-5 pr-5 md:pl-0 md:pr-0 text-gray-600 mt-3 md:mt-2 font-inter">
            At Epiidosis Investments LLC, we empower individuals and
            organizations to achieve their financial goals by providing
            innovative investment solutions, strategic guidance, and
            unparalleled service.
          </p>
        </div>

        <p className="text-wrap text-md w-full md:w-[30rem] pl-5 pr-5 md:pl-0 md:pr-0 text-gray-600 mt-3 md:mt-2 font-inter">
          We are committed to delivering superior returns for our investors,
          fostering economic growth in the communities we serve, and upholding
          the highest standards of integrity, transparency, and professionalism
          in all our endeavors.
        </p>
      </div>
    </div>
  );
};
export default FinancialNavigation;
