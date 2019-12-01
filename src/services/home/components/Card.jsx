import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const TileCard = ({ details }) => {
  return (
    <div css={{
      margin: '10px',
      border: '1px solid black',
      boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)',
      height: '100%',

      'a': {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: '50px',

        'img': {
          position: 'absolute',
          top: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'left',
          zIndex: '-1',
        },

        'span': {
          display: 'none',
          color: 'black',
        },

        '&:hover': {
          'img': {
            opacity: '0.5',
          },
          'span': {
            display: 'inline-block',
          },
        },
      },

    }}>
      <Link href={details.to}>
        <a>
          <img src={details.src} alt={details.alt} />
          <span>{details.text}</span>
        </a>
      </Link>
    </div>
  );
};


TileCard.propTypes = {
  linkDetails: PropTypes.object
};

export default TileCard;
