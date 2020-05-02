import Head from 'next/head';
import { attributes } from '../content/index.md';
import Layout from '../components/Layout';

const {
 title, intro, name, tag, recentBlog, recentBlogLink,
} = attributes;

const Index = () => (
  <>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Head>
    <Layout heading="" title={title}>
      <section>
        <div className="details">
          <p>{intro}</p>
          <h1>{name}</h1>
          <p>{tag}</p>
        </div>

        <div className="recent-blog">
          <h4 className="page-subtitle">recent journal</h4>
          <h3>{recentBlog}</h3>
          <a href={recentBlogLink}>read now</a>
        </div>
      </section>

      {/* Local Styles */}

      <style jsx>
        {`
          section {
            height: 570px;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            -webkit-flex-flow: row wrap;
          }
          .details {
            width: 50%;
          }
          .details h1 {
            font-family: 'la-sonnabula';
            text-decoration: underline;
            color: #cb734d;
            text-transform: capitalize;
          }
          .recent-blog {
            width: 572px;
            min-height: 220px;
            border: 4px solid #cb734d;
            padding: 24px 32px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
          }
          @media only screen and (max-width: 991px) {
            .details {
              width: 100%;
            }
            section {
              height: 100vh;
            }
          }
        `}
      </style>
    </Layout>
  </>
);

export default Index;
