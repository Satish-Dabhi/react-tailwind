import RevenueModel from "../components/Invest/RevenueModel";
import RevenueModelSection from "../ui/RevenueModelSection";

import InvestorExitStrategy from "../components/Invest/InvestorExitStrategy";
import Options from "../components/Invest/Options";
import ServiceComponentInvest from "../components/Invest/ServiceComponentInvest";
import ServiceComponentInvest2 from "../components/Invest/ServiceComponentInvest2";
import ValueHowInvest from "../components/Invest/ValueHowInvest";
import HeroSection from "../components/common/HeroSection";
import SectionTitle from "../components/common/SectionTitle";
import herosectionfundraising from "/img/fundraising/heroimgfundraising.png";

const Invest = () => {
  return (
    <>
      <HeroSection
        bannerImg={herosectionfundraising}
        bannerTitle={
          "Why Choose Epiidosis Investments as your Investing Partner?"
        }
        bannerDesc={
          "Our portfolio includes assets from financial services, fintech, commercial enterprises, agriculture, energy, and many other sectors. Our portfolio management ensures that capital is deployed where demand is strong. Corporate governance and ethics drive our approach to risk management."
        }
        buttonText={"Invest Now"}
      />
      <SectionTitle title={"Challenges in Investing"} />
      <ServiceComponentInvest />
      <SectionTitle title={"Our Investing Solutions"} />
      <ServiceComponentInvest2 />
      <ValueHowInvest />
      <SectionTitle title={"Monetary Benefits to Clients and Partners"} />
      <Options />
      <InvestorExitStrategy />
      <RevenueModelSection
        heading="Revenue Model"
        description="Make the right investment with Epiidosis Investments today and achieve significant returns with sustainable growth."
      />
      <RevenueModel />
    </>
  );
};

export default Invest;
