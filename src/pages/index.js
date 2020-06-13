import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import PropTypes from 'prop-types';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import Layout from '../components/layout';
import { attributes } from '../content/journals.md';
import { getJournalsList } from '../lib/journals';

const { title: pageTitle, heading } = attributes;

dayjs.extend(advancedFormat);

export async function getStaticProps() {
  const journalsList = getJournalsList();
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
          {journalsList.map(({ journalName, title, description, date }) => (
            <li key={title} className="journal-item">
              <span className="date">{dayjs(date).format('Do, MMMM YYYY')}</span>
              <Link href={`journals/${journalName}`}>
                <a className="title">{title}</a>
              </Link>
              <p className="description">{description}</p>
              <Link href={`journals/${journalName}`}>
                <a className="date">Read</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

Index.propTypes = {
  journalsList: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Index.defaultProps = {
  journalsList: {},
};

export default Index;
