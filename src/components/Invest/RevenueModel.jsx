function RevenueModel() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 p-8">
  <div className="flex flex-col items-end text-right w-full md:w-1/2 pr-4">
    <div className="flex items-center mb-4">
      <h2 className="font-bold text-lg hover:text-blue-500" style={{ color: "#5F5D5E" }}>Revenue Sources</h2>
      <div className="h-3 w-3 bg-blue-500 rounded-full ml-2"></div>
    </div>

    <div className="flex items-center mb-4">
      <h2 className="font-bold text-lg hover:text-blue-500" style={{ color: "#5F5D5E" }}>Recurring fundraising revenue (3% of funds deployed)</h2>
      <div className="h-3 w-3 bg-blue-500 rounded-full ml-2"></div>
    </div>

  </div>
  <div className="flex items-center justify-center mx-8 hidden md:flex">
    <div className="h-full w-px bg-black"></div> {/* Centered Separator line with full height */}
  </div>
  <div className="flex flex-col items-start text-left w-full md:w-1/2 pl-4">
    <div className="flex items-center mb-4">
      <div className="h-3 w-3 bg-blue-500 rounded-full mr-2"></div>
      <h2 className="font-bold text-lg hover:text-blue-500" style={{ color: "#5F5D5E" }}>6% service fee on funds deployed</h2>
    </div>

    <div className="flex items-center mb-4">
      <div className="h-3 w-3 bg-blue-500 rounded-full mr-2"></div>
      <h2 className="font-bold text-lg hover:text-blue-500" style={{ color: "#5F5D5E" }}>Year 1 Revenue: $5,125,000</h2>
    </div>

  </div>
</div>


  );
}

export default RevenueModel;
