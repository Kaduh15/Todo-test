import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Helvetica, Sans-Serif;

    box-sizing: border-box;
  }

  html, body, #root {
    min-width: 100vh;
    min-height: 100vh;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  textarea:focus, input:focus, select:focus, input, button {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
`;

export default GlobalStyle;