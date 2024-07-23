import PropTypes from "prop-types";
import image4 from "/img/home/32422 1.jpg";

const content = {
  "Renewable Energy": {
    title: "Renewable Energy",
    part1: `In 2021, the renewable energy industry remained remarkably resilient. Rapid technology improvements and decreasing costs of renewable energy resources, along with the increased competitiveness of battery storage,`,
    part2: `have made renewables one of the most competitive energy sources in many areas. Epidlosis Investments Dubai is focused and has keen interest in developing and deploying investments in this key sector across the Globe.`,
  },
  "Tourism & Hospitality": {
    title: "Tourism & Hospitality",
    part1: `In 2023, the global travel and tourism sector has shown significant recovery, nearing its pre-pandemic peak. The sector is projected to contribute $9.5 trillion to the global GDP, just 5% below the 2019 levels.`,
    part2: `Epiidosis Investments Dubai is strategically positioned to capitalize on this growth, focusing on developing and deploying investments in the travel and tourism sector globally.`,
  },
  Commercial: {
    title: "Commercial",
    part1:
      "The global commercial retail market is forecasted to grow at a CAGR of over 10% from 2022 to 2027, driven by increased private investments and e-commerce spending​​. Asia-Pacific, including China and Canada, has seen significant growth in office space and logistics.",
    part2:
      "The global commercial retail market is forecasted to grow at a CAGR of over 10% from 2022 to 2027, driven by increased private investments and e-commerce spending​​. Asia-Pacific, including China and Canada, has seen significant growth in office space and logistics.",
  },
  Agriculture: {
    title: "Agriculture",
    part1:
      "Healthy, sustainable, and inclusive food systems are essential for global development. Agricultural development is a powerful tool to end extreme poverty, boost shared prosperity, and feed an estimated 9.7 billion people by 2050. Agriculture contributes significantly to economic growth.",
    part2:
      "Healthy, sustainable, and inclusive food systems are essential for global development. Agricultural development is a powerful tool to end extreme poverty, boost shared prosperity, and feed an estimated 9.7 billion people by 2050. Agriculture contributes significantly to economic growth.",
  },
  Industry: {
    title: "Industry",
    part1:
      "Investments in manufacturing can yield strong returns. For instance, digital transformation and smart manufacturing can significantly boost productivity and reduce operational costs, leading to higher profitability. Companies that invest in automation and advanced manufacturing.​",
    part2:
      "Epiidosis Investments Dubai is focused on developing and deploying investments in this critical sector worldwide, leveraging growth opportunities and addressing challenges to enhance its portfolio and market presence. By investing in cutting-edge technologies .",
  },
  Education: {
    title: "Education",
    part1:
      "Integrated next-generation technologies are revolutionizing education, equipping students for lifelong learning while addressing three key goals: fortifying student skills, increasing education’s ROI, and enabling innovation and entrepreneurship.",
    part2:
      "Epiidosis Investments Dubai is keen on developing and deploying investments in the education sector globally, leveraging these innovative trends to maximize returns and impact​",
  },
  Healthcare: {
    title: "Healthcare",
    part1: `the World Health Organization's latest strategies aim to end epidemics and advance universal health coverage, primary health care, and health security. Key initiatives include the Preparedness and Resilience for Emerging Threats.`,
    part2: `WHO also highlights the importance of sustainable health promotion, aiming for 1 billion more people to enjoy better health and well-being by 2025 through improvements in air quality, water, sanitation and hygine.`,
  },
};

const TabContent = ({ selectedTab }) => {
  const { title, part1, part2 } = content[selectedTab];

  return (
    <div className="p-6 flex flex-col lg:flex-row">
      <div className="lg:w-[35%]">
        <div className="h-64 lg:h-auto flex items-center justify-center">
          <img
            src={image4}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="lg:w-[70%] bg-white p-6 rounded-3xl shadow-lg ml-0 lg:ml-[-7rem] relative -top-16 lg:top-0 -left-0 lg:left-16 my-5">
        <h2
          className="font-bold lg:text-xl font-inria text-center mb-4"
          style={{ color: "#5F5D5E" }}
        >
          {title}
        </h2>
        <div
          className="flex flex-col lg:flex-row font-inter text-sm font-light text-[#5F5D5E] leading-7"
        >
          <div className="lg:w-1/2 lg:pl-6 pr-4">{part1}</div>
          <div className="lg:w-1/2 lg:pl-12 mt-4 lg:mt-0">{part2}</div>
        </div>
      </div>
    </div>
  );
};

TabContent.propTypes = {
  selectedTab: PropTypes.string.isRequired,
};

export default TabContent;
