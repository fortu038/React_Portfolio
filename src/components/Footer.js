import React from 'react';

function Footer () {
  return(
    <div>
      <a href="https://github.com/fortu038"> 
        <img 
          className="footer-image"
          src={require("../assets/images/GitHub-Mark-64px.png")} 
          alt="The logo for GitHub. Clicking on it will redirect to my Github account."
        />
      </a>
      <a href="https://www.linkedin.com/in/conor-fortuna-03b995248/"> 
        <img 
          className="footer-image"
          src={require("../assets/images/linkedin-logo.png")} 
          alt="The logo for LinkedIn. Clicking on it will redirect to my LinkedIn account."
        />
      </a>
    </div>
  )
}

export default Footer;