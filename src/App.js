import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="main">
        <Home id="home" /> 
        <About id="about" /> 
        <Skills id="skills" /> 
        <Projects id="projects" />
        <Contact id="contact" /> 
      </main>
    </div>
  );
}

export default App;
