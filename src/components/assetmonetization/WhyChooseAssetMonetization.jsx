import WhyChooseCard from "../../ui/WhyChooseCard"
import checkicon from '/img/assetmonetization/checkicon.png'
import clientcentricicon from '/img/assetmonetization/clientcentricicon.png'
import handswithstaricon from '/img/assetmonetization/handwithstaricon.png'
const whyChooseData = {
    title:"Why Choose Epiidosis Investments for Asset Monetization?",
    desc:"Epiidosis Investments LLC offers a comprehensive and strategic approach to asset monetization, leveraging its global expertise, diversified asset classes, and professional team to maximize returns and provide tailored investment solutions.",
    cardData:[
      {
        icon:handswithstaricon,
        subtitle:"Diversified Asset Classes and Global Reach:",
        subdesc:"Epiidosis Investments LLC provides access to a wide range of asset classes, including financial services, energy, healthcare, and more, while operating on a global scale, including regions such as the Middle East, East Africa, and Asia."
      },
      {
        icon:checkicon,
        subtitle:"Proven Track Record and Professional Team: ",
        subdesc:"With a strong history of strategic private investments and a diverse professional team, Epiidosis Investments LLC excels in identifying and capitalizing on high-potential opportunities, ensuring long-term viability and growth."
      },
      {
        icon:clientcentricicon,
        subtitle:"Tailored Solutions and Real-time Monitoring:",
        subdesc:"Epiidosis Investments LLC offers customized investment solutions and a comprehensive engagement process, supported by real-time monitoring and updates, ensuring transparency and efficiency throughout the asset monetization journey."
      },
    ]
  }

const WhyChooseAssetMonetization = () => {
  return (
    <>
     <WhyChooseCard data = {whyChooseData} />
    </>
  )
}

export default WhyChooseAssetMonetization
