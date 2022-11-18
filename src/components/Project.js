import React from 'react';

function Project () {
  return(
    <div className="Project-container">
      <img
        className="Project-img"
        src={require("../assets/images/group-project-1-screenshot.jpg")}
        alt="A screenshot of a website titled Comparing Cities"
      />
      <div className="Project-overlay">
        <h5 className="Project-text">Comparing Cities</h5>
      </div>
    </div>
  )
}

export default Project;