import { Button } from "@material-tailwind/react";

const InvestmentInfo = () => {
  const eligibilityRequirements = [
    "Hold Individuals listed stocks on approved exchanges.",
    "Minimum value of stocks eligible for collateralization may vary.",
    "Applicants must meet our credit worthiness and risk assessment criteria.",
  ];

  const keyRequirements = [
    "Valid identification documents.",
    "Proof of ownership for listed stocks.",
    "Compliance with regulatory standards.",
  ];

  const interestRatesTerms = [
    "Competitive interest rates tailored to market conditions and individual risk profiles.",
    "Flexible repayment terms ranging from months to years.",
    "No hidden fees or charges.",
  ];

  const visualRepresentation = [
    "Graphical representation of interest rates and repayment schedules for easy understanding.",
    "Detailed breakdown of loan terms provided alongside interest rates for transparency.",
  ];

  return (
    <div className=" bg-[#E8F6FF]">
      <div className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row justify-between p-4">
          <div className="md:w-1/2 pr-4 mb-4 md:mb-0">
            <div className="mb-4">
              <p className="text-2xl font-inria font-semibold relative pb-4">
                <span className="relative">
                  Eligibility Criteria
                  <span className="absolute -bottom-2 left-0 h-1 w-20 bg-[#339FDE]"></span>
                </span>
              </p>
              <div className="flex flex-col lg:flex-row justify-between mt-6 gap-3">
                {/* First Section */}
                <div className="w-full lg:w-1/2">
                  <h3 className="font-bold mb-3">Eligibility Requirements</h3>
                  <ul
                    className="text-gray-600 text-sm"
                    style={{ color: "#5F5D5E" }}
                  >
                    {eligibilityRequirements.map((detail, i) => (
                      <li key={i} className="flex mb-2">
                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Border (Vertical Divider) */}
                <div className="hidden lg:block h-0 lg:h-auto w-px bg-black my-4 lg:my-0 mx-3"></div>

                {/* Second Section */}
                <div className="w-full lg:w-1/2">
                  <h3 className="font-bold mb-3">Key Requirements</h3>
                  <ul
                    className="text-gray-600 text-sm"
                    style={{ color: "#5F5D5E" }}
                  >
                    {keyRequirements.map((detail, i) => (
                      <li key={i} className="flex mb-2">
                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-md" style={{ color: "#5F5D5E" }}>
              At Epiidosis Investments LLC, we are dedicated to providing
              unparalleled support and assistance to our clients throughout the
              loan application process and beyond. Our goal is to make the
              experience as seamless and stress-free as possible, allowing you
              to unlock liquidity with confidence and peace of mind.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 lg:pl-4">
            <div className="mb-4">
              <p className="text-2xl font-inria font-semibold relative pb-4">
                <span className="relative">
                  Interest Rates and Terms
                  <span className="absolute -bottom-2 left-0 h-1 w-20 bg-[#339FDE]"></span>
                </span>
              </p>
              <p className="text-gray-600 text-md" style={{ color: "#5F5D5E" }}>
                Explore our transparent interest rates and flexible terms
                designed to meet diverse financial needs. Benefit from
                competitive rates, clear repayment options, and comprehensive
                visual guides for transparent loan understanding.
              </p>
              <div className="flex flex-col lg:flex-row justify-between mt-6 lg:mt-10 gap-3">
                {/* First Section */}
                <div className="w-full lg:w-1/2">
                  <h3 className="font-bold mb-3">Transparency</h3>
                  <ul
                    className="text-gray-600 text-sm"
                    style={{ color: "#5F5D5E" }}
                  >
                    {interestRatesTerms.map((detail, i) => (
                      <li key={i} className="flex mb-2">
                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Border (Vertical Divider) */}
                <div className="hidden lg:block h-0 lg:h-auto w-px bg-black my-4 lg:my-0 mx-3"></div>

                {/* Second Section */}
                <div className="w-full lg:w-1/2">
                  <h3 className="font-bold mb-3">Visual Representation</h3>
                  <ul
                    className="text-gray-600 text-sm"
                    style={{ color: "#5F5D5E" }}
                  >
                    {visualRepresentation.map((detail, i) => (
                      <li key={i} className="flex mb-2">
                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Button Section */}
            <Button
              className="px-10 font-inria font-normal flex items-center mt-8 lg:mt-10 animate-slidein [--slidein-delay:700ms] opacity-0"
              style={{
                backgroundImage:
                  "linear-gradient(278.35deg, #1C5678 14.04%, #339FDE 97.09%)",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                borderRadius: "0",
                textAlign: "center",
              }}
            >
              <span className="font-inria font-normal text-md lg:text-lg normal-case">
                Contact Us
              </span>{" "}
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
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentInfo;
