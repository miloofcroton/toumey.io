/** @jsx jsx */
import { jsx } from '@emotion/core';
// import React from 'react';
import List from './List';

const breakpoints = [700];

const mq = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
);

const Home = () => {
  return (
    <section css={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      flexGrow: 1,
      padding: 50,
      height: 600,

      [mq[0]]: {
        gridTemplateColumns: '1fr',
        padding: 0,

        span: {
          display: 'inline-block',
        }
      }
    }}>
      <List/>
    </section>
  );
};

export default Home;
