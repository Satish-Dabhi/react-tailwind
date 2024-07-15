import CompanyOverview from "../components/aboutus/CompanyOverview";
import MeetOurExperiencedTeam from '../components/home/MeetOurExperiencedTeam'
import HerosectionAboutUs from "../components/aboutus/HerosectionAboutUs";
import InnovationAndTech from "../components/aboutus/InnovationAndTech";
import OurStrenght from "../components/aboutus/OurStrenght";
import { CarouselCustomNavigation } from "../ui/CarouselCustomNavigation";
import MediaAndPress from "../components/aboutus/MediaAndPress";
import AboutUsFAQ from "../components/aboutus/AboutUsFAQ";

import GetAFreeConsultation from "../components/home/GetAFreeConsultation";
import OurHistory from "../components/aboutus/OurHistory";
import FounderDedtails from "../components/aboutus/FounderDetails";
import ValueSection from "../components/aboutus/ValueSection";
import OurPartner from "../components/aboutus/OurPartner";

const AboutUs = () => {
  return (
    <>
      <HerosectionAboutUs />
      <CompanyOverview />

      <OurHistory />
      <OurStrenght />
      <ValueSection />
      <FounderDedtails />
      <OurPartner />

      <CarouselCustomNavigation />
      <InnovationAndTech />
      <MeetOurExperiencedTeam/>
      <MediaAndPress/>
      <AboutUsFAQ/>
      <GetAFreeConsultation/>
    </>
  );
};

export default AboutUs;
