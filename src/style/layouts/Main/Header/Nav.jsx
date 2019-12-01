import React from 'react';
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

const ROUTES = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  // {
  //   href: '/play',
  //   label: 'Play',
  // },
  // {
  //   href: '/thoughts',
  //   label: 'Thoughts',
  // },
];

const Nav = () => {

  return (
    <nav css={{
      margin: '0px 0px 15px 0px',
    }}>
      {
        ROUTES.map((route, i) => (
          <Link key={i} href={route.href} as={route.href}>
            <a css={linkStyles}>
              {route.label}
            </a>
          </Link>
        ))
      }
    </nav>
  );
};

export default Nav;
