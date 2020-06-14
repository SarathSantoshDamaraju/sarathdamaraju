import PropTypes from 'prop-types';
import Link from 'next/link';

import Layout from '../../components/Layout';
import { getFilesList, getFileData } from '../../lib/journals';

export async function getStaticPaths() {
  const paths = getFilesList('bits');
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const codeBitData = await getFileData(params.slug, 'bits');
  return {
    props: {
      codeBitData,
    },
  };
}

const Journal = function Post({ codeBitData }) {
  if (codeBitData) {
    return (
      <Layout heading="" title={codeBitData.title}>
        <Link href="/">
          <a className="small breadcrumb text--lowercase">Bits</a>
        </Link>
        <div className="bit">
          <h3 className="bit__title text--left">{codeBitData.title}</h3>
          <article className="bit__body fade-in">
            {/* eslint-disable-next-line */}
            <div dangerouslySetInnerHTML={{ __html: codeBitData.contentHtml }} />
          </article>
        </div>
      </Layout>
    );
  }

  return <div>Not found</div>;
};

Journal.propTypes = {
  codeBitData: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Journal.defaultProps = {
  codeBitData: {},
};

export default Journal;
