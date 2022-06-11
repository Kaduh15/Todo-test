import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;

    box-sizing: border-box;
  }

  /* body {
    background: #031a04;
    color: #fff;
  } */

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 
`;

export default GlobalStyle;