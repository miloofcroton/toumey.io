import React from 'react';
import { NextPage, NextPageContext } from 'next';
import { Post } from '../../services/play/data/types';
import Layout from '../../style/layouts/Main';
import ListDetail from '../../services/play/components/Detail';
import { fetchWrapper } from '../../lib/data/fetch';

interface PlayPostProps {
  item?: Post;
  errors?: string;
};

const PlayPost: NextPage<PlayPostProps> = (props) => {

  const { item, errors } = props;

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
      pageTitle={`Play | ${ item ? item.title : 'Post'}`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  );
};

PlayPost.getInitialProps = async ({ query }: NextPageContext) => {
  try {
    const { id } = query;
    const item = await fetchWrapper(
      `http://localhost:${process.env.PORT}/api/play/${Array.isArray(id) ? id[0] : id}`,
    );
    return { item };
  }
  catch (err) {
    return { errors: err.message };
  }
};

export default PlayPost;