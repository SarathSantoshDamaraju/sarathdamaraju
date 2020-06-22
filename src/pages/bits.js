import PropTypes from 'prop-types';

import { attributes } from '../content/code_bits.md';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { getSortedFilesList } from '../lib/journals';

const { title, heading, description } = attributes;

export async function getStaticProps() {
  const codeBitsList = getSortedFilesList('bits');
  return {
    props: {
      codeBitsList,
    },
  };
}

const Bits = ({ codeBitsList }) => (
  <Layout heading={heading} title={title} description={description}>
    <ul className="products">
      {codeBitsList.map((codeBit) => (
        <a className="margin--auto" key={codeBit.fileName} href={`bits/${codeBit.fileName}`}>
          <Card props={codeBit} />
        </a>
      ))}
    </ul>
  </Layout>
);

Bits.propTypes = {
  codeBitsList: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

Bits.defaultProps = {
  codeBitsList: [],
};

export default Bits;
