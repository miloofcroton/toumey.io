/** @jsx jsx */
import { jsx } from '@emotion/core';
// import React from 'react';
import Layout from '../../../style/layouts/main';
import Profile from './Profile';
import Greeting from './Greeting';

const Page = ({ meta, children }) => {
  return (
    <Layout pageTitle={meta.title}>
      <article>
        <header css={{
          marginBottom: '2em'
        }}>
          <h1>{meta.title}</h1>
        </header>
        <div css={{
            // 'span': {
            //   margin: '50px auto',
            //   fontSize: '30px',
            // },
            // 'p': {
            //   width: '60%',
            //   textAlign: 'left',
            //   margin: '25px auto',
            // }
        }}>
          <Greeting/>
          {children}
        </div>
      </article>
      <Profile/>
    </Layout>
  );
};

export default Page;
