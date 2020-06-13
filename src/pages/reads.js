import { attributes } from '../content/reading.md';
import Layout from '../components/layout';

const { title, heading, books } = attributes;

const Reads = () => (
  <Layout heading={heading} title={title}>
    <ul className="books-read">
      {books.map((book) => (
        <li key={book.name}>
          <img className="book-thumbnail" alt={book.name} src={`/images/${book.thumbnail}`} />
          <a href={book.link}>{book.name}</a>
          <p>{book.author}</p>
        </li>
      ))}
    </ul>
  </Layout>
);

export default Reads;
