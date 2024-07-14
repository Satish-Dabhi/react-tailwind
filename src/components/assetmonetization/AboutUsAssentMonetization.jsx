import dolloricon from "/img/assetmonetization/dolloricon.png";
import handhome from "/img/assetmonetization/handhome.png";
import laptopicon from "/img/assetmonetization/laptopicon.png";
import aboutasset from "/img/assetmonetization/aboutasset.png";
import AboutOurCardUi from "../../ui/AboutOurCardUi";
const aboutUsData = {
  mainImg: aboutasset,
  title: "About Asset Monetization",
  desc: "Asset monetization refers to the process of converting tangible or intangible assets into cash or income-generating opportunities. In the context of Epiidosis Investments LLC, asset monetization is facilitated through a structured engagement process that aims to unlock the value of assets owned by companies across various sectors. This process involves thorough due diligence, formal offers, and strategic partnerships to maximize returns for asset owners.",
  iconPlusData: [
    {
      subtitle: "Access to Capital",
      desc:
        "Asset owners gain access to capital through Epiidosis Investments LLC's investment platform, enabling them to leverage their assets for growth, expansion, or debt consolidation.",
      icon: dolloricon,
    },
    {
      subtitle: "Professional Due Diligence",
      desc:
        ": Epiidosis conducts rigorous due diligence processes, including audits by reputable firms, ensuring transparency and reliability in asset valuation and monetization.",
      icon: handhome,
    },
    {
      subtitle: "Global Reach",
      desc:
        "With a strong professional team and financial alliances globally, Epiidosis facilitates access to a diverse pool of investors, expanding the reach of asset owners to international markets.",
      icon: laptopicon,
    },
    
    {
      subtitle: "Streamlined Process",
      desc:
        "The asset engagement process is structured and streamlined, providing clarity and guidance to asset owners at each step, from onboarding to fund transfer.",
      icon: handhome,
    },
    {
      subtitle: "Flexible Financing Solutions",
      desc:
        "Epiidosis offers flexible financing solutions tailored to the needs of asset owners, ranging from capital markets funds to private equity and private debt platforms.",
      icon: laptopicon,
    },
  ],
};

const AboutUsAssentMOnetization = () => {
  return (
    <>
      <AboutOurCardUi data={aboutUsData} />
    </>
  );
};

export default AboutUsAssentMOnetization;
