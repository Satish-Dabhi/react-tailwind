// /* eslint-disable react/prop-types */

import FeaturedArticleCard from "../../ui/FeaturedArticleCard";
import card1 from "/img/industryInsights/card1.png";
import card2 from "/img/industryInsights/card2.png";
import card3 from "/img/industryInsights/card3.png";


const featuredData = [
  {
    img: card1,
    title: "Navigating Volatility",
    desc: "Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt sapien et pretium. Commodo consequat eget tincidunt au",
  },
  {
    img: card2,
    title: "The Future of Cryptocurrency",
    desc: "Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt sapien et pretium. Commodo consequat eget tincidunt au",
  },
  {
    img: card3,
    title: "Blockchain Technology",
    desc: "Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt sapien et pretium. Commodo consequat eget tincidunt au",
  },
  {
    img: card2,
    title: "The Future of Cryptocurrency",
    desc: "Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt sapien et pretium. Commodo consequat eget tincidunt au",
  },
  {
    img: card3,
    title: "Blockchain Technology",
    desc: "Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt sapien et pretium. Commodo consequat eget tincidunt au",
  },
  {
    img: card2,
    title: "The Future of Cryptocurrency",
    desc: "Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt sapien et pretium. Commodo consequat eget tincidunt au",
  },
  {
    img: card3,
    title: "Blockchain Technology",
    desc: "Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt sapien et pretium. Commodo consequat eget tincidunt au",
  },
  {
    img: card2,
    title: "The Future of Cryptocurrency",
    desc: "Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt sapien et pretium. Commodo consequat eget tincidunt au",
  },
  {
    img: card3,
    title: "Blockchain Technology",
    desc: "Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt sapien et pretium. Commodo consequat eget tincidunt au",
  },
];



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
const FeaturedArticles = () => {
  return (
    <div className="bg-bgprimary p-2">
      <div className="container mx-auto mt-12 mb-12 ">
        <div className="grid justify-items-center">
          <div>
            <h1 className="text-4xl font-inria">Featured Articles</h1>
            <div className="w-[12rem] text-start h-1 bg-black "></div>
          </div>
          <p className="text-center w-[80%] font-inter text-lg mt-5">
            Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt sapien et
            pretium. Commodo consequat eget tincidunt augue. Consequat non
            viverra eu ut amet justo nulla facilisis. Eu
          </p>
        </div>

       
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          className="mySwiper pb-10"
          // Responsive settings
          breakpoints={{
            // When the screen width is 640px or larger
            // 340: {
            //   slidesPerView: 1, // Show 2 slides per view
            // },
            640: {
              slidesPerView: 1, // Show 2 slides per view
            },
            // When the screen width is 768px or larger
            768: {
              slidesPerView: 1, // Show 3 slides per view
            },
            // When the screen width is 1024px or larger
            1024: {
              slidesPerView: 3, // Show 4 slides per view
            },
          }}
        >
          {featuredData.map((items, index) => {
            console.log(items);
            return (
              <div key={index}>
                <SwiperSlide>
                  <FeaturedArticleCard data={items} />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedArticles;
