import WhyChooseCard from "../../ui/WhyChooseCard"
import checkicon from '/img/assetmonetization/checkicon.png'
import clientcentricicon from '/img/assetmonetization/clientcentricicon.png'
import handswithstaricon from '/img/assetmonetization/handwithstaricon.png'
const whyChooseData = {
    title:"Why Choose Epiidosis for Fundraising",
    desc:"Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed egestas mattis. Pulvinar leo vitae lacus in quis. Convallis nunc turpis lacus laoreet dignissim turpis lacus ornare tristique.",
    cardData:[
      {
        icon:handswithstaricon,
        subtitle:"Diversified Asset Classes",
        subdesc:"Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis."
      },
      {
        icon:checkicon,
        subtitle:"Proven Results",
        subdesc:"Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis."
      },
      {
        icon:clientcentricicon,
        subtitle:"Client-Centric Approach",
        subdesc:"Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis."
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
