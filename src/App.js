import './App.css';
import Menu from './components/Menu'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
     <Menu/>
     <Header/>
     <p className='small-text'>Get to Know More</p>
     <h3>About Me</h3>
     <About/>
     <p className='small-text'>Explore My</p>
     <h3>Experience</h3>
     <Experience />
     <p className='small-text'>Take a look at my</p>
     <h3>Latest Projects</h3>
     <Projects />
     <p className='small-text'>Get in Touch</p>
     <h3>Contact Me</h3>
     <Contact />
    </div>

  );
}

export default App;
