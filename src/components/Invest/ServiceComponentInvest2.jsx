
import investcoPortalImage from '/img/first.png';
import riskManagementImage from '/img/second.png'; // Update with correct paths to your images

const ServiceComponentInvest2 = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-5 mt-12 mb-12">
        <img src={investcoPortalImage} alt="The InvestcoPortal - Investment Fundraising Automation" className="h-[18rem] md:h-[20rem] object-cover" />
        <div className="text-start md:w-[30rem]">
          <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-start" style={{ color: '#5F5D5E' }}>
            The InvestcoPortal - Investment Fundraising Automation
          </h2>
          <ul className="list-disc ml-5 text-gray-600 mt-3">
            <li>Immediate fund-raising capabilities using advanced technologies.</li>
            <li>Access to diverse industries including technology, healthcare, finance, and more.</li>
            <li>Focus on strategic private investments with promising growth prospects.</li>
          </ul>
        </div>
      </div>
      <div className="bg-bgprimary p-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-5 mt-12 mb-12">
          <div className="text-start md:w-[30rem]">
            <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-start" style={{ color: '#5F5D5E' }}>
              Risk Management Solutions
            </h2>
            <ul className="list-disc ml-5 text-gray-600 mt-3">
              <li>
                <strong>SPV Model:</strong> Isolates financial risk by using Special Purpose Vehicles for finance structuring.
              </li>
              <li>
                <strong>Collateral:</strong> SPV shares provide a tangible form of security to investors.
              </li>
              <li>
                <strong>Risk Mitigation:</strong> Provides added protection with an insurance underwriter.
              </li>
            </ul>
          </div>
          <img src={riskManagementImage} alt="Risk Management Solutions" className="h-[18rem] md:h-[20rem] object-cover" />
        </div>
      </div>
    </>
  );
};

export default ServiceComponentInvest2;
