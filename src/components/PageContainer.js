import React, { useState } from "react";  // Imports react + useState
// Import the Header and Footer Components
import Header from "./Header";
import Footer from "./Footer";
// Imports the 4 page components
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function PageContainer() {
  // State variable and setter for which page the the user wants to render
  const [currentPage, setCurrentPage] = useState("Home");

  // Function to swap pages
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  // Builds the basic page with Header at the top, footer at the botton, and various pages in-between
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}
