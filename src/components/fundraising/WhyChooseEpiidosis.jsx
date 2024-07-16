import WhyChooseCard from '../../ui/WhyChooseCard';
import grid1 from '/img/fundraising/grid1.png'
import grid2 from '/img/fundraising/grid2.png'
import grid3 from '/img/fundraising/grid3.png'

const whyChooseData = {
  title:"Why Choose Epiidosis for Fundraising",
  desc:"Epiidosis Investments ensures a streamlined and transparent fundraising process. Our rigorous verification and flexible investment options cater to diverse project needs, promoting growth and innovation. We prioritize trust, legal compliance, and strategic support to optimize project outcomes.",
  cardData:[
    {
      icon:grid1,
      subtitle:"Comprehensive Funding Process",
      subdesc:"Guiding fundraisers from onboarding to fund deployment with clarity and transparency."
    },
    {
      icon:grid2,
      subtitle:"Rigorous Verification Process",
      subdesc:"Ensuring authenticity through thorough KYC and document verification, enhancing investor confidence."
    },
    {
      icon:grid3,
      subtitle:"Flexible Investment Range",
      subdesc:"Supporting projects from USD 2 million and more, accommodating various stages of development."
    },
    {
      icon:grid1,
      subtitle:"Transparent Fee Structure",
      subdesc:"Clearly outlining costs upfront to foster trust and accountability."
    },
    {
      icon:grid2,
      subtitle:"Legal and Regulatory Compliance",
      subdesc:"Emphasizing adherence to laws and regulations to minimize risks and enhance project credibility."
    },
    {
      icon:grid3,
      subtitle:"Strategic Support and Guidance: ",
      subdesc:" Providing industry expertise and partnerships to optimize project success and overcome challenges."
    },
  ]
}

const WhyChooseEpiidosis = () => {
  return (
  
    <div className='container mx-auto mt-0'>
      <WhyChooseCard data={whyChooseData}/>
    </div>
  );
};

export default WhyChooseEpiidosis;
