import founder from "/img/aboutus/founder.png";

const FounderDedtails = () => {
  return (
    <>
      <div className="bg-[#E8F6FF] p-10">
        <div className="bg-white rounded-xl p-10">
          <div className="flex">
            <img src={founder} width="240px" height="100px" className="lg:ml-5" />
            <div className="px-10 text-[#5F5D5E] lg:mr-24 lg:ml-12">
              <p className="font-inter text-base font-light">
                Founder & Director
              </p>
              <p className="font-inria text-3xl my-3 font-bold">
                Shashwath Tomar
              </p>
              <p className="font-inter text-base font-light">
                He has founded and directed several international companies,
                constantly achieving the highest levels of business development,
                strategic planning & implementation, market exploration and
                sourcing. As a means of capturing the potential of the available
                markets, he established Epiidosis Investments based in UAE. This
                organization provides investment management facilitation by
                consulting, advising & partnering with new companies and
                businesses from scratch through the investor-line in UAE and
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FounderDedtails;
