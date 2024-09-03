import React from "react";

function BuyCard() {
  return (
    <div className="relative mt-6 bg-shop-background rounded-2xl bg-cover outline">
      <div className="flex flex-row items-center justify-center space-x-5 mx-40  h-80 mt-3">
        {/*Card 1 */}
        <div className="w-60 h-80 outline bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl duration-500">
          <div className="flex items-center justify-center h-48  rounded-xl">
            <img src="/attention-please.png" className="h-48 rounded-xl"></img>
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
                <span className="font-bold  line-through">$29.99</span>
                <span className="font-bold  text-red-600 ">FREE</span>
              </div>
            </div>
            <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md font-Rowdies">
              PLEASEE!
            </button>
          </div>
        </div>

        {/*Card 2 */}
        <div className="w-60 h-80 outline bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl duration-500">
          <div className="flex items-center justify-center h-48  rounded-xl">
            <img src="/self-love-pro.jpg" className="h-48 rounded-xl"></img>
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
                <span className="font-bold  line-through">$25.99</span>
                <span className="font-bold  text-red-600 ">FREE</span>
              </div>
            </div>
            <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md font-Rowdies">
              CLAIM IT!
            </button>
          </div>
        </div>

        {/*Card 3 */}
        <div className="w-60 h-80 outline bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl duration-500">
          <div className="flex items-center justify-center h-48  rounded-xl">
            <img src="/toxic.png" className="h-48 rounded-xl"></img>
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
                <span className="font-bold  line-through">$0.99</span>
                <span className="font-bold  text-red-600 ">FREE</span>
              </div>
            </div>
            <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md font-Rowdies">
              TRY NOW!
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-50">
        <a>
          <img className="h-[250px]" src="/slider-down2.png" />
        </a>
      </div>
    </div>
  );
}

export default BuyCard;
