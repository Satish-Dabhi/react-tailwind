import HeroSectionFundRaising from "../components/fundraising/HeroSectionFundRaising";
import WhySection from "../ui/WhySection";
import CardInvestment from "../components/fundraising/CardInvestment";
import AssetMonetization from "../components/fundraising/AssetMonetization";
import FinanceOptionCard from "../components/fundraising/FinanceOptionCard";

const FundraisingPage = () => {
  return (
    <>
      <HeroSectionFundRaising />
      <WhySection 
        heading="Why Choose Epiidosis for Fundraising" 
        description="Epiidosis Investments ensures a streamlined and transparent fundraising process. Our rigorous verification and flexible investment options cater to diverse project needs, promoting growth and innovation. We prioritize trust, legal compliance, and strategic support to optimize project outcomes."
      />
      <CardInvestment />
      <AssetMonetization />
      
      <div className="container mx-auto p-4 mt-0"> {/* Added margin-top here */}
        <FinanceOptionCard
          title="Exploring Structured Finance Options"
          description="Discover tailored funding solutions designed to support projects of all sizes and stages."
          features={[
            'Across capital markets',
            'Private equity',
            'Private debt platforms'
          ]}
          buttonText="Contact Us"
          buttonStyle={{
            padding: "24px 48px", // Adjust padding for larger button
            fontSize: "16px" // Increase font size
          }}
        />
      </div>
    </>
  );
};

export default FundraisingPage;
