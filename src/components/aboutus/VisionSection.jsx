import ellipse from "/img/aboutus/ellipse.png";


function VisionSection() {
  return (
    <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto my-3">
      {/* Left Column */}
      <div className="flex flex-col md:border-r-2 border-[#5F5D5E]">
        {/* Section 1 */}
        <div className="flex flex-col items-end md:items-end p-6">
          <div className="flex items-center mb-3">
            <p className="text-2xl font-inria font-bold">Established</p>
            <img src={ellipse} height={35} width={35} className="mr-2" />
          </div>
          <div className="font-inter text-base font-light text-right md:text-end">
            Founded in 2020, Epiidosis Investments LLC set out to provide access to diversified
            high-potential investments in the Middle East and East Africa.
          </div>
        </div>
        {/* Section 2 */}
        <div className="flex flex-col items-end mt-8 md:mt-0 md:items-end p-6">
          <div className="flex items-center mb-3">
            <p className="text-2xl font-inria font-bold">Strategic Partnerships</p>
            <img src={ellipse} height={35} width={35} className="mr-2" />
          </div>
          <div className="font-inter text-base font-light text-right md:text-end">
            Forged strategic alliances with global financial institutions, enabling us to offer
            attractive investment opportunities through our capital markets, private equity, and
            private debt platforms.
          </div>
        </div>
      </div>
      
      {/* Right Column */}
      <div className="flex flex-col">
        {/* Section 3 */}
        <div className="flex flex-col items-start p-6">
          <div className="flex items-center mb-3">
            <img src={ellipse} height={35} width={35} className="mr-2" />
            <p className="text-2xl font-inria font-bold">Our Investment Expertise:</p>
          </div>
          <div className="font-inter text-base font-light text-left">
            Within a few years, we built a reputation as investment experts, with successful
            ventures across various sectors including finance, fintech, energy, and healthcare.
          </div>
        </div>
        {/* Section 4 */}
        <div className="flex flex-col items-start mt-8 md:mt-0 p-6">
          <div className="flex items-center mb-3">
            <img src={ellipse} height={35} width={35} className="mr-2" />
            <p className="text-2xl font-inria font-bold">Global Expansion:</p>
          </div>
          <div className="font-inter text-base font-light text-left">
            Expanded our portfolio globally, managing credit and equity investments that enhanced
            diversification and liquidity for our investors.
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default VisionSection;
