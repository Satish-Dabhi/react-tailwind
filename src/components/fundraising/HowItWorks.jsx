import { Typography } from "@material-tailwind/react";
import HowItWorksCard from "../../ui/HowItWorksCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FinwiseBackground from "../../../public/img/fundraising/Finwise4.png"; // Import the background image

const cardData = [
  {
    no: "1",
    title: "Registration & Documentation",
    img: "/img/fundraising/Fundraising 1.jpg",
    item1: "Sign up and complete KYC verification.",
    item2: "Provide company information and upload necessary documents.",
  },
  {
    no: "2",
    title: "Verification & Fee Payment",
    img: "/img/fundraising/Asset Monetization 1.jpg",
    item1: "Documents undergo review and verification.",
    item2: "Pay the onboarding fee upon successful verification.",
  },
  {
    no: "3",
    title: "Contract Signing & Agreement",
    img: "/img/fundraising/Asset Monetization 1.jpg",
    item1: "Receive and review indicative term sheet and service contract.",
    item2: "Sign the agreement to proceed with the investment process.",
  },
  {
    no: "4",
    title: "Due Diligence & Funding",
    img: "/img/fundraising/Asset Monetization 1.jpg",
    item1: "Submit processing fee for legal and financial structuring.",
    item2: "Sign the investment agreement for funding",
  },
  {
    no: "5",
    title: "Deployment & Setup",
    img: "/img/fundraising/Asset Monetization 1.jpg",
    item1: "Funds are deployed to the project's Special Purpose Vehicle (SPV).",
    item2: "Initiate SPV setup including legal documentation.",
  },
  {
    no: "6",
    title: "Assessment & Underwriting",
    img: "/img/fundraising/Asset Monetization 1.jpg",
    item1: "Project undergoes assessment and risk underwriting.",
    item2: "",
  },
  {
    no: "7",
    title: "Security Pledge & Fund Creation",
    img: "/img/fundraising/Asset Monetization 1.jpg",
    item1: "Pledge required security and issue funded financial bank guarantee.",
    item2: "Leverage assets for better fund procurement.",
  },
  {
    no: "8",
    title: "Fund Availability",
    img: "/img/fundraising/Fundraising 1.jpg",
    item1: "Funds become available for project management as per requirements.",
    item2: "",
  },
];

const HowItWorks = () => {
  return (
    <div className="relative min-h-[65rem] md:min-h-[33rem] 2xl:min-h-auto">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `linear-gradient(270deg, rgba(217, 217, 217, 0.2) -4.17%, rgba(19, 69, 98, 0.63) -4.16%, #102741 103.96%), url(${FinwiseBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative bg-transparent h-full w-full z-10">
        <div className="w-full container mx-auto p-12">
          <Typography className="text-2xl md:text-4xl text-center text-white font-inria font-semibold">
            How it works
          </Typography>
          <p className="mt-2 text-lg text-white mb-12 md:mb-10 font-inter">
            Epiidosis Investments simplifies the investment process with a structured approach. From registration and documentation to fund deployment and project management, 
            we ensure a clear pathway for investors. Our step-by-step guide emphasizes transparency, efficiency, and strategic deployment of funds to maximize project success.
          </p>
        </div>
      </div>
      <div className="absolute md:absolute w-full md:mt-10 xl:mt-[2rem] flex justify-center items-center md:h-[60%] z-20">
        <Swiper
          slidesPerView={3}
          spaceBetween={30} // Adjust spacing as needed
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper container mx-auto pb-5"
        >
          {cardData.map((item, index) => (
            <SwiperSlide key={index} className="w-full">
              <HowItWorksCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HowItWorks;
