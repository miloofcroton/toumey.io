import React from 'react';

const TechIcon = ({ tag }) => {

  const url = (tag) => {
    return '/static/tech/' + tag.toLowerCase() + '.png';
  };

  return (
    <img
      src={url(tag)}
      alt={tag}
      css={{
        width: 36,
        height: 36,
        margin: 5,
        display: 'inline-block',
      }}
    />
  );
};

export default TechIcon;
