import './App.css';
import Top from './components/Top';
import Contact from './components/Contact';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project'
import Hobbies from './components/Hobbies';
function  App() {
  return (
    <>
    <div className="container">
        <Top /><br />
        <Education />
        <Skills />
        <Project />
        <Hobbies/>
        <Contact/>
      </div>
    </>
  );
}

export default App;