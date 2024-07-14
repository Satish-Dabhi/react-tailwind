import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import KnowledgeCard from "./KnowledgeCard";
const data = [
  {
    label: "Financial Trends",
    value: "html",
    desc: <KnowledgeCard/>,
  },
  {
    label: "Personalized Financial Insights",
    value: "react",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Educational Resources",
    value: "vue",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
  {
    label: "News and Analysis",
    value: "angular",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Financial Planning Tools",
    value: "svelte",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
  {
    label: "Community Forum",
    value: "svelte",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
];

const KnowledgeTabsComponents = () => {
  const [activeTab, setActiveTab] = useState("html");
  return (
    <section className="container mx-auto ">
      <div className="mt-10 flex gap-10 p-5">
        <p className="text-inter text-primary ">Industry Insights</p>
        <p className="text-inter">Latest Updates</p>
      </div>
      <div className="mt-8 ">
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent overflow-scroll lg:overflow-hidden"
            indicatorProps={{
              className:
                " border-b-2 border-gray-900 shadow-none rounded-none  ",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? "text-gray-900" : ""}
              >
              <span> {label}</span> 
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </section>
  );
};

export default KnowledgeTabsComponents;
