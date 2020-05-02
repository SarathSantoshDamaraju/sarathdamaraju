import Link from 'next/link';
import { attributes } from '../content/products.md';
import Layout from '../components/Layout';

const { title, heading, products } = attributes;

const Work = () => (
  <Layout heading={heading} title={title}>
    <ul className="thumbnails">
      {products.map((product) => (
        <li key={product.name}>
          <img alt={product.name} src={`/images/${product.thumbnail}`} />
          <Link href="https://github.com/SarathSantoshDamaraju/lazyGit">
            <a>{product.name}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>
      {`
        ul {
          font-size: 24px;
          margin: 32px 0px;
        }
        li {
          margin: 10px auto;
        }
        a {
          text-transform: capitalize;
        }

        .thumbnails {
          display: flex;
          flex-direction: row;
          max-width: 1080px;
          flex-wrap: wrap;
        }

        .thumbnails li {
          margin: 0px 40px 40px 0px;
        }

        img + a {
          font-size: 16px;
        }

        li > img {
          display: block;
          width: 280px;
          max-height: 160px;
          border: 2px solid #cb734d;
        }
      `}
    </style>
  </Layout>
);

export default Work;
