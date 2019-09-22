import { createGlobalStyle } from 'styled-components'

/**
 * @see https://fonts.google.com/specimen/Roboto?selection.family=Roboto:400,700
 *
 * @todo can update variable names as needed
 */
export const AppStyles = createGlobalStyle`
  :root {
    --color-blue: #23c0ff;
    --color-blue-dark: #20ade6;
    --color-orange: #f27059;
    --color-orange-dark: #da6550;
    --color-link: #000;
  }

  /* latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Lato Light'), local('Lato-Light'), url(https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Lato Light'), local('Lato-Light'), url(https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  html {
    box-sizing: border-box;
    background-color: #ECEFF1;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  html, body {
    margin: 0;
    min-height: 100vh;
    overflow-x: hidden;
  }
  body {
    padding: 0;
    font-family: "Roboto", "chaparral-pro", "Open Sans", "proxima-nova", "HelveticaNeue", "Helvetica Neue", "Helvetica", "Arial", sans-serif, serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }
  #__next {
    min-height: inherit;
  }
  button {
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    /* for input */
    -webkit-appearance: button;
    -moz-appearance: none;
    /* for button */
    user-select: none;
    justify-content: center;
    align-items: center;
  }
  li {
    list-style: none;
  }
`

/**
 * could also style outlines here
 */
export const BelowTheFoldStyles = createGlobalStyle`
  ::selection {
    color: #fff;
    background: rgba(0,0,0,.5);
    text-shadow: none;
  }
`
