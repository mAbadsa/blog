import type { AppProps } from 'next/app'
import Head from 'next/head';
import { FC } from 'react';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';

import Layout from '../components/Layout/Layout';

const MyApp: FC<AppProps> = ({ Component, pageProps }) =>{
  return (
    <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </>
  )
}
export default MyApp
