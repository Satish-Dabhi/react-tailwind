/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { Input } from "@material-tailwind/react";
const HeroSectionKnowledge = ({ color }) => {
  return (
    <section className={`bg-${color}  md:h-screen`}>
      <div className="container mx-auto p-5 md:p-10">
        <div className="text-center text-white space-y-8 md:mt-[5rem] mt-10 mb-10">
          <p className="text-4xl md:text-6xl font-inter font-semibold">
            How can we help?
          </p>
          <p className="text-xl text-justify">
          Explore answers to your frequently asked questions and discover comprehensive insights about our services and offerings. Gain clarity and confidence with expert guidance on navigating our website and understanding our commitment to your financial goals.{" "}
          </p>
          <div className="w-[80%] mx-auto mt-4">
            <Input
              label="Search for answers"
              className="bg-white "
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionKnowledge;
