/* eslint-disable no-unused-vars */
import { Avatar } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import React, { useState } from "react";

const  WhyChooseCard = ({ data }) => {
  const [textHide, setHide] = useState(false);

  const toggleText = () => {
    setHide(!textHide);
  };

  return (
    <div className="container mx-auto mt-0">
      <div className="container mx-auto p-5 flex flex-col items-center justify-center mt-0 mb-12">
        <div className="text-xl md:text-4xl font-semibold font-inria ">
          <span>{data?.title} </span>
          <div className="bg-primary h-1 ml-2 mt-2 w-[10rem] "></div>
        </div>
        {data?.desc ? (
          <p className="text-center pl-8 pr-8 mt-4 font-inter ">{data?.desc}</p>
        ) : null}
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
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data?.cardData?.map((items, index) => (
          <SwiperSlide key={index}>
            <div className={`bg-blue-300 ${textHide ? 'h-auto' : 'h-[23rem]'} p-6 mb-10 rounded-lg flex flex-col items-center justify-center`}>
              <Avatar
                size="xxl"
                src={items?.icon}
                className="bg-white object-contain p-5"
                alt="Placeholder Image"
              />
              <h2 className="text-xl font-semibold text-center mt-5 text-blacktext-lightyellow font-inria">
                {items?.subtitle}
              </h2>
              <p className="text-sm text-start text-black mt-2 font-inter">
                <span className={`${textHide ? '' : 'line-clamp-4'} font-inter`}>{items?.subdesc}</span>
                <span onClick={toggleText} className="cursor-pointer text-black">more</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// Prop types validation
WhyChooseCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    cardData: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      subdesc: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default WhyChooseCard;
