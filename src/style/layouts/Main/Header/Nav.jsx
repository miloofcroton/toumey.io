/** @jsx jsx */
import { jsx } from '@emotion/core';
// import React from 'react';
import Link from 'next/link';

const linkStyles = (theme) => ({
  label: 'nav-links',
  boxSizing: 'border-box',
  margin: '5px',
  padding: '8px',
  textDecoration: 'none',
  fontSize: '18px',
  color: 'black',
  backgroundColor: theme.darkgreen,
  border: `1px solid ${theme.black}`,

  '&:hover': {
    backgroundColor: theme.lightgreen,
  }
});

const Nav = () => {

  return (
    <nav css={{
      margin: '0px 0px 15px 0px',
    }}>
      <Link href="/"><a css={linkStyles}>Home</a></Link>
      <Link href="/about"><a css={linkStyles}>About</a></Link>
    </nav>
  );
};

export default Nav;
