import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function Freebook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/assets/list.json"); // ✅ Correct relative path
        if (!response.ok) throw new Error("Failed to fetch books");

        const data = await response.json();
        console.log("Fetched Books:", data); // ✅ Debugging log

        const freeBooks = data.filter((book) => book.price === 0);
        console.log("Filtered Free Books:", freeBooks); // ✅ Debugging log

        setBooks(freeBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  // ✅ Duplicating books for smooth slider experience
  const repeatedBooks = books.length > 0 ? [...books, ...books, ...books] : books;

  const settings = {
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
        <p>Explore our collection of free courses designed to boost your knowledge. Learn from experts and gain valuable skills at no cost!</p>
      </div>

      <div>
        {books.length > 0 ? (
          <Slider {...settings}>
            {repeatedBooks.map((item, index) => (
              <Cards item={item} key={index} />
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-500 mt-4">No free books available.</p>
        )}
      </div>
    </div>
  );
}

export default Freebook;
