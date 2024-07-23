/* eslint-disable react/prop-types */

import ValueCard from "./ValueCard";

const ValueHow = ({ title, valueData }) => {
  return (
    <div className="container mx-auto">
      <div className="w-full p-8">
        <div className="container text-center py-[1rem] pb-8 mx-auto">
          <p className="text-4xl font-inria font-semibold relative">
            <span className="relative">
              {title}
              <span className="absolute -bottom-[1rem] left-0 h-[4px] w-[30%] bg-gradient-to-r from-[#339FDE] to-[#1C5678]"></span>
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-8">
          <div className="flex flex-col md:w-1/3 space-y-4 p-2">
            <ValueCard
              title={valueData[0].title}
              description={valueData[0].description}
            />
            <ValueCard
              title={valueData[1].title}
              description={valueData[1].description}
            />
          </div>
          <div className="flex flex-col md:w-1/3 space-y-4 p-2 justify-center">
            <ValueCard
              title={valueData[2].title}
              description={valueData[2].description}
            />
          </div>

          <div className="flex flex-col md:w-1/3 space-y-4 p-2">
            <ValueCard
              title={valueData[3].title}
              description={valueData[3].description}
            />
            <ValueCard
              title={valueData[4].title}
              description={valueData[4].description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueHow;
