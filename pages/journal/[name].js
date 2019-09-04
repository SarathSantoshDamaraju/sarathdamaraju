import { useRouter } from 'next/router'

import Layout from '../../components/Layout'
import Head from 'next/head'

import Data from './git_aliases_that_could_be_helpful.mdx'

const Journal = () => {
  let content;
  const router = useRouter();
  const { name } = router.query;
  if (router.query.name) {
    let content = require(`./${router.query.name}.mdx`)
  }
  return (
    <Layout heading="Journal">
      <Head>
        <title>KD :: Journal</title>
      </Head>
      <div>
        <Data />
      </div>
    </Layout>
  )
};

export default Journal;