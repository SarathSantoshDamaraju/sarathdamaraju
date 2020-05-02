import Link from 'next/link';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { attributes } from '../../content/journals.md';
import Layout from '../../components/Layout';

const { title, heading } = attributes;
const importBlogPosts = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context('../../content/journals', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/journals/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    }),
  );
};

export default class Journals extends Component {
  static async getInitialProps() {
    const postsList = await importBlogPosts();

    return { postsList };
  }

  render() {
    const { postsList } = this.props;
    return (
      <Layout heading={heading} title={title}>
        <ul>
          {postsList.map((journal) => (
            <li key={journal.name}>
              <Link href={`journals/${journal.slug}`}>
                <a>{journal.attributes.title}</a>
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
  }
}

Journals.propTypes = {
  postsList: PropTypes.arrayOf(PropTypes.string),
};

Journals.defaultProps = {
  postsList: [],
};
