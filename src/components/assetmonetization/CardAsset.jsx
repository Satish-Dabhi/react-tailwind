import CardReuse from "../../ui/CardReuse";

const cards = [
  {
    title: 'Diversified Asset Classes',
    content: 'Epiidosis Investments LLC offers exposure to diversified asset classes, including financial services, Fin-tech, commercial enterprises, tourist enterprises, industrial enterprises, agricultural enterprises, energy enterprises, educational enterprises, and healthcare enterprises. This diversification mitigates risk and maximizes potential returns for investors.',
  },
  {
    title: 'Global Presence and Expertise',
    content: 'With operations based in Dubai, Epiidosis Investments LLC has a global reach, managing assets not only in the UAE but also worldwide. This expansive presence allows the company to tap into high-potential opportunities across regions, including the Middle East, East Africa, Asia, India, Australia, and Latin America.',
  },
  {
    title: 'Strong Track Record & Professional Team',
    content: 'Epiidosis Investments LLC has a proven history of strategic private investments in high-demand sectors, aligning with government priorities in the Middle East and East Africa for sustainable growth. The company\'s diverse and skilled professional team from various countries enhances its ability to attract global investors and manage capital effectively, ensuring the identification and capitalization of profitable investment opportunities.',
  },
  {
    title: 'Customized Investment Solutions',
    content: 'Epiidosis Investments LLC offers tailored investment solutions to meet the unique needs of third-party investors. From capital markets funds to private equity and private debt platforms, the company provides a range of investment options catering to projects of varying scales, ranging from USD 2 million to USD 150 million.',
  },
  {
    title: 'Rigorous Asset Engagement Process',
    content: 'Through a comprehensive asset engagement process, Epiidosis Investments LLC ensures transparency, efficiency, and security. Registration and KYC verification is seamless, and formal offers are made to asset owners after thorough due diligence is conducted by reputable auditors. Once agreements are signed, in addition, it involves timely monetization of bank instruments and instrument discounting.',
  },
  {
    title: 'Real-time Monitoring and Updates',
    content: 'Epiidosis Investments LLC\'s asset monetization dashboard provides real-time status updates and instructions for each step in the process. This dynamic interface ensures transparency and enables asset owners to track progress effortlessly.',
  },
];

const CardAsset = () => {
  return (
    <div className="container mx-auto my-8">
      <CardReuse cards={cards} />
    </div>
  );
};

export default CardAsset;
