import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

/** Notes:
 * _document is only rendered on the server side and not on the client side.
 * Event handlers like onClick can't be added to this file.
 */
 class MyDocument extends Document {
  static getInitialProps = async (ctx) =>{
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
