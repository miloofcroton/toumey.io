import React from 'react';
import App from 'next/app';

// Redux
import withReduxStore from '../lib/components/shell/withReduxStore';
import { Provider } from 'react-redux';

// Emotion
import GlobalStyle from 'style/globals/main';
import main from 'style/themes/main';
import { ThemeProvider } from 'emotion-theming';

/** Notes:
 *  Only uncomment getInitialProps if you have blocking data requirements for
 every single page in your application. This disables the ability to
 perform automatic static optimization, causing every page in your app to
 be server-side rendered.
 */
class MyApp extends App {
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //   return { ...appProps };
  // }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <ThemeProvider theme={main}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
