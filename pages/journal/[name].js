import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import Head from 'next/head';

import dynamic from 'next/dynamic';


const Journal = () => {

  const router = useRouter();
  const { name } = router.query;
  const DynamicComponent = dynamic(() => import(`../../static/content/journals/${name}.mdx`))

  return (
    <Layout heading="Journal">
      <Head>
        <title>KD :: Journal</title>
      </Head>
      <div>
        <DynamicComponent />
      </div>
    </Layout>
  )
};

export default Journal;