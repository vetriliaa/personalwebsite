import React from 'react';
import '../styles.css';
import profilePic from '../assets/profile.png';
import locationIcon from '../assets/location.png';
import linkedinIcon from '../assets/linkedin.png';
import gmailIcon from '../assets/gmail.png';
import githubIcon from '../assets/github.png';
import goodreadsIcon from '../assets/goodreads.png';

function Profile() {
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
          where I recently graduated with a double major in Computer Science and Economics. I’m experienced 
          in both front-end and back-end development and love building technical solutions for challenging problems. 
          In my free time I love reading, working out and going on hikes!
        </div>
      </div>
    </div>
  );
}

export default Profile;
