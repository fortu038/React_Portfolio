import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from "./components/Navigation.js";
import Project from './components/Project';

function App() {
  const [showWhat, setShowWhat] = useState("About Me");

  const projectArray = [
    {
      image: require("./assets/images/group-project-1-screenshot.jpg"),
      altText: "A screenshot of a website titled Comparing Cities",
      projectTitle: "Comparing Cities",
      link: "https://ivabon.github.io/01-group-project/",
      repo: "https://github.com/IvaBon/01-group-project"
    },
    {
      image: require("./assets/images/group-project-2-screenshot.jpg"),
      altText: "A screenshot of a website titled Budgeteer. Link leads to GitHub repo",
      projectTitle: "Budgeteer",
      link: " https://group5-production-4da0.up.railway.app/",
      repo: " https://github.com/Glitch0320/group5"
    },
    {
      image: require("./assets/images/text-editor-site-screenshot.jpg"),
      altText: "A screenshot of a text editor called Just Another Text Editor",
      projectTitle: "J.A.T.E.",
      link: "https://texteditor-production.up.railway.app/",
      repo: "https://github.com/fortu038/Text_Editor"
    },
    {
      image: require("./assets/images/weather-dash.jpg"),
      altText: "A screenshot of a website called Weather Dashboard",
      projectTitle: "Weather Dashboard",
      link: "https://fortu038.github.io/06_weather_dashbaord/",
      repo: "https://github.com/fortu038/06_weather_dashbaord"
    },
    {
      image: require("./assets/images/team-profile-screenshot.jpg"),
      altText: "A screenshot of a program called My Team",
      projectTitle: "Team Profile Generator",
      link: "https://drive.google.com/file/d/1hZ1ZsIgX8NVvUTKcH3EjpBHytNCekkqG/view",
      repo: "https://github.com/fortu038/Team_Profile_Generator"
    },
    {
      image: require("./assets/images/insomnia-screenshot.jpg"),
      altText: "A screen of a post request to the poject in Insomnia",
      projectTitle: "Social Network API",
      link: "https://drive.google.com/file/d/1Yx1f296F3iEj-L96JOHRNNHGpQF5Bm3q/view",
      repo: "https://github.com/fortu038/Social_Network_API"
    }
  ]

  const handleClick = (e) => {
    const showHolder = showWhat.split(' ').join('-');

    var element = document.getElementById(showHolder);
    element.classList.remove("Active");

    const tarHolder = e.target.innerText.split(' ').join('-');

    document.getElementById(tarHolder).classList.add("Active");
    setShowWhat(e.target.innerText);
  }

  const renderProject = (elem) => {
    return (
      <Project
        image={elem.image}
        altText={elem.altText}
        projectTitle={elem.projectTitle}
        link={elem.link}
        repo={elem.repo}
      />
    )
  }

  const renderSwitch = (str) => {
    switch(str) {
      case "About Me":
        return (
          <div>
            <Header text={str} />
            <img src={require("./assets/images/profile-pic.jpg")} alt="Conor Fortuna" />
            <h5>
              My name is Conor Fortuna. I graduated in May 2022 from the University of Minnesota Twin Cities with
              a major in chemistry and a minor in computer science. I am currently taking a full stack development
              bootcamp throught the University of Minnesota Twin Cities.
            </h5>
          </div>
        )
      case "Projects":
        return (
          <div>
            <Header text={str} />
            <div className="Project">
              {projectArray.map(elem => renderProject(elem))}
            </div>
          </div>
        )
      case "Contact Me":
        return (
          <div className="Contact">
            <Header text={str} />
            <h6>Note: The below contact form is currently not functional</h6>
            <form>
              <label for="name">Name:</label><br />
              <input type="text" id="name" name="name" /><br />
              <label for="email">Email:</label><br />
              <input type="text" id="email" name="email" /><br />
              <label for="message">Message:</label><br />
              <input type="text" id="message" name="message" /><br />
              <button type="button">Submit</button>
            </form>
            <h5>My Primary Email: <a href="mailto:conorfortuna@gmail.com">conorfortuna@gmail.com</a></h5>
            <h5>My Secondary Email: <a href="mailto:fortu038@umn.edu">fortu038@umn.edu</a></h5>
            <h5>My Phone Number &#40;Placeholder&#41;: 123-456-7890</h5>
          </div>
        )
      case "Resume":
        return (
          <div>
            <Header text={str} />
            <h3>Languages: C++, C, Java, JavaScript, HTML, CSS, Python, OCaml</h3>
            <h3>Skills: React, Node.js, MySQL, MongoDB</h3>
            <a href={require("./assets/resume/CS Resume.docx")}><h3>Download My Resume</h3></a>
          </div>
        )
      default:
        return (
          <div>
            <Header text="Render Error :(" />
          </div>
        )
    }
  }

  return (
    <div className="App">
      <Navigation handleClick={handleClick}/>
      <header className="App-header">
        {/* <Header text="Projects"/>
        <Project /> */}
        {/* <button onClick={handleClick}>Click Me!</button> */}
        {renderSwitch(showWhat)}
      </header>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
