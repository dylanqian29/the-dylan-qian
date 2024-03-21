import styled from "styled-components";
import colors from "../constants/colors";
import sun from "../img/sun.svg";
import moon from "../img/moon.svg";

const SwitchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 30px;
`;

const Emoji = styled.div`
  width: 17px;
  height: 17px;
  display: inline-block;
`;

const SunEmoji = styled(Emoji)`
  background: url(${sun}) no-repeat center;
  background-size: 100%;
`;

const MoonEmoji = styled(Emoji)`
  background: url(${moon}) no-repeat center;
  background-size: 100%;
`;

const ToggleWrapper = styled.div`
  margin: 10px;
`;

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;
  &:checked + label {
    background: ${colors.green};
  }
  &:checked + label:after {
    left: calc(100% - 3px);
    transform: translateX(-100%);
  }
`;

const SwitchLabel = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 45px;
  height: 25px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 19px;
    height: 19px;
    background: #fff;
    border-radius: 100%;
  }
`;

const Switch = () => {
  return (
    <SwitchWrapper>
      <ToggleWrapper className="toggle-wrapper">
        {/* <img src={sun} alt="sun" /> */}
        <SunEmoji />
        <SwitchInput id="switch" type="checkbox" />
        <SwitchLabel htmlFor="switch" id="toggle">
          Toggle
        </SwitchLabel>
        <MoonEmoji />
        {/* <img src={moon} alt="moon" /> */}
      </ToggleWrapper>
    </SwitchWrapper>
  );
};

export default Switch;
