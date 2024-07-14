import ExploringOptionsUi from "../../ui/ExploringOptionsUi";
import assetmonetization from "/img/assetmonetization/assetmonetization.png";

const ExploringData = {
  img: assetmonetization,
  titleOne: "Exploring Asset Monetization Options",
  titleTwo: "Key Points to Consider When Exploring Asset Monetization Options",
  subtTitleOne: "Showcase different asset types suitable for monetization.",
  subDescOne:
    "Begin by conducting a thorough assessment of your assets to determine their market value, condition, and potential for monetization",
  subTitleTwo: "Bullet points or icons for clarity.",
  subDescTwo:
    "Clarify your strategic objectives and financial goals for asset monetization.",
  subTitleThree: "CTA buttons for each option leading to respective sections.",
  subDescThree:
    "Clarify your strategic objectives and financial goals for asset monetization.",
};
const ExploringAssetMonetization = () => {
  return (
    <>
      <ExploringOptionsUi data={ExploringData} />
    </>
  );
};

export default ExploringAssetMonetization;
