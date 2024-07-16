// import AboutUsAssentMonetization from "../components/assetmonetization/AboutUsAssentMonetization";
// import AssetMonetizationHowItWorks from "../components/assetmonetization/AssetMonetizationHowItWorks";
// import AssetMonetizationSuccessStories from "../components/assetmonetization/AssetMonetizationSuccessStories";
//import ExploringAssetMonetization from "../components/assetmonetization/ExploringAssetMonetization";
import AssetMonetizationContent from "../components/assetmonetization/AssetMonetizationContent";
import AssetMonetizationOptions from "../components/assetmonetization/AssetMonetizationOptions";
import CardAsset from "../components/assetmonetization/CardAsset";
import FutureExpansion from "../components/assetmonetization/FutureExpansion";
import HeroSectionAssetMonetization from "../components/assetmonetization/HeroSectionAssetMonetization";
// import ExpansionOptionsCard from "../components/loanAgainstStock/ExpansionOptionsCard";
// import FinanceOptionCardL from "../components/loanAgainstStock/FinanceOptionCardL";
import WhySection from "../ui/WhySection";
//import WhyChooseAssetMonetization from "../components/assetmonetization/WhyChooseAssetMonetization";
//import AssetMonizationFAQ from "../components/assetmonetization/AssetMonizationFAQ";

const options = [
  { country: 'USA', details: 'Residential and commercial properties in major cities Ensuring high potential ROI' },
  { country: 'Kenya', details: 'Prime residential and commercial real estate in key urban centers Focus on debt-free assets with strong ROI potential' },
  { country: 'UAE', details: 'High-value residential and commercial properties in prime locations Emphasis on ROI-generating assets' },
];

const monetizationOptions = [
  {
    title: 'Tier 1 City Properties (UAE)',
    details: ['Free from any debts', 'Located in major metropolitan areas', 'Generating Return on Investment (ROI)'],
  },
  {
    title: 'Tier 1 City Properties (India)',
    details: ['Free from any debts', 'Situated in prime commercial locations', 'Generating Return on Investment (ROI)'],
  },
];
const AssetMonetization = () => {
  const handleContactUs = () => {
    // Handle contact us button click
    console.log("Contact Us button clicked");
  };
 
  return (
    <>
      <HeroSectionAssetMonetization />
      <WhySection
        heading="Why Choose Epiidosis for Asset Monetization?" 
        description="Epiidosis Investments LLC offers a comprehensive and strategic approach to asset monetization, leveraging its global expertise, diversified asset classes, and professional team to maximize returns and provide tailored investment solutions."
      />
      <CardAsset/>
      <AssetMonetizationContent/>
    
      <div className="container mx-auto p-4 flex">
      <FutureExpansion options={options} />
      <AssetMonetizationOptions 
        monetizationOptions={monetizationOptions}
        onButtonClick={handleContactUs}
      />
    </div>
      
   

    
    </>
  );
};

export default AssetMonetization;
