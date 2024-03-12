// Import the Project component
import Project from "../Project";

// Import the project data
import { projects } from "../data/ProjectData";

// Builds the portfolio page by createing a Project component for each project in the ProjectData file
export default function Portfolio() {
  return (
    <div className="sections">
      <section id="Portfolio">
        <h2>Portfolio</h2>
        <div className="articles">
          {projects.map((project) => (
            <Project
              title={project.title}
              url={project.url}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
              GitHubRepo={project.GitHubRepo}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
