import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'

import journalsList from './journalsList';

let journalLinks = journalsList.map(journal => (
  <li key={journal.name}>
    {journal.internal ?
      (<Link href="/journal/[name]" as={`/journal/${journal.name.toLocaleLowerCase().split(' ').join('_')}`}>
        <a>{journal.name.split('_').join(' ')}</a>
      </Link>)
      : (<a href={journal.link} target="blank">
        {journal.name}
      </a>)
    }
  </li>
))

const Work = () => (
  <Layout heading="journals">

    <Head>
      <title>KD :: Journals</title>
    </Head>

    <ul>
      {journalLinks}
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