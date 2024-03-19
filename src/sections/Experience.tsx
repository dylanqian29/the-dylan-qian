import styled from "styled-components";
import { Section, SectionTitle, SectionContent } from "../components/Section";
import arrow from "../img/arrow.png";

const Jobs = styled.div`
  margin-bottom: 100px;
`;

const Job = styled.div`
  margin-bottom: 25px;
`;

const JobDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Company = styled.div`
  font-weight: 700;
`;

const Time = styled.div`
  font-size: 0.9rem;
  font-family: "Inconsolata", monospace;
`;

const ArrowLink = styled.a`
  font-size: 1.25rem;
  font-weight: 700;
  display: inline-block;
  background-color: transparent;
  white-space: nowrap;
`;

const ArrowIcon = styled.img`
  margin-left: 15px;
  margin-bottom: -2px;
  width: 20px;
  height: 20px;
  display: inline-block;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(7px);
  }
`;

const Experience = () => (
  <Section id="experience">
    <SectionTitle>Experience</SectionTitle>
    <SectionContent>
      <Jobs>
        <Job>
          <JobDetail>
            <Company>
              <a href="https://tryfinch.com/">Finch</a>
            </Company>
            <Time>Dec 2021 - July 2023</Time>
          </JobDetail>
          <div>Software Engineer #6 &amp; Experience Team Lead</div>
        </Job>
        <Job>
          <JobDetail>
            <Company>
              <a href="https://www.onelogin.com/">OneLogin</a>
            </Company>
            <Time>June 2021 - Dec 2021</Time>
          </JobDetail>
          <div>Associate Engineering Manager (Portal Product Team)</div>
        </Job>
        <Job>
          <JobDetail>
            <Company>
              <a href="https://www.onelogin.com/">OneLogin</a>
            </Company>
            <Time>Mar 2021 - Jun 2021</Time>
          </JobDetail>
          <div>Senior Software Engineer</div>
        </Job>
        <Job>
          <JobDetail>
            <Company>
              <a href="https://www.onelogin.com/">OneLogin</a>
            </Company>
            <Time>Mar 2019 - Feb 2021</Time>
          </JobDetail>
          <div>Software Engineer III</div>
        </Job>
        <Job>
          <JobDetail>
            <Company>
              <a href="https://www.onelogin.com/">OneLogin</a>
            </Company>
            <Time>Sept 2018 - Feb 2019</Time>
          </JobDetail>
          <div>Software Engineer II</div>
        </Job>
        <Job>
          <JobDetail>
            <Company>
              <a href="https://www.hackreactor.com/">Hack Reactor</a>
            </Company>
            <Time>May 2018 - Sept 2018</Time>
          </JobDetail>
          <div>Software Engineer &amp; Teaching Assoicate</div>
        </Job>
      </Jobs>
      <ArrowLink
        href="https://s3-us-west-1.amazonaws.com/thedylanqian/Resume+-+Dylan+Qian.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        View My Resume
        <ArrowIcon src={arrow} alt="arrow" />
      </ArrowLink>
    </SectionContent>
  </Section>
);

export default Experience;
