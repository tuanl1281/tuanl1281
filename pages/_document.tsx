import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="<dxanh97 />" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lekton:wght@400;500;700&display="
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Yeseva+One:wght@400;500;700&display="
            rel="stylesheet"
          />
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
