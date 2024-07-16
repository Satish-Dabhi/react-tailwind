import RevenueModelSection from "../ui/RevenueModelSection";
import RevenueModel from "../components/Invest/RevenueModel";
import BlueDivInvest4 from "../components/Invest/BluDivInvest4";
import BlueDivInvest2 from "../components/Invest/BluDivInvest2";

import BlueDivInvest from "../components/Invest/BlueDivInvest";
import HeroSectionInvestNow from "../components/Invest/HeroSectionInvestNow";
import ServiceComponentInvest from "../components/Invest/ServiceComponentInvest";
import ServiceComponentInvest2 from "../components/Invest/ServiceComponentInvest2";
import ValueHowInvest from "../components/Invest/ValueHowInvest";
import Options from "../components/Invest/Options";
import InvestorExitStrategy from "../components/Invest/InvestorExitStrategy";

const Invest = () => {
    return (
      <>
      <HeroSectionInvestNow/>
      <BlueDivInvest/>
      <ServiceComponentInvest/>
      <BlueDivInvest2/>
      <ServiceComponentInvest2/>
      <ValueHowInvest/>
      <BlueDivInvest4/>
      <Options/>
      <InvestorExitStrategy/>
      <RevenueModelSection 
        heading="Revenue Model" 
        description="Make the right investment with Epiidosis Investments today and achieve significant returns with sustainable growth."
      />
      <RevenueModel/>
      
      </>
       
    );
  };
  
  export default Invest;
  