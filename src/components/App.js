import React, { Component } from 'react';
import Switch from '../components/Switch.js'
import Intro from '../components/Intro.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch /> 
        <Intro />
        {/* <Background />
        <Skills />
        <Experience />
        <Projects />
        <Other />
        <Footer />
        <Top /> */}
      </div>
    );
  }
}

export default App;

