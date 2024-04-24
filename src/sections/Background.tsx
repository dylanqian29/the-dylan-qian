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
        I'm currently leading frontend development for an innovative startup in
        the burgeoning crypto gaming industry (🤫details are currently under
        wraps🤫). Prior to this role, I embarked on a transformative six-month
        sabbatical, traveling the globe and immersing myself in diverse
        experiences. Concurrently, I expanded my real estate portfolio by
        launching my very first Airbnb, adding another dimension to my
        investment endeavors. Despite their apparent differences, both ventures
        share a common commitment: providing unparalleled experiences. I firmly
        believe that users engaging with an application deserve nothing less
        than an intuitive, 5⭐️ hotel experience that not only evokes the
        comfort of home but also entices them to prolong their stay.
      </BackgroundParagraph>
      <BackgroundParagraph>
        Prior to my sabbatical, I held the position of #6 engineer at{" "}
        <BackgroundLink href="https://tryfinch.com/">Finch</BackgroundLink>,
        where I led the Experience Team in crafting seamless login experiences
        and informative yet uncluttered dashboards. Our focus was to empower
        users with transparante and clear insights into the status of their API
        data. During my tenure, Finch achieved significant milestones, securing{" "}
        <BackgroundLink href="https://www.tryfinch.com/blog/finch-raises-15m-series-a-to-power-the-future-of-connected-and-programmable-employment">
          Series A funding of $15M
        </BackgroundLink>{" "}
        and subsequently,{" "}
        <BackgroundLink href="https://www.tryfinch.com/blog/announcing-finchs-40m-series-b">
          Series B funding totaling $40M.
        </BackgroundLink>{" "}
      </BackgroundParagraph>
      <BackgroundParagraph>
        Transitioning from my early career, I advanced to the role of
        Engineering Manager at{" "}
        <BackgroundLink href="https://www.hackreactor.com/">
          OneLogin
        </BackgroundLink>
        , leading a dynamic team of 8 engineers. Together, we developed
        applications that streamlined and fortified access to corporate systems.
        Our solutions not only simplified the authentication process but also
        empowered companies to effortlessly construct customized login pages for
        their clientele.
      </BackgroundParagraph>
      <BackgroundParagraph>
        As a software engineer, I thrive on bridging the gap between engineering
        and business realms. By leveraging my technical expertise and management
        background, I develop applications that address real-world challenges
        and deliver unparalleled user experiences.
      </BackgroundParagraph>
      <BackgroundParagraph>
        When I'm not coding, I'm on the hunt for my next adventure—whether it's
        exploring new destinations, embarking on outdoor escapades, or immersing
        myself in diverse cultures. Each journey fuels my passion for discovery
        and the thrill of new experiences.
      </BackgroundParagraph>
    </SectionContent>
  </Section>
);

export default Background;
