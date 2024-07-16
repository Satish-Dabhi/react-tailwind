import ValueCard from './ValueCard';

const valueData = [
  {
    title: 'Investment Deal Team',
    description: 'Our dedicated Investment Deal Team specializes in identifying, evaluating, and securing high-potential investment opportunities. With a thorough due diligence process, they ensure each investment aligns with our strategic goals and delivers optimal returns.',
  },
  {
    title: 'Huge Source of Great Ideas',
    description: 'We foster a culture of innovation and creativity, encouraging our team to generate and share great ideas. This dynamic approach allows us to stay ahead of market trends and continuously identify new investment opportunities.',
  },
  {
    title: 'The Construction List Title',
    description: 'We maintain a comprehensive construction list that details our strategic investment projects. This list enables us to prioritize and manage our investments effectively, ensuring timely execution and optimal resource allocation.',
  },
  {
    title: 'Operating Partners',
    description: 'Our network of Operating Partners comprises industry experts who provide invaluable insights and support for our investment projects. Their expertise helps us navigate complex markets and enhances our ability to achieve successful outcomes.',
  },
  {
    title: 'Long-Term Value',
    description: 'Our investment strategy focuses on creating long-term value for our stakeholders. By prioritizing sustainable growth and aligning our investments with market demand and government priorities, we ensure enduring returns and positive socio-economic impact.',
  },
];

const ValueHow = () => {
  return (
    <div className="w-full p-8">
      <h2 className="text-center text-3xl font-bold mb-8 text-[#5F5D5E]">How We Add Value</h2>
      <div className="flex justify-between">
        <div className="flex flex-col space-y-4 p-2">
          <ValueCard title={valueData[0].title} description={valueData[0].description} />
          <ValueCard title={valueData[1].title} description={valueData[1].description} />
        </div>
        <div className="mt-40 p-2"> {/* Adjusted top margin for centering */}
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

export default ValueHow;
