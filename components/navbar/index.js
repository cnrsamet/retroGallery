"use client";
import React from "react";
import { useRouter } from "next/navigation";

function NavBar() {
  const router = useRouter();
  return (
    <nav className="bg-blog-color-1 border-b-4 border-solid  border-blog-color-5 mb-6">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="relative">
            <div className="absolute top-[-2px] -left-1">
              <span className=" self-center text-6xl font-semibold font-Rowdies whitespace-nowrap mb-4 uppercase  dark:text-logo-color-1">
                Retro
              </span>
            </div>
            <div className="">
              <span className=" self-center text-6xl font-semibold font-Rowdies whitespace-nowrap mb-4 uppercase  dark:text-blog-color-5">
                Retro
              </span>
            </div>
          </div>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
          <button
            type="button"
            onClick={() => router.push("/collection")}
            className="text-black font-bold outline outline-2 bg-blog-color-2 hover:bg-logo-color-1 focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2 text-center"
          >
            Collection
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
