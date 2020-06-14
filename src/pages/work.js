import { attributes } from '../content/products.md';
import Layout from '../components/Layout';
import Card from '../components/Card';

const { title, heading, products } = attributes;

const Work = () => (
  <Layout heading={heading} title={title}>
    <ul className="products">
      {products.map((product) => (
        <a href={product.link} target="_blank" rel="noopener noreferrer" key={product.name}>
          <Card props={product} />
        </a>
      ))}
    </ul>
  </Layout>
);

export default Work;
