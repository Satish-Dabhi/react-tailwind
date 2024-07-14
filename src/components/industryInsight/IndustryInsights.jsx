import finacialicon from "/img/industryInsights/finacialicon.png";
import market from "/img/industryInsights/market.png";
import regulatory from "/img/industryInsights/regulatory.png";
import Techimpact from "/img/industryInsights/techimpact.png";
import global from "/img/industryInsights/global.png";
import IndustryInsightsUi from "../../ui/IndustryInsightsUi";

const industryInsightCardData = [
  {
    icon: finacialicon,
    title: "Financial Trends",
    desc: "Lorem ipsum dolor sit amet consectetur. Adipiscing scelerisque massa enim",
  },
  {
    icon: market,
    title: "Market Analysis",
    desc: "Lorem ipsum dolor sit amet consectetur. Adipiscing scelerisque massa enim",
  },
  {
    icon: regulatory,
    title: "Regulatory Updates",
    desc: "Lorem ipsum dolor sit amet consectetur. Adipiscing scelerisque massa enim",
  },
  {
    icon: Techimpact,
    title: "Technology Impact",
    desc: "Lorem ipsum dolor sit amet consectetur. Adipiscing scelerisque massa enim",
  },
  {
    icon: global,
    title: "Global Economic Outlook",
    desc: "Lorem ipsum dolor sit amet consectetur. Adipiscing scelerisque massa enim",
  },
];
const IndustryInsights = () => {
  return (
    <div className="bg-green flex flex-col justify-center">
      <div className="container md:mt-[3rem] 2xl:mt-[3rem] mb-5 mx-auto flex flex-col items-center justify-center w-full p-5 ">
        <p className="text-4xl  font-bold text-center font-inria text-white">
          Industry Insights
        </p>
        <div className="bg-white h-1 mt-1 justify-start w-[7rem]  md:w-[13rem]  mr-[5rem]"></div>

        <p className="text-justify mt-3 text-white text-lg">
          Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt sapien et
          pretium. Commodo consequat eget tincidunt augue. Consequat non viverra
          eu ut amet justo nulla facilisis. Eu
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 p-5">
      {industryInsightCardData.map((data, index) => {
        return (
          <div key={index}>
            <IndustryInsightsUi data={data} />
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default IndustryInsights;
