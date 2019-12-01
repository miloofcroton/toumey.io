import React from 'react';

const Container = ({ children }) => (
  <React.Fragment>
    <div css={{
      // label: 'container',
      // maxWidth: '100rem',
      // margin: '0 auto',
      // padding: '0 1em',
    }}>
      {children}
    </div>
  </React.Fragment>
);

export default Container;
