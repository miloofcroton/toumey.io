import React from 'react';
import { connect } from 'react-redux';
import { startClock, serverRenderClock } from 'servicesOld/clocks/data/actions';
import Examples from '../../servicesOld/clocks/components/Examples';
import Layout from 'style/layouts/Main';

const UserIndex = ({ dispatch }) => {

  let timer;

  React.useEffect(() => {
    timer = startClock(dispatch);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Layout pageTitle="A Random Clock and Counter Example">
      <Examples />
    </Layout>
  );
};

UserIndex.getInitialProps = ({ reduxStore, req }) => {
  const isServer = !!req;
  reduxStore.dispatch(serverRenderClock(isServer));

  return {};
};

export default connect()(UserIndex);
