import Head from 'next/head'
import Link from 'next/link';

import Layout from '../components/Layout';


const Index = () => (
  <Layout heading="Contact">
    <Head>
      <title>KD :: portfolio</title>
    </Head>

    <ul>
      <li><a href="">twitter</a></li>
      <li><a href="">linkedin</a></li>
      <li><a href="https://github.com/SarathSantoshDamaraju/">github</a></li>
      <li><a href="https://medium.com/@sarathdamaraju">medium</a></li>
      <li><a href="https://dev.to/sarathsantoshdamaraju">dev.to</a></li>
      <li><a href="https://npmjs.com/~sarathdamaraju">npm</a></li>
      <li><a href="https://stackoverflow.com/users/6781694/sarath-damaraju">so</a></li>
    </ul>

    <a href="https://www.dropbox.com/s/ymcjaeh3bhl96wi/Krishna-Damaraju_Frontend_Resume.pdf?dl=0">resume</a>

    <ul>
      <li>
        <p>email: <code>sarathdamaraju@yahoo.com</code></p>
      </li>
      <li>
        <p>Current location - <code>Chennai</code></p>
      </li>
    </ul>

    <style jsx>{`
    a,p {
      font-size: 20px
    }

    ul {
      margin: 20px auto
    }
    `}</style>

  </Layout>
)

export default Index;
