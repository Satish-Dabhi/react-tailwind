import BorderTitleWithDesc from "../components/common/BorderTitleWithDesc";
import HeroSection from "../components/common/HeroSection";
import AssetMonetization from "../components/fundraising/AssetMonetization";
import CardInvestment from "../components/fundraising/CardInvestment";
import FinanceOptionCard from "../components/fundraising/FinanceOptionCard";
import herosectionfundraising from "/img/fundraising/heroimgfundraising.png";
import comprehensiveFundingImg from "/logos/comprehensive-funding.png";
import flexibleInvestmentImg from "/logos/flexible-investment.png";
import rigorousVerificationImg from "/logos/rigorous-verification.png";

const heroBannerCards = [
  {
    imageSrc: comprehensiveFundingImg,
    altText: "comprehensiveFundingImg",
    title: "Comprehensive Funding Process",
  },
  {
    imageSrc: rigorousVerificationImg,
    altText: "rigorousVerificationImg",
    title: "Rigorous Verification Process",
  },
  {
    imageSrc: flexibleInvestmentImg,
    altText: "flexibleInvestmentImg",
    title: "Flexible Investment Range",
  },
];

const StructuredFinance = () => {
  return (
    <>
      <HeroSection
        cards={heroBannerCards}
        bannerImg={herosectionfundraising}
        bannerTitle={"Empower Your Vision with Epiidosis Investments"}
        bannerDesc={
          "Join Epiidosis Investments and embark on a transformative journey to bring your projects to life. Our comprehensive funding process streamlines every step, ensuring transparency, efficiency, and support at every turn."
        }
        buttonText={"Get Started"}
      />
      <BorderTitleWithDesc
        title="Why Choose Epiidosis for Structured Finance?"
        description={
          "Epiidosis Investments ensures a streamlined and transparent Structured Finance process. Our rigorous verification and flexible investment options cater to diverse project needs, promoting growth and innovation. We prioritize trust, legal compliance, and strategic support to optimize project outcomes."
        }
      />
      <CardInvestment />
      <AssetMonetization />

      <div className="container mx-auto p-4 mt-0">
        {" "}
        <FinanceOptionCard
          title="Exploring Structured Finance Options"
          description="Discover tailored funding solutions designed to support projects of all sizes and stages."
          features={[
            "Across capital markets",
            "Private equity",
            "Private debt platforms",
          ]}
          buttonText="Contact Us"
          buttonStyle={{
            padding: "24px 48px", 
            fontSize: "16px",
          }}
          buttonLink="/contact-us" // Replace with the actual contact URL
        />
      </div>
    </>
  );
};

export default StructuredFinance;
