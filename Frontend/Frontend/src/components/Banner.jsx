import React from "react";
import BannerImage from "../assets/Banner.jpg"; // ✅ Corrected import

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      {/* Left Section */}
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32 space-y-6">
        <h1 className="text-3xl font-bold">
          Welcome to BookStore, where every page turns into a {" "}
          <span className="text-pink-500">new adventure</span>!!!
        </h1>
        <p className="text-lg mt-3">
          “If you don’t like to read, you haven’t found the right book.” — J.K. Rowling
        </p>

        {/* Email Input */}
        <label className="input input-bordered flex items-center gap-2 border border-gray-300 rounded-lg p-2 w-full max-w-md">
          <svg className="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
              <rect width="20" height="16" x="2" y="6" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="email"
            placeholder="Enter your email"
            className="ml-2 flex-1 outline-none bg-transparent text-gray-700"
            required
          />
        </label>

        {/* Button */}
        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="order-1 w-full mt-20 md:w-1/2">
        <img src={BannerImage} className="md:w-[540px] md:h-[460px] md:ml-12" alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
