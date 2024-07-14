/* eslint-disable react/prop-types */
import { BreadcrumbsDefault } from "./BreadcrumbsDefault";
import ButtonPrimaryUi from "./ButtonPrimaryUi";
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

const AsseMonetiationHeroCarsoulSection = ({
  beradcrumbs,
  heroTextData,
  heroasset,
}) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
    {
        heroTextData.map((data,index)=>{
            console.log(data)
            return(
                <div key={index}>
                <SwiperSlide>
        <div
          style={{ backgroundImage: `url(${heroasset})` }}
          className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat md:h-[350px]"
        >
          <div className="absolute inset-0 flex flex-col container mx-auto">
            <BreadcrumbsDefault data={beradcrumbs} />
            <div className="ml-12">
              <p className="text-white mt-5 w-[60%] text-xl md:text-start md:text-4xl font-inria font-semibold">
                {data?.title}
              </p>

              <p className="  md:w-[56%]  md:text-lg  text-gray-400 mt-3 font-inter">
                {data?.desc}
              </p>
              <div className="w-fit mt-6">
                {data?.buttonText ? (
                  <ButtonPrimaryUi>
                    {" "}
                    <span className="flex  items-center gap-2 ">
                      {data?.buttonText}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </span>{" "}
                  </ButtonPrimaryUi>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
                </div>
            )
        })
    }
      
    
    </Swiper>
  );
};

export default AsseMonetiationHeroCarsoulSection;
