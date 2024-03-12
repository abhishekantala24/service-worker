// Component to show two lists of proficiencies and to allow the user to download my resume.
// The resume is referenced as a static asset under the public folder.
export default function Resume() {
  
  return (
    <div className="sections">
      <section id="Contact">
        <h2>Resume</h2>
        <p>Download my <a href="/downloads/Kelly_Resume_2022.pdf" alt="Resume" download>resume</a>.</p>
          <h3>Front-End Proficiencies:</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React</li>
            <li>Leaflet, MapBox</li>
            <li>Bootstrap, SASS</li>
            <li>RESTful APIs</li>
          </ul>
          <h3>Back-End Proficiencies:</h3>
          <ul>
            <li>C#</li>
            <li>ASP.NET</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MS SQL, MySQL, MongoDB</li>
            <li>Sequelize, Mongoose</li>
          </ul>
      </section>
    </div>
  );
}
