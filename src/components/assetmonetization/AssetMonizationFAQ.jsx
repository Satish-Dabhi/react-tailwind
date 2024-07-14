import { AccordionCustomIcon } from "../../ui/AccordionCustomIcon";
const GrowthaccordionData = [
    {
      title: "Dedicated Account Managers",
      content: "Epiidosis Investments LLC assigns dedicated account managers to guide asset owners through every step of the asset monetization process. These managers serve as primary points of contact, offering personalized assistance and addressing any questions or concerns that may arise.",
    },
    {
      title: "Expert Advisory Services",
      content: "Asset owners have access to expert advisory services provided by Epiidosis's team of professionals with extensive experience in finance, investment, and asset management. These advisors offer strategic insights and recommendations tailored to the unique needs and objectives of each asset owner.",
    },
    {
      title: "Comprehensive Due Diligence Support",
      content: "Epiidosis conducts thorough due diligence on behalf of asset owners, ensuring transparency and mitigating risks throughout the monetization process. This includes verifying the legitimacy of assets, assessing their market value, and identifying any potential legal or regulatory issues.",
    },
    {
      title: "Legal and Compliance Assistance ",
      content: "Epiidosis provides legal and compliance assistance to ensure that asset owners meet all regulatory requirements and adhere to industry best practices. This includes reviewing legal documents, facilitating contract negotiations, and addressing any compliance concerns.",
    },
    {
      title: "Financial Modeling and Analysis",
      content: "Epiidosis offers financial modeling and analysis services to help asset owners assess the potential returns and risks associated with asset monetization. This includes conducting sensitivity analysis, scenario planning, and cash flow projections to inform investment decisions.",
    },
    {
      title: "Customized Solutions ",
      content: "Epiidosis develops customized solutions tailored to the specific objectives and preferences of each asset owner. Whether the goal is to maximize liquidity, optimize returns, or minimize risks, Epiidosis works closely with asset owners to design strategies that align with their goals.",
    },
    {
      title: "Real-Time Progress Monitoring",
      content: "Asset owners can monitor the progress of their asset monetization through Epiidosis's real-time dashboard, which provides up-to-date information on the status of each step in the process. This transparency allows asset owners to stay informed and engaged throughout the monetization journey.",
    },
    {
      title: "Timely Communication and Updates",
      content: "Epiidosis maintains open lines of communication with asset owners, providing timely updates and feedback on the status of their asset monetization. This ensures that asset owners are kept informed of any developments and can make informed decisions based on the latest information available.",
    },
    {
      title: "Post-Monetization Support",
      content: ": Epiidosis offers post-monetization support to ensure a smooth transition and ongoing management of monetized assets. This may include assistance with fund management, asset allocation, and portfolio optimization to help asset owners maximize the value of their monetized assets over time.",
    },
    {
      title: "24/7 Customer Service",
      content: "Epiidosis provides round-the-clock customer service and support to address any urgent queries or issues that may arise during the asset monetization process. Asset owners can reach out to Epiidosis at any time for assistance and guidance.",
    },

  ];
const AssetMonizationFAQ = () => {
  return (
    <div className='mb-12 container mx-auto'>
    <p className='md:text-center md:mt-12  md:text-3xl font-semibold'>Frequently asked questions</p>
   <AccordionCustomIcon data = {GrowthaccordionData} />
   </div>
  )
}

export default AssetMonizationFAQ
