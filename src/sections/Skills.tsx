import styled from "styled-components";
import colors from "../constants/colors";
import { Section, SectionTitle, SectionContent } from "../components/Section";
import breakpoints from "../constants/breakpoints";

const SkillsContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const SkillsCategory = styled.div`
  @media (max-width: ${breakpoints.desktop}px) {
    flex-basis: 45%;
  }
`;

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

const Skills = () => (
  <Section id="skills">
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
              <SkillLogo className="devicon-jasmine-plain"></SkillLogo> Jasmine
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
              <SkillLogo className="devicon-webpack-plain"></SkillLogo> Webpack
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-docker-plain"></SkillLogo> Docker
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-heroku-original"></SkillLogo> Heroku
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
              <SkillLogo className="devicon-mongodb-plain"></SkillLogo> MongoDB
            </SkillsCategoryItem>
          </ul>
        </SkillsCategory>
      </SkillsContent>
    </SectionContent>
  </Section>
);

export default Skills;
