import exitlogo from "/img/investorRelation/exitlogo.png";
import risklogo from "/img/investorRelation/risklogo.png";
import investmentlogo from "/img/investorRelation/investmentlogo.png";
import investmentopportunitylogo from "/img/investorRelation/investmentopportunitylogo.png";

const cardData = [
  {
    logo: investmentopportunitylogo,
    title: "Investment Opportunity",
  },
  {
    logo: exitlogo,
    title: "Exit Strategy",
  },
  {
    logo: risklogo,
    title: "Risk Factors",
  },
  {
    logo: investmentlogo,
    title: "Due Diligence",
  },
];

const InvestorProposal = () => {
  return (

      <div className="containe mt-10 mb-10 mx-auto p-5 flex flex-col items-center justify-center">
        <div className="text-2xl md:text-4xl font-semibold font-inria">
          <span>Investment Proposal</span>
          <div className="bg-black h-1 ml-2 mt-2  w-[10rem] "></div>
        </div>
        <p className="text-center pl-8 pr-8 mt-4 font-inter">
          Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed
          egestas mattis. Pulvinar leo vitae lacus in quis. Convallis nunc
          turpis lacus laoreet dignissim turpis lacus ornare tristique.
        </p>

        <div className="grid grid-cols-2 gap-5 mt-10" >
        {cardData.map((items, index) => {
          return (
            <div key={index} className="border w-auto border-blue-gray-900 ">
              <div className="flex items-center gap-[7rem] pl-5 pr-5 pt-2 pb-2 "> 
                <img alt="items" src={items?.logo} className="w-12" />
                <p className="font-inria">{items?.title}</p>
              </div>
            </div>
          );
        })}
      </div>
      </div>

    

  );
};

export default InvestorProposal;
