import ExploreNow from "../components/home/ExploreNow";
import FinancialNavigation from "../components/home/FinancialNavigation";
// import GetAFreeConsultation from "../components/home/GetAFreeConsultation";
// import GrowCustomerRelationships from "../components/home/GrowCustomerRelationships";
import Herosection from "../components/home/Herosection";
// import MeetOurExperiencedTeam from "../components/home/MeetOurExperiencedTeam";
// import OurBlogs from "../components/home/OurBlogs";
import OurBlogsCard from "../components/home/OurBlogsCard";
// import OurClientService from "../components/home/OurClientService";
// import OurServiceSection from "../components/home/OurServiceSection";
import ServiceComponent from "../components/home/ServiceComponent";
import DetailCard from "../ui/DetailCard";
import SectionTitle from "../ui/SectionTitle";
import guidelogo from "/logos/guide-icon.png";
import mapImageLogo from "/img/map-image.png";
import PortFolioSectors from "../components/home/PortFolioSectors";

const cardDetails = [
  {
    title: "Total Investment Required",
    description: "AED 7.0 Million",
  },
  {
    title: "Ticket Size ",
    description: "AED 100k - 500k",
  },
  {
    title: "ROI (%)",
    description: "24% - 30% Annual ",
  },
  {
    title: "Sector",
    description: "Commercial",
  },
];

const Home = () => {
  return (
    <div>
      <Herosection />
      <FinancialNavigation />
      <SectionTitle title={"Our Funding Solutions"} />
      {/* <OurServiceSection /> */}
      <ServiceComponent />
      <ExploreNow />
      <div className="container mx-auto py-[3rem]">
        <div className="grid grid-cols-2 grid-flow-col gap-4">
          <DetailCard
            icon={guidelogo}
            title={"E&k - Energy Infra Project"}
            description={
              "E&K Energy Infra Holdings Limited, an essential arm of Epiidosis Investments LLC,"
            }
            detailItems={cardDetails}
            buttonText={"Invest now"}
          />
          <DetailCard
            icon={guidelogo}
            title={"InvestcoPortal"}
            description={"Investment Management Platform"}
            detailItems={cardDetails}
            buttonText={"Invest now"}
          />
        </div>
      </div>
      <SectionTitle title={"Explore Our Investment Portfolio Sectors"} />
      <PortFolioSectors />
      <div className="container text-center py-[3rem] mx-auto">
        <p className="text-4xl text-[#5F5D5E] font-inria font-semibold">
          Targeted Region
        </p>
        <div className="flex justify-center">
        <div className="bg-primary h-1 w-[16rem] mt-3"></div>
        </div>
      </div>

      <img src={mapImageLogo} className="w-full h-auto" />
      {/* <OurClientService /> */}
      {/* <MeetOurExperiencedTeam /> */}
      {/* <GrowCustomerRelationships /> */}
      {/* <OurBlogs /> */}
      <SectionTitle title={"Latest Updates"} />
      <OurBlogsCard />
      {/* <GetAFreeConsultation /> */}
    </div>
  );
};

export default Home;
