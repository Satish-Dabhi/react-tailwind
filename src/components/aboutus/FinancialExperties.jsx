/* eslint-disable react/prop-types */
import finacial from "/img/aboutus/finacial.png";
import ButtonPrimaryUi from '../../ui/ButtonPrimaryUi';
import ButtonSecondaryUi from "../../ui/ButtonSecondaryUi";

const FinancialExperties = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-bgcream mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-12 flex justify-center">
          <img alt="financial" src={finacial} className="w-[60%] p-5" />
        </div>
        <div className="p-12">
          <div className="text-4xl font-semibold font-inria">{data?.heading}</div>
          <p className="mt-5 text-gray-500 font-inter">
            {data?.desc}
          </p>
          <div className="flex gap-2 mt-5 md:mt-8">
            <ButtonPrimaryUi><span className="font-inria">Dashboard</span></ButtonPrimaryUi>
            <ButtonSecondaryUi>
              <span className="flex items-center gap-2 font-inria">
                See More
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
            </ButtonSecondaryUi>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialExperties;
