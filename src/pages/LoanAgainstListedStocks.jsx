import IntrestRateAndTerms from "../components/loanAgainstStock/IntrestRateAndTerms";
import LoanAgainstStockFAQ from "../components/loanAgainstStock/LoanAgainstStockFAQ";
import AboutUsLoanAgainstStock from "../components/loanAgainstStock/AboutUsLoanAgainstStock";
import HeroLoanAgainstStock from "../components/loanAgainstStock/HeroLoanAgainstStock";
import LoanAgainstHowItWorks from "../components/loanAgainstStock/LoanAgainstHowItWorks";
import LoanAgainstSuccesStories from "../components/loanAgainstStock/LoanAgainstSuccesStories";
import WhyChooseStockBackedLoans from "../components/loanAgainstStock/WhyChooseStockBackedLoans";
import EligibilityCriteris from "../components/loanAgainstStock/EligibilityCriteris";
const LoanAgainstListedStocks = () => {
  return (
    <div>
      <HeroLoanAgainstStock />
      <AboutUsLoanAgainstStock />
      <WhyChooseStockBackedLoans />
      <LoanAgainstHowItWorks />
    <EligibilityCriteris />
      <IntrestRateAndTerms/>
      <LoanAgainstSuccesStories />
      <LoanAgainstStockFAQ />
     
    </div>
  );
};

export default LoanAgainstListedStocks;
