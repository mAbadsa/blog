import type {
  NextPage,
  GetServerSideProps,
  PreviewData,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { ParsedUrlQuery } from "querystring";
import axios, { AxiosResponse, AxiosRequestHeaders } from "axios";
import auth0 from "../../lib/auth0";
import UserProfile from "../../src/components/UserProfile";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

type UserData = {};

const Profile: NextPage<any, any> = ({ data: userData }) => {
  console.log(userData);
  return <UserProfile userData={userData} />;
};

export const getServerSideProps: GetServerSideProps<
  { [key: string]: any },
  ParsedUrlQuery,
  PreviewData
> = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
): Promise<GetServerSidePropsResult<{ [key: string]: any }>> => {
  try {
    const { query } = context;
    const { username } = query;

    const headers = context?.req?.headers as AxiosRequestHeaders;

    const res: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}`,
      {
        headers: headers,
      }
    );

    if (!res) {
      return {
        notFound: true,
      };
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
          user: null,
          error: !error.response.data.success,
          message: error.response.data.error,
        },
      },
    };
  }
};

export default Profile;
