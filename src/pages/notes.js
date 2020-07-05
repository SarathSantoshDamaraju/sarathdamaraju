import { attributes } from '../content/notes.md';
import Layout from '../components/Layout';
import IframeEmbed from '../components/IframeEmbed';

const { title, heading, notes } = attributes;

const Work = () => (
  <Layout heading={heading} title={title}>
    <ul className="products">
      {notes.map((note) => (
        <IframeEmbed name={note.name} url={note.url} key={note.name} />
      ))}
    </ul>
  </Layout>
);

export default Work;
