import React from "react";

// Creates the navigation menu and receives props from the Header component.
// The active page receives the "active" css class.
export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav>
      <ul>
        <li>
          <a
            href="#about"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "active" : ""}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={currentPage === "Portfolio" ? "active" : ""}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={currentPage === "Resume" ? "active" : ""}
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={currentPage === "Contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
