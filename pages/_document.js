// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel='stylesheet' type='text/css' href='/static/styles/nprogress.css' />
          <link rel='stylesheet' type='text/css' href='/static/styles/reboot.css' />
          <link rel='stylesheet' type='text/css' href='/static/styles/styles.css' />

          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}