import styled, { keyframes } from "styled-components";
import waveImg from "../img/wave.png";
import pointrightImg from "../img/pointright.png";
import heroImg from "../img/hero.jpg";
import colors from "../constants/colors";
import breakpoints from "../constants/breakpoints";

const HeroContainer = styled.section`
  width: 100%;
  padding: 120px 100px;
  height: 100vh;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  gap: 4%;

  @media (max-width: ${breakpoints.tablet}px) {
    flex-direction: column-reverse;
    height: 100%;
    padding: 100px 60px;
  }
`;

const HeadlineWrapper = styled.div`
  flex-direction: column;
  justify-content: space-around;
  width: 48%;
  display: flex;

  @media (max-width: ${breakpoints.tablet}px) {
    width: 100%;
  }
`;

const Headline = styled.h1`
  font-size: 2.5rem;

  @media (max-width: ${breakpoints.largeDesktop}px) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.desktop}px) {
    font-size: 1.75rem;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 2rem;
  }
`;

const wave = keyframes`
  from { transform: none; }
  15% { transform: translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg); }
  30% { transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 7deg); }
  45% { transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg); }
  60% { transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg); }
  75% { transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg); }
  to { transform: none; }
`;

const WaveEmoji = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-bottom: -2px;

  &:hover {
    animation: ${wave} 1s ease-in-out infinite; /* Apply the animation on hover */
  }
`;

const Tagline = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  max-width: 700px;

  @media (max-width: ${breakpoints.largeDesktop}px) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.desktop}px) {
    font-size: 1.75rem;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1.5rem;
  }
`;

const Name = styled.span`
  font-weight: 700;
`;

const Contact = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
`;

const point = keyframes`
  from { transform: none; }
  15% { transform: translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg); }
  30% { transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 7deg); }
  45% { transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg); }
  60% { transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg); }
  75% { transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg); }
  to { transform: none; }
`;

const PointerEmoji = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 5px;
  cursor: pointer;
  margin-bottom: -6px;

  &:hover {
    animation: ${point} 1s ease-in-out infinite; /* Apply the animation on hover */
  }
`;

const HighlightLink = styled.a`
  font-weight: 400;
  display: inline-block;
  padding: 2px 3px;
  box-shadow: inset 0 -3px 0 ${colors.blue};
  transition: box-shadow 0.3s ease, color 0.3s ease;

  &:hover {
    box-shadow: inset 0 -33px 0 0 ${colors.blue};
    color: ${colors.white};
  }
`;

const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  max-width: 550px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
`;

const Hero = () => (
  <HeroContainer id="hero">
    <HeadlineWrapper>
      <Headline>
        <strong> Hello!你好！</strong>
        <WaveEmoji src={waveImg} alt="" />
      </Headline>

      <Tagline>
        I'm
        <Name> Dylan Qian</Name>, a San Francisco based full-stack software
        engineer and dancer who focuses on building creative and beautiful
        interfaces 👨🏻‍💻
      </Tagline>

      <Contact>
        <span>Get in touch </span>
        <PointerEmoji src={pointrightImg} alt="" />
        <span>
          <HighlightLink
            href="mHighlightLinkilto:dylan.qian.29@gmail.com"
            className="highlight-link"
          >
            dylan.qian.29@gmail.com
          </HighlightLink>
        </span>
      </Contact>
    </HeadlineWrapper>
    <HeroImageWrapper className="picture">
      <HeroImage src={heroImg} alt="Hero img" />
    </HeroImageWrapper>
  </HeroContainer>
);

export default Hero;
