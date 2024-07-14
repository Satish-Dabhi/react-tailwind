import investorimg from "/img/investorRelation/investorimg.png";
import check from "/img/investorRelation/check.png";
import ButtonSecondaryUi from "../../ui/ButtonSecondaryUi";
const CurrentInvestmentOpportunities = () => {
  return (
    <div className="bg-green">
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-2 mt-10 mb-10 justify-items-center justify-center gap-10 text-white">
          <div>
            <img alt="investorimg" src={investorimg} />
          </div>
          <div >
            <p className="text-2xl md:text-4xl font-inria font-semibold">Current Investment Opportunities</p>
            <p className="mt-5 font-inter">
              Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed
              egestas mattis. Pulvinar leo vitae lacus in quis. Convallis nunc
              turpis lacus laoreet dignissim turpis lacus ornare tristique.
            </p>

            <div className="flex items-center gap-5 mt-5 font-inter">
              <div>
                <img alt="logo" src={check} />
              </div>
              Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed
              egestas mattis. Pulvinar leo vitae lacus in quis.
            </div>
            <div className="flex items-center gap-5 mt-5 mb-5 font-inter">
              <div>
                <img alt="logo" src={check} />
              </div>
              Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed
              egestas mattis. Pulvinar leo vitae lacus in quis.
            </div>
            <ButtonSecondaryUi><span className="font-inria">View More</span> </ButtonSecondaryUi>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default CurrentInvestmentOpportunities;
