

function VisionSection() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8">
      <div className="flex flex-col items-end text-right w-full md:w-1/2 pr-4 mt-15" >
        <div className="flex items-center mb-4">
          <h2 className="font-bold text-lg hover:text-blue-500" style={{ color: "#5F5D5E" }}>Established</h2>
          <div className="h-3 w-3 bg-blue-500 rounded-full ml-2"></div>
        </div>
        <p className="text-gray-600 mb-8 pl-4">
        Founded in 2020,Epiidosis Investments LLC set out to provide access to diversified high-potential investments in the Middle East and East Africa.
        </p>
        <div className="flex items-center mb-4">
          <h2 className="font-bold text-lg hover:text-blue-500" style={{ color: "#5F5D5E" }}>Strategic Partnerships</h2>
          <div className="h-3 w-3 bg-blue-500 rounded-full ml-2"></div>
        </div>
        <p className="text-gray-600 pl-4">
        Forged strategic alliances with global financial institutions, enabling us to offer attractive investment opportunities through our capital markets, private equity, and private debt platforms.
        </p>
      </div>
      <div className="flex items-center justify-center h-full mx-8 md:block hidden">
        <div className="h-80 w-px bg-black"></div> {/* Centered Separator line with increased height */}
      </div>
      <div className="flex flex-col items-start text-left w-full md:w-1/2 pl-4 mt-15">
        <div className="flex items-center mb-4">
          <div className="h-3 w-3 bg-blue-500 rounded-full mr-2"></div>
          <h2 className="font-bold text-lg hover:text-blue-500" style={{ color: "#5F5D5E" }}>Our Investment Expert:</h2>
        </div>
        <p className="text-gray-600 mb-3 pr-4">
        Within a few years, we built a reputation as investment experts, with successful ventures across various sectors including finance, fintech, energy, and healthcare
        </p>
        <div className="flex items-center mb-4">
          <div className="h-3 w-3 bg-blue-500 rounded-full mr-2"></div>
          <h2 className="font-bold text-lg hover:text-blue-500" style={{ color: "#5F5D5E" }}>Global Expansion:</h2>
        </div>
        <p className="text-gray-600 pr-4">
        Expanded our portfolio globally, managing credit and equity investments that enhanced diversification and liquidity for our investors.
        </p>
      </div>
    </div>
  );
}

export default VisionSection;
