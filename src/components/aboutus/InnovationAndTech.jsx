/* eslint-disable react/no-unescaped-entities */
import ButtonPrimaryUi from "../../ui/ButtonPrimaryUi";
import innovation from "/img/aboutus/innovation.png";

const InnovationAndTech = () => {
  return (
    <div className="container mx-auto p-10 mt-12 mb-12 md:mt-12 2xl:mt-[7rem]">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="text-2xl md:text-4xl font-semibold text-center">
            <span className="font-inria">Innovation and Technology</span>
            <div className="bg-darkyellow h-1 ml-2 mt-2  w-[8rem] "></div>
          </div>
        </div>
        <p className="pl-12 pr-12 mt-5">
          At Epiidosis Investments LLC, we embrace innovation and leverage
          technology to drive transformative change in the financial industry.
          Here's how we lead the way in innovation and technology:
        </p>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 mb-5  md:items-center">
        <div>
          <p className="text-lg font-semibold mt-5">
            Companys Approach to Innovation
          </p>
          <p className=" pr-3 font-inter text-justify w-[80%]">
            Innovation is at the core of our business philosophy. We foster a
            culture of creativity, curiosity, and continuous improvement, where
            new ideas are encouraged, and boundaries are pushed. Our approach to
            innovation is grounded in:
          </p>
          <div className="mt-5">
            <div className="flex gap-5">
              <p>🔵</p>
              <div>
                <p className="text-xl font-semibold font-inria">
                  Research and Development
                </p>
                <p className="w-[80%] font-inter text-justify">
                  We invest in research and development initiatives to explore
                  emerging trends, technologies, and investment opportunities.
                  By staying ahead of the curve, we can anticipate market shifts
                  and capitalize on new opportunities for growth and value
                  creation.
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <p>🔵</p>
              <div>
                <p className="text-xl font-semibold font-inria">
                  Collaboration and Partnerships
                </p>
                <p className="w-[80%] font-inter mb-5 text-justify">
                  We actively seek partnerships and collaborations with
                  technology firms, startups, and industry leaders to leverage
                  their expertise, resources, and networks. These partnerships
                  enable us to access cutting-edge technologies, drive
                  innovation, and deliver innovative solutions to our clients
                  and stakeholders.
                </p>
                <ButtonPrimaryUi>
                  <span className="font-inria">View more</span>{" "}
                </ButtonPrimaryUi>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5">
          <img alt="innovation" src={innovation} />
        </div>
      </div>
    </div>
  );
};

export default InnovationAndTech;
