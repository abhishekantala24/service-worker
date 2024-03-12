// Imports svg files for social media images
import svgGitHub from "../images/github.svg";
import svgLinkedIn from "../images/linkedin.svg";

// Creates a footer element with a link to KellySoftware.org and social media profiles.
export default function Footer() {
  return (
    <footer>
      <h4>
        &copy; 2022&nbsp;
        <a
          href="https://www.kellysoftware.org"
          target="_blank"
          rel="noreferrer"
        >
          Kelly Software Solutions
        </a>
      </h4>
      <div className="socialMedia">
        <a href="https://github.com/dpk5e7/" target="_blank" rel="noreferrer">
          <img src={svgGitHub} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/dpk5e7/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={svgLinkedIn} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}
