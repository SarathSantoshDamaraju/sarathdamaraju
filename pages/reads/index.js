import Layout from '../../components/Layout';

import books from '../../static/content/booksList';

const bookList = books.map(book => (
  <li>
    <img className="book-thumbnail" src={`/static/images/books/${book.thumbnail}`} />
    <a href={book.link}>{book.name}</a>
    <p>{book.author}</p>
  </li>
))

const Reads = () => (
  <Layout heading="Books reads" title="KD :: Reads">
  
    <ul className="books-read">
      {bookList}
    </ul>

  </Layout>
);

export default Reads;