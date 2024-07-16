import sustainableGrowthImage from "/img/first.png";
import highPotentialImage from "/img/second.png"; // Update with correct paths to your images

const ServiceComponentInvest = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-5 mt-12 mb-12">
        <img src={sustainableGrowthImage} alt="Sustainable Growth and Risk Management" className="h-[18rem] md:h-[20rem] object-cover" />
        <div className="text-start md:w-[30rem]">
          <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-start" style={{ color: '#5F5D5E' }}>
            Sustainable Growth and Risk Management
          </h2>
          <ul className="list-disc ml-5 text-gray-600 mt-3">
            <li>Investors often encounter poor returns despite their best efforts in achieving sustainable growth.</li>
            <li>For investors, managing risk effectively is essential for long-term success.</li>
            <li>A lack of solid commitments results in inconsistent performance and increased vulnerability to market fluctuations.</li>
          </ul>
        </div>
      </div>
      <div className="bg-bgprimary p-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-5 mt-12 mb-12">
          <div className="text-start md:w-[30rem]">
            <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-start" style={{ color: '#5F5D5E' }}>
              Identifying High-Potential Opportunities
            </h2>
            <ul className="list-disc ml-5 text-gray-600 mt-3">
              <li>A deep understanding and expertise are required to identify private investment opportunities.</li>
              <li>The difficulty in assessing investment viability often limits the potential for significant returns.</li>
              <li>Investment alignment with regional government priorities is critical to success.</li>
              <li>To maximize success, investments must be well-informed and strategically positioned to take advantage of emerging opportunities and supportive regulatory environments.</li>
            </ul>
          </div>
          <img src={highPotentialImage} alt="Identifying High-Potential Opportunities" className="h-[18rem] md:h-[20rem] object-cover" />
        </div>
      </div>
    </>
  );
};

export default ServiceComponentInvest;
