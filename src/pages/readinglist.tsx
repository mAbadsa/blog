import type {
  NextPage,
  GetServerSideProps,
  PreviewData,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import Axios, { AxiosResponse, AxiosRequestHeaders } from 'axios';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import auth0 from '@lib/auth0';
import { CircularProgress, Container, Snackbar } from '@material-ui/core';

import ReadingListScreen from '@screens/ReadingList';
import Layout from '@components/Layout';

const ReadingList: NextPage<any, any> = ({}): any => {
  return (
    <Layout>
      <ReadingListScreen />
    </Layout>
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
    const session = auth0.getSession(context.req, context.res);

    const headers = context?.req?.headers as AxiosRequestHeaders;

    const res: AxiosResponse = await Axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${session?.user?.nickname}`,
      {
        headers: headers,
      },
    );

    return {
      props: {
        data: {},
      },
    };
  } catch (error: any) {
    return {
      props: {
        data: {
          message: error.response.data.error,
        },
      },
    };
  }
};

export default withPageAuthRequired(ReadingList, {
  onRedirecting: () => (
    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Container>
  ),
  onError: error => (
    <Snackbar
      open={error && true}
      autoHideDuration={6000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <p>{error}</p>
    </Snackbar>
  ),
});
