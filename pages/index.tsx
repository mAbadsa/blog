import type { NextPage } from 'next';

import Layout from '../components/Layout';

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <h1>HOMEPAGE</h1>
        <p>Basic homepage</p>
      </Layout>
    </div>
  )
}

export default Home
