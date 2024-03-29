import type {
  NextPage,
  PreviewData,
  GetServerSideProps,
  GetServerSidePropsResult,
  GetServerSidePropsContext,
} from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import Axios, { AxiosResponse } from 'axios';
import ArticleScreen from '@screens/Article';
import Layout from '@components/Layout/Layout';

const Article: NextPage<any, any> = ({ data }) => {
  const router = useRouter();
  if (data.error) router.push('/404');
  const head: Function = () => {
    return (
      <Head>
        <title>{data?.article?.title}</title>
        <meta name="description" content={`${data?.article?.title}`} />
        <link
          rel="canonical"
          href={`http://localhost:3000/${data?.article?.username}/${data?.article?.slug}`}
        />
        <meta property="og:title" content={`${data?.article?.title}`} />
        <meta property="og:description" content={`${data?.article?.title}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`http://localhost:3000/${data?.article?.username}/${data?.article?.slug}`}
        />
        <meta property="og:site_name" content={`DEV Community 👩‍💻👨‍💻`} />
        <meta property="og:image" content={`${data?.article?.cover_image}`} />
        <meta property="og:image:secure_url" content={`${data?.article?.cover_image}`} />
        <meta property="og:image:type" content="image/jpg" />
        <meta name="twitter:site" content="@mabadsa" />
        <meta name="twitter:title" content={`${data?.article?.title}`} />
        <meta name="twitter:description" content={`${data?.article?.title}`} />
        <meta name="twitter:image:src" content={`${data?.article?.cover_image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="fb:app_id" content={`2154121845184515`} />
      </Head>
    );
  };
  return (
    <>
      {head()}
      <Layout>{!data.error && <ArticleScreen article={data?.article} />}</Layout>
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
    const { username, slug } = query;
    const res: AxiosResponse = await Axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${username}/${slug}`,
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
    return {
      props: {
        data: {
          article: null,
          error: !error.response.data.success,
          message: error.response.data.message || null,
        },
      },
    };
    // return {
    //   notFound: true,
    // };
  }
};

export default Article;
