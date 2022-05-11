import Document, { Head, Html, Main, NextScript } from 'next/document';
import { config, dom } from "@fortawesome/fontawesome-svg-core";

// Fix FontAwesome icons being too large on NextJS.
config.autoAddCss = false;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicons/favicon.png" />
          <link rel="apple-touch-icon" type="image/x-icon" href="/favicons/favicon.png" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet" /> 
          <style>{dom.css()}</style>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}