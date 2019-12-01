import React from 'react';
import Layout from '../../../style/layouts/Main';
import Greeting from './Greeting';

const PageLayout = ({ meta, children }) => {
  return (
    <Layout pageTitle={meta.title}>
      <article>
        <div css={{
          'span': {
            margin: '50px auto',
            fontSize: '30px',
          },
          'p': {
            width: '60%',
            textAlign: 'left',
            margin: '25px auto',
          }
        }}>
          <Greeting/>
          {children}
        </div>
      </article>
    </Layout>
  );
};

export default PageLayout;
