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
                  <a href="https://www.hackreactor.com/" >OneLogin</a>
                </div>
                <div className="job__time">Mar 2021 - Present</div>
              </div>
              <div className="job__position">Associate Engineering Manager &amp; Senior Software Engineer</div>
            </div>
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href="https://www.hackreactor.com/" >OneLogin</a>
                </div>
                <div className="job__time">Mar 2019 - Feb 2021</div>
              </div>
              <div className="job__position">Software Engineer III</div>
            </div>
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href="https://www.hackreactor.com/" >OneLogin</a>
                </div>
                <div className="job__time">Sept 2018 - Feb 2019</div>
              </div>
              <div className="job__position">Software Engineer II</div>
            </div>
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href="https://www.hackreactor.com/" >Hack Reactor</a>
                </div>
                <div className="job__time">May 2018 - Sept 2018</div>
              </div>
              <div className="job__position">Software Engineer &amp; Teaching Assoicate</div>
            </div>
          </div>
          <a href="https://s3-us-west-1.amazonaws.com/thedylanqian/Resume+-+Dylan+Qian.pdf" className="arrow-link">View My Resume</a>
        </div>
      </section>

    );
  }
}

export default Experience;