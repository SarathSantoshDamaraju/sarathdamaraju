import React from 'react';
import App from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';

import '../styles/base.scss';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', () => NProgress.start());
    Router.events.on('routeChangeComplete', () => NProgress.done());
    Router.events.on('routeChangeError', () => NProgress.done());
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        {/* eslint-disable */}
        <Component {...pageProps} />
      </>
    );
  }
}
