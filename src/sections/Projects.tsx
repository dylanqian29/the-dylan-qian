import styled from "styled-components";
import { Section, SectionTitle, SectionContent } from "../components/Section";
import dataSyncUI from "../img/data-sync-ui.png";
import dataSync from "../img/data-sync.png";
import authConfig from "../img/auth-config.png";
import finfareMoney from "../img/finfare-money.png";
import breakpoints from "../constants/breakpoints";
import { useState } from "react";

const Project = styled.div`
  display: flex;
  margin-bottom: 100px;
  width: 125%;

  @media (max-width: ${breakpoints.largeDesktop}px) {
    width: 115%;
  }

  @media (max-width: ${breakpoints.standardDesktop}px) {
    width: 110%;
  }

  @media (max-width: ${breakpoints.desktop}px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

const ProjectFigure = styled.figure`
  display: flex;
  max-width: 700px;
  overflow: visible;
  margin: 0;
  cursor: pointer;
  flex: 1;
`;

const ProjectImg = styled.img`
  max-width: 100%;
`;

const ProjectFigCaption = styled.figcaption`
  width: 125px;
  flex-shrink: 0;
  margin-left: 30px;

  @media (max-width: ${breakpoints.desktop}px) {
    width: 100%;
    margin-left: 0;
    margin-top: 30px;
  }
`;

const ProjectName = styled.div`
  font-weight: 700;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 0.85rem;
  line-height: 1.3;
`;

const IframeContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const WalnutEmbed = () => (
  <iframe
    src="https://app.teamwalnut.com/player/?demoId=b3f2873f-a87d-4376-8608-aee16f2d54ab&showGuide=true&showGuidesToolbar=true&showHotspots=true&source=app"
    allow="fullscreen"
    loading="eager"
    name="walnut_iframe"
    sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-downloads allow-popups-to-escape-sandbox"
    title="Walnut embedded demo"
  />
);

const Projects = () => {
  const [showWalnut, setShowWalnut] = useState(false);

  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <SectionContent>
        <Project>
          <ProjectFigure onClick={() => setShowWalnut(true)}>
            {showWalnut ? (
              <IframeContainer>
                <WalnutEmbed />
              </IframeContainer>
            ) : (
              <ProjectImg src={finfareMoney} alt="Walnut Demo Preview" />
            )}
          </ProjectFigure>
          <ProjectFigCaption>
            <ProjectName>Finfare Money 👈🏻 click to see preview</ProjectName>
            <ProjectDescription>
              Enable seamless business expense management with an intuitive
              dashboard that tracks spending, automates expense categorization,
              and rewards users effortlessly. Businesses can now manage finances
              while earning rewards without extra effort.
            </ProjectDescription>
          </ProjectFigCaption>
        </Project>
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
              Reduce latency significantly (99% for many payroll providers such
              as Gusto). Enable quick retrieval of company, directory, and pay
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
              providers for increased flexibility. Set the fundation for
              scalable and customizable experience for each application.
            </ProjectDescription>
          </ProjectFigCaption>
        </Project>
      </SectionContent>
    </Section>
  );
};

export default Projects;
