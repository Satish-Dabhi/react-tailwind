import './InvestorExitStrategy.css'; 

import img7 from "../../../public/img/Invest/7.png"

const InvestorExitStrategy = () => {
  return (
    <div className="investor-exit-strategy-container">
      <h2>Investor Exit Strategy</h2>
      <p className='con'>We ensure optimal returns, safety, and timing with our strategic exit plan.<br/>The key components are:</p>
      <div className="key-components">
        <div className="component">
          <img src={img7} alt="Special Purpose Vehicle (SPV) Model" className="component-image" />
          <p>Special Purpose Vehicle (SPV) Model</p>
        </div>
        <div className="component">
          <img src={img7}  alt="Risk Mitigation Through Insurance" className="component-image" />
          <p>Risk Mitigation Through Insurance</p>
        </div>
        <div className="component">
          <img src={img7}  alt="Creating Long-Term Value" className="component-image" />
          <p>Creating Long-Term Value</p>
        </div>
        <div className="component">
          <img src={img7}  alt="Optimal Timing For Exits" className="component-image" />
          <p>Optimal Timing For Exits</p>
        </div>
        <div className="component">
          <img src={img7}  alt="Assured Exit" className="component-image" />
          <p>Assured Exit</p>
        </div>
      </div>
    </div>
  );
}

export default InvestorExitStrategy;
