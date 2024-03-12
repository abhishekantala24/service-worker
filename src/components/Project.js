// Imports the github image
import svgGitHub from "../images/github.svg";

// Component to display individual projects on the portfolio page
export default function Project(props) {
  const title = props.title; // variable to hold the project title

  // Variable to build a link to the project, if the url was passed.  Otherwise, emptry string.
  const link = props.url ? (
    <a href={props.url} target="_blank" rel="noreferrer">
      {title}
    </a>
  ) : (
    ""
  );

  // Variable to build an image link to the project, if the url and image was passed.  Otherwise, empty string.
  const imgLink =
    props.url && props.image ? (
      <a href={props.url} target="_blank" rel="noreferrer">
        <img src={props.image} alt={title} />
      </a>
    ) : (
      ""
    );

  // Variable to hold the project description, if the description was passed.
  const description = props.description ? <p>{props.description}</p> : "";

  // Variable to hold the project's technologies, if the technologies were passed.
  const technologies = props.technologies ? (
    <p>Technologies: {props.technologies}</p>
  ) : (
    ""
  );

  // Variable to build an image link to the project's GitHub repo, if it was passed.  Otherwise, empty string.
  const GitHubRepoLink = props.GitHubRepo ? (
    <p>
      {
        <a href={props.GitHubRepo} target="_blank" rel="noreferrer">
          <img src={svgGitHub} alt="GitHub" />
        </a>
      }
    </p>
  ) : (
    ""
  );

  // Builds the article, i.e. card, for each project.
  return (
    <article key={title}>
      <header>
        <h3>{link}</h3>
        {GitHubRepoLink}
      </header>
      {imgLink}
      {description}
      {technologies}
    </article>
  );
}
