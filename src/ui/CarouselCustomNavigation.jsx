import { Carousel, IconButton } from "@material-tailwind/react";
import FinancialExperties from "../components/aboutus/FinancialExperties";
const carouselData = [
  {
    heading: "Financial Expertise",
    desc: "At Epiidosis Investments LLC, we boast a wealth of financial expertise rooted in years of experience and in-depth knowledge of global markets. Our team of seasoned professionals includes financial analysts, investment managers, and industry experts who possess a deep understanding of complex financial instruments, market trends, and investment strategies. We leverage our expertise to provide innovative investment solutions tailored to meet the unique needs and objectives of our clients.",
  },
  {
    heading:"Proven Track Record",
    desc:"Our track record speaks volumes about our success in delivering value to our investors. Over the years, we have executed numerous successful projects and investments across various sectors and geographies, generating substantial returns and creating lasting value for our stakeholders. From strategic acquisitions to successful exits, our portfolio of success stories reflects our ability to identify high-potential opportunities, navigate market dynamics, and achieve superior results."
  },
  {
    heading:"Global Presence",
    desc:"With a presence spanning across continents, Epiidosis Investments LLC boasts a robust global presence that enables us to access and capitalize on opportunities in diverse markets. From the Middle East to East Africa, Asia, India, Australia, Latin America, and beyond, we have established strong partnerships and alliances that allow us to navigate international markets with confidence and efficiency. Our global footprint provides us with unique insights, access to local networks, and opportunities for strategic expansion, positioning us as a trusted partner for investors seeking exposure to global markets."
  }
];
export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#339FDE"
            className="h-12 w-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#339FDE"
            className="h-12 w-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
    {
      carouselData.map((item,index)=>{
        return(
          <section key={index}>
          <FinancialExperties data={item} />
          </section>
        )
      })
    }
      
      
    </Carousel>
  );
}
