import React, { Component } from 'react';
import '../scss/global.scss';
import '../scss/Footer.scss';


class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="footer__copyright">
          <div class="top">
            <span> Developed by</span>
          </div>
          <div class="bottom">
            <span>Dylan Qian </span>
            <img class="emoji" src="https://s3-us-west-1.amazonaws.com/thedylanqian/man-dancing.png" alt="emoji"/>
              <span>2018</span>
          </div>
        </div>
        <div class="footer__links">
          <a href="dylan.qian.29@gmail.com" title="email">
          <span class="text">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/dylanqian29/" title="linkedin">
            <span class="text">LinkedIn</span>
          </a>
          <a href="https://github.com/dylanqian29" title="github">
            <span class="text">Github</span>
          </a>
          <a href="https://www.instagram.com/dylanqian/" title="instagram">
            <span class="text">Instagram</span>
          </a>

        </div>
      </footer>
    );
  }
}

export default Footer;