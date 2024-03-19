import styled from "styled-components";
import colors from "../constants/colors";
import { Section, SectionTitle, SectionContent } from "../components/Section";

const BackgroundParagraph = styled.p`
  margin-top: 0;
  margin-bottom: 25px;
`;

const BackgroundLink = styled.a`
  position: relative;
  display: inline-block;
  font-weight: bold;
  &:after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${colors.dark};
    content: "";
    opacity: 0;
    transition: height 0.3s, opacity 0.3s, transform 0.3s;
    transform: translateY(-5px);
  }
  &:hover,
  &:focus {
    &:after {
      height: 2px;
      border-radius: 3px;
      opacity: 1;
      transform: translateY(-2px);
    }
  }
`;

const Background = () => (
  <Section id="background">
    <SectionTitle>Background</SectionTitle>
    <SectionContent>
      <BackgroundParagraph>
        I'm currently an Associate Engineering Manager and Senior Software
        Engineer at{" "}
        <BackgroundLink href="https://www.hackreactor.com/">
          OneLogin
        </BackgroundLink>{" "}
        leading a group of 8 engineers and building applications that allow
        companies easily and securely access their apps and build their own
        login pages for their customers.
      </BackgroundParagraph>
      <BackgroundParagraph>
        I graduated from{" "}
        <BackgroundLink href="https://msem.engineering.jhu.edu/">
          the M.S in Engineering Management Program
        </BackgroundLink>{" "}
        at{" "}
        <BackgroundLink href="https://www.jhu.edu/">
          Johns Hopkins University
        </BackgroundLink>{" "}
        in 2017. After working as a Business Consultant after graduation, I
        found my passion in creating and optimizing web applications, which has
        always been something I wanted to pursue during college and grad school.
      </BackgroundParagraph>
      <BackgroundParagraph>
        As a software engineer, I enjoy bridging the gap between engineering and
        business &mdash; combining my technical expertise and management
        background to create applications that target real world problems. Even
        though the tech industry is becoming more saturated, I still believe
        that there are tons of{" "}
        <BackgroundLink href="https://en.wikipedia.org/wiki/Blue_Ocean_Strategy">
          Blue Oceans
        </BackgroundLink>{" "}
        out there for me to discover.
      </BackgroundParagraph>
      <BackgroundParagraph>
        When I'm not in front of a computer, I'm probably dancing, looking for
        new restaurants, or taking pictures for my friends.
      </BackgroundParagraph>
    </SectionContent>
  </Section>
);

export default Background;
