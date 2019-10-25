import React, { Fragment } from 'react';
import Card from './Card';

const links = [
  {
    to: '/work',
    src: '/static/categories/code.jpg',
    alt: 'code',
    text: 'Work',
  },
  {
    to: '/play',
    src: '/static/categories/nature.jpg',
    alt: 'nature',
    text: 'Play',
  },
  {
    to: '/thoughts',
    src: '/static/categories/thinker.jpg',
    alt: 'thinker',
    text: 'Thoughts',
  }
];

const List = () => {

  const tiles = links.map((details) => <Card key={details.text} details={details} />);

  return (
    <Fragment>
      {tiles}
    </Fragment>
  );
};

export default List;
