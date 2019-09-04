import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'

import readingList from './readList';
import './styles.css'

var booksLinks = readingList.map(book => (
    <li key={book.title}>
      <img className="book-thumbnail" src={`/static/books/${book.title.toLowerCase().split(' ').join('_')}.jpg`}/>
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