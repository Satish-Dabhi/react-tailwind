import "./InvestorExitStrategy.css";

import img10 from "/public/img/Invest/10.png";
import img11 from "/public/img/Invest/11.png";
import img7 from "/public/img/Invest/7.png";
import img8 from "/public/img/Invest/8.png";
import img9 from "/public/img/Invest/9.png";

const InvestorExitStrategy = () => {
  return (
    <div className="investor-exit-strategy-container">
      <h2 className="font-inria font-bold">Investor Exit Strategy</h2>
      <p className="con font-inter font-light">
        We ensure optimal returns, safety, and timing with our strategic exit
        plan.
        <br />
        The key components are:
      </p>
      <div className="key-components">
        <div className="component font-inria">
          <img
            src={img7}
            alt="Special Purpose Vehicle (SPV) Model"
            className="component-image"
          />
          <p>Special Purpose Vehicle (SPV) Model</p>
        </div>
        <div className="component font-inria">
          <img
            src={img8}
            alt="Risk Mitigation Through Insurance"
            className="component-image"
          />
          <p>Risk Mitigation Through Insurance</p>
        </div>
        <div className="component font-inria">
          <img
            src={img9}
            alt="Creating Long-Term Value"
            className="component-image"
          />
          <p>Creating Long-Term Value</p>
        </div>
        <div className="component font-inria">
          <img
            src={img10}
            alt="Optimal Timing For Exits"
            className="component-image"
          />
          <p>Optimal Timing For Exits</p>
        </div>
        <div className="component font-inria">
          <img src={img11} alt="Assured Exit" className="component-image" />
          <p>Assured Exit</p>
        </div>
      </div>
    </div>
  );
};

export default InvestorExitStrategy;
