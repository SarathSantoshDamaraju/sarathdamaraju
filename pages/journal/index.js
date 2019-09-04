import Layout from '../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';

let Journalslist = [
  {
    name: 'Data Driven SEO for Start-ups',
    internal: false,
    link: 'https://medium.com/hello-meets/data-driven-seo-for-start-ups-fa926c9040e1',
  },
  {
    name: 'Let the branch name do all the talking in git',
    internal: false,
    link: 'https://codeburst.io/let-the-branch-name-do-all-the-talking-in-git-e614ff85aa30',
  },
  {
    name: 'No-Redux Strategy for Siblings communication',
    internal: false,
    link: 'https://codeburst.io/no-redux-strategy-for-siblings-communication-3db543538959',
  },
  {
    name: 'git — Rename and Delete Branches',
    internal: false,
    link: 'https://medium.com/small-things/git-rename-and-delete-branches-54fa10444932',
  },
  {
    name: '5 steps to SetUp SASS with Grunt and NodeJS for Beginners',
    internal: false,
    link: 'https://medium.com/small-things/5-steps-to-setup-sass-with-grunt-and-nodejs-for-beginners-e6d7512fcb7b',
  },
  {
    name: 'Git Aliases That Could Be Helpful',
    internal: true
  }
];

let journalLinks = Journalslist.map(journal => (
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