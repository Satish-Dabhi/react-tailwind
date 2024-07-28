import ellipse from "/img/aboutus/ellipse.png";

function RevenueModel() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-1 p-8">
      <div className="flex flex-col items-end text-right w-full md:w-1/2 pr-4 font-inria">
        <div className="flex items-center mb-4">
          <h2
            className="font-bold text-xl hover:text-blue-500"
            style={{ color: "#5F5D5E" }}
          >
            AUM: $ 37.5 M
          </h2>
          <img src={ellipse} height={35} width={35} className="mr-2" />
        </div>

        <div className="flex items-center mb-4">
          <h2
            className="font-bold text-xl hover:text-blue-500"
            style={{ color: "#5F5D5E" }}
          >
            Revenue Estimate <br></br>(FY 2025): $ 5.35M{" "}
          </h2>
          <img src={ellipse} height={35} width={35} className="mr-2" />{" "}
        </div>
      </div>
      <div className="flex items-center justify-center mx-8 hidden md:flex font-inria">
        <div className="h-full w-px bg-black"></div>{" "}
        {/* Centered Separator line with full height */}
      </div>
      <div className="flex flex-col items-start text-left w-full md:w-1/2 pl-4 font-inria text-xl">
        <div className="flex items-center mb-4">
          <img src={ellipse} height={35} width={35} className="mr-2" />{" "}
          <h2
            className="font-bold text-xl hover:text-blue-500"
            style={{ color: "#5F5D5E" }}
          >
            6% From Fundraising
          </h2>
        </div>

        <div className="flex items-center mb-4">
          <img src={ellipse} height={35} width={35} className="mr-2" />{" "}
          <h2
            className="font-bold text-xl hover:text-blue-500"
            style={{ color: "#5F5D5E" }}
          >
            2% Recurring <br></br> from Fund Management
          </h2>
        </div>
      </div>
    </div>
  );
}

export default RevenueModel;
