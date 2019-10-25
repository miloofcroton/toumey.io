/** @jsx jsx */
import { jsx } from '@emotion/core';
// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const IconCard = ({ detail }) => {
  return (
    <li css={{
      display: 'inline',
      margin: 5,
      listStyle: 'none',
      fontSize: 24,
    }}>
      <a
        css={{ color: 'black' }}
        href={detail.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={detail.name}
      >
        <FontAwesomeIcon css={{ height: 24 }} icon={detail.icon} />
        <span css={{ display: 'none' }}>{detail.name}</span>
      </a>
    </li>
  );
};

export default IconCard;
