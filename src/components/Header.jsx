import React from 'react'
import photo2 from '../assets/photo2.jpg';


function Header() {
  return (
    <div className='header'>
        <img className='image' src={photo2} alt='Photo of me'/>
        <div className='title'>
          <h1>Hello,</h1>
          <h2>I'm <b>Mihnea Nistor</b></h2>
          <p>Front-End Developer</p>
        </div>
    </div>
  )
}

export default Header