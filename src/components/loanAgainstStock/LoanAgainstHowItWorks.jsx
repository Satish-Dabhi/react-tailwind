import click from "/img/loanagainstlistedstocks/click.png";
import application from "/img/loanagainstlistedstocks/application.png";
import documentation from "/img/loanagainstlistedstocks/documentation.png";
import { Typography } from "@material-tailwind/react";
import HowItWorksCard from "../../ui/HowItWorksCard";
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
    title: "Application Submission",
    img: application,
    item1:
      "Fill out the online application form with your personal and financial details.",
    item2:
      "Provide information about the stocks you wish to leverage as collateral.",
  },
  {
    no: "2",
    title: "Evaluation",
    img: click,
    item1:
      "We ensure compliance with regulatory requirements and internal risk management standards.",
    item2:
      "Our team reviews your application and assesses the value and risk associated with your listed stocks.",
  },
  {
    no: "3",
    title: " Approvalr",
    img: documentation,
    item1:
    "Upon approval, you will receive notification of your loan offer, detailing terms, interest rates, and repayment options",
    item2:
      "You may be required to provide additional documentation for verification purposes.",
  },

  {
    no: "4",
    title: "Collateral Transfer",
    img: click,
    item1:
      "Transfer the listed stocks to our secure custody account as collateral.",
    item2:
      "Our team ensures the proper handling and maintenance of your assets throughout the loan period.",
  },
  {
    no: "5",
    title: "Disbursement",
    img: documentation,
    item1:
      "Once collateral is confirmed, we disburse the approved loan amount directly to your designated bank account.",
    item2:
      "Funds are available for immediate use according to your financial needs.",
  },
];
const LoanAgainstHowItWorks = () => {
  return (
    <div className="relative min-h-[58rem] mb-[8rem] md:min-h-[33rem] 2xl:min-h-auto ">
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
            Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed
            egestas mattis. Pulvinar leo vitae lacus in quis. Convallis nunc
            turpis lacus laoreet dignissim turpis lacus ornare tristique. Eget
            porttitor tortor fames neque aenean mauris adipiscing metus.
          </p>
        </div>
      </div>
      <div className="absolute md:absolute w-full flex justify-center items-center  md:h-[60%]">
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
            <SwiperSlide key={index} className="ml-1 p-2 w-full  ">
              <HowItWorksCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </div>
  );
};

export default LoanAgainstHowItWorks;
