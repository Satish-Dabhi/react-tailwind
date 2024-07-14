import herosectionfundraising from "/img/fundraising/heroimgfundraising.png";
import { BreadcrumbsDefault } from "../../ui/BreadcrumbsDefault";
import ButtonPrimaryUi from "../../ui/ButtonPrimaryUi";
import { Carousel } from "@material-tailwind/react";

const beradcrumbs = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Our Services",
    link: "/aboutus",
  },
  {
    title: "Fundrasing",
    link: "/aboutus",
  },
];
const HeroSectionFundRaising = () => {
  return (
    <Carousel>
      <div
        style={{ backgroundImage: `url(${herosectionfundraising})` }}
        className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat md:h-[600px]"
      >
        <div className="absolute inset-0 flex flex-col container mx-auto">
          <BreadcrumbsDefault data={beradcrumbs} />
          <div className="ml-12">
            <p className="text-white mt-5 text-xl md:text-start md:text-4xl font-inria">
              Empower Your Vision With
            </p>
            <p className="text-white mt-1 text-xl md:text-start md:text-4xl font-inria">
              Epiidosis Investments
            </p>
            <p className="  md:w-[56%]  md:text-lg  text-gray-400 mt-1 font-inter">
              Unlock Funding Opportunities for Your Project
            </p>
            <p className="  md:w-[56%]  md:text-lg  text-gray-400 mt-2 font-inter">
              Join Epiidosis Investments and embark on a transformative journey
              to bring
            </p>

            <div className="w-fit mt-2">
              <ButtonPrimaryUi>
                {" "}
                <span className="flex  items-center gap-2 font-inria">
                  {" "}
                  Get Started{" "}
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
                </span>{" "}
              </ButtonPrimaryUi>
            </div>
            <p className="  md:w-[70%]  md:text-sm  text-gray-400 mt-5 font-inter">
              Join Epiidosis Investments and embark on a transformative journey
              to bring your projects to life. Our comprehensive funding process
              streamlines every step, ensuring transparency, efficiency, and
              support at every turn. Take the first step towards realizing your
              vision by clicking Get Started below.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${herosectionfundraising})` }}
        className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat md:h-[600px]"
      >
        <div className="absolute inset-0 flex flex-col container mx-auto">
          <BreadcrumbsDefault data={beradcrumbs} />
          <div className="ml-12">
            <p className="text-white mt-5 text-xl md:text-start md:text-4xl font-inria">
              Streamlined Funding Process
            </p>
            <p className="text-white mt-1 text-xl md:text-start md:text-4xl font-inria">
              Navigating Your Path to Success
            </p>

            <div className="w-fit mt-6">
              <ButtonPrimaryUi>
                {" "}
                <span className="flex  items-center gap-2 font-inria">
                  {" "}
                  Get Started{" "}
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
                </span>{" "}
              </ButtonPrimaryUi>
            </div>
            <p className="  md:w-[86%]  md:text-lg  text-gray-400 mt-3 font-inter">
              Our meticulous project funding process is designed to simplify the
              journey for entrepreneurs and visionaries like you. From initial
              onboarding and document submission to final fund deployment and
              project assessment, we provide a structured pathway to unlock
              funding opportunities and propel your projects forward.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${herosectionfundraising})` }}
        className="relative w-full h-[480px] bg-cover bg-center bg-no-repeat md:h-[600px]"
      >
        <div className="absolute inset-0 flex flex-col container mx-auto">
          <BreadcrumbsDefault data={beradcrumbs} />
          <div className="ml-12">
            <p className="text-white mt-5 text-xl md:text-start md:text-4xl font-inria">
              Benefits of Partnering with Epiidosis
            </p>
            <p className="text-white mt-1 text-xl md:text-start md:text-4xl font-inria">
              Why Choose Epiidosis for Your Funding Needs
            </p>
            <p className="  md:w-[56%]  md:text-lg  text-gray-400 mt-3 font-inter">
              Unlock Funding Opportunities for Your Project
            </p>
            <div className="w-fit mt-6">
              <ButtonPrimaryUi>
                {" "}
                <span className="flex  items-center gap-2 font-inria">
                  {" "}
                  Get Started{" "}
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
                </span>{" "}
              </ButtonPrimaryUi>
            </div>
            <ul className=" list-disc  md:w-auto  md:text-lg  text-gray-400 mt-3 font-inter">
              <li>
                Comprehensive Support: Access to a dedicated team guiding you
                through every stage of the funding process.
              </li>
              <li>Efficient Verification: Streamlined KYC and document verification process for swift progress.</li>
              <li>Tailored Solutions: Customized funding structures and terms to suit your projects unique requirements.</li>
              <li>Risk Mitigation: Thorough project assessment and risk underwriting to safeguard your investments.</li>
              <li>Strategic Leveraging: Utilization of assets and lines of credit to optimize fund procurement and project execution.</li>
              <li>Transparent Operations: Clear communication and visibility into fund availability and project status throughout the partnership journey.</li>
            </ul>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default HeroSectionFundRaising;
