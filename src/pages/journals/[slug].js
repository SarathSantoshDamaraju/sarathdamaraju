import PropTypes from 'prop-types';

import Layout from '../../components/layout';
import { getAllJournalNames, getJournalData } from '../../lib/journals';

export async function getStaticPaths() {
  const paths = getAllJournalNames();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const journalData = await getJournalData(params.slug);
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
        <article>
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
