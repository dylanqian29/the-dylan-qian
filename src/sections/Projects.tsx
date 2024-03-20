import styled from "styled-components";
import { Section, SectionTitle, SectionContent } from "../components/Section";
import dataSyncUI from "../img/data-sync-ui.png";
import dataSync from "../img/data-sync.png";
import authConfig from "../img/auth-config.png";

const Project = styled.div`
  display: flex;
  margin-bottom: 100px;
  width: 125%;
`;

const ProjectFigure = styled.figure`
  max-width: 700px;
  overflow: visible;
  margin: 0;
  cursor: pointer;
`;

const ProjectImg = styled.img`
  max-width: 100%;
`;

const ProjectFigCaption = styled.figcaption`
  width: 125px;
  flex-shrink: 0;
  margin-left: 30px;
`;

const ProjectName = styled.div`
  font-weight: 700;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 0.85rem;
  line-height: 1.3;
`;

const Projects = () => (
  <Section id="projects">
    <SectionTitle>Projects</SectionTitle>
    <SectionContent>
      <Project>
        <ProjectFigure>
          <a
            href="https://www.tryfinch.com/blog/available-now-view-data-syncs-in-a-brand-new-interface"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectImg src={dataSyncUI} alt="Data Sync UI mockup" />
          </a>
        </ProjectFigure>
        <ProjectFigCaption>
          <ProjectName>Data Sync UI</ProjectName>
          <ProjectDescription>
            Deliver a user-friendly dashboard for monitoring scheduled and
            requested data syncs. Customers can now view and manage their data
            all in one screen
          </ProjectDescription>
        </ProjectFigCaption>
      </Project>

      <Project>
        <ProjectFigure>
          <a
            href="https://www.tryfinch.com/blog/introducing-data-refresh-on-demand-data-syncs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectImg src={dataSync} alt="Data Sync mockup" />
          </a>
        </ProjectFigure>
        <ProjectFigCaption>
          <ProjectName>Data Sync</ProjectName>
          <ProjectDescription>
            Reduce latency significantly (99% for many payroll providers such as
            Gusto). Enable enable quick retrieval of company, directory, and pay
            statements within secs.
          </ProjectDescription>
        </ProjectFigCaption>
      </Project>

      <Project>
        <ProjectFigure>
          <a
            href="https://www.tryfinch.com/blog/connect-receives-two-major-upgrades-authentication-fallback-and-configurability"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectImg
              src={authConfig}
              alt="Authentication Configurability Mockup"
            />
          </a>
        </ProjectFigure>
        <ProjectFigCaption>
          <ProjectName>Authentication Configurability</ProjectName>
          <ProjectDescription>
            Offer configurability options in Connect across all automated
            providers for increased flexibility. Set the fundation for scalable
            and customizable experience for each application.
          </ProjectDescription>
        </ProjectFigCaption>
      </Project>
    </SectionContent>
  </Section>
);

export default Projects;
