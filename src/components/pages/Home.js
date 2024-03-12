// Import my picture
import headshot from "../../images/Dan.jpg";

// Builds the component to show my headshot and a short bio.
export default function Home() {
  return (
    <>
      <aside>
        <img src={headshot} alt="Dan Kelly" />
      </aside>
      <div className="sections">
        <section id="About">
          <h2>About Me</h2>
          <p>
            I am a loyal husband and father of two wonderful and challenging
            boys.
          </p>
          <p>
            Skilled software engineering leader with a desire to use web
            development talents in a creative manner working with a dynamic team
            to solve challenging technical problems confronting the public
            sector.
          </p>
          <p>
            I recently completed the University of Denver Coding Bootcamp in
            December 2022.
          </p>
        </section>
      </div>
    </>
  );
}
