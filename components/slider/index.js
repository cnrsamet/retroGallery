// slider/index.js
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Slider() {
  return (
    <div className="w-full relative">
      {/* Text Loop */}
      <div className="flex overflow-hidden space-x-10  text-nowrap bg-blog-color-3 bg-opacity-25 border-y-2 border-black  bg-cover">
        <div className="h-20 animate-loop-scroll">
          <p className="text-6xl font-extralight font-Rowdies mt-1">
            Hey, beauty!! - Did you take your anxiety pills today? Hey, beauty!!
            - Did you take your anxiety pills today? Hey, beauty!! - Did you
            take your anxiety pills today?
          </p>
        </div>
        <div className="h-20 animate-loop-scroll" aria-hidden="true">
          <p className="text-6xl font-extralight font-Rowdies mt-1">
            Hey, beauty!! - Did you take your anxiety pills today? Hey, beauty!!
            - Did you take your anxiety pills today? Hey, beauty!! - Did you
            take your anxiety pills today?
          </p>
        </div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          1920: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1028: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          990: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        className="centered-slide-carousel swiper-container relative bg-blog-color-1 mt-6 "
      >
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center outline mt-1 mb-1">
            <img
              src="/s1.jpg"
              className="object-cover w-full h-full shadow-xl rounded-2xl"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center outline mt-1 mb-1">
            <img
              src="/s2.jpg"
              className="object-cover w-full h-full shadow-xl rounded-2xl"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center outline mt-1 mb-1">
            <img
              src="/s3.jpg"
              className="object-cover w-full h-full shadow-xl rounded-2xl"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center outline mt-1 mb-1">
            <img
              src="/s4.jpg"
              className="object-cover w-full h-full shadow-xl rounded-2xl"
            />
          </div>
        </SwiperSlide>
        {/* Diğer slaytlar için benzer SwiperSlide bileşenleri ekleyebilirsin */}
      </Swiper>

      {/* Woman Image */}
      <div className="absolute -top-8 right-0 z-50">
        <a>
          <img className="h-[150px]" src="/slider-up.png" />
        </a>
      </div>
    </div>
  );
}
