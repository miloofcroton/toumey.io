import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../../style/layouts/Main';
import List from '../../services/play/components/List';
import { Post } from '../../services/play/data/types';
import { fetchWrapper } from '../../lib/data/fetch';

interface PlayIndexProps {
  items: Post[];
  pathname: string;
}

const PlayIndex: NextPage<PlayIndexProps> = (props) => {
  const { items, pathname } = props;
  console.log(props);

  return (
  <Layout pageTitle="Play">
    <h1>Latest Goings-on</h1>

    <p>You are currently on: {pathname}</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
  );
};

/** Notes:
 * Example for including initial props in a Next.js function component page.
 * Don't forget to include the respective types for any props passed into the component. */
PlayIndex.getInitialProps = async ({ pathname }) => {
  const items: Post[] = await fetchWrapper(
    `http://localhost:${process.env.PORT}/api/play`,
  );

  return { items, pathname };
};

export default PlayIndex;
