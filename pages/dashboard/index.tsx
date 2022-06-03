import type { NextPage } from 'next';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { CircularProgress, Container, Snackbar } from '@material-ui/core';

import Dashboard from '../../src/screens/Dashboard';

const DashboardPage: NextPage = () => {
  return <Dashboard />;
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
