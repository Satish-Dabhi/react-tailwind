// import "./Options.css";
import img1 from "/public/img/Invest/1.png";
import img2 from "/public/img/Invest/2.png";
import img3 from "/public/img/Invest/3.png";
import img4 from "/public/img/Invest/4.png";
import img5 from "/public/img/Invest/5.png";
import img6 from "/public/img/Invest/6.png";

const Options = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 flex flex-col lg:flex-row">
            <img
              src={img5}
              alt="Return on Investment (ROI)"
              className="option-image w-full object-cover mb-4 w-[120px] h-[150px] mr-5"
            />
            <div className="option-content font-inter flex flex-col">
              <h3 className="text-xl font-bold mb-2 font-inter">
                Return on Investment (ROI)
              </h3>
              <p className="mb-2 font-light">
                Invest with us and earn a projected ROI of 24 to 30%, We offer
                an unparalleled risk-reward ratio while maintaining a focus on
                stability and strategic growth.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 flex flex-col lg:flex-row">
            <img
              src={img1}
              alt="Cost Efficiency"
              className="option-image w-full object-cover mb-4 w-[120px] h-[150px] mr-5"
            />
            <div className="option-content font-inter flex flex-col">
              <h3 className="text-xl font-bold mb-2 font-inter">
                Cost Efficiency
              </h3>
              <p className="mb-2 font-light">
                <strong className="font-medium">
                  Reduced Due Diligence Costs:
                </strong>{" "}
                Time and resources can be saved by automating and streamlining
                due diligence processes.
              </p>
              <p className=" font-light">
                <strong className="font-medium">Lower Compliance Costs:</strong>{" "}
                Our platform ensures compliance with minimal human intervention,
                reducing legal and administrative costs.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 flex flex-col lg:flex-row">
            <img
              src={img6}
              alt="Minimum Required Investment"
              className="option-image w-full object-cover mb-4 w-[120px] h-[150px] mr-5"
            />
            <div className="option-content font-inter flex flex-col">
              <h3 className="text-xl font-bold mb-2 font-inter">
                Minimum Required Investment
              </h3>
              <p className=" font-light">
                Investing with us requires a minimum investment amount of USD
                25,000 or AED 100,000 which ensures effective resource
                allocation.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 flex flex-col lg:flex-row">
            <img
              src={img2}
              alt="Risk Management"
              className="option-image w-full object-cover mb-4 w-[120px] h-[150px] mr-5"
            />
            <div className="option-content font-inter flex flex-col">
              <h3 className="text-xl font-bold mb-2 font-inter">
                Risk Management
              </h3>
              <p className="mb-2 font-light">
                <strong className="font-medium">Minimized legal risks:</strong>{" "}
                Ensuring government compliance reduces legal issues.
              </p>
              <p className=" font-light">
                <strong className="font-medium">
                  Enhanced Decision Making:
                </strong>{" "}
                Comprehensive data analysis and feasibility studies provide
                informed and low-risk investment choices.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 flex flex-col lg:flex-row">
            <img
              src={img3}
              alt="Lock-In Period"
              className="option-image w-full object-cover mb-4 w-[120px] h-[150px] mr-5"
            />
            <div className="option-content font-inter flex flex-col">
              <h3 className="text-xl font-bold mb-2 font-inter">
                Lock-In Period
              </h3>
              <p className=" font-light">
                A 1-year lock-in period ensures substantial returns and
                mitigates short-term market volatility. Better financial
                planning can be achieved during this period.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 flex flex-col lg:flex-row">
            <img
              src={img4}
              alt="Revenue Generation"
              className="option-image w-full object-cover mb-4 w-[120px] h-[150px] mr-5"
            />
            <div className="option-content font-inter flex flex-col">
              <h3 className="text-xl font-bold mb-2 font-inter">
                Revenue Generation
              </h3>
              <p className="mb-2 font-light">
                <strong className="font-medium">
                  Fundraising Service Fees:
                </strong>{" "}
                Clients benefit from efficient and effective fundraising
                services at 6% success fees.
              </p>
              <p className=" font-light">
                <strong className="font-medium">
                  Additional Revenue Streams:
                </strong>
                Our platforms comprehensive services create opportunities for
                new revenue streams through successful project execution and
                investment management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;
