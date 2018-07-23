import React, { Component } from 'react';
import '../scss/global.scss';
import '../scss/Skills.scss';


class Skills extends Component {
  render() {
    return (
      <section class="section skills">
        <div class="section__title">Skills</div>
        <div class="section__content">
         <div class="skillz">
            <div class="skillz__category">
              <div class="skillz__category__label">Languages</div>
              <ul>
                <li class="skillz__category__item"> <i class="devicon-javascript-plain"></i> JavaScript (ES6)</li>
                <li class="skillz__category__item"> <i class="devicon-html5-plain"></i> HTML5</li>
                <li class="skillz__category__item"> <i class="devicon-css3-plain"></i> CSS3</li>
                <li class="skillz__category__item"> <i class="devicon-sass-original"></i> Sass</li>
                <li class="skillz__category__item"> <i class="devicon-python-plain"></i> Python</li>
                <li class="skillz__category__item"> <i class="devicon-mysql-plain"></i> SQL</li>
                <li class="skillz__category__item"> <img src="https://s3-us-west-1.amazonaws.com/thedylanqian/r.png" valign="top" width="14.39" height="12" alt="" /> R</li>
              </ul>
            </div>
            <div class="skillz__category">
              <div class="skillz__category__label">Frameworks</div>
              <ul>
                <li class="skillz__category__item"> <i class="devicon-react-original"></i> React</li>
                <li class="skillz__category__item"> <i class="devicon-angularjs-plain"></i> AngularJS</li>
                <li class="skillz__category__item"> <i class="devicon-backbonejs-plain"></i> BackBoneJS</li>
                <li class="skillz__category__item"> <i class="devicon-nodejs-plain"></i> Node.js</li>
                <li class="skillz__category__item"> <i class="devicon-express-original"></i> Express</li>
                <li class="skillz__category__item"> <i class="devicon-mocha-plain"></i> Mocha</li>
                <li class="skillz__category__item"> <i class="devicon-jasmine-plain"></i> Jasmine</li>
              </ul>
            </div>
            <div class="skillz__category">
              <div class="skillz__category__label">Tools</div>
              <ul>
                <li class="skillz__category__item"> <i class="devicon-amazonwebservices-original"></i> AWS </li>
                <li class="skillz__category__item"> <i class="devicon-webpack-plain"></i> Webpack</li>
                <li class="skillz__category__item"> <i class="devicon-docker-plain"></i> Docker</li>
                <li class="skillz__category__item"> <i class="devicon-heroku-original"></i> Heroku</li>
                <li class="skillz__category__item"> <i class="devicon-redis-plain"></i> Redis</li>
                <li class="skillz__category__item"> <i class="devicon-jquery-plain"></i> JQuery</li>
                <li class="skillz__category__item"> <i class="devicon-bootstrap-plain"></i> Bootstrap</li>
                <li class="skillz__category__item"> <i class="devicon-babel-plain"></i> Babel</li>

              </ul>
            </div>
            <div class="skillz__category">
              <div class="skillz__category__label">Others</div>
              <ul>
                <li class="skillz__category__item"> <i class="devicon-git-plain"></i> Git</li>
                <li class="skillz__category__item"> <i class="devicon-github-plain"></i> Github </li>
                <li class="skillz__category__item"> <i class="devicon-chrome-plain"></i> Chrome DevTools</li>
                <li class="skillz__category__item"> <img src="https://s3-us-west-1.amazonaws.com/thedylanqian/postman.jpg" valign="top" width = "14.39" height = "15" alt =""/> Postman</li>
                <li class="skillz__category__item"> <i class="devicon-mongodb-plain"></i> MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;