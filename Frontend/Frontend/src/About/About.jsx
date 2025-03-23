import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Apply dark mode class to body when toggled
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-6 transition-all ${
      darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
    }`}>
      <div className={`p-10 rounded-2xl shadow-2xl max-w-3xl w-full text-center transition-all ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}>
        <h1 className="text-4xl font-bold mb-4 text-purple-500">About Our BookStore</h1>
        <p className="text-lg mb-6 leading-relaxed">
          Welcome to our online BookStore! We offer a wide range of books across different genres, all available for free.
          Whether you love fiction, non-fiction, mystery, fantasy, or self-help, we have something for everyone.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          Our mission is to make literature accessible to everyone, fostering a love for reading and learning. We integrate
          a user-friendly interface to help readers easily browse and explore their favorite books.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          Join us and dive into a world of knowledge and imagination. Enjoy unlimited reading without any cost!
        </p>

        {/* 🔆 Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-4 w-full bg-gray-700 text-white font-bold py-2 px-4 rounded-lg 
                      hover:bg-gray-600 transition"
        >
          {darkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
        </button>

        <div className="flex space-x-4 justify-center mt-4">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
