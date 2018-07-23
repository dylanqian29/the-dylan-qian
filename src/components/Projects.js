import React, { Component } from 'react';
import '../scss/global.scss';
import '../scss/Projects.scss';


class Projects extends Component {
  render() {
    return (
      <section class="section featured-projects">
        <div class="section__title"> Projects</div>
          <div class="section__content">


            <div class="project welp">
              <figure class="project__pic">
              <a href="https://www.youtube.com/watch?v=sxe5fRYas0c&amp;feature=youtu.be" >
                  <img src="https://s3-us-west-1.amazonaws.com/thedylanqian/welp.png" alt=""/>
                </a>
              </figure>
              <figcaption class="project__caption">
                  <div class="project__name">
                <a href="https://www.youtube.com/watch?v=sxe5fRYas0c&amp;feature=youtu.be"> Welp </a>
                  </div>
                <p>Reviews app for local businesses and restaurants using ReactJS, Node.js, Express.js, MongoDB, Redis, Docker, Jest, Enzyme, Flexbox</p>
              </figcaption>
            </div>


            <div class="project dreambnb">
              <figure class="project__pic">
                <a href="" >
                  <img src="https://s3-us-west-1.amazonaws.com/thedylanqian/dreambnb.png" alt="" />
                </a>
              </figure>
              <figcaption class="project__caption">
                <div class="project__name">
                  <a href=""> Dreambnb </a>
                </div>
              <p>Optimization for back-end architecture to handle heavy traffic and ensure scalability using ReactJS, Node.js, GraphQL, Server-Side Rendering, Artillery.io, New Relic</p>
              </figcaption>
            </div>


            <div class="project dancein">
              <figure class="project__pic">
                <a href="https://www.youtube.com/watch?v=jKaH6Mbl1G8" >
                  <img src="https://s3-us-west-1.amazonaws.com/thedylanqian/dancein.png" alt="" />
                </a>
              </figure>
              <figcaption class="project__caption">
                <div class="project__name">
                  <a href="https://www.youtube.com/watch?v=jKaH6Mbl1G8"> DanceIn </a>
                </div>
                <p> Social network and events app for dancers using React Router, Passport.js, Bootstrap</p>
              </figcaption>
            </div>
        </div>
      </section>
    );
  }
}

export default Projects;