import Founder from "../components/aboutus/Founder";
import HerosectionAboutUs from "../components/aboutus/HerosectionAboutUs";
import MissionSection from "../components/aboutus/MissionSection";
import ProcessFlow from "../components/aboutus/ProcessFlow ";
import ValueHow from "../components/aboutus/ValueHow";
import VisionSection from "../components/aboutus/VisionSection";
import OurPartner from "./OurPartner";

const valueData = [
  {
    title: "Investment Deal Team",
    description:
      "Our dedicated Investment Deal Team specializes in identifying, evaluating, and securing high-potential investment opportunities. With a thorough due diligence process, they ensure each investment aligns with our strategic goals and delivers optimal returns.",
  },
  {
    title: "Huge Source of Great Ideas",
    description:
      "We foster a culture of innovation and creativity, encouraging our team to generate and share great ideas. This dynamic approach allows us to stay ahead of market trends and continuously identify new investment opportunities.",
  },
  {
    title: "The Construction List Title",
    description:
      "We maintain a comprehensive construction list that details our strategic investment projects. This list enables us to prioritize and manage our investments effectively, ensuring timely execution and optimal resource allocation.",
  },
  {
    title: "Operating Partners",
    description:
      "Our network of Operating Partners comprises industry experts who provide invaluable insights and support for our investment projects. Their expertise helps us navigate complex markets and enhances our ability to achieve successful outcomes.",
  },
  {
    title: "Long-Term Value",
    description:
      "Our investment strategy focuses on creating long-term value for our stakeholders. By prioritizing sustainable growth and aligning our investments with market demand and government priorities, we ensure enduring returns and positive socio-economic impact.",
  },
];

const AboutUs = () => {
  return (
    <>
      <HerosectionAboutUs />
      <MissionSection />
      <VisionSection />
      <ProcessFlow />
      <ValueHow title={"How We Add Value?"} valueData={valueData} />
      <Founder />
      <OurPartner />
    </>
  );
};

export default AboutUs;
