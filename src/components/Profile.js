import React from 'react';
import '../styles.css';
import profilePic from '../assets/profile.png';
import locationIcon from '../assets/location.png';
import linkedinIcon from '../assets/linkedin.png';
import gmailIcon from '../assets/gmail.png';
import githubIcon from '../assets/github.png';
import goodreadsIcon from '../assets/goodreads.png';

function Profile() {
  const handleCalendlyClick = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/vetriliaa/30min' });
    }
    return false;
  };

  // Load Calendly script and styles
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="profile-container">
      <img src={profilePic} alt="Profile" className="profile-pic" />

      <div className="profile-info">
        <p className="location">
          <img src={locationIcon} alt="Location" className="icon" /> <strong>Seattle, WA</strong>
        </p>
        <p>
          Computer Science, BS'25 <br/>
          Economics, BA'25
        </p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/liaa-kumar/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="icon" />
          </a>
          <a href="https://github.com/liaakumar15" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="icon" />
          </a>
          <a href="mailto:liaakumar.15@gmail.com">
            <img src={gmailIcon} alt="Gmail" className="icon" />
          </a>
          <a href="https://www.goodreads.com/user/show/84215892-liaa">
            <img src={goodreadsIcon} alt="Goodreads" className="icon" />
          </a>
        </div>

        <div className="bio">
          I’m the current Texas Instruments Leadership Fellow at the University of Texas at Dallas, 
          where I recently graduated with a double major in Computer Science and Economics. I'm passionate about 
          building scalable systems and AI-powered solutions that create real-world impact. In my free time I love 
          reading, working out and going on hikes!
        </div>

        <div className="calendly-link">
          <a href="#" onClick={handleCalendlyClick} style={{ textDecoration: 'none', color: 'inherit' }}>
            15 min coffee chat! ☕️
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
