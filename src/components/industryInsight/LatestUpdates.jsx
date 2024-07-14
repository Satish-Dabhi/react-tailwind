import LatestCardUi from "../../ui/LatestCardUi";
import ecommerce from "/img/industryInsights/e-commerce.png";
import finacial from "/img/industryInsights/finacial.png";
import healthcare from "/img/industryInsights/healthcare.png";
import manufacturing from "/img/industryInsights/manufacturing.png";
import tech from "/img/industryInsights/tech.png";

const latestData = [
  {
    icon: tech,
    title: "Technology Sector",
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquam metus sed faucibus mauris venenatis. Scelerisque vitae sed faucibus arcu. Vitae tincidunt ut id elit enim faucibus.",
  },
  {
    icon: healthcare,
    title: "Healthcare Industry",
    desc: "Lorem ipsum dolor sit amet consectetur. Odio sit tortor egestas consequat nulla diam elementum nam hendrerit. Vestibulum suscipit duis et risus interdum sapien nec",
  },
  {
    icon: finacial,
    title: "Financial Services",
    desc: "Lorem ipsum dolor sit amet consectetur. Lorem faucibus posuere malesuada praesent. Sed eget scelerisque purus etiam a integer. Nibh eu at vulputate id lectus lectus.",
  },
  {
    icon: ecommerce,
    title: "E-commerce and Retail",
    desc: "Lorem ipsum dolor sit amet consectetur. Adipiscing scelerisque massa enim odio gravida tellus vestibulum interdum consectetur. Mollis lectus scelerisque vi.",
  },
  {
    icon: manufacturing,
    title: "Manufacturing and Supply Chain",
    desc: "Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt sapien et pretium. Commodo consequat eget tincidunt.",
  },
];

const LatestUpdates = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="grid  justify-items-center">
        <p className="text-black text-4xl font-inria">Latest Updates</p>
        <div className="bg-primary h-1 justify-start w-[10rem]  mr-[5rem]"></div>
      </div>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3">
        {latestData.map((data, index) => {
          return (
            <div key={index}>
              <LatestCardUi data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestUpdates;
