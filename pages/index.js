import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/Layout';


const Index = () => (
  <Layout  heading="">
    <Head>
      <title>KD :: portfolio</title>
    </Head>

    <section>
      <div className="details">
        <p>hi there 🖐️, i'm</p>
        <h1>Krishna Damaraju</h1>
        <p>a JS dev — with No adjectives attached. Works primarily <br/> with web technologies. </p>
      </div>

      <div className="recent-blog">
        <h4 className="page-subtitle">recent journal</h4>
        <h3>Data driven SEO for start-ups</h3>
        <a href="https://medium.com/hello-meets/data-driven-seo-for-start-ups-fa926c9040e1" target="_blank">read now</a>
      </div>
    </section>

    <style jsx>{` 
    section {
      height: 570px;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      -webkit-flex-flow: row wrap;
    }
    .details h1 {
      font-family: 'la-sonnabula';
      text-decoration: underline;
      color: #CB734D;
      text-transform: capitalize;
    }
    .recent-blog {
      width: 572px;
      height: 220px;
      border: 4px solid #CB734D;
      padding: 24px 32px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    }
    `}</style>
  </Layout>
)

export default Index;
