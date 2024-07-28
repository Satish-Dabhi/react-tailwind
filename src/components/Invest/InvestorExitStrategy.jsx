import "./InvestorExitStrategy.css";

import img11 from "/public/img/Invest/11.png";
import img7 from "/public/img/Invest/7.png";
import img8 from "/public/img/Invest/8.png";
import img9 from "/public/img/Invest/9.png";

const InvestorExitStrategy = () => {
  return (
    <div className="investor-exit-strategy-container py-[40px]">
      <div className="container mx-auto">
        <h2 className="font-inria font-bold">Investor Exit Strategy</h2>
        <p className="con font-inter font-light text-lg">
          As Epiidosis Investments, we are committed to ensuring optimal returns
          and seamless exits for our investors. By implementing a
          well-structured exit strategy, we aim to provide clarity and maximize
          value.
          <br />
          {/* The key components are: */}
        </p>
        <div className="key-components">
          <div className="component font-inria">
            <img
              src={img7}
              alt="Assured & Structured Exit"
              className="component-image"
            />
            <p className="font-inter font-light text-md">
              Assured & Structured Exit
            </p>
          </div>
          <div className="component font-inria">
            <img
              src={img8}
              alt="Scheduled Repayments"
              className="component-image"
            />
            <p className="font-inter font-light text-md">
              Scheduled Repayments
            </p>
          </div>
          <div className="component font-inria">
            <img src={img9} alt="Lock in periods" className="component-image" />
            <p className="font-inter font-light text-md">Lock in periods</p>
          </div>
          {/* <div className="component font-inria">
            <img
              src={img10}
              alt="Optimal Timing For Exits"
              className="component-image"
            />
            <p className="font-inter font-light text-md">
              Optimal Timing For Exits
            </p>
          </div> */}
          <div className="component font-inria">
            <img
              src={img11}
              alt="Asset-Backed Security Pledging"
              className="component-image"
            />
            <p className="font-inter font-light text-md">
              Asset-Backed Security Pledging
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorExitStrategy;
