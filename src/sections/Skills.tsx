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
  margin-right: 8px;
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
              <SkillLogo className="devicon-javascript-plain"></SkillLogo>
              JavaScript
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-html5-plain"></SkillLogo>HTML5
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-css3-plain"></SkillLogo>CSS3
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-typescript-plain"></SkillLogo>
              TypeScript
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-postgresql-plain"></SkillLogo>SQL
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-python-plain"></SkillLogo>Python
            </SkillsCategoryItem>
          </ul>
        </SkillsCategory>
        <SkillsCategory>
          <SkillsCeteogryLabel>Frameworks</SkillsCeteogryLabel>
          <ul>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-react-original"></SkillLogo>React
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-react-original"></SkillLogo>React
              Native
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-bootstrap-plain"></SkillLogo>
              Bootstrap
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-tailwindcss-original"></SkillLogo>
              Tailwind
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-nodejs-plain"></SkillLogo>Node.js
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-jest-plain"></SkillLogo>Jest
            </SkillsCategoryItem>
          </ul>
        </SkillsCategory>
        <SkillsCategory>
          <SkillsCeteogryLabel>Tools</SkillsCeteogryLabel>
          <ul>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-amazonwebservices-plain-wordmark"></SkillLogo>
              AWS
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-docker-plain"></SkillLogo>Docker
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-netlify-plain"></SkillLogo>
              Netlify
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-vercel-original colored"></SkillLogo>
              Vercel
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-redis-plain"></SkillLogo>Redis
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-postman-plain"></SkillLogo>Postman
            </SkillsCategoryItem>
          </ul>
        </SkillsCategory>
        <SkillsCategory>
          <SkillsCeteogryLabel>Others</SkillsCeteogryLabel>
          <ul>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-git-plain"></SkillLogo>Git
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-github-plain"></SkillLogo>Github
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-vscode-plain"></SkillLogo>VS Code
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-vite-original"></SkillLogo>Vite
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-nextjs-plain"></SkillLogo>Next.js
            </SkillsCategoryItem>
            <SkillsCategoryItem>
              <SkillLogo className="devicon-mongodb-plain"></SkillLogo>MongoDB
            </SkillsCategoryItem>
          </ul>
        </SkillsCategory>
      </SkillsContent>
    </SectionContent>
  </Section>
);

export default Skills;
