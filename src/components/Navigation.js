import React from 'react';

function Navigation (props) {
  return(
    <nav className="Navigation">
      <div>
        <h2>My Portfolio</h2>
      </div>
      <div>
        <button onClick={props.handleClick}><h3>About Me</h3></button>
      </div>
      <div>
        <button onClick={props.handleClick}><h3>Projects</h3></button>
      </div>
      <div>
        <button onClick={props.handleClick}><h3>Contact Me</h3></button>
      </div>
      <div>
        <a href={require("../assets/resume/CS Resume.docx")}><h3>Resume</h3></a>
      </div>
    </nav>
  )
}

export default Navigation;