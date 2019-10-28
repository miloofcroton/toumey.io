/** @jsx jsx */
import { jsx } from '@emotion/core';
// import React from 'react';
import Link from 'next/link';

const PreviewCard = ({ post }) => {
  return (
    <div css={{
      border: '1px solid #333',
      padding: '1em',
      margin: '1em',
    }}>
      <Link href={post.fields.id}>
        <a css={{ textDecoration: 'none', color: 'inherit' }}>
          <h3 css={{ textDecoration: 'underline' }} >
            {post.frontmatter.title}
          </h3>
          <small css={{ display: 'block' }}>
            {post.frontmatter.date}
          </small>
          <img src=
            {post.frontmatter.image.childImageSharp.fixed.src}
          />
        </a>
      </Link>
      <p>{post.excerpt}</p>
    </div>
  );
};

export default PreviewCard;
