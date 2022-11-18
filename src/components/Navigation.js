import React from 'react';

function Navigation (props) {
  return(
    <nav className="Navigation">
      <div>
        <h2>My Portfolio</h2>
      </div>
      <div>
        <button id="About-Me" className="Active" onClick={props.handleClick}><h3>About Me</h3></button>
      </div>
      <div>
        <button id="Projects" className="" onClick={props.handleClick}><h3>Projects</h3></button>
      </div>
      <div>
        <button id="Contact-Me" className="" onClick={props.handleClick}><h3>Contact Me</h3></button>
      </div>
      <div>
        <button id="Resume" className="" onClick={props.handleClick}><h3>Resume</h3></button>
      </div>
    </nav>
  )
}

export default Navigation;