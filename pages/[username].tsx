import type {
  NextPage,
  GetServerSideProps,
  PreviewData,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  InferGetServerSidePropsType,
} from "next";
import { ParsedUrlQuery } from "querystring";
import Axios, { AxiosResponse } from "axios";

import UserProfile from "../components/UserProfile";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { CircularProgress, Container, Snackbar } from "@material-ui/core";

type UserData = {};

const Profile: NextPage<any, any> = ({ userData }) => {
  console.log(userData);
  return <UserProfile />;
};

export const getServerSideProps: GetServerSideProps<
  { [key: string]: any },
  ParsedUrlQuery,
  PreviewData
> = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
): Promise<GetServerSidePropsResult<{ [key: string]: any }>> => {
  console.log({ context });
  const userData: AxiosResponse = await Axios.get(
    `api/users/${context?.params?.username}`
  );

  if (!userData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { userData }, // will be passed to the page component as props
  };
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
