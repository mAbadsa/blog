import { FC, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../styles/theme";

import Layout from "../components/Layout/Layout";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
};
export default MyApp;
