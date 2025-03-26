import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";  // ✅ Import the Cards component

function PaidCourses() {
  const [paidBooks, setPaidBooks] = useState([]);

  useEffect(() => {
    const fetchPaidBooks = async () => {
      try {
        const response = await fetch("/assets/list.json"); // ✅ Fetch from public folder
        if (!response.ok) throw new Error("Failed to fetch books");

        const data = await response.json();
        console.log("Fetched Books:", data);

        const paidCourses = data.filter((book) => book.price > 0);
        console.log("Filtered Paid Books:", paidCourses);

        setPaidBooks(paidCourses);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchPaidBooks();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h1 className="font-semibold text-xl pb-2">Paid Courses</h1>
      <p>Explore our premium courses and enhance your skills with expert guidance.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {paidBooks.length > 0 ? (
          paidBooks.map((item) => <Cards item={item} key={item.id} />)
        ) : (
          <p>No paid courses available.</p>
        )}
      </div>
    </div>
  );
}

export default PaidCourses;  