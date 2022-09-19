import type {
  NextPage,
  PreviewData,
  GetServerSideProps,
  GetServerSidePropsResult,
  GetServerSidePropsContext,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import Axios, { AxiosResponse } from 'axios';
import { CircularProgress, Container, Snackbar } from '@material-ui/core';
import ConfirmDeleteScreen from '../../../src/screens/ConfirmDeleteScreen';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const DeleteConfirm: NextPage<any, any> = ({ data }) => {
  return <ConfirmDeleteScreen article={data.article} />;
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
  } catch (error) {
    return {
      props: {
        error: 'Error!!!',
      },
    };
  }
};

export default withPageAuthRequired(DeleteConfirm, {
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
