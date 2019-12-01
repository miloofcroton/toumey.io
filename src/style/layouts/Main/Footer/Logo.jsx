import React from 'react';

const defaultLogo = '/static/logo/logo.png';
const altLogo = '/static/logo/logo-alt1.png';

const Logo = () => {

  const logoMouseOver = ({ target }) => (target.src = altLogo);
  const logoMouseOut = ({ target }) => (target.src = defaultLogo);

  return (
    <a href="https://www.youtube.com/watch?v=kvDMlk3kSYg">
      <img
        css={{
          width: '50px',
          paddingTop: '10px',
        }}
        alt="logo"
        src={defaultLogo}
        onMouseOver={logoMouseOver}
        onMouseOut={logoMouseOut}
      />
    </a>
  );
};

export default Logo;
