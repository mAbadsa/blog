import type { GetServerSideProps, GetServerSidePropsContext, NextPage, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Axios, { AxiosResponse } from 'axios';

import ArticleForm from '../../../src/screens/ArticleForm';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { CircularProgress, Container, Snackbar } from '@material-ui/core';

const Edit: NextPage<any, any> = ({ data }) => {
  return <ArticleForm mode="edit" defaultData={data.article} />;
};

export const getServerSideProps: GetServerSideProps<
  { [key: string]: any },
  ParsedUrlQuery,
  PreviewData
> = async (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
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
        error: error,
      },
    };
  }
};

export default withPageAuthRequired(Edit, {
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
