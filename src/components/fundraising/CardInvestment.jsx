import CardReuse from "../../ui/CardReuse";


const cards = [
  {
    title: 'Comprehensive Funding Process',
    content: 'Guiding fundraisers from onboarding to fund deployment with clarity and transparency.',
  },
  {
    title: 'Rigorous Verification Process',
    content: 'Ensuring authenticity through thorough KYC and document verification, enhancing investor confidence.',
  },
  {
    title: 'Flexible Investment Range',
    content: 'Supporting projects from USD 2 million and more, accommodating various stages of development.',
  },
  {
    title: 'Transparent Fee Structure',
    content: 'Clearly outlining costs upfront to foster trust and accountability.',
  },
  {
    title: 'Legal and Regulatory Compliance',
    content: 'Emphasizing adherence to laws and regulations to minimize risks and enhance project credibility.',
  },
  {
    title: 'Strategic Support and Guidance',
    content: 'Providing industry expertise and partnerships to optimize project success and overcome challenges.',
  },
];

const CardInvestment = () => {
  return (
    <div className="container mx-auto my-8">
      <CardReuse cards={cards} />
    </div>
  );
};

export default CardInvestment;
