/*
*   Created to control loading scripts on a page
*/

import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import ReactGA from 'react-ga';
console.log("TESTING!");
ReactGA.initialize('UA-130936580-1', {"debug":true,"gaOptions":{"cookieDomain":"none"}});
ReactGA.pageview('/about');

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
           <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
        </body>
      </html>
    );
  }
}
