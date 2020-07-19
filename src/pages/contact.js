import { attributes } from '../content/contact.md';
import Layout from '../components/Layout';

const {
  title, intro, heading, name, tag, socialProfiles, resumeLink,
} = attributes;

const Contact = () => (
  <Layout heading={heading} title={title}>
    <div className="about">
      <div className="about__intro">
        <p>{intro}</p>
        <h1 className="about__name">{name}</h1>
        <p>{tag}</p>
      </div>

      <div className="about__contact">
        <div className="">
          <h3>
            <span role="img" aria-label="details">
              🌏
            </span>
          </h3>
          <ul>
            {socialProfiles.map((each) => (
              <li key={each.name}>
                <a href={each.link}>{each.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>
            <span role="img" aria-label="contact">
              ✨
            </span>
          </h3>
          <ul>
            <li>
              <a href={resumeLink}>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
