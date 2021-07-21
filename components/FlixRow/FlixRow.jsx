import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";
import FlixItem from "../FlixItem/FlixItem";
import styles from "./FlixRow.module.css";
import Image from "next/image";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);
const FlixRow = (props) => {
  const next = `next${props.nav}`;
  const prev = `prev${props.nav}`;
  return (
    <>
      {/* Small Screen Slider */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-display text-white">{props.title}</h1>
        </div>
        <div className="flex items-center justify-between space-x-1">
          <button className={prev}>
            <div className="transition text-white duration-500 p-2  hover:text-secondaryBG">
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
            <div className="transition text-white duration-500 p-2  hover:text-secondaryBG">
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
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: `.next${props.nav}`,
          prevEl: `.prev${props.nav}`,
        }}
        className="mySwiper sm:block lg:hidden"
      >
        <SwiperSlide>
          <Image
            src="/images/cover/cover.jpg"
            width={200}
            height={300}
            objectFit="cover"
            className="z-0 rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cover/cover.jpg"
            width={200}
            height={300}
            objectFit="cover"
            className="z-0 rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cover/cover.jpg"
            width={200}
            height={300}
            objectFit="cover"
            className="z-0 rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cover/cover.jpg"
            width={200}
            height={300}
            objectFit="cover"
            className="z-0 rounded"
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
        slidesPerView={8}
        spaceBetween={0}
        navigation={{
          nextEl: `.next${props.nav}`,
          prevEl: `.prev${props.nav}`,
        }}
        className="mySwiper sm:hidden lg:block"
      >
        <SwiperSlide>
          <Image
            src="/images/cover/cover.jpg"
            width={200}
            height={300}
            objectFit="cover"
            className="z-0 rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cover/cover.jpg"
            width={200}
            height={300}
            objectFit="cover"
            className="z-0 rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cover/cover.jpg"
            width={200}
            height={300}
            objectFit="cover"
            className="z-0 rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cover/cover.jpg"
            width={200}
            height={300}
            objectFit="cover"
            className="z-0 rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cover/cover.jpg"
            width={200}
            height={300}
            objectFit="cover"
            className="z-0 rounded"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Image
            src="/images/cover/cover.jpg"
            width={200}
            height={300}
            objectFit="cover"
            className="z-0 rounded"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Image
            src="/images/cover/cover.jpg"
            width={200}
            height={300}
            objectFit="cover"
            className="z-0 rounded"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Image
            src="/images/cover/cover.jpg"
            width={200}
            height={300}
            objectFit="cover"
            className="z-0 rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cover/cover.jpg"
            width={200}
            height={300}
            objectFit="cover"
            className="z-0 rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cover/cover.jpg"
            width={200}
            height={300}
            objectFit="cover"
            className="z-0 rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cover/cover.jpg"
            width={200}
            height={300}
            objectFit="cover"
            className="z-0 rounded"
          />
        </SwiperSlide>
        {/* Large Screen Slider */}
      </Swiper>
    </>
  );
};

export default FlixRow;
