import React from 'react';
import App from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';

import '../styles/base.scss';

export default class MyApp extends App {
  theme = {
    foreground_color: '#026670',
    background_color: '#edeae5',
    font_color: '#000',
  };

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

    const currentTheme = window.localStorage.getItem('portfolio-theme');

    if (currentTheme) {
      this.theme = JSON.parse(currentTheme);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={this.theme}>
        {/* eslint-disable */}
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
