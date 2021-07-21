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
      <div className="flex justify-between">
        <div>
          <h1>Genre</h1>
        </div>
        <div>
          <button className={next}>Prev</button>
          <button className={prev}>Next</button>
        </div>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop
        navigation={{
          nextEl: `.next${props.nav}`,
          prevEl: `.prev${props.nav}`,
        }}
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
        slidesPerView={5}
        spaceBetween={0}
        pagination={{
          clickable: true,
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
        {/* Large Screen Slider */}
      </Swiper>
    </>
  );
};

export default FlixRow;
