import ValueCard from "../aboutus/ValueCard";

const valueData = [
  {
    title: 'Professional Team and Expertise',
    description: 'Expertise: We have more than 20 years of business and finance experience. For comprehensive and informed decision-making, we specialize in investment management and financial analysis.',
  },
  {
    title: 'Strategic Investment Focus',
    description: 'Our focus is on sectors with high demand and government priority: Fintech, Commercial enterprises, Tourism, Industry, Agriculture, Energy, Education, Healthcare, Oil and Gas, Banking and finance.',
  },
  {
    title: 'Investing in Complex Landscapes',
    description: 'We leverage our extensive network of clients and connections to access high-potential private investment opportunities referred by professionals working with large corporations and governments.',
  },
  {
    title: 'Innovative Financial Structuring and Risk Mitigation',
    description: 'SPV Model: Collaborating with insurers and utilizing the Special Purpose Vehicle model ensures robust risk management.',
  },
  {
    title: 'Investment Objective',
    description: 'Our investments generate returns of up to 30% annually. Through carefully selected investments, we ensure robust growth.',
  },
];

const ValueHowInvest = () => {
  return (
    <div className="w-full p-8">
      <h2 className="text-center text-3xl font-bold mb-8 text-[#5F5D5E]">How We Add Value</h2>
      <div className="flex justify-between">
        <div className="flex flex-col space-y-4 p-2">
          <ValueCard title={valueData[0].title} description={valueData[0].description} />
          <ValueCard title={valueData[1].title} description={valueData[1].description} />
        </div>
        <div className="mt-40 "> {/* Adjusted top margin for centering */}
          <ValueCard title={valueData[2].title} description={valueData[2].description} />
        </div>
        <div className="flex flex-col space-y-4 p-2">
          <ValueCard title={valueData[3].title} description={valueData[3].description} />
          <ValueCard title={valueData[4].title} description={valueData[4].description} />
        </div>
      </div>
    </div>
  );
};

export default ValueHowInvest;
