import Layout from '../../components/Layout';
import Head from 'next/head';
import './styles.css';

const readingList = [{
  title: 'Veronika Decides to Die',
  author: 'Paulo Coelho',
  link: '1431.Veronika_Decides_to_Die'
},
{
  title: 'The alchemist',
  author: 'Paulo Coelho',
  link: '18144590-the-alchemist'
},
{
  title: 'The Zahir',
  author: 'Paulo Coelho',
  link: '1427.The_Zahir'
},
{
  title: 'The Devil and Miss Prym',
  author: 'Paulo Coelho',
  link: '4008.The_Devil_and_Miss_Prym'
},
{
  title: 'Nine Pints',
  author: 'Rose George',
  link: '38232376-nine-pints'
}]

var booksLinks = readingList.map(book => (
  <li key={book.title}>
    <img className="book-thumbnail" src={`/static/books/${book.title.toLowerCase().split(' ').join('_')}.jpg`} />
    <a href={`https://www.goodreads.com/book/show/${book.link}`}>{book.title}</a>
    <p>{book.author}</p>
  </li>
))


const Work = () => (
  <Layout heading="Books read">
    <Head>
      <title>KD :: Reading</title>
    </Head>


    <ul className="books-read">
      {booksLinks}
    </ul>

  </Layout>
);

export default Work;