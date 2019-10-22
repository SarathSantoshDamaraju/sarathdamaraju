import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'

const Work = () => (
  <Layout heading="work">
    <Head>
      <title>KD :: Work</title>
    </Head>

    <ul className="thumbnails">
      <li>
        <img src="/static/images/thumbnails/caligator.png" />
        <Link href="https://www.producthunt.com/posts/caligator"><a>Caligator</a></Link>
      </li>

      <li>
        <img src="/static/images/thumbnails/lazygit.png" />
        <Link href="https://revealurl.xyz"><a>RevealUrl</a></Link>
      </li>

      <li>
        <img src="/static/images/thumbnails/revealurl.png" />
        <Link href="https://revealurl.xyz"><a>RevealUrl</a></Link>
      </li>

      <li>
        <img src="/static/images/thumbnails/portfolio.png" />
        <Link href="#"><a>My Portfolio</a></Link>
      </li>
    </ul>

    <style jsx>{`
    ul {
      font-size: 24px;
      margin: 32px 0px;
    }
    li {
      margin: 10px auto;
    }
    a {
      text-transform: capitalize
    }

    .thumbnails {
      display: flex;
      flex-direction: row;
      max-width: 1080px;
      flex-wrap: wrap;
    }

    .thumbnails li {
      margin: 0px 40px 40px 0px;
    }

    img + a {
      font-size: 16px;
    }

    li > img {
      display: block;
      width: 280px;
      max-height: 160px;
      border: 2px solid #CB734D;
    }
    `}</style>
  </Layout>
);

export default Work;