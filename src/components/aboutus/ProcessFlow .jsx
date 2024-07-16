
import ProcessFlowImage from "../../../public/img/aboutus/Process flow.png";
const ProcessFlow = () => {
  const divStyle = {
    background: "linear-gradient(90deg, #1E8DCD 0%, #0F4767 96.77%)",
    color: "white",
    paddingTop: "12px",
    paddingRight: "4px",
    paddingBottom: "12px",
    paddingLeft: "4px",
  };

  return (
    <div style={divStyle}>
      <h2 className="text-center text-3xl font-semibold mb-4 mt-10">Process Flow</h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-center">
          Epidiosis Investments simplifies the investment process with a structured approach. From
          registration and documentation to fund deployment and project management, we ensure a clear
          pathway for investors. Our step-by-step guide emphasizes transparency, efficiency, and strategic
          deployment of funds to maximize project success.
        </p>
      </div>
      <div className="relative mx-auto max-w-full mt-8 mb-10">
        <img src={ProcessFlowImage} alt="Process Flow" className="mx-auto" style={{ width: "100%", maxWidth: "1200px" }} />
      </div>
    </div>
  );
};

export default ProcessFlow;

