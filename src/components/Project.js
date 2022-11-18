import React from 'react';

function Project (props) {
  return(
    // <div className="Project">
    //   <div className="Project-container">
    //     <a>
    //       <img
    //         className="Project-img"
    //         src={require("../assets/images/group-project-1-screenshot.jpg")}
    //         alt="A screenshot of a website titled Comparing Cities"
    //       />
    //     </a>
    //     <div className="Project-overlay">
    //       <h5>Comparing Cities</h5>
    //     </div>
    //   </div>
    //   <div className="Project-container">
    //     <a>
    //       <img
    //         className="Project-img"
    //         src={require("../assets/images/group-project-2-screenshot.jpg")}
    //         alt="A screenshot of a website titled Budgeteer"
    //       />
    //     </a>
    //     <div className="Project-overlay">
    //       <h5>Budgeteer</h5>
    //     </div>
    //   </div>
    // </div>
    
      <div className="Project-container">
        <a href={props.link}>
          <img
            className="Project-img"
            src={require(props.imagePath)}
            alt={props.altText}
          />
        </a>
        <div className="Project-overlay">
          <h5>{props.projectTitle}</h5>
        </div>
      </div>
  )
}

export default Project;