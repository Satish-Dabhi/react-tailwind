import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import renewableEnergyImg from "/img/renewableEnergy.png";

export function PortFolioSectors() {
  const data = [
    {
      label: "Renewable Energy",
      value: "renewableEnergy",
      image: renewableEnergyImg,
      desc1: `In 2021, the renewable energy industry remained remarkably resilient. Rapid technology improvements and decreasing costs of renewable energy resources, along with the increased competitiveness of battery storage.`,
      desc2: `have made renewables one of the most competitive energy sources in many areas.
      Epiidosis Investments Dubai is focused and has keen interest in developing and deploying investments in this key Sector across the Globe.`,
    },
    {
      label: "Tourism & Hospitality",
      value: "tourismHospitality",
      image: renewableEnergyImg,
      desc1: `In 2021, the renewable energy industry remained remarkably resilient. Rapid technology improvements and decreasing costs of renewable energy resources, along with the increased competitiveness of battery storage.`,
      desc2: `have made renewables one of the most competitive energy sources in many areas.
      Epiidosis Investments Dubai is focused and has keen interest in developing and deploying investments in this key Sector across the Globe.`,
    },
    {
      label: "Commercial",
      value: "commercial",
      image: renewableEnergyImg,
      desc1: `In 2021, the renewable energy industry remained remarkably resilient. Rapid technology improvements and decreasing costs of renewable energy resources, along with the increased competitiveness of battery storage.`,
      desc2: `have made renewables one of the most competitive energy sources in many areas.
      Epiidosis Investments Dubai is focused and has keen interest in developing and deploying investments in this key Sector across the Globe.`,
    },
    {
      label: "Agriculture",
      value: "agriculture",
      image: renewableEnergyImg,
      desc1: `In 2021, the renewable energy industry remained remarkably resilient. Rapid technology improvements and decreasing costs of renewable energy resources, along with the increased competitiveness of battery storage.`,
      desc2: `have made renewables one of the most competitive energy sources in many areas.
      Epiidosis Investments Dubai is focused and has keen interest in developing and deploying investments in this key Sector across the Globe.`,
    },
    {
      label: "Industry",
      value: "industry",
      image: renewableEnergyImg,
      desc1: `In 2021, the renewable energy industry remained remarkably resilient. Rapid technology improvements and decreasing costs of renewable energy resources, along with the increased competitiveness of battery storage.`,
      desc2: `have made renewables one of the most competitive energy sources in many areas.
      Epiidosis Investments Dubai is focused and has keen interest in developing and deploying investments in this key Sector across the Globe.`,
    },
    {
      label: "Education",
      value: "education",
      image: renewableEnergyImg,
      desc1: `In 2021, the renewable energy industry remained remarkably resilient. Rapid technology improvements and decreasing costs of renewable energy resources, along with the increased competitiveness of battery storage.`,
      desc2: `have made renewables one of the most competitive energy sources in many areas.
      Epiidosis Investments Dubai is focused and has keen interest in developing and deploying investments in this key Sector across the Globe.`,
    },
    {
      label: "Healthcare",
      value: "healthcare",
      image: renewableEnergyImg,
      desc1: `In 2021, the renewable energy industry remained remarkably resilient. Rapid technology improvements and decreasing costs of renewable energy resources, along with the increased competitiveness of battery storage.`,
      desc2: `have made renewables one of the most competitive energy sources in many areas.
      Epiidosis Investments Dubai is focused and has keen interest in developing and deploying investments in this key Sector across the Globe.`,
    },
  ];

  return (
    <div className="container mx-auto py-[5rem]">
      <Tabs value="renewableEnergy">
        <TabsHeader className="bg-transparent">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} className="border-b-2 border-transparent hover:border-black">
              {label}
            </Tab>
          ))}
        </TabsHeader>


        <TabsBody>
          {data.map(({ value, desc1, desc2, image, label }) => (
            <TabPanel key={value} value={value}>
              <div className="flex pt-5">
                {image && (
                  <img src={image} alt="Example Image" className="col-span-3" />
                )}

                <div className="col-span-9">
                  <div className="absolute left-[40%] top-[15%] bg-white p-8 pl-[4rem] rounded-s-2xl">
                    <h3 className="text-xl font-bold mb-2 text-center font-inria pb-4 text-[#5F5D5E]">
                      {label}
                    </h3>
                    <div className="grid grid-cols-2 grid-flow-col gap-4">
                      <p className="text-[#5F5D5E]">{desc1}</p>
                      <p className="text-[#5F5D5E]">{desc2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
export default PortFolioSectors;
