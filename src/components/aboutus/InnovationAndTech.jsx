import ButtonPrimaryUi from "../../ui/ButtonPrimaryUi";
import innovation from "/img/aboutus/innovation.png";

const InnovationAndTech = () => {
  return (
    <div className="container mx-auto p-10 mt-3 mb-2 md:mt-8 2xl:mt-[1rem]">
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-10">
        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start">
          <div className="text-2xl md:text-4xl font-semibold text-center md:text-left">
            <span className="font-inria">Innovation and Technology</span>
            <div className="bg-darkyellow h-1 ml-2 mt-2 w-[8rem]"></div>
          </div>
          <p className="mt-5 text-center md:text-left">
            Epiidosis Investments LLC pioneers innovation and technology in the financial sector, 
            driving transformative change through cutting-edge solutions. From research and development to strategic partnerships
            , we harness advanced technologies like AI and blockchain to optimize investments and enhance client outcomes.
          </p>
          <div className="mt-5">
            <div className="flex gap-5">
              <p>🔵</p>
              <div>
                <p className="text-xl font-semibold font-inria">
                  Innovative Culture:
                </p>
                <p className="w-[80%] font-inter text-justify">
                Fosters creativity and continuous improvement, exploring emerging trends and technologies.
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <p>🔵</p>
              <div>
                <p className="text-xl font-semibold font-inria">
                  Technological Integration:
                </p>
                <p className="w-[80%] font-inter mb-5 text-justify">
                  Utilizes AI, blockchain, and data analytics to enhance decision-making, portfolio management efficiency, and client satisfaction.
                </p>
                <ButtonPrimaryUi>
                  <span className="font-inria">View more</span>
                </ButtonPrimaryUi>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-5">
          <img alt="innovation" src={innovation} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default InnovationAndTech;
