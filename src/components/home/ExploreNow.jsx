// import ButtonSecondaryUi from "../../ui/ButtonSecondaryUi";

import { Button } from "@material-tailwind/react";

const ExploreNow = () => {
  return (
    <div className="text-center bg-gradient-to-r from-[#1E8DCD] to-[#0F4767] mx-auto flex flex-col items-center justify-center w-full py-[5rem]">
      <div className="container">
        <p className="text-4xl text-white font-bold text-center font-inria">
          Explore Investment Opportunities with us
        </p>
        <p className="text-wrap  text-white font-inter text-md w-full  p-5 md:pt-3 md:p-0 text-gray-600 mt-2">
          Explore our comprehensive range of investment solutions tailored to
          your needs. From strategic portfolio management to innovative
          financial products, we offer expertise and flexibility to optimize
          your investment strategy. With a focus on performance, risk
          management, and client satisfaction, we deliver results that exceed
          expectations. Trust us to navigate the complexities of the financial
          landscape and help you achieve your investment objectives with
          confidence and clarity.
        </p>
        <Button
          size="sm"
          className="mt-5 border border-white font-inria rounded-none bg-gradient-to-r from-[#339FDE] to-[#1C5678] px-[50px] py-[15px] normal-case text-xl font-normal"
        >
          <span className="flex items-center gap-2">
            Explore Now{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </Button>
        {/* <ButtonSecondaryUi>
          <span className="flex items-center gap-2">
            Explore Now{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </ButtonSecondaryUi> */}
      </div>
    </div>
  );
};

export default ExploreNow;
