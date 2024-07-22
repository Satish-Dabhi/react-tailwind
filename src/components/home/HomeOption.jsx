import { useState } from "react";
import SubNavbar from "../../ui/SubNavbar";
import TabContent from "../../ui/TabContent ";

const HomeOption = () => {
  const [selectedTab, setSelectedTab] = useState("Renewable Energy");

  return (
    <div>
      <div className="container mx-auto my-8">
        <SubNavbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        <TabContent selectedTab={selectedTab} />
      </div>
    </div>
  );
};

export default HomeOption;
