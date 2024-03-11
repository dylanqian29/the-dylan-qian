import { createGlobalStyle } from "styled-components";
import colors from "./constants/colors";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    line-height: 1.5;
  }

  body, html {
    margin: 0;
    padding: 0;
    background-color: ${colors.white};
    font-family: "Apercu", "Source Sans Pro", system, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
    width: 100%;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
