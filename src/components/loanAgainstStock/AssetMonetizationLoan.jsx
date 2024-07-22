import AssetMonetizationImage from "../../../public/img/aboutus/Loan Against Listed Stocks Page Content.png";

const AssetMonetizationLoan = () => {
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
      <h2 className="text-center text-3xl font-semibold mb-4 font-inria">
        <br></br>How It Works?
      </h2>
      <div className="relative mx-auto max-w-full mt-8">
        <img
          src={AssetMonetizationImage}
          alt="Asset Monetization"
          className="mx-auto w-full lg:w-1/2"
        />
      </div>
    </div>
  );
};

export default AssetMonetizationLoan;
