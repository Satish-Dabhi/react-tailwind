import HeroSectionUi from "../../ui/HeroSectionUI"
import industrySectionHero from '/img/industryInsights/industrySectionHero.png'
const beradcrumbs = [
    {
      title: "HOME",
      link: "/",
    },
    {
      title: "OUR SERVICES",
      link: "#",
    },
    {
      title: "FUNDRAISING ",
      link: "/industryinsight",
    }
  ];

  const heroTextData = {
    title:"Stay Informed with Our Latest Insights",
    desc:"Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt sapien et pretium. Commodo consequat eget tincidunt augue. Consequat non viverra eu ut amet justo nulla facilisis. Eu bibendum arcu euismod ullamcorper laoreet at tempus.",
    
}
const HeroSectionIndustry = () => {
  return (
    <>
      <HeroSectionUi beradcrumbs={beradcrumbs} heroTextData={heroTextData} heroasset={industrySectionHero}  />
    </>
  )
}

export default HeroSectionIndustry
