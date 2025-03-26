import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cards from "./Cards";
import { useAuth } from "../middleware/authHook"; // ✅ Import auth hook

function Course() {
  const { authUser } = useAuth(); // ✅ Get logged-in user from AuthContext
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.error("Error fetching books:", error.response?.data || error);
      }
    };

    getBooks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          
          {/* Back Button */}
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200">
              Back
            </button>
          </Link>

          {/* Show login button if user is NOT logged in */}
          {!authUser && (
            <button
              onClick={() => navigate("/login")}
              className="mt-6 ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-200"
            >
              Login to View Paid Books
            </button>
          )}
        </div>

        {/* Show Books Only If User Is Logged In */}
        {authUser ? (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            {books.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            {books
              .filter((book) => book.category === "free") // ✅ Show only free books
              .map((item) => (
                <Cards key={item.id} item={item} />
              ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Course;
