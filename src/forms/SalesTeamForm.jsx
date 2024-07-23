import { useState } from "react";
import Inputs from "../forms/Inputs";
import companyLogo from "/logos/logo-white.png";

const SalesTeamForm = () => {
  const [sent, setSent] = useState(false);
  const [arrowRotation, setArrowRotation] = useState("rotate-[-90deg]");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setArrowRotation(sent ? "rotate-[-90deg]" : "rotate-[-45deg]");
  };
  return (
    <div style={{ backgroundColor: "#495b6e" }}>
      <div className="container mx-auto">
        <h1 className="text-center font-bold text-white p-10 text-2xl">
          INVEST WITH EPIIDOSIS INVESTMENTS LLC TO SECURE YOUR FINANCIAL FUTURE
        </h1>

        <div className="flex flex-col lg:flex-row justify-center space-x-4">
          <div className="w-full lg:w-1/2 p-10">
            <img alt="logo" src={companyLogo} className="mb-4 w-[270px] h-[50px]" />
            <br />
            <p className="text-white mb-8 -tracking-2">
              With Epiidosis, you can expect substantial returns on your initial
              investment. At Epiidosis, our investment management team is
              composed of seasoned professionals. They analyze investment
              opportunities, manage risks, and maximize returns for our clients.
              Invest with confidence.
            </p>
            <div className="text-white">
              <p className="mb-6 -tracking-2">Benefits of Investing with us:</p>
              <ol className="list-decimal list-inside pl-3 -tracking-2">
                <li>Complete transparency in investment process</li>
                <li>24/7 dedicated sales team support</li>
                <li>Full control of your investment</li>
                <li>Minimum investment of just AED 100K</li>
                <li>Investment lock-in period of just 1 year</li>
              </ol>
            </div>
          </div>
          <div className="w-full lg:w-3/4 lg:p-10 lg:px-20 mb-20 container">
            <div className="bg-white p-10 shadow-2xl">
              <p className="font-bold text-sm text-center mb-10">
                Fill in the information below for one of our sales team to
                schedule a call
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-6 flex">
                  <div className="w-full lg:w-1/2 mr-2">
                    <Inputs label="Name" className="bg-white w-3/4" />{" "}
                  </div>
                  <div className="w-full lg:w-1/2">
                    <Inputs label="Email" className="bg-white w-full" />{" "}
                  </div>
                </div>

                <div className="mb-6">
                  <Inputs label="Phoine Number" className="bg-white" />
                </div>
                <div className="mb-6">
                  <Inputs label="Organization" className="bg-white" />
                </div>
                <div className="mb-6">
                  <Inputs
                    label="Initial Desired Investments (AED) *"
                    className="bg-white"
                  />
                </div>
                <div className="mb-6 flex items-center space-x-4">
                  <div className="w-full lg:w-3/4">
                    {/* <Textarea
                      label="Description"
                      className="bg-white p-4 w-full"
                    /> */}
                    <div className="relative">
                      <label className="absolute -top-3 left-3 bg-white px-1 text-[#1FA0EB] font-inter">
                        Initial Desired Investments (AED) *
                      </label>
                      <textarea
                        className="w-full p-3 rounded"
                        style={{
                          border: "2px solid #1FA0EB",
                          borderImageSlice: "1",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-3xl">
                      {sent ? "Sent" : "Send"}
                    </span>
                    <button
                      className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transform ${arrowRotation} bg-gradient-to-r from-[#1C5678] to-[#339FDE] border-2 border-transparent hover:border-white transition-all duration-300`}
                      onClick={handleSubmit}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white transform rotate-45 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 12h14M12 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="text-center text-xs">
                  If you have any other requirements, please share with us at{" "}
                  <a
                    href="mailto:info@epiidosisinvestments.com"
                    className="text-blue-500 underline"
                  >
                    info@epiidosisinvestments.com
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTeamForm;
