import AboutOurCardUi from '../../ui/AboutOurCardUi'
import aboutloanhero from '/img/loanagainstlistedstocks/aboutloanhero.png'
import dollarloanicon from '/img/loanagainstlistedstocks/dollarloanicon.png'
import houseicon from '/img/loanagainstlistedstocks/houseicon.png'
import statloan from '/img/loanagainstlistedstocks/statloan.png'

const aboutUsData ={
    mainImg:aboutloanhero,
    title:"About Loan Against Listed Stocks",
    desc:"Unlocking liquidity with your listed stocks provides a unique opportunity for individuals to leverage their existing assets to access immediate funds without selling their holdings. Epiidosis Investments LLC offers a streamlined process for obtaining loans against listed stocks, ensuring quick access to capital when needed most.",
    iconPlusData:[
      {
        title:"Maintain Portfolio Exposure",
        desc:" By opting for a loan against listed stocks, investors can retain ownership of their securities, thereby preserving their long-term investment strategy and potential upside from stock appreciation.",
        icon:dollarloanicon
      },
      {
        title:"Immediate Access to Funds",
        desc:"Rather than waiting for the sale of stocks to generate cash, individuals can swiftly access liquidity by leveraging their stock holdings as collateral for a loan. This enables them to seize time-sensitive investment opportunities or address pressing financial needs without delay.",
        icon:houseicon
      },
      {
        title:"Flexible Utilization",
        desc:"The funds obtained through a loan against listed stocks can be utilized for a variety of purposes, including investment in new opportunities, debt consolidation, funding education or healthcare expenses, or any other personal or business requirement.",
        icon:statloan
      },
      {
        title:"No Credit Checks",
        desc:"Unlike traditional loans, which may require extensive credit checks and documentation, loans against listed stocks primarily focus on the value of the underlying securities. As a result, individuals with varying credit profiles can still qualify for such loans.",
        icon:dollarloanicon
      },
      {
        title:"Competitive Interest Rates",
        desc:"Epiidosis Investments LLC offers competitive interest rates on loans against listed stocks, ensuring affordability and favorable terms for borrowers. This enables individuals to access funds at relatively lower costs compared to alternative financing options.",
        icon:houseicon
      },
      {
        title:"Minimal Disruption to Investment Strategy",
        desc:"Opting for a loan against listed stocks minimizes the disruption to an individual's investment strategy. Rather than liquidating assets and potentially triggering tax consequences or missing out on future gains, borrowers can maintain their investment positions while accessing the liquidity they need.",
        icon:statloan
      },
      
      {
        title:"Efficient Process",
      desc:"Epiidosis Investments LLC provides a streamlined and efficient loan application and approval process. With a focus on simplicity and speed, borrowers can expect quick turnaround times, allowing them to capitalize on opportunities or address financial challenges promptly.",
        icon:statloan
      },
    ]
  }
  
const AboutUsLoanAgainstStock = () => {
  return (
    <>
      <AboutOurCardUi data={aboutUsData} />
    </>
  )
}

export default AboutUsLoanAgainstStock
