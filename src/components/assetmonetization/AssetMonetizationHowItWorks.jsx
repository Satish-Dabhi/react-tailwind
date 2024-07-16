import assessment from '/img/assetmonetization/assessment.png'
import stratergy from '/img/assetmonetization/stratergy.png'
import valuation from '/img/assetmonetization/valuation.png'
import HowItWorksCard from '../../ui/HowItWorksCard';
import { Typography } from '@material-tailwind/react';
// eslint-disable-next-line react/prop-types, no-unused-vars
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import FinwiseBackground from "../../../public/img/fundraising/Finwise4.png"; 

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const cardData = [
    {
      no: "1",
      title: "Onboarding Phase",
      img: assessment,
      item1: "Users register or log in to the Asset Monetization dashboard and undergo KYC verification. They provide comprehensive information about the asset company, including title chain, company KYC, government registrations and approvals, financials, and loan details.",
    },
    {
      no: "2",
      title: "Offer of Engagement Phase",
      img: valuation,
      item1: "Epiidosis extends a formal offer to the Asset Company to engage in its Investment Platform.",
    },
    {
      no: "3",
      title: "Due Diligence Phase",
      img: stratergy,
      item1: "Epiidosis conducts due diligence through a reputed audit company, with expenses borne by the asset company.",
    },
    {
      no: "4",
      title: "Agreement & Director Appointment Phase",
      img: assessment,
      item1: "If due diligence is successful, Epiidosis enters into an agreement with the asset company. An initial commitment amount is locked, and Epiidosis appoints its director, receiving an irrevocable power of attorney.",
    },
    {
      no: "5",
      title: "Bank Instrument Monetization Phase",
      img: valuation,
      item1: "Proceeding to the procedure of bank instrument monetization with a maximum timeline of 20-30 days.",
    },
    {
      no: "6",
      title: "Discounting and Fund Transfer Phase",
      img: stratergy,
      item1: "Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra temp",
    },
  ];
const AssetMonetizationHowItWorks = () => {
  return (
    <div className="relative min-h-[65rem] md:min-h-[33rem] 2xl:min-h-auto ">
    
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
            Our Process
          </Typography>
          <p className="mt-2 text-lg text-white mb-12 md:mb-10 font-inter">
            Epiidosis Investments LLC facilitates a structured and transparent asset monetization process, from onboarding and due diligence to bank instrument monetization and fund transfer, ensuring efficiency and maximizing returns for asset owners.
          </p>
        </div>
      </div>
    <div className="absolute md:absolute w-full flex justify-center items-center  md:h-[55%]">
      {/* <div className="flex flex-wrap justify-center"> */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper container mx-auto"
      >
        {cardData.map((item, index) => (
          <SwiperSlide key={index} className=" p-2 w-full  ">
            <HowItWorksCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
    </div>
  </div>
  )
}

export default AssetMonetizationHowItWorks
