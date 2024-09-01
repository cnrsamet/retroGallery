"use client";
import React, { useRef, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SiGooglephotos } from "react-icons/si";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

function PhotoGalery() {
  return (
    <div className="mt-10">
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
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center">
              <div className="relative justify-center items-center flex cursor-pointer">
                <div className="absolute hover:bg-black hover:bg-opacity-50 top-0 bottom-0 right-0 left-0 transition-all duration-300 flex justify-center items-center"></div>
                <img
                  src="/content1.jpg"
                  className="w-full h-full object-cover rounded-2xl -z-10"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center">
              <div className="relative justify-center items-center flex cursor-pointer">
                <div className="absolute hover:bg-black hover:bg-opacity-50 top-0 bottom-0 right-0 left-0 transition-all duration-300 flex justify-center items-center"></div>
                <img
                  src="/content1.jpg"
                  className="w-full h-full object-cover rounded-2xl -z-10"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center">
              <div className="relative justify-center items-center flex cursor-pointer">
                <div className="absolute hover:bg-black hover:bg-opacity-50 top-0 bottom-0 right-0 left-0 transition-all duration-300 flex justify-center items-center"></div>
                <img
                  src="/content1.jpg"
                  className="w-full h-full object-cover rounded-2xl -z-10"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center">
              <div className="relative justify-center items-center flex cursor-pointer">
                <div className="absolute hover:bg-black hover:bg-opacity-50 top-0 bottom-0 right-0 left-0 transition-all duration-300 flex justify-center items-center"></div>
                <img
                  src="/content1.jpg"
                  className="w-full h-full object-cover rounded-2xl -z-10"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center">
              <div className="relative justify-center items-center flex cursor-pointer">
                <div className="absolute hover:bg-black hover:bg-opacity-50 top-0 bottom-0 right-0 left-0 transition-all duration-300 flex justify-center items-center"></div>
                <img
                  src="/content1.jpg"
                  className="w-full h-full object-cover rounded-2xl -z-10"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center">
              <div className="relative justify-center items-center flex cursor-pointer">
                <div className="absolute hover:bg-black hover:bg-opacity-50 top-0 bottom-0 right-0 left-0 transition-all duration-300 flex justify-center items-center"></div>
                <img
                  src="/content1.jpg"
                  className="w-full h-full object-cover rounded-2xl -z-10"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center">
              <div className="relative justify-center items-center flex cursor-pointer">
                <div className="absolute hover:bg-black hover:bg-opacity-50 top-0 bottom-0 right-0 left-0 transition-all duration-300 flex justify-center items-center"></div>
                <img
                  src="/content1.jpg"
                  className="w-full h-full object-cover rounded-2xl -z-10"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center">
              <div className="relative justify-center items-center flex cursor-pointer">
                <div className="absolute hover:bg-black hover:bg-opacity-50 top-0 bottom-0 right-0 left-0 transition-all duration-300 flex justify-center items-center"></div>
                <img
                  src="/content1.jpg"
                  className="w-full h-full object-cover rounded-2xl -z-10"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center">
              <div className="relative justify-center items-center flex cursor-pointer">
                <div className="absolute hover:bg-black hover:bg-opacity-50 top-0 bottom-0 right-0 left-0 transition-all duration-300 flex justify-center items-center"></div>
                <img
                  src="/content1.jpg"
                  className="w-full h-full object-cover rounded-2xl -z-10"
                />
              </div>
            </div>
          </SwiperSlide>

          {/*<SwiperSlide className="flex justify-center items-center text-center size-4 bg-slate-600 rounded-xl">
            <img src="/content2.jpg" className="block object-cover"></img>
          </SwiperSlide> */}
        </Swiper>
      </div>
      <div></div>
    </div>
  );
}

export default PhotoGalery;
