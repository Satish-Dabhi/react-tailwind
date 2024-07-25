// import React from 'react';
import ButtonPrimaryUi from "../../ui/ButtonPrimaryUi";
import Sfinance from "/img/Sfinance.png";
import Asset from "/img/Asset.png";
import Lstocks from "/img/Lstocks.png";

const ServiceComponent = () => {
  return (
    <>
      <div className="bg-bgprimary p-5 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-center items-center md:flex-wrap 2xl:gap-[15rem] mt-12 mb-12">
          <img
            alt="deal"
            src={Sfinance}
            className="h-48 md:h-auto md:max-h-[18rem] mb-8 md:mb-0 m-auto"
          />
          <div className="text-center md:text-start max-w-full md:max-w-[30rem]">
            <p
              className="text-2xl md:text-4xl font-bold font-inria"
              style={{ color: "#5F5D5E" }}
            >
              Structured Finance
            </p>
            <p
              // className="text-md md:text-lg text-justify text-gray-600 mt-2 px-4 md:px-0 font-inter"
            className="text-wrap text-md text-justify w-full md:w-[30rem] text-gray-600 mt-2 md:mt-3 font-inter p-5 md:p-0 font-inter"
              style={{
                color: "#5F5D5E",
              }}
            >
              Elevate your projects with Epiidosis Investments. Join our
              fundraising campaign today and gain access to diverse funding
              options. Our streamlined process ensures transparency and support
              at every step. Learn more about how we empower visionaries to
              bring their projects to life and achieve their goals.
            </p>
            <div className="flex justify-center md:justify-start mt-4">
              <ButtonPrimaryUi to="/structured-finance" text="Know more">Know more</ButtonPrimaryUi>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-center items-center md:flex-wrap 2xl:gap-[15rem] mt-12 mb-12">
        <div className="text-start text-wrap m-4">
          <p
            className="text-3xl md:text-4xl font-semibold font-inria text-center md:text-start"
            style={{ color: "#5F5D5E" }}
          >
            Asset Monetization
          </p>
          <p
            className="text-wrap text-md text-justify w-full md:w-[30rem] text-gray-600 mt-2 md:mt-3 font-inter p-5 md:p-0 font-inter"
            style={{
              color: "#5F5D5E",
            }}
          >
            Unlock the potential of your assets with Epiidosis Investments. Our
            structured asset monetization process aims to maximize value for
            asset owners across diverse sectors. Access capital, benefit from
            professional due diligence, and expand your reach globally. Trust
            Epiidosis for transparent, streamlined, and flexible asset
            monetization solutions.
          </p>
          <div className="flex gap-2 mt-4 pl-5 pr-5 md:pr-0 md:pl-0">
            <ButtonPrimaryUi to="/asset-monetization" text="Know more">Know more</ButtonPrimaryUi>
          </div>
        </div>
        <img
          alt="deal"
          src={Asset}
          className="h-48 md:h-auto md:max-h-[18rem] mb-8 md:mb-0 m-auto"
        />
        </div>
      </div>
      <div className="bg-bgprimary p-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-center items-center md:flex-wrap 2xl:gap-[15rem] mt-12 mb-12">
          <img
            alt="deal"
            src={Lstocks}
            className="h-48 md:h-auto md:max-h-[18rem] mb-8 md:mb-0 m-auto"
          />
          <div className="text-start text-wrap">
            <p
              className="text-3xl md:text-4xl font-semibold font-inria text-center mt-5 md:text-start md:p-0"
              style={{ color: "#5F5D5E" }}
            >
              Loans Secured by Listed
            </p>
            <p
              className="text-3xl md:text-4xl font-semibold font-inria text-center md:text-start md:p-0"
              style={{ color: "#5F5D5E" }}
            >
              Stocks
            </p>
            <p
              className="text-wrap font-inter text-justify text-md w-full md:w-[30rem] pl-5 pr-5 md:pl-0 md:pr-0 text-gray-600 mt-3 md:mt-2 font-inter"
              style={{
                color: "#5F5D5E",
                // fontFamily: "Helvetica, Arial, sans-serif",
              }}
            >
              Unlock liquidity without selling stocks. Epiidosis Investments LLC
              offers loans against listed stocks, ensuring quick access to
              funds. Borrowers retain ownership and benefit from competitive
              rates.
            </p>
            <div className="flex gap-2 pl-5 pr-5 mt-4 md:pl-0 md:pr-0">
              <ButtonPrimaryUi to="/loan-against-listed-stocks" text="Know more">
                Know more
              </ButtonPrimaryUi>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceComponent;
