import React, { Component } from 'react';
import '../scss/global.scss';
import '../scss/Experience.scss';


class Experience extends Component {
  render() {
    return (
      <section class="section experience">
        <div class="section__title">Experience</div>
        <div class="section__content">
          <div class="jobs">
            <div class="job">
              <div class="time-place">
                <div class="job__company">
                  <a href="https://www.hackreactor.com/" >Hack Reactor</a>
                </div>
                <div class="job__time">May 2018 - Present</div>
              </div>
              <div class="job__position">Software Engineer &amp; Teaching Assoicate</div>
            </div>
            <div class="job">
              <div class="time-place">
                <div class="job__company">
                  <a href="" > Self-Employed </a>
                </div>
                <div class="job__time">Jan 2018 - May 2018</div>
              </div>
              <div class="job__position">Software Engineer</div>
            </div>
            <div class="job">
              <div class="time-place">
                <div class="job__company">
                  <a href="http://www.unitedamgpartners.com/" > United AMG Partners</a>
                </div>
                <div class="job__time">Oct 2017 - Jan 2018</div>
              </div>
              <div class="job__position">Business Consultant</div>
            </div>
          </div>

          <a href="https://s3-us-west-1.amazonaws.com/thedylanqian/Resume+-+Dylan+Qian.pdf" class="arrow-link">View My Resume</a>
        </div>
      </section>

    );
  }
}

export default Experience;