import GetAFreeConsultation from "../components/home/GetAFreeConsultation";
import GrowCustomerRelationships from "../components/home/GrowCustomerRelationships";
import Herosection from "../components/home/Herosection";
import MeetOurExperiencedTeam from "../components/home/MeetOurExperiencedTeam";
import OurBlogs from "../components/home/OurBlogs";
import OurBlogsCard from "../components/home/OurBlogsCard";
import OurClientService from "../components/home/OurClientService";
import OurServiceSection from "../components/home/OurServiceSection";
import ServiceComponent from "../components/home/ServiceComponent";

const Home = () => {
  return (
    <div>
      <Herosection />
      <OurServiceSection />
      <ServiceComponent />
      <OurClientService />
      <MeetOurExperiencedTeam />
      <GrowCustomerRelationships />
      <OurBlogs />
      <OurBlogsCard />
      <GetAFreeConsultation />
    </div>
  );
};

export default Home;
