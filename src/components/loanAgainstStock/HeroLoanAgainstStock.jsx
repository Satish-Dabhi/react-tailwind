import HeroSectionUi from "../../ui/HeroSectionUI";
import heroloanagainst from '/img/loanagainstlistedstocks/heroloanagainst.png'
const beradcrumbs = [
    {
      title: "HOME",
      link: "/",
    },
    {
      title: "OUR SERVICES",
      link: "#",
    },
    {
      title: "LOAN AGAINST LISTED STOCKS",
      link: "/loanagainststocks",
    }
  ];

  
const heroTextData = {
    title:"Unlock Liquidity with Your Listed Stocks",
    desc:"Secure Loans Against Your Portfolio",
    buttonText:"Get Started"
}
const HeroLoanAgainstStock = () => {
  return (
    <div>
       <HeroSectionUi beradcrumbs={beradcrumbs} heroTextData={heroTextData} heroasset={heroloanagainst} />
    </div>
  )
}

export default HeroLoanAgainstStock
