/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Title from './Title';

const Header = ({ path }) => {
  return (
    <header>
      <Title path={path} />
      <Nav />
    </header>
  );
};

Header.propTypes = {
  path: PropTypes.string,
};

export default Header;
