import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Cards from './Cards';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Course() {
  const [books, setBooks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // To handle redirection

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Convert token presence to boolean

    const getBooks = async () => {
      try {
        let url = "http://localhost:4001/book/free"; // Default: Free books only
    
        if (token) {
          url = "http://localhost:4001/book/paid"; // Fetch only paid books when logged in
        }
    
        const res = await axios.get(url, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
    
        console.log("Fetched books:", res.data); // Debugging
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
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            We are delighted to have you <span className='text-pink-500'>Here! :)</span>
          </h1>
          <p className='mt-12'>
            {isLoggedIn
              ? "Explore our complete collection of free and paid books."
              : "Login to access premium (paid) books."}
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            {!isLoggedIn && (
              <button 
                className='bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-700'
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}

            <Link to="/">
              <button className='bg-pink-500 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-pink-700'>
                Back
              </button>
            </Link>
          </div>
        </div>

        {/* Books Grid */}
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-6'>
          {books.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Course;
