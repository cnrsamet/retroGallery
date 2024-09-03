"use client";
import React, { useRef, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SiGooglephotos } from "react-icons/si";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import imageData from "./galeryData";
import cartoonData from "./cartoonData";

import { FreeMode, Pagination } from "swiper/modules";

function PhotoGalery() {
  return (
    <div className="mt-10">
      <div>
        <div>
          <div className="flex justify-center">
            <SiGooglephotos className=" text-xl mb-5" />
          </div>
          <div className="flex flex-row justify-center items-center mb-6">
            <h1 className="text-6xl font-Rowdies">PHOTO GALLERY</h1>
          </div>
        </div>
        <div>
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            freeMode={true}
            /*
          pagination={{
            clickable: true,
          }}*/
            modules={[FreeMode, Pagination]}
            className="w-full h-full"
          >
            {imageData.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center my-1">
                  <div className="relative justify-center items-center flex cursor-pointer">
                    <div className="absolute  hover:bg-black  hover:bg-opacity-50 hover:rounded-2xl top-0 bottom-0 right-0 left-0 transition-all duration-500 flex justify-center items-center"></div>
                    <img
                      src={src}
                      className="w-64 h-72 object-cover rounded-2xl -z-10 outline"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="mt-10">
        <div>
          <div className="flex justify-center">
            <SiGooglephotos className=" text-xl mb-5" />
          </div>
          <div className="flex flex-row justify-center items-center mb-6">
            <h1 className="text-6xl font-Rowdies">RETRO CARTOON</h1>
          </div>
        </div>
        <div>
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            freeMode={true}
            /*
          pagination={{
            clickable: true,
          }}*/
            modules={[FreeMode, Pagination]}
            className="w-full h-full"
          >
            {cartoonData.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center my-1">
                  <div className="relative justify-center items-center flex cursor-pointer">
                    <div className="absolute  hover:bg-black  hover:bg-opacity-50 hover:rounded-2xl top-0 bottom-0 right-0 left-0 transition-all duration-500 flex justify-center items-center"></div>
                    <img
                      src={src}
                      className="w-64 h-72 object-cover rounded-2xl -z-10 outline"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default PhotoGalery;
