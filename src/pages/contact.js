import { attributes } from '../content/contact.md';
import Layout from '../components/Layout';

const {
  title, heading, socialProfiles, contactDetails, currentLocation,
} = attributes;

const Index = () => (
  <Layout heading={heading} title={title}>
    <ul>
      {socialProfiles.map((each) => (
        <li key={each.name}>
          <a href={each.link}>{each.name}</a>
        </li>
      ))}
    </ul>

    <ul>
      {contactDetails.map((each) => (
        <li key={each.name}>
          <a href={each.data}>{each.name}</a>
        </li>
      ))}
    </ul>

    <p>
      Current at
      {' '}
      <code>{currentLocation}</code>
    </p>
  </Layout>
);

export default Index;
