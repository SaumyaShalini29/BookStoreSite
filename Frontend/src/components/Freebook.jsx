import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Freebook() {
  const [books, setBooks] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Check if user is authenticated
    const user = JSON.parse(localStorage.getItem("user"));
    setIsAuthenticated(!!user); // Convert to boolean

    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);

        // ✅ Filter books based on authentication
        if (user) {
          setBooks(res.data); // Show both Free & Paid books
        } else {
          const freeBooks = res.data.filter((book) => book.category === "Free");
          setBooks(freeBooks);
        }
      } catch (error) {
        console.error("Error fetching books:", error.response?.data || error);
      }
    };

    getBooks();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Explore our collection of free courses designed to boost your knowledge. Learn from experts and gain valuable skills at no cost!
        </p>
      </div>

      <div>
        {books.length > 0 ? (
          <Slider {...settings}>
            {books.map((item) => (
              <Cards item={item} key={item._id} />
            ))}
          </Slider>
        ) : (
          <p className="text-center mt-6">No courses available at the moment.</p>
        )}
      </div>

      {!isAuthenticated && (
        <div className="text-center mt-4">
          <p className="text-red-500">Login to access paid courses!</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Freebook; 