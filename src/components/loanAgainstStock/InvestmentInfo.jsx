
const InvestmentInfo = () => {
    const eligibilityRequirements = [
      "Hold Individuals listed stocks on approved exchanges.",
      "Minimum value of stocks eligible for collateralization may vary.",
      "Applicants must meet our credit worthiness and risk assessment criteria."
    ];
  
    const keyRequirements = [
      "Valid identification documents.",
      "Proof of ownership for listed stocks.",
      "Compliance with regulatory standards."
    ];
  
    const interestRatesTerms = [
      "Competitive interest rates tailored to market conditions and individual risk profiles.",
      "Flexible repayment terms ranging from months to years.",
      "No hidden fees or charges."
    ];
  
    const visualRepresentation = [
      "Graphical representation of interest rates and repayment schedules for easy understanding.",
      "Detailed breakdown of loan terms provided alongside interest rates for transparency."
    ];
  
    return (
      <div className="flex flex-col md:flex-row justify-between p-4">
        {/* Left Section */}
        <div className="md:w-1/2 pr-4 mb-4 md:mb-0">
          <div className="mb-4">
            <h2 className="font-semibold text-lg">Eligibility Criteria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <h3 className="font-medium">Eligibility Requirements</h3>
                <ul className="text-gray-600 text-sm" style={{ color: '#5F5D5E' }}>
                  {eligibilityRequirements.map((detail, i) => (
                    <li key={i} className="flex items-center mb-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Key Requirements</h3>
                <ul className="text-gray-600 text-sm" style={{ color: '#5F5D5E' }}>
                  {keyRequirements.map((detail, i) => (
                    <li key={i} className="flex items-center mb-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm" style={{ color: '#5F5D5E' }}>
            At Epidosis Investments LLC, we are dedicated to providing unparalleled support and assistance to our clients throughout the loan application process and beyond. Our goal is to make the experience as seamless and stress-free as possible, allowing you to unlock liquidity with confidence and peace of mind.
          </p>
        </div>
  
        {/* Right Section */}
        <div className="md:w-1/2 pl-4">
          <div className="mb-4">
            <h2 className="font-semibold text-lg">Interest Rates and Terms</h2>
            <p className="text-gray-600 text-sm" style={{ color: '#5F5D5E' }}>
            Explore our transparent interest rates and flexible terms designed to meet diverse financial needs. Benefit from competitive rates, clear repayment options, and comprehensive visual guides for transparent loan understanding.
  
          </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <h3 className="font-medium">Transparency</h3>
                <ul className="text-gray-600 text-sm" style={{ color: '#5F5D5E' }}>
                  {interestRatesTerms.map((detail, i) => (
                    <li key={i} className="flex items-center mb-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Visual Representation</h3>
                <ul className="text-gray-600 text-sm" style={{ color: '#5F5D5E' }}>
                  {visualRepresentation.map((detail, i) => (
                    <li key={i} className="flex items-center mb-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Contact Us
          </button>
        </div>
      </div>
    );
  };
  
  export default InvestmentInfo;
  