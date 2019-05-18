import { createGlobalStyle } from 'styled-components'

/**
 * @see https://fonts.google.com/specimen/Roboto?selection.family=Roboto:400,700
 */
export const AppStyles = createGlobalStyle`
  :root {
    --color-orange: #ff5722;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  html {
    box-sizing: border-box;
    background-color: var(--color-orange);
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
    background-color: #eee;
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
