import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body, html, #root {
     height: 100%;
  }

  body {
     background-color: white;
  }

  button {
    cursor: pointer;
  }

`;
