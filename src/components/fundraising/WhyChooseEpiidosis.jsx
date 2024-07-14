import WhyChooseCard from '../../ui/WhyChooseCard';
import grid1 from '/img/fundraising/grid1.png'
import grid2 from '/img/fundraising/grid2.png'
import grid3 from '/img/fundraising/grid3.png'

const whyChooseData = {
  title:"Why Choose Epiidosis for Fundraising",
  desc:"Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed egestas mattis. Pulvinar leo vitae lacus in quis. Convallis nunc turpis lacus laoreet dignissim turpis lacus ornare tristique.",
  cardData:[
    {
      icon:grid1,
      subtitle:"Comprehensive Funding Process",
      subdesc:"Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis."
    },
    {
      icon:grid2,
      subtitle:"Rigorous Verification Process",
      subdesc:"Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis."
    },
    {
      icon:grid3,
      subtitle:"Flexible Investment Range",
      subdesc:"Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis."
    },
    {
      icon:grid1,
      subtitle:"Transparent Fee Structure",
      subdesc:"Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis."
    },
    {
      icon:grid2,
      subtitle:"Legal and Regulatory Compliance",
      subdesc:"Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis."
    },
    {
      icon:grid3,
      subtitle:"Strategic Support and Guidance: ",
      subdesc:"Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis."
    },
  ]
}

const WhyChooseEpiidosis = () => {
  return (
  
    <div className='container mx-auto'>
      <WhyChooseCard data={whyChooseData}/>
    </div>
  );
};

export default WhyChooseEpiidosis;
