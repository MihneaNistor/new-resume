import React from 'react'
import photo3 from '../assets/photo3.jpg'
import Block from './Block'
import { FaSchool } from "react-icons/fa";
import { RiAwardFill } from "react-icons/ri";


function About() {
  return (
    <div className='about'>
        <img className='image' src={photo3} alt='Photo of me'/>
        <div className='about-me'>
        <div className='experience'>
          <Block icon={<RiAwardFill />} title='Experience' content='Front-End Developer @Estee Lauder Companies' time='July 2023 - September 2023'/>
          <Block icon={<FaSchool />} title='Education' content='Economic Cybernetics, Statistics and Informatics' time='October 2019 - July 2022'/>
        </div>
        <div className='description'>
        <p>
            My name is Mihnea Nistor, and I graduated
            from the Bucharest University of Economic Studies
            in 2022 with a bachelor's degree in Economic
            Cybernetics, Statistics and Informatics.
            I am a motivated and self-taught Front End Developer,
            with a strong foundation in web development.
            With a bachelor's degree in Cybernetics and a 3-month
            internship experience at ELC Digital Technology,
            I bring a unique blend of technical knowledge and a
            thirst for continuous learning to the field of web
            development. I'm ambitious, curious and eager to
            learn and to understand all these concepts from
            the world of Web Development so I can apply them in
            real life, implicitly at the work place.
        </p>
        </div>
        </div>
       
    </div>
  )
}

export default About