import './Options.css'; 
import img1 from "../../../public/img/Invest/1.png"

const Options = () => {
  return (
    <div className="options-main-container">
      <div className="options-container">
        <div className="left-section">
          <div className="option-box">
            <img src={img1}  alt="Cost Efficiency" className="option-image" />
            <div className="option-content">
              <h3>Cost Efficiency</h3>
              <p><strong>Reduced Due Diligence Costs:</strong> Time and resources can be saved by automating and streamlining due diligence processes.</p>
              <p><strong>Lower Compliance Costs:</strong> Our platform ensures compliance with minimal human intervention, reducing legal and administrative costs.</p>
            </div>
          </div>
          <div className="option-box">
            <img src={img1} alt="Risk Management" className="option-image" />
            <div className="option-content">
              <h3>Risk Management</h3>
              <p><strong>Minimized legal risks:</strong> Ensuring government compliance reduces legal issues.</p>
              <p><strong>Enhanced Decision Making:</strong> Comprehensive data analysis and feasibility studies provide informed and low-risk investment choices.</p>
            </div>
          </div>
          <div className="option-box">
            <img src={img1}  alt="Lock-In Period" className="option-image" />
            <div className="option-content">
              <h3>Lock-In Period</h3>
              <p>A 1-year lock-in period ensures substantial returns and mitigates short-term market volatility. Better financial planning can be achieved during this period.</p>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="option-box">
            <img src={img1}  alt="Revenue Generation" className="option-image" />
            <div className="option-content">
              <h3>Revenue Generation</h3>
              <p><strong>Fundraising Service Fees:</strong> Clients benefit from efficient and effective fundraising services at 6% success fees.</p>
              <p><strong>Additional Revenue Streams:</strong> Our platform&apos;s comprehensive services create opportunities for new revenue streams through successful project execution and investment management.</p>
            </div>
          </div>
          <div className="option-box">
            <img src={img1}  alt="Return on Investment (ROI)" className="option-image" />
            <div className="option-content">
              <h3>Return on Investment (ROI)</h3>
              <p>Invest with us and earn a projected ROI of 24 to 30%. We offer an unparalleled risk-reward ratio while maintaining a focus on stability and strategic growth.</p>
            </div>
          </div>
          <div className="option-box">
            <img src={img1}  alt="Minimum Required Investment" className="option-image" />
            <div className="option-content">
              <h3>Minimum Required Investment</h3>
              <p>Investing with us requires a minimum investment amount of USD 25,000 or AED 100,000 which ensures effective resource allocation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Options;
