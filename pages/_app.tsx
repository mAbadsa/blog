import { FC, useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';

import Layout from '../src/components/Layout/Layout';
import '../styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          <UserProvider>
            <Layout>
              <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                  <Component {...pageProps} />
                </Hydrate>
              </QueryClientProvider>
            </Layout>
          </UserProvider>
        </StyledThemeProvider>
      </ThemeProvider>
    </>
  );
};
export default MyApp;
