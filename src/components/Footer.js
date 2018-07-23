import React, { Component } from 'react';
import '../scss/global.scss';
import '../scss/Footer.scss';


class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__copyright">
          <div className="top">
            <span> Developed by</span>
          </div>
          <div className="bottom">
            <span>Dylan Qian </span>
            <img className="emoji" src="https://s3-us-west-1.amazonaws.com/thedylanqian/man-dancing.png" alt="emoji"/>
              <span>2018</span>
          </div>
        </div>
        <div className="footer__links">
          <a href="dylan.qian.29@gmail.com" title="email">
          <span className="text">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/dylanqian29/" title="linkedin">
            <span className="text">LinkedIn</span>
          </a>
          <a href="https://github.com/dylanqian29" title="github">
            <span className="text">Github</span>
          </a>
          <a href="https://www.instagram.com/dylanqian/" title="instagram">
            <span className="text">Instagram</span>
          </a>

        </div>
      </footer>
    );
  }
}

export default Footer;