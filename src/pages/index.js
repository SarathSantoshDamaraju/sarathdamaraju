import Head from 'next/head';
import Link from 'next/link';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import { attributes } from '../content/journals.md';
import Layout from '../components/Layout';

dayjs.extend(advancedFormat);

const { title, heading } = attributes;
const importBlogPosts = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context('../content/journals', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/journals/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    }),
  );
};

export default class Index extends Component {
  static async getInitialProps() {
    const postsList = await importBlogPosts();

    return { postsList };
  }

  render() {
    const { postsList } = this.props;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Head>
        <Layout heading={heading} title={title}>
          <ul>
            {postsList.map((journal) => (
              <li key={journal.name} className="journal-item">
                <span className="date">{dayjs().format('Do, MMMM YYYY')}</span>
                <Link href={`journals/${journal.slug}`}>
                  <a className="title">{journal.attributes.title}</a>
                </Link>
                <p className="description">{journal.attributes.description}</p>
                <Link href={`journals/${journal.slug}`}>
                  <a className="date">Read</a>
                </Link>
              </li>
            ))}
          </ul>

          <style jsx>
            {`

          `}
          </style>
        </Layout>
      </>
    );
  }
}

Index.propTypes = {
  postsList: PropTypes.arrayOf(PropTypes.string),
};

Index.defaultProps = {
  postsList: [],
};
