import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import Layout from '../components/Layout';
import { attributes } from '../content/journals.md';
import { getSortedFilesList } from '../lib/journals';

dayjs.extend(advancedFormat);

const { title: pageTitle, heading } = attributes;

export async function getStaticProps() {
  const journalsList = getSortedFilesList();
  return {
    props: {
      journalsList,
    },
  };
}

const Index = function Index({ journalsList }) {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <Layout heading={heading} title={pageTitle}>
        <ul>
          {journalsList.map(({ fileName, title, description, date }) => (
            <li key={title} className="journal-item">
              <h6 className="opacity--6">{dayjs(date).format('Do, MMMM YYYY')}</h6>
              <Link href={`journals/${fileName}`}>
                <a>
                  <h4 className="title">{title}</h4>
                </a>
              </Link>
              <p className="description">{description}</p>
              <Link href={`journals/${fileName}`}>
                <a className="read text--capitalize">Read</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

Index.propTypes = {
  journalsList: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

Index.defaultProps = {
  journalsList: {},
};

export default Index;
