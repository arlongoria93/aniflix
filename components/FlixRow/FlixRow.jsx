import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";
import FlixItem from "../FlixItem/FlixItem";


// install Swiper modules
SwiperCore.use([Navigation, Pagination]);
const FlixRow = (props) => {
  const { media, nav } = props;

  const test = media.map((anime) => {
    return (
      <SwiperSlide key={anime.id}>
        <FlixItem img={anime.coverImage.large} id={anime.id} />
      </SwiperSlide>
    );
  });

  const next = `next${props.nav}`;
  const prev = `prev${props.nav}`;
  return (
    <>
      {/* Small Screen Slider */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="font-display text-xl text-white">{props.title}</h1>
        </div>
        <div className="flex items-center justify-between">
          <button className={prev}>
            <div className="transition text-white duration-500 p-1  hover:text-secondaryBG">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </div>
          </button>

          <button className={next}>
            {" "}
            <div className="transition text-white duration-500  hover:text-secondaryBG">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <Swiper
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 8 },
        }}
        spaceBetween={5}
        slidesPerView={3}
        navigation={{
          nextEl: `.next${props.nav}`,
          prevEl: `.prev${props.nav}`,
        }}
        className="mySwiper"
      >
        {test}
      </Swiper>
    </>
  );
};
{
  /* <SwiperSlide>
          <FlixItem img={"/images/cover/cover.jpg"} id={"ANIME"} />
        </SwiperSlide> */
}
export default FlixRow;
