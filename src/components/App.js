import React, { Component } from 'react';
import Switch from '../components/Switch.js'
import Intro from '../components/Intro.js'
import Background from '../components/Background.js'
import Skills from '../components/Skills.js'
import Experience from '../components/Experience.js'
import Projects from '../components/Projects.js'
import Footer from '../components/Footer.js'

import '../scss/global.scss';
import '../scss/index.scss';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch /> 
          <Intro />
        <Background />
         <Skills />
        <Experience />
        <Projects />
        {/* <Other /> */}
        <Footer />
      </div>
    );
  }
}

export default App;

