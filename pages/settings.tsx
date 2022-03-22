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
import { withPageAuthRequired, Session } from "@auth0/nextjs-auth0";
import { CircularProgress, Container, Snackbar } from "@material-ui/core";

const Settings: NextPage<any, any> = ({ data: userData }) => {
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
    const session = auth0.getSession(context.req, context.res);

    const headers = context?.req?.headers as AxiosRequestHeaders;

    const res: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${session?.user?.nickname}`,
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

export default withPageAuthRequired(Settings, {
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
