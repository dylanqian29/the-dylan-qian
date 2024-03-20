import styled from "styled-components";
import colors from "../constants/colors";

const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1440px;
  padding: 50px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.div`
  font-weight: 700;
  width: 200px;
`;

const Links = styled.div`
  color: ${colors.blue};
`;

const Link = styled.a`
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 15px;
  outline: none;

  &:after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${colors.blue};
    content: "";
    opacity: 0;
    transition: height 0.3s, opacity 0.3s, transform 0.3s;
    transform: translateY(-5px);
  }
  &:hover:after,
  &:focus:after {
    height: 2px;
    border-radius: 3px;
    opacity: 1;
    transform: translateY(0px);
  }
`;

const SocialName = styled.span`
  font-size: 0.9rem;
  display: inline;
  letter-spacing: 1px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        <div>Developed by</div>
        <div>Dylan Qian 🕺🏻 2024</div>
      </Copyright>
      <Links>
        <Link href="mailto:dylan.qian.29@gmail.com" title="email">
          <SocialName>Email</SocialName>
        </Link>
        <Link
          href="https://www.linkedin.com/in/dylanqian29/"
          title="linkedin"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SocialName>LinkedIn</SocialName>
        </Link>
        <Link
          href="https://github.com/dylanqian29"
          title="github"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SocialName>Github</SocialName>
        </Link>
        <Link
          href="https://www.instagram.com/dylanqian/"
          title="instagram"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SocialName>Instagram</SocialName>
        </Link>
      </Links>
    </FooterContainer>
  );
};

export default Footer;
