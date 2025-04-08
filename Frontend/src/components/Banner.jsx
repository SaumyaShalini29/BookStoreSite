import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BannerImage from "../assets/Banner.jpg"; // ✅ Corrected import

const bookRecommendations = [
  "📖 The Alchemist - Paulo Coelho",
  "📚 Harry Potter and the Sorcerer’s Stone - J.K. Rowling",
  "📖 1984 - George Orwell",
  "📚 The Hobbit - J.R.R. Tolkien",
  "📖 Pride and Prejudice - Jane Austen",
  "📚 The Great Gatsby - F. Scott Fitzgerald",
];

const Banner = () => {
  const navigate = useNavigate();
  const [bookOfTheDay, setBookOfTheDay] = useState("");

  // Pick a random book when the component mounts
  useEffect(() => {
    const randomBook = bookRecommendations[Math.floor(Math.random() * bookRecommendations.length)];
    setBookOfTheDay(randomBook);
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      {/* Left Section */}
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32 space-y-6">
        <h1 className="text-3xl font-bold">
          Welcome to BookStore, where every page turns into a{" "}
          <span className="text-pink-500">new adventure</span>!!! 🌟
        </h1>
        <p className="text-lg mt-3">
          “If you don’t like to read, you haven’t found the right book.” — J.K. Rowling
        </p>

        {/* Book of the Day Section */}
        <div className="mt-4 p-4 bg-yellow-200 text-gray-800 rounded-lg shadow-md text-center">
          <p className="text-lg font-semibold">📚 Book of the Day:</p>
          <p className="text-lg italic">{bookOfTheDay}</p>
        </div>

        {/* Get Started Button */}
        <button
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition transform hover:scale-105"
          onClick={() => navigate("/course")}
        >
          Start Your Reading Journey 🚀
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="order-1 w-full mt-20 md:w-1/2">
        <img src={BannerImage} className="md:w-[540px] md:h-[460px] md:ml-12 rounded-lg shadow-lg" alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
