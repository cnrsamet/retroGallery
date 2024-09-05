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
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
