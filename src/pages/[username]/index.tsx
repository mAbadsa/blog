import type {
  NextPage,
  GetServerSideProps,
  PreviewData,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import axios, { AxiosResponse, AxiosRequestHeaders } from 'axios';
import UserProfile from '@screens/UserProfile';
import Layout from '@components/Layout/Layout';

const Profile: NextPage<any, any> = ({ data: userData }) => {
  const head = () => {
    return (
      <Head>
        <title>{userData?.data?.name} - DEV Community 👩‍💻👨‍💻</title>
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
        <UserProfile userData={userData} />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  { [key: string]: any },
  ParsedUrlQuery,
  PreviewData
> = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
): Promise<GetServerSidePropsResult<{ [key: string]: any }>> => {
  try {
    const { query } = context;
    const { username } = query;

    const headers = context?.req?.headers as AxiosRequestHeaders;

    const res: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}`,
      {
        headers: headers,
      },
    );

    if (!res) {
      throw new Error('Something went wrong!');
    }

    return {
      props: {
        data: res.data,
      },
    };
  } catch (error: any) {
    // error.response is undefined for network failures, so don't assume it exists
    const body = error.response?.data;
    return {
      props: {
        data: {
          user: null,
          error: !body?.success,
          message: body?.error || null,
        },
      },
    };
  }
};

export default Profile;
