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
    color: ${colors.black};
  }

  #root {
    width: 100%;
    height: 100%;
  }

  a, a:visited  {
    text-decoration: none;
    color: inherit;
  }

  ::selection {
    background: ${colors.yellow};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }  
`;

export default GlobalStyle;
