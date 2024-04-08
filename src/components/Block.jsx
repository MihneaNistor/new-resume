import React from 'react'

function Block(props) {
  return (
    <div className='block'>
        <div className='icon'>{props.icon}</div>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <p>{props.time}</p>
    </div>
  )
}

export default Block