// AboutUsLoanAgainstStock.js
import AboutOurCardUi from '../../ui/AboutOurCardUi';
import aboutloanhero from '/img/loanagainstlistedstocks/aboutloanhero.png';
import vectorIcon from '/img/loanagainstlistedstocks/Group 284.jpg';
import group276Icon from '/img/loanagainstlistedstocks/Group 276.jpg';
import group284Icon from '/img/loanagainstlistedstocks/Group 277.jpg';

const aboutUsData = {
  mainImg: aboutloanhero,
  title: "About Loan Against Listed Stocks",
  desc: "Discover the benefits of unlocking liquidity with your listed stocks through Epiidosis Investments’ LLC's streamlined loan process, ensuring quick access to capital without selling your holdings.",
  details: [
    {
      title: "Retain Portfolio Ownership:",
      desc: "Preserve your long-term investment strategy by keeping ownership of your securities while accessing immediate funds through a loan against listed stocks.",
      icon: vectorIcon,
    },
    {
      title: "Loan-to-Value Ratio (LTV)",
      desc: "Lenders typically offer a loan-to-value ratio, indicating the maximum percentage of the stock's value that can be borrowed.",
      icon: group276Icon,
    },
    {
      title: "Margin Calls",
      desc: "Lenders may issue margin calls if the value of the pledged stocks falls below a certain threshold.",
      icon: group284Icon,
    },
  ],
};

const AboutUsLoanAgainstStock = () => {
  return (
    <>
      <AboutOurCardUi data={aboutUsData} />
    </>
  );
};

export default AboutUsLoanAgainstStock;
