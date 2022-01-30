import type {
  NextPage,
  PreviewData,
  GetServerSideProps,
  GetServerSidePropsResult,
  GetServerSidePropsContext,
} from "next";
import { ParsedUrlQuery } from "querystring";
import Axios, { AxiosResponse } from "axios";

import auth0 from "../../lib/auth0";

const Article: NextPage<any, any> = ({ data }) => {
  console.log({ data });
  return <div>AAAAA</div>;
};

export const getServerSideProps: GetServerSideProps<
  { [key: string]: any },
  ParsedUrlQuery,
  PreviewData
> = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
): Promise<GetServerSidePropsResult<{ [key: string]: any }>> => {
  try {
    console.log({ context });
    const { query } = context;
    console.log({ query });
    const { username, id } = query;
    const res: AxiosResponse = await Axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${username}/9`
    );
    return {
      props: {
        data: res.data,
      },
    };
  } catch (error) {
    // console.log({ error });
    return {
      props: {
        error: "Error!!!",
      },
    };
  }
};

export default Article;
