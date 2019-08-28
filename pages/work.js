import Layout from '../components/Layout'
import Head from 'next/head'
import Link from 'next/link'

const Work = () => (
  <Layout heading="work">
    <Head>
      <title>KD :: Work</title>
    </Head>
    <h4>developed</h4>
    <ul>
      <li><Link href=""><a>LazyGit</a></Link> :: cut short long git commands</li>
      <li><Link href=""><a>RevealURL</a></Link> :: Never open a link without knowing</li>
    </ul>

    <h4>designed</h4>
    <ul className="designed">
      <li>
        <img src="/static/thumbnails/revealurl.png"/>
        <Link href=""><a>RevealUrl</a></Link>
      </li>
      <li>
        <img src="/static/thumbnails/revealurl.png"/>
        <Link href=""><a>RevealUrl</a></Link>
      </li>
      <li>
        <img src="/static/thumbnails/revealurl.png"/>
        <Link href=""><a>RevealUrl</a></Link>
      </li>
      <li>
        <img src="/static/thumbnails/revealurl.png"/>
        <Link href=""><a>RevealUrl</a></Link>
      </li>
      <li>
        <img src="/static/thumbnails/revealurl.png"/>
        <Link href=""><a>RevealUrl</a></Link>
      </li>
    </ul>

    <style jsx>{`
    h4 {
      margin-top: 40px;
    }
    ul {
      font-size: 24px;
      margin-top: 32px;
    }
    li {
      margin: 10px auto;
    }
    a {
      text-transform: capitalize
    }

    .designed {
      display: flex;
      flex-direction: row;
      max-width: 1080px;
      flex-wrap: wrap;
    }

    .designed li {
      margin: 40px;
    }

    img + a {
      font-size: 16px;
    }

    li > img {
      display: block;
      width: 280px;
    }
    `}</style>
  </Layout>
);

export default Work;