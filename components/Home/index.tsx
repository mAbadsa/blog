import React, { FC } from "react";
import Link from "next/link";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core";
import { Link as MUILink } from "@material-ui/core";
import SidebarList from "../SidebarList";

import useStyles from "./styles";

const Home: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Container maxWidth={"lg"}>
      <Grid className={classes.root} container spacing={0}>
        <Grid
          className={classes.sidebar}
          item
          sm={3}
          md={3}
          component={Box}
          display={{ xs: "none", sm: "block", lg: "block" }}
        >
          <SidebarList drawer={false} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <h1>HOMEPAGE</h1>
          <p>Basic homepage</p>
        </Grid>
        <Grid
          item
          md={3}
          component={Box}
          display={{ xs: "none", sm: "none", md: "block" }}
        >
          Right Sidebar
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;