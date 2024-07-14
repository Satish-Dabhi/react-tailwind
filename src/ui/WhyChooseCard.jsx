/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Avatar } from "@material-tailwind/react";
// eslint-disable-next-line react/prop-types
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const WhyChooseCard = ({ data }) => {
 const [textHide,setHide] = useState(false)
console.log(textHide)
 const toggleText = ()=>{
  setHide(!textHide)
 }
  return (
    <div className="container mx-auto">
      
      <div className="container mx-auto p-5 flex  flex-col items-center justify-center mt-12 mb-12">
        <div className="text-xl md:text-4xl font-semibold font-inria ">
          <span>{data?.title} </span>
          <div className="bg-primary h-1 ml-2 mt-2  w-[10rem] "></div>
        </div>
     {data?.desc ? <p className="text-center pl-8 pr-8 mt-4 font-inter ">{data?.desc}</p>:null}   
      </div>
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
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        {data?.cardData?.map((items, index) => {
          console.log(items);
          return (
            <SwiperSlide key={index}>
             
              <div className={`bg-primary  ${textHide ?'h-auto':'h-[23rem]'}  p-6 mb-10 rounded-lg flex flex-col items-center justify-center  `}>
                <Avatar
                  size="xxl"
                  src={items?.icon}
                  className="  bg-white object-contain p-5"
                  alt="Placeholder Image"
                />
                <h2 className="text-xl font-semibold text-center mt-5 text-lightyellow font-inria">
                  {items?.subtitle}
                </h2>
                <p className="text-sm text-start text-white mt-2 font-inter">
                 <span className={`${textHide ? '':'line-clamp-4'} font-inter`} >{items?.subdesc}</span> 
                 <span onClick={toggleText} className="cursor-pointer text-lightyellow">more</span>
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WhyChooseCard;
