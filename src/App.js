import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div id='body'>
        <section className="top-section">
          <Skills />
          <Projects />
        </section>
        <Experience />
      </div>
    </div>
  );
}

export default App;
