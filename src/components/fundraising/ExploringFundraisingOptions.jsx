import ExploringOptionsUi from "../../ui/ExploringOptionsUi";
import exploring from "/img/fundraising/exploring.png";

const ExploringData = {
  img: exploring,
  titleOne: "Capital Markets Funds",
  titleTwo: "A Comprehensive Guide for Businesses and Entrepreneurs",
  subtTitleOne: "Equity Financing",
  subDescOne:
    "Offer shares of ownership in the company in exchange for capital. This can involve selling equity to venture capitalists, angel investors, or through crowdfunding platforms.",
  subTitleTwo: "Private Equity",
  subDescTwo:
    "Borrow funds from lenders, such as banks, financial institutions, or peer-to-peer lending platforms, with the obligation to repay the principal amount plus interest over time.",
    subTitleThree:"Private Debt Platforms ",
    subDescThree:"Borrow funds from lenders, such as banks, financial institutions, or peer-to-peer lending platforms, with the obligation to repay the principal amount plus interest over time."
};

const ExploringFundraisingOptions = () => {
  return (
    <>
      <ExploringOptionsUi data={ExploringData} />
    </>
  );
};

export default ExploringFundraisingOptions;
