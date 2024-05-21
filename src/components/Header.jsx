import React from 'react'
import photo2 from '../assets/photo2.jpg';
import cv from '../assets/MihneaNistor_CV.pdf'
import LinkedInIcon  from '@mui/icons-material/LinkedIn';



function Header() {
  return (
    <div className='header'>
      <img className='image' src={photo2} alt='Photo of me'/>
        <div className='title'>
          <h1>Hello,</h1>
          <h2>I'm <b>Mihnea Nistor</b></h2>
          <p>Front-End Developer</p>
          <div className='cv'>
            <a href={cv} target="_blank" download="MihneaNistor_CV">
              <button type="button" name="button">
                Download CV
              </button>
            </a>
            <a href="https://www.linkedin.com/in/mihnea-nistor-032795257/" target="_blank">
              <LinkedInIcon  style={{ fontSize: 55, marginBottom: '-9'}}/>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Header