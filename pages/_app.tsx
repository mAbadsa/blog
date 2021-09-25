import type { AppProps } from 'next/app'
import { FC } from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from '../styles/theme';

import Layout from '../components/Layout';

import '../styles/globals.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) =>{
  return (
    <>
    <ThemeProvider theme={theme}> 
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </>
  )
}
export default MyApp
