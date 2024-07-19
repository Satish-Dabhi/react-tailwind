import PropTypes from "prop-types";

const tabs = [
  "Renewable Energy",
  "Tourism & Hospitality",
  "Commercial",
  "Agriculture",
  "Industry",
  "Education",
  "Healthcare",
];

const SubNavbar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="flex flex-wrap justify-center border-b mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          style={{
            borderImage: "linear-gradient(to left, #339FDE, #1C5678) 1",
            MozBorderImage: "linear-gradient(to left, #339FDE, #1C5678) 1", // For Firefox
            borderBottomWidth: `${ selectedTab === tab ? '4px' : '0'}`
          }}
          className={`font-inter text-2xl leading-9 px-2 py-2 ${
            selectedTab === tab
              ? "text-[#339FDE] border-b-2 font-bold b-w-2"
              : "text-[#95989A]"
          } mx-2`}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

SubNavbar.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};

export default SubNavbar;
