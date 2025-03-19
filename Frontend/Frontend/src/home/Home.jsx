import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Freebook from '../components/Freebook';  // ✅ Ensure correct import
import Footer from '../components/Footer';

const Home = () => {
  console.log("Home component is rendering!"); // ✅ Debugging log

  return (
    <>
      <Navbar />
      {console.log("Navbar Rendered")}
      <Banner />
      {console.log("Banner Rendered")}
      <Freebook />
      {console.log("Freebook Rendered")}
      <Footer />
      {console.log("Footer Rendered")}
    </>
  );
};

export default Home;
