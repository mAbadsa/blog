import { useEffect, useState } from "react";
import type { NextPage } from "next";
import router from "next/router";

import UserProfile from "../components/UserProfile";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { CircularProgress, Container, Snackbar } from "@material-ui/core";

const Profile: NextPage = () => {
  console.log(router.router?.query.username);
  return <UserProfile />;
};

export default withPageAuthRequired(Profile, {
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
