// TODO: Fix lint
import React, { Component } from 'react';
import Layout from '../../components/Layout';

class Post extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const blogpost = await import(`../../content/journals/${slug}.md`).catch((error) => null);

    return { blogpost };
  }

  render() {
    if (!this.props.blogpost) return <div>not found</div>;

    const {
      html,
      attributes: { thumbnail, title },
    } = this.props.blogpost.default;

    return (
      <Layout heading={title} title={title}>
        <article>
          <img src={thumbnail} />
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

export default Post;
