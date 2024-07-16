import aboutasset from "/img/assetmonetization/aboutasset.png";
import AboutOurCardUi from "../../ui/AboutOurCardUi";

const aboutUsData = {
  mainImg: aboutasset,
  title: "About Asset Monetization",
  desc:
    "Asset monetization with Epiidosis Investments LLC transforms your tangible and intangible assets into cash or income-generating opportunities through a structured and efficient engagement process.",
};

const AboutUsAssentMOnetization = () => {
  return (
    <>
      <AboutOurCardUi data={aboutUsData} />
    </>
  );
};

export default AboutUsAssentMOnetization;