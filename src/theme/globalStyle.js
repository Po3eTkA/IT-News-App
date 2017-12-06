import { injectGlobal } from 'styled-components';

/* esint-disable */

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lora:400,700&amp;subset=cyrillic');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    min-width: 320px;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    color: #312f38;
    background-color: #fff;
    font-family: Lora, serif;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    font-weight: 300;
  }

  li {
    list-style-type: none;
  }
  
  a {
    text-decoration: none;
    color: #312f38;
  }
  
  a:hover {
    text-decoration: underline;
    color: #424753;
  }
`;
