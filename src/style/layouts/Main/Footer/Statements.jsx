/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

const githubLinkStyles = {
  fontWeight: 'bolder',
  display: 'inline-block',
  textDecoration: 'none',
  color: 'black',
};

const Statements = () => {
  return (
    <React.Fragment>
      <p>Copyright &copy; 2018. All rights reserved.</p>
      <a
        css={githubLinkStyles}
        href="https://github.com/miloofcroton/gatsby-homepage"
      >
        This website
      </a>
      {' by '}
      <a
        css={githubLinkStyles}
        href="https://github.com/miloofcroton">
          me
      </a>.
    </React.Fragment>
  );
};

export default Statements;
