import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import NProgress from 'nprogress'

import Router from 'next/router'


export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {

    Router.events.on('routeChangeStart', url => {
      console.log(`Loading: ${url}`)
      NProgress.start()
    })
    Router.events.on('routeChangeComplete', () => NProgress.done())
    Router.events.on('routeChangeError', () => NProgress.done())
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}