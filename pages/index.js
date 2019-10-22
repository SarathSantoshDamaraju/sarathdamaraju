import React from 'react'

import Layout from '../components/Layout';
import Journalslist from '../static/content/journals/Journalslist';

const data = {
  name: 'Krishna Sarath',
  description: 'a JS dev — with No adjectives attached. Works primarily with web technologies. ',
}

const Index = () => (
  <Layout heading="" title="KD :: Portfolio">

    <section>
      <div className="details">
        <p>hi there 🖐️, i'm</p>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </div>

      <div className="recent-blog">
        <h4 className="page-subtitle">recent journal</h4>
        <h3>{Journalslist[0].name}</h3>
        <a href={Journalslist[0].link}>read now</a>
      </div>
    </section>

    {/* Local Styles */}

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
      .details {
        width: 50%
      }
      .details h1 {
        font-family: 'la-sonnabula';
        text-decoration: underline;
        color: #CB734D;
        text-transform: capitalize;
      }
      .recent-blog {
        width: 572px;
        min-height: 220px;
        border: 4px solid #CB734D;
        padding: 24px 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
      }
      @media only screen and (max-width: 991px) {
        .details {
          width: 100%;
        }
        section {
          height: 100vh;
        }
      }
    `}</style>

  </Layout>
)


export default Index;
