import React from 'react';

function Footer () {
  return(
    <div className="Footer">
      <a href="https://github.com/fortu038"> 
        <img 
          className="Footer-image"
          src={require("../assets/images/GitHub-Mark-64px.png")} 
          alt="The logo for GitHub. Clicking on it will redirect to my Github account."
        />
      </a>
      <a href="https://www.linkedin.com/in/conor-fortuna-03b995248/"> 
        <img 
          className="Footer-image"
          src={require("../assets/images/linkedin-logo.png")} 
          alt="The logo for LinkedIn. Clicking on it will redirect to my LinkedIn account."
        />
      </a>
      {/* Note: I have no other work related profiles to include here, so I am repeating
      GitHub to meet the 3 footer links requirement */}
      <a href="https://github.com/fortu038"> 
        <img 
          className="Footer-image"
          src={require("../assets/images/GitHub-Mark-64px.png")} 
          alt="The logo for GitHub. Clicking on it will redirect to my Github account."
        />
      </a>
    </div>
  )
}

export default Footer;