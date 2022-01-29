import type {
  NextPage,
  GetServerSideProps,
  PreviewData,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { ParsedUrlQuery } from "querystring";
import axios, { AxiosResponse, AxiosRequestHeaders } from "axios";
import auth0 from "../lib/auth0";
import UserProfile from "../components/UserProfile";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { CircularProgress, Container, Snackbar } from "@material-ui/core";

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

    const { data }: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}`,
      {
        headers: headers,
      }
    );

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { data },
    };
  } catch (error: any) {
    console.log(error);
    return {
      props: {
        error: error.data,
      },
    };
  }
};

export default withPageAuthRequired(Profile, {
  onRedirecting: () => (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Container>
  ),
  onError: (error) => (
    <Snackbar
      open={error && true}
      autoHideDuration={6000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <p>{error}</p>
    </Snackbar>
  ),
});
