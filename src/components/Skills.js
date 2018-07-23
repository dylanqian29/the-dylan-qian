import React, { Component } from 'react';
import '../scss/global.scss';
import '../scss/Skills.scss';


class Skills extends Component {
  render() {
    return (
      <section className="section skills">
        <div className="section__title">Skills</div>
        <div className="section__content">
         <div className="skillz">
            <div className="skillz__category">
              <div className="skillz__category__label">Languages</div>
              <ul>
                <li className="skillz__category__item"> <i className="devicon-javascript-plain"></i> JavaScript (ES6)</li>
                <li className="skillz__category__item"> <i className="devicon-html5-plain"></i> HTML5</li>
                <li className="skillz__category__item"> <i className="devicon-css3-plain"></i> CSS3</li>
                <li className="skillz__category__item"> <i className="devicon-sass-original"></i> Sass</li>
                <li className="skillz__category__item"> <i className="devicon-python-plain"></i> Python</li>
                <li className="skillz__category__item"> <i className="devicon-mysql-plain"></i> SQL</li>
                <li className="skillz__category__item"> <img src="https://s3-us-west-1.amazonaws.com/thedylanqian/r.png" valign="top" width="14.39" height="12" alt="" /> R</li>
              </ul>
            </div>
            <div className="skillz__category">
              <div className="skillz__category__label">Frameworks</div>
              <ul>
                <li className="skillz__category__item"> <i className="devicon-react-original"></i> React</li>
                <li className="skillz__category__item"> <i className="devicon-angularjs-plain"></i> AngularJS</li>
                <li className="skillz__category__item"> <i className="devicon-backbonejs-plain"></i> BackBoneJS</li>
                <li className="skillz__category__item"> <i className="devicon-nodejs-plain"></i> Node.js</li>
                <li className="skillz__category__item"> <i className="devicon-express-original"></i> Express</li>
                <li className="skillz__category__item"> <i className="devicon-mocha-plain"></i> Mocha</li>
                <li className="skillz__category__item"> <i className="devicon-jasmine-plain"></i> Jasmine</li>
              </ul>
            </div>
            <div className="skillz__category">
              <div className="skillz__category__label">Tools</div>
              <ul>
                <li className="skillz__category__item"> <i className="devicon-amazonwebservices-original"></i> AWS </li>
                <li className="skillz__category__item"> <i className="devicon-webpack-plain"></i> Webpack</li>
                <li className="skillz__category__item"> <i className="devicon-docker-plain"></i> Docker</li>
                <li className="skillz__category__item"> <i className="devicon-heroku-original"></i> Heroku</li>
                <li className="skillz__category__item"> <i className="devicon-redis-plain"></i> Redis</li>
                <li className="skillz__category__item"> <i className="devicon-jquery-plain"></i> JQuery</li>
                <li className="skillz__category__item"> <i className="devicon-bootstrap-plain"></i> Bootstrap</li>
                <li className="skillz__category__item"> <i className="devicon-babel-plain"></i> Babel</li>

              </ul>
            </div>
            <div className="skillz__category">
              <div className="skillz__category__label">Others</div>
              <ul>
                <li className="skillz__category__item"> <i className="devicon-git-plain"></i> Git</li>
                <li className="skillz__category__item"> <i className="devicon-github-plain"></i> Github </li>
                <li className="skillz__category__item"> <i className="devicon-chrome-plain"></i> Chrome DevTools</li>
                <li className="skillz__category__item"> <img src="https://s3-us-west-1.amazonaws.com/thedylanqian/postman.jpg" valign="top" width = "14.39" height = "15" alt =""/> Postman</li>
                <li className="skillz__category__item"> <i className="devicon-mongodb-plain"></i> MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;