import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../assets/list.json";  // ✅ Corrected import path
import Cards from "./Cards";

function Freebook() {
    // Get all free books
    const filterData = list.filter((data) => data.category === "Free");

    // ✅ Duplicate the array to ensure continuous scrolling
    const repeatedBooks = filterData.length > 0 ? [...filterData, ...filterData, ...filterData] : filterData;

    var settings = {
      dots: true,
      infinite: true,  // ✅ Enable infinite scroll
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
              Explore our collection of free courses designed to boost your knowledge.  
              Learn from experts and gain valuable skills at no cost!
            </p>
          </div>

          <div>
            <Slider {...settings}>
              {repeatedBooks.map((item, index) => (
                <Cards item={item} key={index} />  
              ))}
            </Slider>
          </div>
        </div>
    );
}

export default Freebook;

