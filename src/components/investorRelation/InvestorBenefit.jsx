import ownershiplogo from '/img/investorRelation/ownershiplogo.png'
import liquiditylogo from '/img/investorRelation/liquiditylogo.png'
import taxlogo from '/img/investorRelation/taxlogo.png'
import investorBenifits from '/img/investorRelation/investorBenefits.png'
import CardImgLeftRightContent from '../../ui/CardImgLeftRightContent';
const EligibillyCardData = {
    img: investorBenifits,
    titleOne: "Investor Benefits",
    titleTwo:"Investing with Epiidosis offers a multitude of benefits designed to enhance your financial portfolio and maximize your returns. Here's why partnering with us can be a game-changer for your investment journey:",
    subsetion: [
      {
        logo: liquiditylogo,
        title: "Potential High Returns",
        subTitle:
          "By investing with Epiidosis, you gain access to high-potential opportunities across diversified asset classes. Our strategic investments in sectors with robust demand fundamentals and government prioritization ensure the potential for attractive returns on your investment. Whether it's through private equity, private debt, or capital markets funds, our focus on deploying capital strategically translates into opportunities for substantial growth and profitability.",
      },
      {
        logo: ownershiplogo,
        title: "Diversification",
        subTitle:
          "Diversification is key to managing risk and optimizing returns in your investment portfolio. With Epiidosis, you can diversify your investment across sectors, geographies, and asset classes. Our portfolio spans commercial enterprises, tourism, industry, agriculture, energy, education, and healthcare, offering you a wide array of options to spread risk and capture emerging trends. Diversification with Epiidosis provides stability and resilience against market volatility, safeguarding your investments against potential downturns.",
      },
      {
        logo: taxlogo,
        title: "Long-term Value",
        subTitle:
          "At Epiidosis, we are committed to delivering long-term value to our investors. Our focus extends beyond short-term gains to sustainable growth and wealth accumulation over time. Through strategic investments in projects aligned with government priorities and global market trends, we aim to create lasting value for our investors. Whether you're seeking income generation, capital appreciation, or wealth preservation, investing with Epiidosis ensures a steadfast commitment to your long-term financial goals.",
      },
      
      {
        logo: ownershiplogo,
        title: " Professional Expertise and Guidance",
        subTitle:
          "Investing with Epiidosis means partnering with a team of seasoned professionals dedicated to your success. Our experienced investment professionals conduct thorough due diligence, market analysis, and risk assessment to identify the most promising investment opportunities. With our guidance and expertise, you can navigate the complexities of the investment landscape with confidence, knowing that your financial interests are in capable hands.",
      },
      {
        logo: taxlogo,
        title: "Transparency and Integrity",
        subTitle:
          "Transparency and integrity are at the core of everything we do at Epiidosis. We believe in fostering trust and confidence among our investors by maintaining the highest standards of transparency and ethical conduct. From clear communication to timely reporting and disclosure, we ensure that our investors are fully informed and empowered to make sound investment decisions. With Epiidosis, you can invest with peace of mind, knowing that your interests are our top priority.Invest with Epiidosis Investments LLC and unlock the potential for growth, diversification, and long-term value in your investment portfolio. Join us in shaping a brighter financial future together.",
      },
    ],
  };
const InvestorBenefit = () => {
  return (
    <>
     <CardImgLeftRightContent data={EligibillyCardData} />
    </>
  )
}

export default InvestorBenefit
