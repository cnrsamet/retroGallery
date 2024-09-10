"use client";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { FreeMode, Pagination, EffectCards } from "swiper/modules";

function BuyCard() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedBuyCard, setSelectedBuyCard] = useState(null);

  const handlePopup = (buyCard) => {
    setSelectedBuyCard(buyCard);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="relative  mt-6 bg-shop-background rounded-2xl bg-cover outline">
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
            <button
              className="absolute top-2 right-2 text-black"
              onClick={closePopup}
            >
              <AiFillCloseCircle className="w-8 h-8" />
            </button>

            {/* Popup İçeriği */}
            <div className="flex-grow flex justify-center items-center">
              <div className="w-full h-[500px] flex flex-col justify-center items-center">
                <div className="w-full h-20 border border-solid border-black rounded-2xl mb-4">
                  {selectedBuyCard === "ATTENTION" ? (
                    <div className="flex flex-row items-center justify-center">
                      <h1 className="text-6xl font-Rowdies">ATTENTION</h1>
                    </div>
                  ) : selectedBuyCard === "SELF LOVE" ? (
                    <div className="flex flex-row items-center justify-center">
                      <h1 className="text-6xl font-Rowdies">SELF LOVE</h1>
                    </div>
                  ) : selectedBuyCard === "TOXIC BF/GF" ? (
                    <div className="flex flex-row items-center justify-center">
                      <h1 className="text-6xl font-Rowdies">TOXIC BF/GF</h1>
                    </div>
                  ) : (
                    "No card selected"
                  )}
                </div>
                <div>
                  {selectedBuyCard === "ATTENTION" ? (
                    <div className="flex flex-row items-center justify-center border border-solid border-black rounded-xl mt-10">
                      <p className=" text-lg text-justify mx-10 my-10 font-Rowdies">
                        Hey, your efforts to get attention aren’t going
                        unnoticed, don’t worry. But have you ever thought about
                        whether all this effort is really necessary? People's
                        interest comes naturally, not by force. Constantly
                        pushing yourself into the spotlight can sometimes push
                        others away. In fact, staying calm and letting things
                        flow might make you more intriguing and appealing.
                        Attention doesn’t always require the most effort;
                        sometimes, taking a step back makes you more noticeable.
                      </p>
                    </div>
                  ) : selectedBuyCard === "SELF LOVE" ? (
                    <div className="flex flex-row items-center justify-center border border-solid border-black rounded-xl mt-10">
                      <p className=" text-lg text-justify mx-10 my-10 font-Rowdies">
                        Congratulations!! A great start! <br /> People who
                        cannot love themselves cannot love others. Start with
                        yourself first. However, unfortunately, the answer
                        you're looking for is not here.
                      </p>
                    </div>
                  ) : selectedBuyCard === "TOXIC BF/GF" ? (
                    <div className="flex flex-col items-center justify-center border border-solid border-black rounded-xl mt-10">
                      <p className=" text-lg text-justify mx-10 my-10 font-Rowdies">
                        Recognizing a toxic relationship isn't hard. It's the
                        classic scenario: everything has to revolve around them,
                        they always have to be right, and somehow they manage to
                        make you feel guilty all the time. Whether it’s blowing
                        up over you replying two minutes late to a text or
                        trying to control every step you take, this 'perfect'
                        partner always finds a way. The ironic part? Their focus
                        isn’t really on caring about you, but on how they can
                        control you. And of course, they never forget to say
                        it's all 'for your own good.' But here's the real
                        question:If you always feel like you have to be careful
                        around them,is that really love or just a form of
                        psychological warfare?
                      </p>
                      <div className="mb-4">
                        <button
                          type="button"
                          className="text-black font-bold outline outline-2 bg-blog-color-2 hover:bg-logo-color-1 focus:ring-4 focus:outline-none rounded-lg text-sm  px-4 py-2 text-center flex flex-row space-x-0 justify-center items-center font-Rowdies uppercase"
                          onClick={() =>
                            window.open(
                              "https://www.google.com/search?q=psychological+counseling",
                              "_blank"
                            )
                          }
                        >
                          GET HELP
                        </button>
                      </div>
                    </div>
                  ) : (
                    "Select a card to see more information."
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Mobil içerik alanı */}
      <div className="lg:hidden w-full flex flex-col items-center space-y-6">
        {/* Card 1 */}
        <div className="w-60 h-80 outline bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl duration-500">
          <div className="flex items-center justify-center h-48 rounded-xl">
            <img src="/attention-please.png" className="h-48 rounded-xl" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <span className="text-xl font-bold font-Rowdies">
                  ATTENTION
                </span>
                <p className="text-xs text-gray-700 font-Rowdies">
                  Limited edition
                </p>
              </div>
              <div className="flex flex-col space-y-0">
                <span className="font-bold line-through">$29.99</span>
                <span className="font-bold text-red-600">FREE</span>
              </div>
            </div>
            <button
              className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md font-Rowdies"
              onClick={() => handlePopup("ATTENTION")}
            >
              PLEASEE!
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-60 h-80 outline bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl duration-500">
          <div className="flex items-center justify-center h-48 rounded-xl">
            <img src="/self-love-pro.jpg" className="h-48 rounded-xl" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <span className="text-xl font-bold font-Rowdies">
                  SELF LOVE
                </span>
                <p className="text-xs text-gray-700 font-Rowdies">
                  Limited edition
                </p>
              </div>
              <div className="flex flex-col space-y-0">
                <span className="font-bold line-through">$25.99</span>
                <span className="font-bold text-red-600">FREE</span>
              </div>
            </div>
            <button
              className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md font-Rowdies"
              onClick={() => handlePopup("SELF LOVE")}
            >
              CLAIM IT!
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-60 h-80 outline bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl duration-500">
          <div className="flex items-center justify-center h-48 rounded-xl">
            <img src="/toxic.png" className="h-48 rounded-xl" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <span className="text-xl font-bold font-Rowdies">
                  TOXIC BF/GF
                </span>
                <p className="text-xs text-gray-700 font-Rowdies">
                  Limited edition
                </p>
              </div>
              <div className="flex flex-col space-y-0">
                <span className="font-bold line-through">$0.99</span>
                <span className="font-bold text-red-600">FREE</span>
              </div>
            </div>
            <button
              className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md font-Rowdies"
              onClick={() => handlePopup("TOXIC BF/GF")}
            >
              TRY NOW!
            </button>
          </div>
        </div>
      </div>

      {/* desk içerik alanı */}

      <div className="hidden lg:flex flex-row items-center justify-center space-x-5 mx-40 h-80 mt-3">
        {/*Card 1 */}
        <div className="w-60 h-80 outline bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl duration-500">
          <div className="flex items-center justify-center h-48 rounded-xl">
            <img src="/attention-please.png" className="h-48 rounded-xl" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <span className="text-xl font-bold font-Rowdies">
                  ATTENTION
                </span>
                <p className="text-xs text-gray-700 font-Rowdies">
                  Limited edition
                </p>
              </div>
              <div className="flex flex-col space-y-0">
                <span className="font-bold line-through">$29.99</span>
                <span className="font-bold text-red-600">FREE</span>
              </div>
            </div>
            <button
              className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md font-Rowdies"
              onClick={() => handlePopup("ATTENTION")}
            >
              PLEASEE!
            </button>
          </div>
        </div>

        {/*Card 2 */}
        <div className="w-60 h-80 outline bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl duration-500">
          <div className="flex items-center justify-center h-48 rounded-xl">
            <img src="/self-love-pro.jpg" className="h-48 rounded-xl" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <span className="text-xl font-bold font-Rowdies">
                  SELF LOVE
                </span>
                <p className="text-xs text-gray-700 font-Rowdies">
                  Limited edition
                </p>
              </div>
              <div className="flex flex-col space-y-0">
                <span className="font-bold line-through">$25.99</span>
                <span className="font-bold text-red-600">FREE</span>
              </div>
            </div>
            <button
              className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md font-Rowdies"
              onClick={() => handlePopup("SELF LOVE")}
            >
              CLAIM IT!
            </button>
          </div>
        </div>

        {/*Card 3 */}
        <div className="w-60 h-80 outline bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl duration-500">
          <div className="flex items-center justify-center h-48 rounded-xl">
            <img src="/toxic.png" className="h-48 rounded-xl" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <span className="text-xl font-bold font-Rowdies">
                  TOXIC BF/GF
                </span>
                <p className="text-xs text-gray-700 font-Rowdies">
                  Limited edition
                </p>
              </div>
              <div className="flex flex-col space-y-0">
                <span className="font-bold line-through">$0.99</span>
                <span className="font-bold text-red-600">FREE</span>
              </div>
            </div>
            <button
              className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md font-Rowdies"
              onClick={() => handlePopup("TOXIC BF/GF")}
            >
              TRY NOW!
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-0 left-0 z-50">
        <a>
          <img className="h-[250px]" src="/slider-down2.png" />
        </a>
      </div>
    </div>
  );
}

export default BuyCard;
