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
      altText: "A scrren of a text editor called Just Another Text Editor",
      projectTitle: "J.A.T.E.",
      link: "https://texteditor-production.up.railway.app/",
      repo: "https://github.com/fortu038/Text_Editor"
    },
  ]

  const handleClick = (e) => {
    // console.log(showWhat);

    const showHolder = showWhat.split(' ').join('-');
    // console.log(holder);

    var element = document.getElementById(showHolder);
    element.classList.remove("Active");

    // console.log(e.target.innerText);

    const tarHolder = e.target.innerText.split(' ').join('-');
    // console.log(tarHolder);

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
              {/* <Project
                image={projectArray[0].image}
                altText={projectArray[0].altText}
                projectTitle={projectArray[0].projectTitle}
                link={projectArray[0].link}
              />
              <Project
                image={projectArray[1].image}
                altText={projectArray[1].altText}
                projectTitle={projectArray[1].projectTitle}
                link={projectArray[1].link}
              />
              <Project
                image={projectArray[2].image}
                altText={projectArray[2].altText}
                projectTitle={projectArray[2].projectTitle}
                link={projectArray[2].link}
              /> */}
            </div>
          </div>
        )
      case "Contact Me":
        return (
          <div>
            <Header text={str} />
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
