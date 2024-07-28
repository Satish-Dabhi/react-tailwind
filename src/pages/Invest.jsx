import RevenueModel from "../components/Invest/RevenueModel";
import RevenueModelSection from "../ui/RevenueModelSection";

import InvestorExitStrategy from "../components/Invest/InvestorExitStrategy";
import Options from "../components/Invest/Options";
import ServiceComponentInvest from "../components/Invest/ServiceComponentInvest";
import ValueHow from "../components/aboutus/ValueHow";
import HeroSection from "../components/common/HeroSection";
import SectionTitle from "../components/common/SectionTitle";
import SalesTeamForm from "../forms/SalesTeamForm";
import sustainableGrowthImage from "/img/first.png";
import riskManagementImage from "/img/fourth.png";
import herosectionfundraising from "/img/fundraising/heroimgfundraising.png";
import highPotentialImage from "/img/second.png";
import investcoPortalImage from "/img/third.jpg";

const servicesCard1 = {
  title: "Sustainable Growth and Risk Management",
  content: [
    "Investors often encounter poor returns despite their best efforts in achieving sustainable growth.",
    "For investors, managing risk effectively is essential for long-term success.",
    "A lack of solid commitments results in inconsistent performance and increased vulnerability to market fluctuations.",
  ],
  img: sustainableGrowthImage,
};
const servicesCard2 = {
  title: "Identifying High-Potential Opportunities",
  content: [
    "A deep understanding and expertise are required to identify private investment opportunities.",
    "The difficulty in assessing investment viability often limits the potential for significant returns.",
    "Investment alignment with regional government priorities is critical to success.",
    "To maximize success, investments must be well-informed and strategically positioned to take advantage of emerging opportunities and supportive regulatory environments.",
  ],
  img: highPotentialImage,
};
const servicesCard3 = {
  title: "The InvestcoPortal - Investment Fundraising Automation",
  content: [
    "Immediate fund-raising capabilities using advanced technologies.",
    "Access to diverse industries including technology, healthcare, finance, and more.",
    "Focus on strategic private investments with promising growth prospects.",
  ],
  img: investcoPortalImage,
};
const servicesCard4 = {
  title: "Risk Management Solutions",
  content: [
    "SPV Model: Isolates financial risk by using Special Purpose Vehicles for finance structuring.",
    "Collateral: SPV shares provide a tangible form of security to investors.",
    "Risk Mitigation: Provides added protection with an insurance underwriter.",
  ],
  img: riskManagementImage,
};

const valueData = [
  {
    title: "Professional Team and Expertise",
    description:
      "Expertise: We have more than 20 years of business and finance experience. For comprehensive and informed decision-making, we specialize in investment management and financial analysis.",
  },
  {
    title: "Strategic Investment Focus",
    description:
      "Our focus is on sectors with high demand and government priority: Fintech, Commercial enterprises, Tourism, Industry, Agriculture, Energy, Education, Healthcare, Oil and Gas, Banking and finance",
  },
  {
    title: "Investing in Complex Landscapes",
    description:
      "We leverage our extensive network of clients and connections to access high-potential private investment opportunities referred by professionals working with large corporations and governments.",
  },
  {
    title: "Innovative Financial Structuring and Risk Mitigation",
    description:
      "SPV Model: Collaborating with insurers and utilizing the Special Purpose Vehicle model ensures robust risk management.",
  },
  {
    title: "Investment Objective",
    description:
      "Our investments generate returns of up to 30% annually. Through carefully selected investments, we ensure robust growth.",
  },
];

const Invest = () => {
  return (
    <>
      <HeroSection
        bannerImg={herosectionfundraising}
        bannerTitle={
          "Why Choose Epiidosis Investments\nas your Investing Partner?"
        }
        bannerDesc={
          "Our portfolio includes assets from financial services, fintech, commercial enterprises, agriculture, energy, and\nmany other sectors. Our portfolio management ensures that capital is deployed where demand is strong.\nCorporate governance and ethics drive our approach to risk management."
        }
        buttonText={"Invest Now"}
        otherInfoSection={true}
      />
      <SectionTitle title={"Challenges in Investing"} />
      <ServiceComponentInvest
        servicesCard1={servicesCard2}
        servicesCard2={servicesCard1}
      />
      <SectionTitle title={"Our Investing Solutions"} />
      <ServiceComponentInvest
        servicesCard1={servicesCard3}
        servicesCard2={servicesCard4}
      />
      <SectionTitle title={"Monetary Benefits to Clients and Partners"} />
      <Options />
      <ValueHow title={"How We Invest?"} valueData={valueData} />
      <InvestorExitStrategy />
      <RevenueModelSection
        heading="our revenue model"
        description="At Epiidosis Investments, our revenue model is designed to maximize returns while fostering long-term growth. We leverage diverse investment opportunities across sectors to create value for our investments."
      />
      <RevenueModel />
      <SalesTeamForm />
    </>
  );
};

export default Invest;
