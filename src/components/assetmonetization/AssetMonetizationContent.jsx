import AssetMonetizationImage from "../../../public/img/aboutus/Asset Monetization.png";

const AssetMonetizationContent = () => {
  const divStyle = {
    background: "linear-gradient(90deg, #1E8DCD 0%, #0F4767 96.77%)",
    color: "white",
    paddingTop: "12px",
    paddingRight: "4px",
    paddingBottom: "60px",
    paddingLeft: "4px",
  };

  return (
    <div style={divStyle}>
      <h2 className="text-center text-3xl font-semibold mb-4"><br></br>How it works</h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-center">
        Epiidosis Investments simplifies the investment process with a structured approach. From registration and documentation to fund deployment and project management, we ensure a clear pathway for investors. Our step-by-step guide emphasizes transparency, efficiency, and strategic deployment of funds to maximize project success.

        </p>
      </div>
      <div className="relative mx-auto max-w-full mt-8">
        <img src={AssetMonetizationImage} alt="Asset Monetization" className="mx-auto" style={{ width: "100%", maxWidth: "800px" }} />
      </div>
    </div>
  );
};

export default AssetMonetizationContent;
