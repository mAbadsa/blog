import type {
  NextPage,
  GetServerSideProps,
  PreviewData,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import axios, { AxiosResponse, AxiosRequestHeaders } from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import auth0 from '@lib/auth0';
import { CircularProgress, Container, Snackbar } from '@material-ui/core';
import Layout from '@components/Layout/Layout';
import Dashboard from '@screens/Dashboard';

const DashboardPage: NextPage<any, any> = ({
  data,
}: {
  data: Array<{
    id: number;
    title: string;
    slug: string;
    temp_slug: string;
    status: string;
    temp_preview_link: string;
  }>;
}) => {
  return (
    <Layout>
      <Dashboard posts={data} />
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

    const articles: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${session?.user?.nickname}/articles`,
      {
        headers: headers,
      },
    );

    // console.log({ data: articles.data.data });

    if (!articles) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data: articles.data.data,
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

export default withPageAuthRequired(DashboardPage, {
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
