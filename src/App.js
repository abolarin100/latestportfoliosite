import './App.css';
import About from './components/About';
import Contact from './components/Contact';

import Home from './components/Home';
import Nav from './components/Nav';

import Projects from './components/Projects';





function App() {
  return (
    <div className="App">
      <Nav />
      <main className="main">
      <Home />
      <About />
      <Projects />
      <Contact />
     
      </main>
     
    </div>
  );
}

export default App;
