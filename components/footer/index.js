import React from "react";

function Footer() {
  return (
    <footer className="rounded-lg shadow m-4 bg-blog-color-1 border border-solid border-blog-color-5">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-black sm:text-center font-semibold">
          © 2024{" "}
          <a
            href="https://sametcaner.com"
            target="_blank"
            className="hover:underline"
          >
            Samet CANER
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-bold text-black  sm:mt-0">
          <li>
            <a
              href="https://sametcaner.com"
              target="_blank"
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
