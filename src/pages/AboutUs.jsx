
import Founder from "../components/aboutus/Founder";
import HerosectionAboutUs from "../components/aboutus/HerosectionAboutUs";
import MissionSection from "../components/aboutus/MissionSection";
import ProcessFlow from "../components/aboutus/ProcessFlow ";
import ValueHow from "../components/aboutus/ValueHow";
import VisionSection from "../components/aboutus/VisionSection";
import OurPartner from "./OurPartner";


const AboutUs = () => {
  return (
    <>
      <HerosectionAboutUs />

      <MissionSection/>
      <VisionSection/>
      <ProcessFlow/>
      <ValueHow/>
      <Founder/>
      <OurPartner/>
   
    </>
  );
};

export default AboutUs;
