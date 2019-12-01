import React from 'react';
import Logo from './Logo';
import Icons from './Icons';
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
      <Icons />
    </footer>
  );
};

export default Footer;
