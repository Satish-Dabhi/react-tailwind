import { Typography } from "@material-tailwind/react";
import HowItWorksCard from "../../ui/HowItWorksCard";
import financial from "/img/fundraising/financialAnalysis.png";
import investments from "/img/fundraising/Investments.png";
import stratergy from "/img/fundraising/strategyDevelopment.png";

// eslint-disable-next-line react/prop-types, no-unused-vars
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const cardData = [
  {
    no: "1",
    title: "1.	Registration & Documentation",
    img: financial,
    item1: "Sign up and complete KYC verification.",
    item2: "Provide company information and upload necessary documents.",
  },
  {
    no: "2",
    title: "Verification & Fee Payment",
    img: stratergy,
    item1: "Documents undergo review and verification.",
    item2: "Pay the onboarding fee upon successful verification.",
  },
  {
    no: "3",
    title: "Contract Signing & Agreement",
    img: investments,
    item1: "Receive and review indicative term sheet and service contract.",
    item2: "Sign the agreement to proceed with the investment process.",
  },
  {
    no: "4",
    title: "Due Diligence & Funding",
    img: financial,
    item1: "Submit processing fee for legal and financial structuring.",
    item2: "Sign the investment agreement for funding",
  },
  {
    no: "5",
    title: "Deployment & Setup",
    img: stratergy,
    item1: "Funds are deployed to the project's Special Purpose Vehicle (SPV).",
    item2: "Initiate SPV setup including legal documentation.",
  },
  {
    no: "6",
    title: "Assessment & Underwriting",
    img: investments,
    item1: "Project undergoes assessment and risk underwriting.",
  },
  {
    no: "7",
    title: "Security Pledge & Fund Creation",
    img: stratergy,
    item1: "Pledge required security and issue funded financial bank guarantee.",
    item2: "Leverage assets for better fund procurement.",
  },
  {
    no: "8",
    title: "Fund Availability",
    img: investments,
    item1: "Funds become available for project management as per requirements.",
  },
];

const HowItWorks = () => {
  return (
    <div className="relative min-h-[65rem] md:min-h-[33rem] 2xl:min-h-auto ">
      <div className="relative bg-green h-fit md:h-full w-full">
        <div className="w-full   container mx-auto p-12">
          <Typography className="text-2xl md:text-4xl text-center text-white font-inria font-semibold">
            How it works
          </Typography>

          <p className="mt-2 text-lg  text-white mb-12 md:mb-10 font-inter">
            Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed
            egestas mattis. Pulvinar leo vitae lacus in quis. Convallis nunc
            turpis lacus laoreet dignissim turpis lacus ornare tristique. Eget
            porttitor tortor fames neque aenean mauris adipiscing metus.
          </p>
        </div>
      </div>
      <div className="absolute md:absolute w-full md:mt-10 xl:mt-[2rem] flex justify-center items-center  md:h-[60%]">
        {/* <div className="flex flex-wrap justify-center"> */}
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
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
            <SwiperSlide key={index} className=" w-full  ">
              <HowItWorksCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </div>
  );
};

export default HowItWorks;
