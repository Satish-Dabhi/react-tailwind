import innovative from "/img/investorRelation/innovative.png";
import transparency from "/img/investorRelation/transperancy.png";
import proventrack from "/img/investorRelation/proventrack.png";
import robust from "/img/investorRelation/robust.png";
import { useState } from "react";

const dataCard = [
  {
    img: proventrack,
    title: "Diversified Asset Management",
    desc: "With a focus on sectors such as financial services, Fin-tech, commercial enterprises, tourism, industry, agriculture, energy, education, and healthcare, we have curated a diversified portfolio that caters to various investment preferences and market dynamics.",
  },
  {
    img: transparency,
    title: "Private Investments",
    desc: "Epiidosis prioritizes transparency and accountability, providing clear and comprehensive information about investment options, performance, and fees.Our track record in private investments speaks volumes about our ability to identify and capitalize on high-potential opportunities. By deploying capital in sectors aligned with government priorities, particularly in the Middle East and East Africa, we have generated substantial returns for our stakeholders.",
  },
  {
    img: robust,
    title: "Global Credit and Equity Portfolios",
    desc: "Through our expertise in managing global and regional credit and equity portfolios, we have enhanced the diversification and liquidity of Epiidosis Investments LLC. This has further solidified our position as a trusted partner for investors seeking exposure to both traditional and alternative asset classes.",
  },
  {
    img: innovative,
    title: "Financial Alliances",
    desc: ": Leveraging strong financial alliances globally, we offer attractive investment opportunities to third-party investors through our capital markets funds, private equity, and private debt platforms. Our investment spectrum ranges from USD 2 million to USD 150 million, catering to projects across various regions and industries.",
  },

  {
    img: innovative,
    title: "Professional Team",
    desc: "Our success is attributed to the dedication and expertise of our professional team, comprising individuals from diverse backgrounds and countries. With a singular focus on deploying capital strategically, our team ensures that investor interests remain paramount in every decision we make.",
  },
];
const WhyInvestWithEpiidosis = () => {
  const [textHide,setHide] = useState(false)

  const toggleText =()=>{
    setHide(!textHide)
  }
  return (
    <div className="bg-bgprimary">
      <div className="container mx-auto p-5  flex flex-col items-center justify-center">
        <div className="text-xl md:text-4xl font-semibold mt-12 ">
          <span className="font-inria">Why Invest with Epiidosis</span>
          <div className="bg-primary h-1 ml-2 mt-2  w-[10rem] "></div>
        </div>
        <p className="text-center pl-8 pr-8 mt-4 font-inter">
          Since our establishment in 2020, Epiidosis Investments LLC has forged
          a path of success in the global investment landscape. Here are some
          key achievements and milestones that define our journey:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-10">
          {/* {cardData} */}
          {dataCard.map((item, index) => {
            return (
              <div key={index}>
                <div className="bg-white flex gap-5 p-5 items-center">
                  <div className="bg-bgprimary p-5 w-auto h-auto">
                    <img
                      alt="logo"
                      src={item?.img}
                      className="w-[5rem] h-auto"
                    />
                  </div>

                  <div>
                    <p className="font-inter font-semibold text-xl">
                      {item?.title}
                    </p>
                    <p className="font-inter">
                      <span className={`${textHide ?'':'line-clamp-4'} font-inter`}>{item?.desc}</span>{" "}
                      <span className="cursor-pointer text-primary" onClick={toggleText}>view more</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyInvestWithEpiidosis;
