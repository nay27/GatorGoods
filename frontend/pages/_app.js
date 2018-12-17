/*
*   Loads page props
*/

import React from "react";
import App, { Container } from "next/app";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Page from "../components/Page";
import "isomorphic-fetch";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Page {...pageProps}>
          <Component {...pageProps} />
        </Page>
      </Container>
    );
  }
}
