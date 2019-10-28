/** @jsx jsx */
import { jsx } from '@emotion/core';
// import React from 'react';
import Card from './Card';

const PreviewGrid = ({ posts }) => {
  return (
    <ul css={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(375px, 1fr))',
    }}>
      {posts.map(({ node: post }) => (
        <Card key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PreviewGrid;
