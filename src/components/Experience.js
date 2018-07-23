import React, { Component } from 'react';
import '../scss/global.scss';
import '../scss/Experience.scss';


class Experience extends Component {
  render() {
    return (
      <section className="section experience">
        <div className="section__title">Experience</div>
        <div className="section__content">
          <div className="jobs">
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href="https://www.hackreactor.com/" >Hack Reactor</a>
                </div>
                <div className="job__time">May 2018 - Present</div>
              </div>
              <div className="job__position">Software Engineer &amp; Teaching Assoicate</div>
            </div>
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href="" > Self-Employed </a>
                </div>
                <div className="job__time">Jan 2018 - May 2018</div>
              </div>
              <div className="job__position">Software Engineer</div>
            </div>
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href="http://www.unitedamgpartners.com/" > United AMG Partners</a>
                </div>
                <div className="job__time">Oct 2017 - Jan 2018</div>
              </div>
              <div className="job__position">Business Consultant</div>
            </div>
          </div>

          <a href="https://s3-us-west-1.amazonaws.com/thedylanqian/Resume+-+Dylan+Qian.pdf" className="arrow-link">View My Resume</a>
        </div>
      </section>

    );
  }
}

export default Experience;