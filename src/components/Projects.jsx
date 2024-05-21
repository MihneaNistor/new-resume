import React from 'react'
import ProjectBlock from './ProjectBlock'

function Projects() {
  return (
    <div id='projects'>
        <ProjectBlock 
          title='React Shop' 
          desc='I developed an online clothes shop using ReactJS.
           I used hooks like useState and useContext
            for state management and context sharing. The project
             also incorporated npm packages such as
              react-router-dom and Material-UI for
               UI components. This app helped me gain
                experience with React hooks, package integration,
                 and building a user-friendly interface.' 
          link='https://github.com/MihneaNistor/react-shop' 
        />
        <ProjectBlock 
          title='To Do List' 
          desc='
          I created a to-do app to practice ReactJS basics,
           including the useState hook, components, ternary
            operators, and array methods. I also used Material-UI
             for styling and UI components. This project helped
              me understand state management, component-based
               architecture, and conditional rendering in React.' 
          link='https://github.com/MihneaNistor/todolist' 
        />
        <ProjectBlock 
          title='MERN Bookstore' 
          desc='I developed a web application called "Bookstore"
           using the MERN (MongoDB, Express.js, React, and Node.js.) stack. This application serves
            as a complete solution for managing a collection of books, allowing users to perform all essential CRUD
              (Create, Read, Update, Delete) operations.' 
          link='https://github.com/MihneaNistor/MERN-Bookstore' 
        />
    </div>
  )
}

export default Projects