import styled from "styled-components";
import colors from "../constants/colors";

const BackgroundAndSkillContainer = styled.div`
  width: 100%;
  padding: 120px 100px;
  height: 100vh;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 100px 170px;
`;

const SectionTitle = styled.div`
  flex-shrink: 0;
  width: 200px;
  margin-right: 70px;
  color: ${colors.blue};
  text-transform: uppercase;
  text-align: right;
  font-weight: 700;
  letter-spacing: 2px;
`;

const SectionContent = styled.div`
  font-weight: 300;
  font-size: 1rem;
  width: 100%;
  max-width: 650px;
`;

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

const SkillsContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SkillsCategory = styled.div``;

const SkillsCeteogryLabel = styled.div`
  font-weight: 700;
  color: ${colors.dark};
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const SkillsCategoryItem = styled.li`
  margin: 5px 0;
  font-size: 0.9rem;
`;

const SkillLogo = styled.i`
  margin-right: 5px;
`;

const PostmanLogo = styled.img`
  margin-right: 9px;
  margin-top: 2px;
  width: 14.5px;
`;

const BackgroundAndSkill = () => (
  <BackgroundAndSkillContainer id="background-and-skill">
    <Section>
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
          found my passion in creating and optimizing web applications, which
          has always been something I wanted to pursue during college and grad
          school.
        </BackgroundParagraph>
        <BackgroundParagraph>
          As a software engineer, I enjoy bridging the gap between engineering
          and business &mdash; combining my technical expertise and management
          background to create applications that target real world problems.
          Even though the tech industry is becoming more saturated, I still
          believe that there are tons of{" "}
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
    <Section>
      <SectionTitle>Skills</SectionTitle>
      <SectionContent>
        <SkillsContent>
          <SkillsCategory>
            <SkillsCeteogryLabel>Languages</SkillsCeteogryLabel>
            <ul>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-javascript-plain"></SkillLogo>{" "}
                JavaScript (ES6)
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-ruby-plain"></SkillLogo> Ruby
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-html5-plain"></SkillLogo> HTML5
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-css3-plain"></SkillLogo> CSS3
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-sass-original"></SkillLogo> Sass
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-python-plain"></SkillLogo> Python
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-postgresql-plain"></SkillLogo> SQL
              </SkillsCategoryItem>
            </ul>
          </SkillsCategory>
          <SkillsCategory>
            <SkillsCeteogryLabel>Frameworks</SkillsCeteogryLabel>
            <ul>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-react-original"></SkillLogo> React
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-nodejs-plain"></SkillLogo> Node.js
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-express-original"></SkillLogo>{" "}
                Express
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-rails-plain"></SkillLogo> Ruby on
                Rails
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-mocha-plain"></SkillLogo> Mocha
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-jasmine-plain"></SkillLogo>{" "}
                Jasmine
              </SkillsCategoryItem>
            </ul>
          </SkillsCategory>
          <SkillsCategory>
            <SkillsCeteogryLabel>Tools</SkillsCeteogryLabel>
            <ul>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-amazonwebservices-original"></SkillLogo>{" "}
                AWS
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-webpack-plain"></SkillLogo>{" "}
                Webpack
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-docker-plain"></SkillLogo> Docker
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-heroku-original"></SkillLogo>{" "}
                Heroku
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-redis-plain"></SkillLogo> Redis
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-bootstrap-plain"></SkillLogo>{" "}
                Bootstrap
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-babel-plain"></SkillLogo> Babel
              </SkillsCategoryItem>
            </ul>
          </SkillsCategory>
          <SkillsCategory>
            <SkillsCeteogryLabel>Others</SkillsCeteogryLabel>
            <ul>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-git-plain"></SkillLogo> Git
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-github-plain"></SkillLogo> Github
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-chrome-plain"></SkillLogo> Chrome
                DevTools
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <PostmanLogo
                  src="https://s3-us-west-1.amazonaws.com/thedylanqian/postman.jpg"
                  alt="postman logo"
                />
                Postman
              </SkillsCategoryItem>
              <SkillsCategoryItem>
                <SkillLogo className="devicon-mongodb-plain"></SkillLogo>{" "}
                MongoDB
              </SkillsCategoryItem>
            </ul>
          </SkillsCategory>
        </SkillsContent>
      </SectionContent>
    </Section>
  </BackgroundAndSkillContainer>
);

export default BackgroundAndSkill;
