import AboutUsAssentMonetization from "../components/assetmonetization/AboutUsAssentMonetization";
import AssetMonetizationHowItWorks from "../components/assetmonetization/AssetMonetizationHowItWorks";
import AssetMonetizationSuccessStories from "../components/assetmonetization/AssetMonetizationSuccessStories";
import ExploringAssetMonetization from "../components/assetmonetization/ExploringAssetMonetization";
import HeroSectionAssetMonetization from "../components/assetmonetization/HeroSectionAssetMonetization";
import WhyChooseAssetMonetization from "../components/assetmonetization/WhyChooseAssetMonetization";
import AssetMonizationFAQ from "../components/assetmonetization/AssetMonizationFAQ";
const AssetMonetization = () => {
  return (
    <>
      <HeroSectionAssetMonetization />
      <AboutUsAssentMonetization />
      <WhyChooseAssetMonetization />
      <AssetMonetizationHowItWorks/>
      <ExploringAssetMonetization/>
      <AssetMonetizationSuccessStories/>
      <AssetMonizationFAQ/>
    </>
  );
};

export default AssetMonetization;
