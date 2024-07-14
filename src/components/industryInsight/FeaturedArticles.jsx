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

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "black" }}
//         onClick={onClick}
//       />
//     );
//   }

//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "black" }}
//         onClick={onClick}
//       />
//     );
//   }

// function FeaturedArticles() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//      nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />
//   };
//   return (
//     <div className="slider-container h-screen w-screen p-12">
//       <Slider {...settings}>
//         <div className="h-[5rem]">
//           <h3 >1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default FeaturedArticles;

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

        {/* {
        featuredData.map((items,index)=>{
            return(
                <div key={index}>
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
        modules={[FreeMode, Pagination,Autoplay,Navigation]}
        className="mySwiper"
        // Responsive settings
        breakpoints={{
          // When the screen width is 640px or larger
          // 340: {
          //   slidesPerView: 1, // Show 2 slides per view
          // },
          640: {
            slidesPerView: 2, // Show 2 slides per view
          },
          // When the screen width is 768px or larger
          768: {
            slidesPerView: 2, // Show 3 slides per view
          },
          // When the screen width is 1024px or larger
          1024: {
            slidesPerView: 3, // Show 4 slides per view
          },
        }}
      >
       <SwiperSlide>
       1
       </SwiperSlide>
      </Swiper>
               
                </div>
            )
        })
      } */}
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
