import statsimg from "/img/investorRelation/statsimg.png";
const InvestorPortFolioShowcase = () => {
  return (
    <div className="container mx-auto p-10">
      <div className="grid grid-col-1 md:grid-cols-2 mb-5 items-center">
        <div>
          <p className="text-2xl md:text-4xl font-semibold font-inria">Innovation and Technology</p>
          <div className="bg-primary h-1 ml-2 mt-2  w-[10rem] "></div>
          <p className="mt-5 pr-3 font-inter">
            Lorem ipsum dolor sit amet consectetur. Faucibus diam amet ultricies
            sit. Nulla scelerisque eget sit quisque id ullamcorper. Convallis
            lacus commodo pretium odio sit amet. Tempor feugiat pellentesque
            elit interdum. Quam eget sit cum velit quisque felis convallis duis
            malesuada. Quam in pulvinar cursus nisl id.
          </p>
          <div className="mt-10">
            <div className="flex gap-5">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#339FDE"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </p>
              <div>
                <p className="w-auto font-inter">
                  Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam
                  sed egestas mattis. Pulvinar leo vitae lacus in quis.
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <p>  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#339FDE"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg></p>
              <div>
               
                <p className="w-auto font-inter">
                  Borrow funds from lenders, such as banks, financial
                  institutions, or peer-to-peer lending platforms, with the.
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <p>  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#339FDE"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg></p>
              <div>
               
                <p className="w-auto font-inter">
                Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed egestas mattis. Pulvinar leo vitae lacus in quis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 ">
          <img alt="innovation" src={statsimg} />
        </div>
      </div>
    </div>
  );
};

export default InvestorPortFolioShowcase;
