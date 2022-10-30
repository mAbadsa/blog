import type { NextPage, GetServerSideProps, GetServerSidePropsResult, PreviewData } from 'next';
// import { ParsedUrlQuery } from 'querystring';
import { useUser } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import PublicHome from '@screens/PublicHome';
import PrivateHome from '@screens/PrivateHome';
import Layout from '@components/Layout/Layout';

const Home: NextPage = () => {
  const { user, isLoading } = useUser();

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

  if (!isLoading && user && user !== undefined) {
    return (
      <>
        {head()}
        <Layout>
          <PrivateHome username={user?.nickname as string} />
        </Layout>
      </>
    );
  }

  return (
    <>
      {head()}
      <Layout>
        <PublicHome />
      </Layout>
    </>
  );
};

export default Home;
