import React from 'react'

function ProgressBar() {
    return (
        <div>
            <div className="skills">
                <div className='column'>
                <div className='skill'>
                    <p>HTML</p>
                    <div className="bar"><span className="html"></span></div>
                </div>
            <div className='skill'>
                <p>CSS</p>
                <div className="bar"><span className="css"></span></div>
            </div>
            <div className='skill'>
                <p>JavaScript</p>
                <div className="bar"><span className="javascript"></span></div>
            </div>
            <div className='skill'>
                <p>React</p>
                <div className="bar"><span className="react"></span></div>
            </div>
            </div>
            <div className='column'>
            <div className='skill'>
                <p>TypeScript</p>
                <div className="bar"><span className="typescript"></span></div>
            </div>
            <div className='skill'>
                <p>NodeJS</p>
                <div className="bar"><span className="node"></span></div>
            </div>
            <div className='skill'>
                <p>SQL</p>
                <div className="bar"><span className="sql"></span></div>
            </div>
            <div className='skill'>
                <p>Git</p>
                <div className="bar"><span className="git"></span></div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default ProgressBar