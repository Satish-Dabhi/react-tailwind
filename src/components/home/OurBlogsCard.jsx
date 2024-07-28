import { CardDefault } from "../../ui/CardDefault";
import first from "/img/ourblogs/first.png";
import second from "/img/ourblogs/second.png";
import third from "/img/ourblogs/third.png";
const ourBlogData = [
  {
    title: "Investing in the UAE: Navigating the Challenges",
    content:
      "UAE's attractive investment environment presents challenges like regulatory complexities, cultural nuances, economic diversification, real estate dynamics, financing issues, and geopolitical risks. Epiidosis Investments offers expert guidance and support to navigate these challenges successfully.",
    img: first,
    link: "https://example.com/10-tips-healthy-living",
  },
  {
    title:
      "An Overview of Dubai Investing and How Epiidosis Investments Can Help?",
    content:
      "Epiidosis Investments provides tailored strategies, market research, exclusive opportunities, risk management, and continuous support to help investors navigate Dubai's diverse investment landscape, including real estate, stocks, commodities, cryptocurrencies, and venture capital.",
    img: second,
    link: "https://example.com/benefits-meditation",
  },
  {
    title: "Investing in Epiidosis: Unlocking Potential",
    content:
      "Epiidosis Investments offers expert guidance, a vast network, strategic investments, comprehensive support, and due diligence to enhance fundraising efforts, transforming concepts into reality for startups, non-profits, and corporations.",
    img: third,
    link: "https://example.com/healthy-breakfast-ideas",
  },
];

const OurBlogsCard = () => {
  return (
    <div>
      <CardDefault data={ourBlogData} />
    </div>
  );
};

export default OurBlogsCard;
