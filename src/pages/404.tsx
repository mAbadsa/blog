import { NextPage } from 'next';
import NotFoundComponent from '@components/404';
import Head from 'next/head';

const NotFound: NextPage = () => {
  const head: Function = () => {
    return (
      <Head>
        <title>{'Not Found'}</title>
        <meta name="description" content={`Content not found`} />
      </Head>
    );
  };
  return (
    <>
      {head()}
      <NotFoundComponent />
    </>
  );
};

export default NotFound;
