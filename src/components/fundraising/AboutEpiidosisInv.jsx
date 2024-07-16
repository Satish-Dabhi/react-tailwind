import investment from "/img/fundraising/investment.png";
import callgirl from "/img/fundraising/callgirl.png";
import hand from "/img/fundraising/hand.png";
import paper from "/img/fundraising/paper.png";
import AboutOurCardUi from "../../ui/AboutOurCardUi";

const aboutUsData = {
  mainImg: investment,
  title: "About Epiidosis Investments",
  desc: "Epiidosis Investments LLC is a reputable investment firm headquartered in Dubai, with operations spanning globally. Established in 2020, the company has rapidly emerged as a significant player in the investment landscape, offering a diverse portfolio of assets across various sectors. With a strong focus on financial services and Fin-tech, Epiidosis manages assets in sectors including commercial enterprises, tourism, industry, agriculture, energy, education, and healthcare, both in the UAE and worldwide.",
  iconPlusData: [
    {
      subtitle: "1. Diversified Investment Opportunities",
      desc: "Epiidosis provides access to a wide range of asset classes, enabling investors to diversify their portfolios effectively. Whether it's investing in commercial enterprises, tourism projects, or healthcare ventures, fundraisers have the flexibility to explore opportunities that align with their investment objectives.",
      icon: callgirl,
    },
    {
      subtitle: "2. Global Reach and Market Insights",
      desc: "Leveraging its extensive network and market expertise, Epiidosis offers investment opportunities not only in the Middle East and East Africa but also in key regions such as Asia, India, Australia, and Latin America. This global perspective allows fundraisers to tap into emerging markets and capitalize on growth opportunities worldwide.",
      icon: paper,
    },
    {
      subtitle: "3. Professional Expertise",
      desc: `Backed by a team of seasoned professionals from diverse backgrounds, Epiidosis brings a wealth of experience to the table. The company's dedicated team is committed to identifying high-potential investment opportunities, conducting thorough due diligence, and delivering value to investors through strategic investment decisions.
      Trust-Building Elements:
      `,
      list1: "Proven Track Record: Epiidosis boasts a solid track record of success, having executed numerous private investments across sectors with robust demand fundamentals. This track record instills confidence in investors, showcasing the company's ability to generate favorable returns and mitigate risks effectively",
      list2: "Strong Financial Alliances: With strong financial alliances established globally, Epiidosis has access to a robust capital base, enabling it to offer attractive investment opportunities to third-party investors. These alliances not only enhance the company's financial credibility but also broaden its investment horizon, ensuring access to diverse funding sources.",
      icon: hand,
    },
  ],
};

const AboutEpiidosisInv = () => {
  return (
    <div className="container mx-auto p-5">
      <AboutOurCardUi data={aboutUsData} />
    </div>
  );
};

export default AboutEpiidosisInv;
