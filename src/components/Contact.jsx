import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  return (
    <div id='contacts'>
      <div className="contact">
        <a href="tel:+40728620857">
          <PhoneIcon  style={{fontSize: 70}}/>
        </a>
        <h5>Phone</h5>
        <p>0728 620 857</p>
      </div>
 
    <div className="contact">
      <a href="mailto: mihnea_ns@yahoo.com" target="_blank" rel="noopener noreferrer">
        <EmailIcon  style={{fontSize: 70}} />
      </a>
      <h5>E-Mail</h5>
      <p>mihnea_ns@yahoo.com</p>
    </div>

    <div className="contact">
    <a href="https://www.linkedin.com/in/mihnea-nistor-032795257/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon style={{fontSize: 70}}  />
      </a>
      <h5>LinkedIn</h5>
      <p>Mihnea Nistor</p>
    </div>
    
    <div className='contact'>
      <a href="https://github.com/MihneaNistor" target="_blank" rel="noopener noreferrer">
        <GitHubIcon style={{fontSize: 70}}/>
      </a>
      <h5>GitHub</h5>
      <p>MihneaNistor</p>
    </div>

  </div>
);
}

export default Contact