import styled from "styled-components";
import colors from "../constants/colors";
import breakpoints from "../constants/breakpoints";

const Section = styled.section`
  width: 100%;
  padding: 120px 100px;
  max-width: 1440px;
  display: flex;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}px) {
    padding: 50px 50px;
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 50px 35px;
  }
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

  @media (max-width: ${breakpoints.tablet}px) {
    text-align: left;
  }
`;

const SectionContent = styled.div`
  font-weight: 300;
  font-size: 1rem;
  width: 100%;
  max-width: 650px;

  @media (max-width: ${breakpoints.tablet}px) {
    padding-top: 30px;
    padding-left: 50px;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    padding-top: 30px;
    padding-left: 30px;
  }
`;

export { Section, SectionTitle, SectionContent };
