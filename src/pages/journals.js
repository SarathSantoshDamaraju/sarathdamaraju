import Link from 'next/link';
import { attributes } from '../content/journals.md';
import Layout from '../components/Layout';

const { title, heading, journals } = attributes;

const Journals = () => (
  <Layout heading={heading} title={title}>
    <ul>
      {journals.map((journal) => (
        <li key={journal.name}>
          <Link href={`journal/${journal.name}`}>
            <a>{journal.name}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>
      {`
        ul {
          font-size: 24px;
          margin-top: 32px;
        }
        li {
          margin: 10px auto;
          line-height: 44px;
        }
        a {
          text-transform: capitalize;
        }
      `}
    </style>
  </Layout>
);

export default Journals;
