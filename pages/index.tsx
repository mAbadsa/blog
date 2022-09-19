import type { NextPage } from 'next';
import Head from 'next/head';
import HomeComponent from '../src/screens/Home';
import Layout from '../src/components/Layout/Layout';

const Home: NextPage = () => {
  const head = () => {
    return (
      <Head>
        <title>DEV Community 👩‍💻👨‍💻</title>
        <meta
          name="description"
          content="A constructive and inclusive social network for software developers. With you every step of your journey."
        />
        <link rel="canonical" href="http://localhost:3000" />
        <meta
          name="keywords"
          content="software development, engineering, rails, javascript, ruby"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DEV Community 👩‍💻👨‍💻" />
        <meta
          property="og:image"
          content="https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png"
        />
        <meta name="twitter:site" content="@mabadsa" />
        <meta name="twitter:title" content="DEV Community 👩‍💻👨‍💻" />
        <meta
          name="twitter:description"
          content="A constructive and inclusive social network for software developers. With you every step of your journey."
        />
        <meta
          name="twitter:image:src"
          content="https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    );
  };
  return (
    <>
      {head()}
      <Layout>
        <HomeComponent />
      </Layout>
    </>
  );
};

export default Home;
