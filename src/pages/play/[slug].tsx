import React from 'react';
import { NextPage, NextPageContext } from 'next';
import { PostResponse } from '../../services/play/data/types';
import Layout from '../../style/layouts/Main';
import ListDetail from '../../services/play/components/Detail';
import { fetchJson } from '../../lib/data/fetch';

interface PlayPostProps {
  item?: PostResponse;
  errors?: string;
};

const PlayPost: NextPage<PlayPostProps> = ({ item, errors }) => {

  if (errors) {
    return (
      <Layout pageTitle="Play | Error">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      pageTitle={`Play | ${ item ? item.frontmatter.title : 'Post'}`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  );
};

PlayPost.getInitialProps = async ({ query }: NextPageContext) => {
  try {
    const { slug } = query;
    const item = await fetchJson(`http://localhost:${process.env.PORT}/api/play/${slug}`);
    return { item };
  }
  catch (err) {
    return { errors: err.message };
  }
};

export default PlayPost;
