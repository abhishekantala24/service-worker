// Imports the images for each project
import imgKSS from "../../images/code.jpg";
import imgCollegeBowlGames from "../../images/FaurotField.jpg";
import imgEvRoute from "../../images/evRoute.jpg";
import imgPowderBound from "../../images/powder-bound.jpg";
import imgSocialNetworkAPI from "../../images/social-network-api.jpg";
import imgTechBlog from "../../images/tech-blog.jpg";
import imgECommerceBackend from "../../images/e-commerce-back-end.jpg";
import imgEmployeeTracker from "../../images/employee-tracker.jpg";
import imgTeamProfileGenerator from "../../images/team-profile-generator.jpg";
import imgWeatherDashboard from "../../images/weather-dashboard.jpg";
import imgCodingQuiz from "../../images/coding-quiz.jpg";
import imgJATE from "../../images/jate.jpg";
import imgNoteTaker from "../../images/note-taker.jpg";
import imgReadmeGenerator from "../../images/readme-generator.jpg";
import imgWorkDayScheduler from "../../images/work-day-scheduler.jpg";
import imgPasswordGenerator from "../../images/password-generator.jpg";
import imgPortfolio from "../../images/portfolio.jpg";
import imgAccessibilityRefactor from "../../images/accessibility-refactor.jpg";
import imgReactPortfolio from "../../images/react-portfolio.jpg";
import imgBookSearchEngine from "../../images/book-search-engine.jpg";
import imgReduxStore from "../../images/redux-store.jpg";
import imgTeamHandbook from "../../images/team-handbook.jpg";

// Export and array of project objects
export const projects = [
  {
    title: "Kelly Software Solutions",
    url: "https://www.kellysoftware.org",
    image: imgKSS,
    description:
      "A collection of coding projects in various languages and technologies.",
    technologies: "ASP.NET, C#, Java",
  },
  {
    title: "College Bowl Games",
    url: "https://bowlgames.kellysoftware.org",
    image: imgCollegeBowlGames,
    description:
      "A free Pick'em-style college football site. This site was originally written in 2007.  Note: This site is currently under re-construction.",
    technologies:
      "Microsoft ASP.NET Core 7, Razor Pages with Razor Components, Entity Framework, ASP.NET Core Identity, SASS, Bootstrap, C#, & SQL Server",
  },
  {
    title: "Team Handbook",
    url: "https://github.com/dpk5e7/shakespeares-monkeys",
    image: imgTeamHandbook,
    description:
      "Project #3 for the University of Denver Coding Bootcamp 2022. The purpose of this project was to build an application to assist leaders and managers in understanding their people and the information important to their team members.",
    technologies:
      "React, Semantic-UI, Chart.js, GraphQL, MongoDB, Mongoose, CryptoJS, and JSON Web Tokens",
    GitHubRepo: "https://github.com/dpk5e7/shakespeares-monkeys",
  },
  {
    title: "evRoute",
    url: "https://evroute.kellysoftware.org/",
    image: imgEvRoute,
    description:
      "Project #2 for the University of Denver Coding Bootcamp 2022. The purpose of this project was to build an application to assist Electric Vehicle owners in planning long distance trips.",
    technologies:
      "Alternative Fuel Data Center information, Mapbox, Node.js, Express.js, MySQL, Sequelize, SASS, Handlebars.js, & express-session",
    GitHubRepo: "https://github.com/dpk5e7/evRoute",
  },
  {
    title: "Powder Bound",
    url: "https://powder-bound.kellysoftware.org/",
    image: imgPowderBound,
    description:
      "Project #1 for the University of Denver Coding Bootcamp 2022. The purpose of this project was to build an application to assist snow sport enthusiasts in Colorado in planning their search for powder.",
    technologies:
      "Powderlin.es, Open Weather, Google Static Maps, MapQuest Directions, MapQuest GeoCoding & Reverse Geocoding, MapQuest Static Maps, MapQuest Search Ahead, Geolocation",
    GitHubRepo: "https://github.com/dpk5e7/powder-bound",
  },
  {
    title: "Redux Store",
    url: "https://github.com/dpk5e7/redux-store/",
    image: imgReduxStore,
    description:
      "Challenge #22 for the University of Denver Coding Bootcamp 2022. The purpose of this challenge is to refactor an e-Commerce application from React Context API to Legacy Redux, i.e. Redux prior to Toolkit.",
    technologies:
      "Redux, Stripe, MongoDB, Express, React, Node, Apollo Server, & GraphQL",
    GitHubRepo: "https://github.com/dpk5e7/redux-store/",
  },
  {
    title: "Book Search Engine",
    url: "https://github.com/dpk5e7/book-search-engine/",
    image: imgBookSearchEngine,
    description:
      "Challenge #21 for the University of Denver Coding Bootcamp 2022. The purpose of this challenge is to build a MERN stack application.",
    technologies: "MongoDB, Express, React, Node, Apollo Server, & GraphQL",
    GitHubRepo: "https://github.com/dpk5e7/book-search-engine/",
  },
  {
    title: "React Portfolio",
    url: "https://react-portfolio.kellysoftware.org/",
    image: imgReactPortfolio,
    description:
      "Challenge #20 for the University of Denver Coding Bootcamp 2022. The purpose of this challenge is to build a portfolio using React and Syntactically Awesome Style Sheets.  It is a single-page application that meets the progressive web application (PWA) criteria.",
    technologies: "React & SASS",
    GitHubRepo: "https://github.com/dpk5e7/react-portfolio/",
  },
  {
    title: "Just Another Text Editor",
    url: "https://github.com/dpk5e7/jate/",
    image: imgJATE,
    description:
      "Challenge #19 for the University of Denver Coding Bootcamp 2022. The purpose of this challenge is to a text editor that runs in the browser. It is a single-page application that meets the progressive web application (PWA) criteria.",
    technologies: "Node.js, Express.js, WebPack, WorkBox, & IndexedDB",
    GitHubRepo: "https://github.com/dpk5e7/jate",
  },
  {
    title: "Social Network API",
    url: "https://github.com/dpk5e7/social-network-api",
    image: imgSocialNetworkAPI,
    description:
      "Challenge #18 for the University of Denver Coding Bootcamp 2022. The purpose of this challenge is to understand the unstructured nature of NoSQL by building an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
    technologies: "Node.js, Express.js, MongoDB, & Mongoose",
    GitHubRepo: "https://github.com/dpk5e7/social-network-api",
  },
  {
    title: "Tech Blog",
    url: "https://tech-blog.kellysoftware.org/",
    image: imgTechBlog,
    description:
      "Challenge #14 for the University of Denver Coding Bootcamp 2022. The purpose of this challenge is to build a CMS-style blog site following the MVC paradigm, where developers can publish their blog posts and comment on other developers' posts as well.",
    technologies:
      "Node.js, Express.js, MySQL, Sequelize, Handlebars.js, & express-session",
    GitHubRepo: "https://github.com/dpk5e7/tech-blog",
  },
  {
    title: "e-Commerce Back End",
    url: "https://github.com/dpk5e7/e-commerce-back-end",
    image: imgECommerceBackend,
    description:
      "Challenge #13 for the University of Denver Coding Bootcamp 2022. The purpose of this challenge is to build a back end for a generic e-commerce site using one-to-many and many-to-many database relationships.",
    technologies: "Node.js, Express.js, MySQL, & Sequelize",
    GitHubRepo: "https://github.com/dpk5e7/e-commerce-back-end",
  },
  {
    title: "Employee Tracker",
    url: "https://github.com/dpk5e7/employee-tracker",
    image: imgEmployeeTracker,
    description:
      "Challenge #12 for the University of Denver Coding Bootcamp 2022. The purpose of this challenge is to build a command-line application to manage a company's employee database.",
    technologies: "Node.js, Inquirer v8.2.4, dotenv, & MySQL",
    GitHubRepo: "https://github.com/dpk5e7/employee-tracker",
  },
  {
    title: "Note Taker",
    url: "https://note-taker.kellysoftware.org/",
    image: imgNoteTaker,
    description:
      "Challenge #11 for the University of Denver Coding Bootcamp 2022. The purpose of this challenge is to build a note taker application to save and retreive data from a JSON file.",
    technologies: "Node.js, Express.js",
    GitHubRepo: "https://github.com/dpk5e7/note-taker",
  },
  {
    title: "Team Profile Generator",
    url: "https://github.com/dpk5e7/team-profile-generator/",
    image: imgTeamProfileGenerator,
    description:
      "Challenge #10 for the University of Denver Coding Bootcamp 2022. The purpose of this challenge is to build a team profile generator and to use Jest for unit testing.",
    technologies: "Node.js, Inquirer v8.2.4, and Jest v28.1.3",
    GitHubRepo: "https://github.com/dpk5e7/team-profile-generator",
  },
  {
    title: "Readme Generator",
    url: "https://github.com/dpk5e7/readme-generator/",
    image: imgReadmeGenerator,
    description:
      "Challenge #9 for the University of Denver Coding Bootcamp 2022. The purpose of this challenge is to build a GitHub README generator.",
    technologies: "Node.js & Inquirer v8.2.4",
    GitHubRepo: "https://github.com/dpk5e7/readme-generator/",
  },
  {
    title: "Weather Dashboard",
    url: "https://weather-dashboard.kellysoftware.org/",
    image: imgWeatherDashboard,
    description:
      "Challenge #6 for the University of Denver Coding Bootcamp 2022. The purpose of this challenge is to build a weather dashboard that calls the OpenWeather API.",
    technologies: "HTML, CSS, Moment.js, Bootstrap 5.2, & OpenWeather API",
    GitHubRepo: "https://github.com/dpk5e7/weather-dashboard",
  },
  {
    title: "Work Day Scheduler",
    url: "https://work-day-scheduler.kellysoftware.org/",
    image: imgWorkDayScheduler,
    description:
      "Challenge #5 for the University of Denver Coding Bootcamp 2022. The purpose of this challenge is to build a work day scheduler.",
    technologies: "HTML, CSS, jQuery, Moment.js & Bootstrap 5.2",
    GitHubRepo: "https://github.com/dpk5e7/work-day-scheduler",
  },
  {
    title: "Coding Quiz",
    url: "https://coding-quiz.kellysoftware.org/",
    image: imgCodingQuiz,
    description:
      "Challenge #4 for the University of Denver Coding Bootcamp 2022. The purpose of this challenge is to build a timed, multiple choice coding assessment quiz.",
    technologies: "HTML, CSS, & Javascript",
    GitHubRepo: "https://github.com/dpk5e7/coding-quiz",
  },
  {
    title: "Password Generator",
    url: "https://password-generator.kellysoftware.org/",
    image: imgPasswordGenerator,
    description:
      "Challenge #3 for the University of Denver Coding Bootcamp 2022. The purpose of this challenge is to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected.",
    technologies: "Javascript",
    GitHubRepo: "https://github.com/dpk5e7/password-generator",
  },
  {
    title: "Portfolio",
    url: "https://portfolio.kellysoftware.org/",
    image: imgPortfolio,
    description:
      "Challenge #2 for the University of Denver Coding Bootcamp 2022. The purpose of this challenge is to build a portfolio.",
    technologies: "HTML & CSS",
    GitHubRepo: "https://github.com/dpk5e7/portfolio",
  },
  {
    title: "Accessibility Refactor",
    url: "https://accessibility-refactor.kellysoftware.org/",
    image: imgAccessibilityRefactor,
    description:
      "Challenge #1 for the University of Denver Coding Bootcamp 2022. The purpose of this challenge is to refactor an existing site to make it more accessible.",
    technologies: "HTML & CSS",
    GitHubRepo: "https://github.com/dpk5e7/accessibility-refactor",
  },
];
