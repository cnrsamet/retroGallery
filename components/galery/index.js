"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SiGooglephotos } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoIosHeart, IoIosHeartDislike } from "react-icons/io";
import { toast, Toaster } from "react-hot-toast";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import imageData from "./galeryData";
import cartoonData from "./cartoonData";

import { FreeMode, Pagination } from "swiper/modules";

function PhotoGalery() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isExist, setIsExist] = useState(false);

  const handlePopup = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsPopupOpen(true); // Popup'ı aç
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Popup'ı kapat
  };

  const addCollection = () => {
    let collection = JSON.parse(localStorage.getItem("collection")) || [];

    if (collection.includes(selectedImage)) {
      // Resim koleksiyondaysa kaldır
      collection = collection.filter((img) => img !== selectedImage);
      localStorage.setItem("collection", JSON.stringify(collection));
      toast.success("This image removed from your collection", {
        duration: 1750,
      });
      setIsExist(false); // State'i güncelle
    } else {
      // Resim koleksiyonda değilse ekle
      collection.push(selectedImage);
      localStorage.setItem("collection", JSON.stringify(collection));
      toast.success("Image added to your collection", {
        duration: 1750,
      });
      setIsExist(true); // State'i güncelle
    }
  };

  useEffect(() => {
    // Popup açıldığında koleksiyonda bu resim var mı diye kontrol et
    let collection = JSON.parse(localStorage.getItem("collection")) || [];
    if (collection.includes(selectedImage)) {
      setIsExist(true); // Resim koleksiyonda varsa butonun durumunu güncelle (remove yapıyoruz)
    } else {
      setIsExist(false);
    }
  }, [selectedImage]);

  return (
    <div className="mt-10">
      <Toaster /> {/* Toast mesajları için*/}
      <div>
        {/* Popup içerik alanı */}
        {isPopupOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closePopup}
          >
            <div
              className="bg-blog-color-1 p-5 rounded-lg shadow-lg relative w-[720px] h-[720px] flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-black"
                onClick={closePopup}
              >
                <AiFillCloseCircle className="w-8 h-8" />
              </button>

              {/* Image Section with Bounded Area */}
              <div className="flex-grow flex justify-center items-center ">
                <div className="w-full h-[500px] flex justify-center items-center ">
                  <img
                    src={selectedImage}
                    className="max-w-full max-h-full object-contain rounded-2xl outline"
                  />
                </div>
              </div>

              {/* Add Collection Button */}
              <div className="flex justify-center">
                <button
                  type="button"
                  className="text-black font-bold outline outline-2 bg-blog-color-2 hover:bg-logo-color-1 focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2 text-center"
                  onClick={addCollection}
                >
                  <a className="flex flex-row space-x-0 justify-center items-center font-Rowdies uppercase">
                    {isExist ? (
                      <IoIosHeartDislike className="w-5 h-5" />
                    ) : (
                      <IoIosHeart className="w-5 h-5" />
                    )}
                    {isExist ? "Remove Collection" : "Add Collection"}
                  </a>
                </button>
              </div>
            </div>
          </div>
        )}

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
                  <div
                    className="relative justify-center items-center flex cursor-pointer"
                    onClick={() => handlePopup(src)} // Kart tıklama event'i
                  >
                    <div className="absolute hover:bg-black hover:bg-opacity-50 hover:rounded-2xl top-0 bottom-0 right-0 left-0 transition-all duration-500 flex justify-center items-center"></div>
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
                  <div
                    className="relative justify-center items-center flex cursor-pointer"
                    onClick={() => handlePopup(src)}
                  >
                    <div className="absolute hover:bg-black hover:bg-opacity-50 hover:rounded-2xl top-0 bottom-0 right-0 left-0 transition-all duration-500 flex justify-center items-center"></div>
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
