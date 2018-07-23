import React, { Component } from 'react';
import '../scss/Intro.scss';


class Intro extends Component {
  render() {
    return (
      <header className = "wrapper">
        <div className="intro">
          <h1 className="intro__hello"><strong> Hello!你好！</strong>
            <span className="emoji wave-hand animated"></span>
          </h1>

          <h2 className="intro__tagline">I'm
            <span className="name"> Dylan Qian</span>, a San Francisco based fullstack software engineer and dancer, who focuses on building creative and beautiful interfaces
            <span className="emoji technologist"></span>
          </h2>

          <h3 className="intro__contact">
            <span>Get in touch </span>
            <span className="emoji pointer animated"></span>
            <span>
              <a href="mailto:dylan.qian.29@gmail.com" className="highlight-link">dylan.qian.29@gmail.com</a>
            </span>
          </h3>
        </div>
        <div className = "picture">
          <img src="https://s3-us-west-1.amazonaws.com/thedylanqian/dylanqian.JPG" alt="" />  
        </div>
      </header>

    );
  }
}

export default Intro;