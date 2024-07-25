import BorderTitleWithDesc from "../components/common/BorderTitleWithDesc";
import HeroSection from "../components/common/HeroSection";
import SectionTitle from "../components/common/SectionTitle";
import HomeOption from "../components/home/HomeOption";
import Investment from "../components/home/Investment";
import OurBlogsCard from "../components/home/OurBlogsCard";
import OurClientService from "../components/home/OurClientService";
import OurServiceSection from "../components/home/OurServiceSection";
import ServiceComponent from "../components/home/ServiceComponent";
import homeBanner from "/banner/home-banner.png";
import SampleImage from "/img/map.png";
import image1 from "/img/home/image1.png";
import image2 from "/img/home/image2.png";
import image3 from "/img/home/image3.png";
import image4 from "/img/home/image4.png";

const heroBannerCards = [
  { imageSrc: image1, altText: "Circle 1", title: "Guidance" },
  { imageSrc: image2, altText: "Circle 2", title: "Independence" },
  { imageSrc: image3, altText: "Circle 3", title: "Transparency" },
  { imageSrc: image4, altText: "Circle 4", title: "Support" },
];

const Home = () => {
  return (
    <div>
      <HeroSection
        cards={heroBannerCards}
        bannerImg={homeBanner}
        bannerTitle={"Unlock Opportunities\nwith Epiidosis Investments"}
        bannerDesc={
          "Empower your investments with Epiidosis Investments LLC,\ndriving sustainable socio-economic growth through strategic,\ninnovative, and globally diversified investment solutions."
        }
        contentSectionWidth={"60%"}
        buttonText={"Invest With Us"}
        borderLeft={true}
        buttonLink={"/invest-with-us"}
      />
      <OurServiceSection />
      <SectionTitle title={"Our Funding Solutions"} />
      <ServiceComponent />
      <OurClientService />
      <Investment />
      <SectionTitle title={"Explore Our Investment Portfolio Sectors"} />
      <HomeOption />
      <BorderTitleWithDesc title="Targeted Region" />
      <div className="container mx-auto">
        <img src={SampleImage} alt={"targeted-region"} />
      </div>
      <SectionTitle title={"Latest Updates"} />
      <OurBlogsCard />
    </div>
  );
};

export default Home;
