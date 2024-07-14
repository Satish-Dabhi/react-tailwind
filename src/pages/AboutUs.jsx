import CompanyOverview from "../components/aboutus/CompanyOverview";
import MeetOurExperiencedTeam from '../components/home/MeetOurExperiencedTeam'
import HerosectionAboutUs from "../components/aboutus/HerosectionAboutUs";
import InnovationAndTech from "../components/aboutus/InnovationAndTech";
import OurStrenght from "../components/aboutus/OurStrenght";
import StatsAboutus from "../components/aboutus/StatsAboutus";
import { CarouselCustomNavigation } from "../ui/CarouselCustomNavigation";
import MediaAndPress from "../components/aboutus/MediaAndPress";
import AboutUsFAQ from "../components/aboutus/AboutUsFAQ";

import GetAFreeConsultation from "../components/home/GetAFreeConsultation";

const AboutUs = () => {
  return (
    <>
      <HerosectionAboutUs />
      <CompanyOverview />
      <StatsAboutus />
      <OurStrenght />

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
