import AsseMonetiationHeroCarsoulSection from "../../ui/AsseMonetiationHeroCarsoulSection";

import heroasset from "/img/assetmonetization/heroasset.png";
const beradcrumbs = [
  {
    title: "HOME",
    link: "/",
  },
  {
    title: "OUR SERVICES",
    link: "#",
  },
  {
    title: "ASSET MONETIZATION ",
    link: "/assetmonetization",
  },
];

const heroTextData = [
  {
    title: "Unlock the Value of Your Assets with Epiidosis Investments",
    desc: "Monetize Your Assets for Financial Growth",
    buttonText: "Explore Asset Monetization",
  },
  {
    title: "Seamless Asset Engagement Process",
    desc: "Efficiently Navigate from Onboarding to Fund Transfer",
    buttonText: "Get Started",
  },
  {
    title: "Diversified Investment Opportunities",
    desc: "Explore High-Potential Sectors for Investment Growth",
    buttonText: "Get Started",
  },
  {
    title: "Maximizing Financial Potential with Epiidosis",
    desc: "Partner with Experts to Amplify Your Asset's Value",
    buttonText: "Get Started",
  },
];
const HeroSectionAssetMonetization = () => {
  return (
    <div>
      <AsseMonetiationHeroCarsoulSection
        beradcrumbs={beradcrumbs}
        heroTextData={heroTextData}
        heroasset={heroasset}
      />
    </div>
  );
};

export default HeroSectionAssetMonetization;
