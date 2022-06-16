import type {
  NextPage,
  PreviewData,
  GetServerSideProps,
  GetServerSidePropsResult,
  GetServerSidePropsContext,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import Axios, { AxiosResponse } from 'axios';
import ArticleScreen from '../../../src/screens/Article';

import auth0 from '../../../lib/auth0';

const Article: NextPage<any, any> = ({ data }) => {
  console.log({ data });
  return <ArticleScreen article={data?.article} />;
};

export const getServerSideProps: GetServerSideProps<
  { [key: string]: any },
  ParsedUrlQuery,
  PreviewData
> = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
): Promise<GetServerSidePropsResult<{ [key: string]: any }>> => {
  try {
    console.log({ context });
    const { query } = context;
    console.log({ query });
    const { username, slug } = query;
    const res: AxiosResponse = await Axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${username}/${slug}`,
    );

    console.log({ res2: res });

    if (!res) {
      throw new Error('Something went wrong!');
    }

    return {
      props: {
        data: res.data,
      },
    };
  } catch (error) {
    // console.log({ error });
    return {
      props: {
        error: 'Error!!!',
      },
    };
  }
};

export default Article;
