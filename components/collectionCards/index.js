"use client";
import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoIosHeartDislike } from "react-icons/io";
import { toast, Toaster } from "react-hot-toast";

function CollectionCards() {
  const [collection, setCollection] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Sayfa yüklendiğinde localStorage'daki koleksiyonu al
    const storedCollection =
      JSON.parse(localStorage.getItem("collection")) || [];
    setCollection(storedCollection);
  }, []);

  const handlePopup = (image) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const removeFromCollection = () => {
    let updatedCollection = collection.filter((img) => img !== selectedImage);
    localStorage.setItem("collection", JSON.stringify(updatedCollection));
    setCollection(updatedCollection); // Local state'i güncelle
    toast.success("Image removed from your collection", {
      duration: 1750,
    });
    setIsPopupOpen(false);
  };

  return (
    <div>
      <Toaster />
      <div className="flex flex-row justify-center items-center mb-6">
        <h1 className="text-3xl  lg:text-6xl font-Rowdies uppercase">
          Your Collection
        </h1>
      </div>
      <div className="flex flex-col items-center">
        {collection.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {collection.map((image, index) => (
              <div
                key={index}
                onClick={() => handlePopup(image)}
                className="w-56 h-64 bg-blog-color-1 flex items-center justify-center cursor-pointer rounded-2xl "
              >
                <img
                  src={image}
                  className="max-w-full max-h-full object-contain rounded-2xl outline hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-row justify-center items-center mb-6">
            <p className="text-3xl font-Rowdies uppercase whitespace-nowrap">
              No images in your collection.
            </p>
          </div>
        )}
      </div>

      {/* Popup içerik alanı */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closePopup}
        >
          <div
            className="bg-blog-color-1 p-5 rounded-lg shadow-lg relative w-[720px] h-[720px] flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()} // Popup dışına tıklanırsa kapanmasın
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-black"
              onClick={closePopup}
            >
              <AiFillCloseCircle className="w-8 h-8" />
            </button>

            {/* Image Section */}
            <div className="flex-grow flex justify-center items-center">
              <div className="w-full h-[500px] flex justify-center items-center">
                <img
                  src={selectedImage}
                  className="max-w-full max-h-full object-contain rounded-2xl outline"
                />
              </div>
            </div>

            {/* Remove Collection Button */}
            <div className="flex justify-center">
              <button
                type="button"
                className="text-black font-bold outline outline-2 bg-blog-color-2 hover:bg-logo-color-1 focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2 text-center"
                onClick={removeFromCollection} // Remove Collection fonksiyonunu çalıştır
              >
                <a className="flex flex-row space-x-0 justify-center items-center font-Rowdies uppercase">
                  <IoIosHeartDislike className="w-5 h-5" /> Remove Collection
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CollectionCards;
