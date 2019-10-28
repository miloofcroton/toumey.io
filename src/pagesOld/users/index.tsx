import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import Layout from 'style/layouts/Main';
import List from 'services/users/components/List';
import { User } from 'services/users/data/types';
import { fetchWrapper } from 'lib/data/fetch';

type Props = {
  items: User[];
  pathname: string;
};

const WithInitialProps: NextPage<Props> = ({ items, pathname }) => (
  <Layout pageTitle="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getInitialProps()</code>.
    </p>
    <p>You are currently on: {pathname}</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

/** Notes:
 * Example for including initial props in a Next.js function component page.
 * Don't forget to include the respective types for any props passed into the component. */
WithInitialProps.getInitialProps = async ({ pathname }) => {
  const items: User[] = await fetchWrapper(
    `http://localhost:${process.env.PORT}/api/users`,
  );

  return { items, pathname };
};

export default WithInitialProps;
