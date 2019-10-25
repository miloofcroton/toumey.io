/** @jsx jsx */
import { jsx } from '@emotion/core';
// import React from 'react';
import Logo from './Logo';
import IconList from './IconList';
import Statements from './Statements';

const Footer = () => {
  return (
    <footer css={{
      color: 'black',
      'p': {
        margin: '5px auto',
      }
    }}>
      <Logo />
      <Statements />
      <IconList />
    </footer>
  );
};

export default Footer;
