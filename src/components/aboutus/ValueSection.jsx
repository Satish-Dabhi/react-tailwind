import PropTypes from "prop-types";

const ValueSection = () => {
  return (
    <div className="m-12">
      <div className="m-5 text-center font-inria text-2xl my-5 font-semibold">
        How We Add Value?
      </div>

      <div className="flex">
        <div className="flex flex-col">
          <DetailCard
            title="Investment Deal Team"
            description="Our dedicated Investment Deal Team specializes in identifying, evaluating, and securing high-potential investment opportunities. With a thorough due diligence process, they ensure each investment aligns with our strategic goals and delivers optimal returns."
          />
          <DetailCard
            title="Huge Source of Great Ideas"
            description=" We foster a culture of innovation and creativity, encouraging our team to generate and share great ideas. This dynamic approach allows us to stay ahead of market trends and continuously identify new investment opportunities."
          />
        </div>
        <div className="flex items-center">
          <DetailCard
            title="The Construction List Title"
            description="We maintain a comprehensive construction list that details our strategic investment projects. This list enables us to prioritize and manage our investments effectively, ensuring timely execution and optimal resource allocation."
          />
        </div>
        <div className="flex flex-col">
          <DetailCard
            title="Operating Partners"
            description="Our network of Operating Partners comprises industry experts who provide invaluable insights and support for our investment projects. Their expertise helps us navigate complex markets and enhances our ability to achieve successful outcomes."
          />
          <DetailCard
            title="Long-Term Value"
            description="Our investment strategy focuses on creating long-term value for our stakeholders. By prioritizing sustainable growth and aligning our investments with market demand and government priorities, we ensure enduring returns and positive socio-economic impact."
          />
        </div>
      </div>
    </div>
  );
};

const DetailCard = ({ title, description }) => {
  return (
    <div className="bg-[#E8F6FF] p-3 m-3 text-center shadow-xl">
      <p className="font-inter text-base font-semibold">{title}</p>
      <p className="font-inter text-sm font-light">{description}</p>
    </div>
  );
};

DetailCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ValueSection;
