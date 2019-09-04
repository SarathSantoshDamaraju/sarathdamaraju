import Layout from '../../components/Layout';
import Head from 'next/head';
import './styles.css';

const Work = () => (
  <Layout heading="Books read">
    <Head>
      <title>KD :: Reading</title>
    </Head>


    <ul className="books-read">
      <li>
        <img className="book-thumbnail" src={`/static/books/veronika_decides_to_die.jpg`} />
        <a href="https://www.goodreads.com/book/show/1431.Veronika_Decides_to_Die">Veronika Decides to Die</a>
        <p>Paulo Coelho</p>
      </li>
      <li>
        <img className="book-thumbnail" src={`/static/books/the_alchemist.jpg`} />
        <a href="https://www.goodreads.com/book/show/18144590-the-alchemist">The alchemist</a>
        <p>Paulo Coelho</p>
      </li>
      <li>
        <img className="book-thumbnail" src={`/static/books/the_zahir.jpg`} />
        <a href="https://www.goodreads.com/book/show/1427.The_Zahir">The Zahir</a>
        <p>Paulo Coelho</p>
      </li>
      <li>
        <img className="book-thumbnail" src={`/static/books/the_devil_and_miss_prym.jpg`} />
        <a href="https://www.goodreads.com/book/show/4008.The_Devil_and_Miss_Prym">The Devil and Miss Prym</a>
        <p>Paulo Coelho</p>
      </li>
      <li>
        <img className="book-thumbnail" src={`/static/books/nine_pints.jpg`} />
        <a href={`https://www.goodreads.com/book/show/38232376-nine-pints`}>Nine Pints</a>
        <p>Rose George</p>
      </li>
    </ul>

  </Layout>
);

export default Work;