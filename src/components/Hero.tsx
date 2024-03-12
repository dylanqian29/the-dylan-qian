import styled, { keyframes } from "styled-components";
import waveImg from "../img/wave.png";
import pointrightImg from "../img/pointright.png";
import heroImg from "../img/hero.jpg";

const HeroContainer = styled.div`
  width: 100%;
  padding: 120px 100px;
  height: 100vh;
  max-width: 1440px;
  display: flex;
`;

const HeadlineWrapper = styled.div`
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  display: flex;
`;

const Headline = styled.h1`
  font-size: 2.5rem;
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

const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  max-width: 550px;
  margin: 0 auto;
`;

const HeroImage = styled.img`
  width: 100%;
`;

const Hero = () => (
  <HeroContainer>
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
          <a href="mailto:dylan.qian.29@gmail.com" className="highlight-link">
            dylan.qian.29@gmail.com
          </a>
        </span>
      </Contact>
    </HeadlineWrapper>
    <HeroImageWrapper className="picture">
      <HeroImage src={heroImg} alt="Hero img" />
    </HeroImageWrapper>
  </HeroContainer>
);

export default Hero;
