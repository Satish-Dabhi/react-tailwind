// import IntrestRateAndTerms from "../components/loanAgainstStock/IntrestRateAndTerms";
// import LoanAgainstStockFAQ from "../components/loanAgainstStock/LoanAgainstStockFAQ";
// import AboutUsLoanAgainstStock from "../components/loanAgainstStock/AboutUsLoanAgainstStock";
import HeroLoanAgainstStock from "../components/loanAgainstStock/HeroLoanAgainstStock";
// import LoanAgainstHowItWorks from "../components/loanAgainstStock/LoanAgainstHowItWorks";
// import LoanAgainstSuccesStories from "../components/loanAgainstStock/LoanAgainstSuccesStories";
// import WhyChooseStockBackedLoans from "../components/loanAgainstStock/WhyChooseStockBackedLoans";
// import EligibilityCriteris from "../components/loanAgainstStock/EligibilityCriteris";
import WhySection from "../ui/WhySection";
import CardLoan from "../components/loanAgainstStock/CardLoan";
import AssetMonetizationLoan from "../components/loanAgainstStock/AssetMonetizationLoan";
import InvestmentInfo from "../components/loanAgainstStock/InvestmentInfo";

const LoanAgainstListedStocks = () => {
  return (
    <div>
      <HeroLoanAgainstStock />
      <WhySection
        heading="Why Choose Epiidosis for Stock-Backed Loans" 
        description="At Epiidosis Investments LLC, we pride ourselves on providing exemplary services and innovative solutions for individuals seeking loans against their listed stocks. Here's why choosing Epiidosis for your stock-backed loans is a wise decision"
      />
      <CardLoan/>
      <AssetMonetizationLoan/>
      {/* <AboutUsLoanAgainstStock />
   
      <WhyChooseStockBackedLoans />
      <LoanAgainstHowItWorks />
    <EligibilityCriteris />
      <IntrestRateAndTerms/>
      <LoanAgainstSuccesStories />
      <LoanAgainstStockFAQ /> */}
     <InvestmentInfo/>
    </div>
  );
};

export default LoanAgainstListedStocks;
