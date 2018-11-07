import React from "react";
import App, { Container } from "next/app";
import styled from "styled-components";
import Header from "../components/Header";

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Header />
        <ContentContainer>
          <Component {...pageProps} />
        </ContentContainer>
      </Container>
    );
  }
}
