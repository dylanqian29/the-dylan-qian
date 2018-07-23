import React, { Component } from 'react';
import '../scss/global.scss';
import '../scss/Background.scss';


class Background extends Component {
  render() {
    return (
      <section class="section background">
        <div class="section__title">Background</div>
        <div class="section__content">
          <p>
            I'm currently an Software Engineer and Teaching Associate at <a class="underline-link" href="https://www.hackreactor.com/" > Hack Reactor</a>  building things with awesome people and mentoring new engineers. I graduated from
            <a class="underline-link" href="https://msem.engineering.jhu.edu/">Johns Hopkins for M.S in Engineering Management Program</a> in 2017.
            After pursuing business career as a Business Consultant at <a class="underline-link" href="http://www.unitedamgpartners.com/">United AMG Partners</a>, 
            I found my passion in creating and optimizing web, what I always want to do during college and graduate school.
          </p>

          <p>
            As a software engineer, I enjoy bridging the gap between engineering and business &mdash; combining my technical knowledge
            and business background to create applications that can bring people conveninence. Even the tech industry is getting more satured, 
            but I always believe there are tons of <a class="underline-link" href="https://en.wikipedia.org/wiki/Blue_Ocean_Strategy">Blue Oceans</a> out there for me to discover.
          </p>

          <p>
            <strong>When I'm not in front of a computer screen</strong>, I'm probably dancing, looking for new restaurants,
            or taking pictures for my friends.
          </p>
        </div>
      </section>
    );
  }
}

export default Background;