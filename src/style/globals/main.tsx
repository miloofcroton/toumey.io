import React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyle = () => (
  <Global
    styles={(theme) => {

      return css`

        @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono');

        #__next {
          display: flex;
          flex-direction: column;
          height: 100vh;
          justify-content: space-between;
          text-align: center;
          margin: 0px;
        }

        html {
          box-sizing: border-box;
          font-size: 10px;
        }

        *, *:before, *:after {
          font-family: 'Roboto Mono', monospace;
          box-sizing: border-box;
        }

        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          padding: 0px;
          margin: 0px;
          font-size: 1.5rem;
          line-height: 2;
        }

        a {
          cursor: pointer;
        }
      `;
    }}
  />
);

export default GlobalStyle;
