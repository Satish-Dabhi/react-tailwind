import AssetMonetizationContent from "../components/assetmonetization/AssetMonetizationContent";
import AssetMonetizationOptions from "../components/assetmonetization/AssetMonetizationOptions";
import CardAsset from "../components/assetmonetization/CardAsset";
import FutureExpansion from "../components/assetmonetization/FutureExpansion";
import BorderTitleWithDesc from "../components/common/BorderTitleWithDesc";
import HeroSection from "../components/common/HeroSection";
import bannerImg3 from "/img/assetmonetization/globalreach&flexiblesolutions.png";
import bannerImg2 from "/img/assetmonetization/rigorousduediligence.png";
import bannerImg1 from "/img/assetmonetization/unlockvalue.png";
import herosectionfundraising from "/img/fundraising/heroimgfundraising.png";

const options = [
  {
    country: "USA",
    details:
      "Residential and commercial properties in major cities Ensuring high potential ROI",
  },
  {
    country: "Kenya",
    details:
      "Prime residential and commercial real estate in key urban centers Focus on debt-free assets with strong ROI potential",
  },
  {
    country: "UAE",
    details:
      "High-value residential and commercial properties in prime locations Emphasis on ROI-generating assets",
  },
];

const monetizationOptions = [
  {
    title: "Tier 1 City Properties (UAE)",
    details: [
      "Free from any debts",
      "Located in major metropolitan areas",
      "Generating Return on Investment (ROI)",
    ],
  },
  {
    title: "Tier 1 City Properties (India)",
    details: [
      "Free from any debts",
      "Situated in prime commercial locations",
      "Generating Return on Investment (ROI)",
    ],
  },
];

const heroBannerCards = [
  {
    imageSrc: bannerImg1,
    altText: "retainPortfolioImg",
    title: "Unlock Value",
  },
  {
    imageSrc: bannerImg2,
    altText: "flexibleFundImg",
    title: "Rigorous Due Diligence",
  },
  {
    imageSrc: bannerImg3,
    altText: "efficientAndCompetitiveImg",
    title: "Global Reach & Flexible Solutions",
  },
];

const AssetMonetization = () => {
  const handleContactUs = () => {
    // Handle contact us button click
    console.log("Contact Us button clicked");
  };

  return (
    <>
      <HeroSection
        cards={heroBannerCards}
        bannerImg={herosectionfundraising}
        bannerTitle={
          "Unlock the Value of Your Assets with Epiidosis Investments"
        }
        bannerDesc={
          "Epiidosis Investments provides access to a diverse range of investment opportunities across different sectors, both locally and globally. With a focus on high-demand sectors and strong government priorities, investors can explore avenues for substantial growth potential."
        }
        buttonText={"Get Started"}
      />
      <BorderTitleWithDesc
        title="Why Choose Epiidosis for Asset Monetization?"
        description={
          "Epiidosis Investments LLC offers a comprehensive and strategic approach to asset monetization, leveraging its global expertise, diversified asset classes, and professional team to maximize returns and provide tailored investment solutions."
        }
      />
      <CardAsset />
      <AssetMonetizationContent />

      <div className=" bg-[#E8F6FF] ">
        <div className="container mx-auto p-4 flex flex-col lg:flex-row">
          <FutureExpansion options={options} />
          <AssetMonetizationOptions
            monetizationOptions={monetizationOptions}
            onButtonClick={handleContactUs}
          />
        </div>
      </div>
    </>
  );
};

export default AssetMonetization;
