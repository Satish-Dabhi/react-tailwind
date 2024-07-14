import WhyChooseCard from "../../ui/WhyChooseCard"
import stockicon from '/img/loanagainstlistedstocks/stockicon.png'
import dollarloanicon from '/img/loanagainstlistedstocks/dollarloanicon.png'
import handdollaricon from '/img/loanagainstlistedstocks/handdollaricon.png'

const whyChooseData = {
    title:"Why Choose Epiidosis for Stock-Backed Loans",
    desc:"Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed egestas mattis. Pulvinar leo vitae lacus in quis. Convallis nunc turpis lacus laoreet dignissim turpis lacus ornare tristique.",
    cardData:[
      {
        icon:handdollaricon,
        subtitle:"Expertise in Financial Services and Fin-tech",
        subdesc:"Leveraging our expertise in financial services and Fin-tech, we offer tailored solutions designed to meet your specific needs."
      },
      {
        icon:stockicon,
        subtitle:"Global Reach and Strong Professional Team:",
        subdesc:"With a strong professional team from various countries, we have a global reach, allowing us to cater to clients worldwide. Our team is dedicated to attracting global investors for projects across Asia, India, Africa (Eastern & Western) Region, Middle East Region, Australia & Latin America."
      },
      {
        icon:dollarloanicon,
        subtitle:"Diverse Asset Classes and Sectors",
        subdesc:"Epiidosis Investments LLC manages assets across a wide range of sectors, including commercial enterprises, tourism, industry, agriculture, energy, education, and healthcare. This diversification ensures that your investments are well-protected and have the potential for growth."
      },
      {
        icon:handdollaricon,
        subtitle:"Private Investments Track Record",
        subdesc:"Through our private investments, we have established a strong track record of success, deploying capital in sectors with robust demand fundamentals. This track record instills confidence in our ability to deliver favorable outcomes for our clients."
      },
      {
        icon:stockicon,
        subtitle:"Global and Regional Credit and Equity Portfolios",
        subdesc:"We possess a strong capability in managing global and regional credit and equity portfolios. This expertise enhances the diversification and liquidity of Epiidosis Investments LLC, providing added security for our clients' investments."
      },
      {
        icon:dollarloanicon,
        subtitle:"Attractive Investment Opportunities",
        subdesc:"Backed by strong financial alliances globally, we offer attractive investment opportunities to third-party investors through our capital markets funds, private equity, and private debt platforms. Our investment opportunities cater to projects for associate companies ranging from USD 2 million to USD 150 million."
      },
      
      {
        icon:stockicon,
        subtitle:"Transparent Interest Rates and Terms:",
        subdesc:"We believe in transparency and provide clear information on interest rates and loan terms. This transparency ensures that our clients fully understand the terms of their loans and can make informed decisions."
      },
      {
        icon:dollarloanicon,
        subtitle:"Responsive Customer Support:",
        subdesc:"Our team is dedicated to providing excellent customer support throughout the loan application process. We are committed to addressing any queries or concerns you may have and ensuring a smooth and seamless experience."
      },
    ]
  }
  

const WhyChooseStockBackedLoans = () => {
  return (
    <>
     <WhyChooseCard data ={whyChooseData} /> 
    </>
  )
}

export default WhyChooseStockBackedLoans
