import React, { Component } from 'react';
import '../scss/global.scss';
import '../scss/Projects.scss';
import Modal from "./Modal.js"


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      id: null
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

  }

  openModal(id) {
    this.setState({
      isOpen: true,
      id:id,
    })
  }

  closeModal() {
    this.setState({
      isOpen: false,
      id:null
    })
  }

 

  render() {
    return (
      <section class="section featured-projects">
        {this.state.isOpen && <Modal id={this.state.id} closeModal={this.closeModal}/>}
        <div class="section__title"> Projects</div>
          <div class="section__content">
            <div class="project welp">
              <figure class="project__pic">
                <a >
                  <img onClick={() => this.openModal("sxe5fRYas0c")} src="https://s3-us-west-1.amazonaws.com/thedylanqian/welp.png" alt=""/>
                </a>
              </figure>
              <figcaption class="project__caption">
                  <div class="project__name">
                <a onClick={() => this.openModal("sxe5fRYas0c")}> Welp </a>
                  </div>
                <p>Reviews app for local businesses and restaurants using ReactJS, Node.js, Express.js, MongoDB, Redis, Docker, Jest, Enzyme, Flexbox</p>
              </figcaption>
            </div>


            <div class="project dreambnb">
              <figure class="project__pic">
                <a >
                  <img src="https://s3-us-west-1.amazonaws.com/thedylanqian/dreambnb.png" alt="" />
                </a>
              </figure>
              <figcaption class="project__caption">
                <div class="project__name">
                  <a> Dreambnb </a>
                </div>
              <p>Optimization for back-end architecture to handle heavy traffic and ensure scalability using ReactJS, Node.js, GraphQL, Server-Side Rendering, Artillery.io, New Relic</p>
              </figcaption>
            </div>


            <div class="project dancein">
              <figure class="project__pic">
                <a >
                <img onClick={() => this.openModal("jKaH6Mbl1G8")} src="https://s3-us-west-1.amazonaws.com/thedylanqian/dancein.png" alt="" />
                </a>
              </figure>
              <figcaption class="project__caption">
                <div class="project__name">
                <a onClick={() => this.openModal("jKaH6Mbl1G8")}> DanceIn </a>
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