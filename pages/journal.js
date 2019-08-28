import Layout from '../components/Layout'
import Head from 'next/head'
import Link from 'next/link'

const Work = () => (
  <Layout heading="journal">

    <Head>
      <title>KD :: Work</title>
    </Head>

    <ul>
      <li><Link href=""><a>LazyGit</a></Link> :: cut short long git commands</li>
      <li><Link href=""><a>RevealURL</a></Link> :: Never open a link without knowing</li>
    </ul>

    <style jsx>{`
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
    `}</style>
  </Layout>
);

export default Work;