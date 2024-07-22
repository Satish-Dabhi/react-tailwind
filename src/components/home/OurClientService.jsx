import ButtonPrimaryUi from "../../ui/ButtonPrimaryUi";

const OurClientService = () => {
  return (
    <div className="blue-div bg-gradient-to-r from-[#1E8DCD] to-[#0F4767] py-10 flex flex-col justify-center items-center text-white font-helvetica text-center">
      <div className="container mx-auto">
        <h1 className="mb-5 font-inria text-2xl md:text-4xl leading-relaxed">
          Explore Investment Opportunities with us
        </h1>
        <div className=" leading-relaxed">
          <p className="text-white md:mx-auto font-inter font-extralight	">
            Explore our comprehensive range of investment solutions tailored to
            your needs. From strategic portfolio management to innovative
            financial products, we offer expertise and flexibility to optimize
            your investment strategy. With a focus on performance, risk
            management, and client satisfaction, we deliver results that exceed
            expectations. Trust us to navigate the complexities of the financial
            landscape and help you achieve your investment objectives with
            confidence and clarity.
          </p>
        </div>
        <div className="flex justify-center mt-4 mb-4">
          <ButtonPrimaryUi text='Explore Now'>
            <span className="flex">
              Explore Now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </ButtonPrimaryUi>
        </div>
      </div>
    </div>
  );
};

export default OurClientService;
