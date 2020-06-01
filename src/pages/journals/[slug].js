// TODO: Fix lint
import Link from 'next/link';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';

class Post extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const blogpost = await import(`../../content/journals/${slug}.md`).catch((error) => error);

    return { blogpost };
  }

  render() {
    const { blogpost } = this.props;
    if (!blogpost) return <div>not found</div>;

    const {
      html,
      attributes: { thumbnail, title },
    } = blogpost;

    return (
      <Layout heading={title} title={title}>
        <article>
          <Link href="/">⬅ Back</Link>
          <h1 className="title text--left">{blogpost.attributes.title}</h1>
          <img src={thumbnail} alt={thumbnail} />
          {/* eslint-disable-next-line */}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </Layout>
    );
  }
}

Post.propTypes = {
  blogpost: PropTypes.arrayOf(PropTypes.string),
};

Post.defaultProps = {
  blogpost: [],
};

export default Post;
