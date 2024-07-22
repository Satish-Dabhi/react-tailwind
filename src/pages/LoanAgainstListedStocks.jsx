import BorderTitleWithDesc from "../components/common/BorderTitleWithDesc";
import HeroSection from "../components/common/HeroSection";
import AssetMonetizationLoan from "../components/loanAgainstStock/AssetMonetizationLoan";
import CardLoan from "../components/loanAgainstStock/CardLoan";
import InvestmentInfo from "../components/loanAgainstStock/InvestmentInfo";
import herosectionfundraising from "/img/fundraising/heroimgfundraising.png";
import efficientAndCompetitiveImg from "/logos/efficient-competitive.png";
import flexibleFundImg from "/logos/flexible-fund.png";
import retainPortfolioImg from "/logos/retain-portfolio.png";

const heroBannerCards = [
  {
    imageSrc: retainPortfolioImg,
    altText: "retainPortfolioImg",
    title: "Retain Portfolio Ownership",
  },
  {
    imageSrc: flexibleFundImg,
    altText: "flexibleFundImg",
    title: "Flexible Fund Utilization",
  },
  {
    imageSrc: efficientAndCompetitiveImg,
    altText: "efficientAndCompetitiveImg",
    title: "Efficient and Competitive",
  },
];

const LoanAgainstListedStocks = () => {
  return (
    <div>
      <HeroSection
        cards={heroBannerCards}
        bannerImg={herosectionfundraising}
        bannerTitle={"Unlock Liquidity with Your Listed Stocks"}
        bannerDesc={
          "Unlock the potential of your investments with Epiidosis Investments LLC. Secure quick and flexible loans using your listed stocks as collateral. Start now and leverage your assets without selling them."
        }
        buttonText={"Get Started"}
      />
      <BorderTitleWithDesc
        title="Why Choose Epiidosis for Stock-Backed Loans?"
        description={
          "At Epiidosis Investments LLC, we pride ourselves on providing exemplary services and innovative solutions for individuals seeking loans against their listed stocks. Here's why choosing Epiidosis for your stock-backed loans is a wise decision"
        }
      />
      <CardLoan />
      <AssetMonetizationLoan />
      <InvestmentInfo />
    </div>
  );
};

export default LoanAgainstListedStocks;
