import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from "./components/Navigation.js";
import Project from './components/Project';

function App() {
  const [showWhat, setShowWhat] = useState("About Me");

  const handleClick = (e) => {
    setShowWhat(e.target.innerText);
  }

  const renderSwitch = (str) => {
    switch(str) {
      case "About Me":
        return (
          <div>
            <Header text={str} />
            <img src={require("./assets/images/profile-pic.jpg")} />
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
