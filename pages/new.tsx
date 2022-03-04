import { useEffect, useState } from "react";
import type { NextPage } from "next";

import ArticleForm from "../components/ArticleForm";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { CircularProgress, Container, Snackbar } from "@material-ui/core";

const New: NextPage = () => {
  return <ArticleForm />;
};

export default withPageAuthRequired(New, {
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
