import ExploringOptionsUi from "../../ui/ExploringOptionsUi";
import assetmonetization from "/img/assetmonetization/assetmonetization.png";

const ExploringData = {
  img: assetmonetization,
  titleOne: "Exploring Asset Monetization Options",
  titleTwo: "Discover how Epiidosis Investments LLC can help you unlock the value of your assets, providing tailored solutions for growth and financial success.",
  subtTitleOne: "Diverse Financing Solutions:",
  subDescOne:
    "Offers capital markets funds, private equity, and private debt options.",
  subTitleTwo: "Global Reach:",
  subDescTwo:
    "Connects asset owners with international investors through a global network",
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
