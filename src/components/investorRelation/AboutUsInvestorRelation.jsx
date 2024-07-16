import AboutOurCardUiInvest from '../../ui/AboutOurCardUiInvest';
import empowermenticon from '/img/investorRelation/empowermenticon.png';
import heroinvestor from '/img/investorRelation/heroinvestor.png'
import integrity from '/img/investorRelation/integrity.png'
import trusticon from '/img/investorRelation/trusticon.png'

const aboutUsData ={
  mainImg:heroinvestor,
  title:"About Loan Against Listed Stocks",
  desc:"Epiidosis Investments LLC is a Dubai-based investment company dedicated to providing shareholders and third-party investors access to high-potential opportunities across diversified asset classes. Our mission is to identify and capitalize on sectors with robust demand fundamentals, prioritized by governments in the Middle East and East Africa region. We are committed to delivering value through strategic investments while upholding integrity, transparency, and innovation in all our endeavors.",
  iconPlusData:[
    {
      subtitle:"Empowerment",
      desc:"Enabling individuals and businesses to achieve financial success through innovative solutions",
      icon:empowermenticon
    },
    {
      subtitle:"Integrity",
      desc:"Conducting business with honesty, transparency, and ethical principles",
      icon:integrity
    },
    {
      subtitle:"Trust",
      desc:"Building strong, long-lasting relationships with clients based on reliability and integrity",
      icon:trusticon
    },
  ]
}

const AboutUsInvestorRelation = () => {
  return (
    <>
     <AboutOurCardUiInvest data={aboutUsData} />
    </>
  )
}

export default AboutUsInvestorRelation
