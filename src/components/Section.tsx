import styled from "styled-components";
import colors from "../constants/colors";

const Section = styled.section`
  width: 100%;
  padding: 120px 100px;
  max-width: 1440px;
  display: flex;
  justify-content: center;
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

export { Section, SectionTitle, SectionContent };
