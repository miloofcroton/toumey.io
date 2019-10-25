/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

const defaultLogo = '/static/logo/logo.png';
const altLogo = '/static/logo/logo-alt1.png';

export default class Logo extends React.PureComponent {

  logoMouseOver = ({ target }) => (target.src = altLogo);
  logoMouseOut = ({ target }) => (target.src = defaultLogo);

  render() {
    return (
      <a href="https://www.youtube.com/watch?v=kvDMlk3kSYg">
        <img
          css={{
            width: '50px',
            paddingTop: '10px',
          }}
          alt="logo"
          src={defaultLogo}
          onMouseOver={this.logoMouseOver}
          onMouseOut={this.logoMouseOut}
        />
      </a>
    );
  }
}
