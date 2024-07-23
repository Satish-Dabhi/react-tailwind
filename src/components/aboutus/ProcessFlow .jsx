import ProcessFlowImage from "/public/img/aboutus/Process flow.png";
const ProcessFlow = () => {
  const divStyle = {
    background: "linear-gradient(90deg, #1E8DCD 0%, #0F4767 96.77%)",
    color: "white",
    paddingTop: "12px",
    paddingRight: "4px",
    paddingBottom: "12px",
    paddingLeft: "4px",
  };

  // const steps = [
  //   {
  //     title: "Initial Procedure",
  //     description: "Submission of POF of collateral",
  //   },
  //   { title: "Onboarding", description: "Service contract & MOU" },
  //   { title: "Due Diligence", description: "Investment agreement" },
  //   {
  //     title: "SPV SETUP & legal documentation",
  //     description: "Security to pledge",
  //   },
  //   {
  //     title: "Project assessment, risk underwriting",
  //     description: "Fund Creation",
  //   },
  //   { title: "Ready to deploy", description: "" },
  // ];

  return (
    <div style={divStyle}>
      <h2 className="text-center text-3xl font-semibold mb-4 mt-10 font-inria">
        Process Flow
      </h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-center font-inter font-light text-white leading-[25px] tracking-[0.01em]">
          Epidiosis Investments simplifies the investment process with a
          structured approach. From registration and documentation to fund
          deployment and project management, we ensure a clear pathway for
          investors. Our step-by-step guide emphasizes transparency, efficiency,
          and strategic deployment of funds to maximize project success.
        </p>
      </div>
      <div className="relative mx-auto max-w-full mt-8 mb-10">
        <img src={ProcessFlowImage} alt="Process Flow" className="mx-auto" style={{ width: "100%", maxWidth: "1200px" }} />
      </div>
      {/* <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="relative w-full max-w-5xl">
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-white"></div>{" "}
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center w-full relative mb-8`}
              style={{ top: index % 2 === 0 ? "-3rem" : "3rem" }} 
            >
              <div
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } w-full`}
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-white rounded-full z-10"></div>
                    <div
                      className={`h-0.5 ${
                        index % 2 === 0 ? "ml-0 mr-10" : "mr-0 ml-10"
                      } bg-white`}
                      style={{ width: "100px" }} // Line length to central line
                    ></div>
                  </div>
                  <div
                    className={`text-white text-center mt-2 ${
                      index % 2 === 0 ? "" : "order-last"
                    }`}
                  >
                    <div className="font-bold text-lg">{step.title}</div>
                    {step.description && (
                      <div className="text-sm mt-1">{step.description}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ProcessFlow;
