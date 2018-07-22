import React, { Component } from 'react';
import '../scss/Intro.scss';


class Intro extends Component {
  render() {
    return (
    <header class="intro">
        <h1 class="intro__hello">Hello!
          <span class="emoji wave-hand animated"></span>
        </h1>

        <h2 class="intro__tagline">I'm
          <span class="name"> Dylan Qian</span>, a San Francisco based fullstack software engineer and dancer, who focused on building creative and beautiful interfaces
          <span class="emoji technologist"></span>
        </h2>

        <h3 class="intro__contact">
          <span>Get in touch </span>
          <span class="emoji pointer animated"></span>
          <span>
            <a href="mailto:dylan.qian.29@gmail.com" target="_blank" class="highlight-link">dylan.qian.29@gmail.com</a>
          </span>
        </h3>
        <img className='intro__selfie' src="https://s3-us-west-1.amazonaws.com/thedylanqian/dylanqian.JPG" alt = ""/>      </header>
    );
  }
}

export default Intro;