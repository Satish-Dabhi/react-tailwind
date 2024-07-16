// import GetAFreeConsultation from "../components/home/GetAFreeConsultation";
// import GrowCustomerRelationships from "../components/home/GrowCustomerRelationships";
import AfterInvestment from "../components/home/AfterInvestment";
import Herosection from "../components/home/Herosection";
import HomeOption from "../components/home/HomeOption";
import Investment from "../components/home/Investment";
import Latest from "../components/home/Latest";
// import MeetOurExperiencedTeam from "../components/home/MeetOurExperiencedTeam";
// import OurBlogs from "../components/home/OurBlogs";
import OurBlogsCard from "../components/home/OurBlogsCard";
import OurClientService from "../components/home/OurClientService";
import OurServiceSection from "../components/home/OurServiceSection";
import ServiceComponent from "../components/home/ServiceComponent";
import TargetRegin from "../components/home/TargetRegin";
import BlueDiv from "./BlueDiv";

const Home = () => {
  return (
    <div>
      <Herosection />
      <OurServiceSection />
      <BlueDiv />
      <ServiceComponent />
      <OurClientService />
      <Investment />
      <AfterInvestment/>
      <HomeOption/>
      <TargetRegin/>
      <Latest/>
      {/* <MeetOurExperiencedTeam /> */}
      {/* <GrowCustomerRelationships /> */}
      {/* <OurBlogs /> */}
      <OurBlogsCard />
      {/* <GetAFreeConsultation /> */}
    </div>
  );
};

export default Home;
