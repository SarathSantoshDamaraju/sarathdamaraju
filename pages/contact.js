import Head from 'next/head'

import Layout from '../components/Layout';
import ContactInfo from '../static/content/contactInfoList';

const HandlersList = ContactInfo.handlerList.map(
  each => (<li key={each.name}>
    <a href={each.link}>{each.name}</a>
  </li>)
);

const contactDetails = Object.keys(ContactInfo.contactDetails).map(
  key => {
    if (ContactInfo.contactDetails[key].length > 0) {
      if(key === 'resume') {
        return (<li key={key}>
          <p><a href={ContactInfo.contactDetails[key]}>{key}</a></p>
        </li>) } else {
      return (<li key={key}>
        <p>{key} - <code>{ContactInfo.contactDetails[key]}</code></p>
      </li>) }
    }
  }
  );

const Index = () => (
  <Layout heading="Contact">
    <Head>
      <title>KD :: portfolio</title>
    </Head>

    <ul>
      {HandlersList}
    </ul>
    
    <ul>
      {contactDetails}
    </ul>

  </Layout>
)

export default Index;
