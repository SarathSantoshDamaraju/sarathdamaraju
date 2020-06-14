import PropTypes from 'prop-types';
import Link from 'next/link';

import Layout from '../../components/Layout';
import { getFilesList, getFileData } from '../../lib/journals';

export async function getStaticPaths() {
  const paths = getFilesList('journals');
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const journalData = await getFileData(params.slug, 'journals');
  return {
    props: {
      journalData,
    },
  };
}

const Journal = function Post({ journalData }) {
  if (journalData) {
    return (
      <Layout heading="" title={journalData.title}>
        <Link href="/">
          <a className="small breadcrumb text--lowercase">Journals</a>
        </Link>
        <article className="fade-in">
          <h1 className="title text--left">{journalData.title}</h1>
          {/* eslint-disable-next-line */}
          <div dangerouslySetInnerHTML={{ __html: journalData.contentHtml }} />
        </article>
      </Layout>
    );
  }

  return <div>Not found</div>;
};

Journal.propTypes = {
  journalData: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Journal.defaultProps = {
  journalData: {},
};

export default Journal;
