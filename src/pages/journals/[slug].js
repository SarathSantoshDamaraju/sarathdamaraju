// TODO: Fix lint
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';

class Post extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const blogpost = await import(`../../content/journals/${slug}.md`).catch((error) => null);

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
          <img src={thumbnail} alt={thumbnail} />
          {/* eslint-disable-next-line */}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
        <style jsx>
          {`
            article {
              margin: 0 auto;
            }
            h1 {
              text-align: center;
            }
          `}
        </style>
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
