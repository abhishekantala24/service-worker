// import the Navigation component
import Navigation from "./Navigation";

// Create the header using Navigation as a child component, passing props from the PageContainer component
export default function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>Dan Kelly</h1>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
  );
}
