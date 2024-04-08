import React from 'react'

function ProjectBlock(props) {
  return (
    <div className='project-block'>
        <h4>{props.title}</h4>
        <p className='small-text'>{props.desc}</p>
        <a href={props.link}>GitHub</a>
    </div>
  )
}

export default ProjectBlock