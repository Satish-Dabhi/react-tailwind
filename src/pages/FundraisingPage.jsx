import AboutEpiidosisInv from "../components/fundraising/AboutEpiidosisInv";
import HeroSectionFundRaising from "../components/fundraising/HeroSectionFundRaising";
import WhyChooseEpiidosis from "../components/fundraising/WhyChooseEpiidosis";
import HowItWorks from "../components/fundraising/HowItWorks";
import ExploringFundraisingOptions from "../components/fundraising/ExploringFundraisingOptions";
import SuccessStories from "../components/fundraising/SuccessStories";
import FundraisingFAQ from "../components/fundraising/FundraisingFAQ";

const FundraisingPage = () => {
  return (
    <>
      <HeroSectionFundRaising />
      <AboutEpiidosisInv />
      <WhyChooseEpiidosis />
      <HowItWorks />
      <ExploringFundraisingOptions />
      <SuccessStories />
      <FundraisingFAQ />
    </>
  );
};

export default FundraisingPage;
