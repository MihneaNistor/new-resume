import React from 'react'
import ProjectBlock from './ProjectBlock'

function Projects() {
  return (
    <div className='projects'>
        <ProjectBlock 
          title='React Shop' 
          desc='Online clothes shop made with React.JS. I used React hooks such as useState and useContext, npm packages such as react-router-dom and material UI.' 
          link='https://github.com/MihneaNistor/react-shop' 
        />
        <ProjectBlock 
          title='To Do List' 
          desc='I made this application to get used to ReactJS basics such as: useState hook, components, ternary operators, array methods, material UI.' 
          link='https://github.com/MihneaNistor/todolist' 
        />
        <ProjectBlock 
          title='MERN Book Store' 
          desc='MERN Book Store' 
          link='https://github.com/MihneaNistor/pizza-react' 
        />
    </div>
  )
}

export default Projects