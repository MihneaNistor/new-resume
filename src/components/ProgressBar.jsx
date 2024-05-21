import React, { useEffect, useRef } from 'react';

function ProgressBar() {
    const skillRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        skillRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div>
            <div className="skills">
                <div className='column'>
                    <div className='skill'>
                        <p>HTML</p>
                        <div className="bar" ref={el => skillRefs.current[0] = el}><span className="html"></span></div>
                    </div>
                    <div className='skill'>
                        <p>CSS</p>
                        <div className="bar" ref={el => skillRefs.current[1] = el}><span className="css"></span></div>
                    </div>
                    <div className='skill'>
                        <p>JavaScript</p>
                        <div className="bar" ref={el => skillRefs.current[2] = el}><span className="javascript"></span></div>
                    </div>
                    <div className='skill'>
                        <p>React</p>
                        <div className="bar" ref={el => skillRefs.current[3] = el}><span className="react"></span></div>
                    </div>
                </div>
                <div className='column'>
                    <div className='skill'>
                        <p>TypeScript</p>
                        <div className="bar" ref={el => skillRefs.current[4] = el}><span className="typescript"></span></div>
                    </div>
                    <div className='skill'>
                        <p>NodeJS</p>
                        <div className="bar" ref={el => skillRefs.current[5] = el}><span className="node"></span></div>
                    </div>
                    <div className='skill'>
                        <p>SQL</p>
                        <div className="bar" ref={el => skillRefs.current[6] = el}><span className="sql"></span></div>
                    </div>
                    <div className='skill'>
                        <p>Git</p>
                        <div className="bar" ref={el => skillRefs.current[7] = el}><span className="git"></span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
