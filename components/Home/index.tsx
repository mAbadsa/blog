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
import MainComponentTaps from './Taps';
import Additional from '../Additional';

import useStyles from "./styles";

const Home: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Container className={classes.Home} maxWidth={"xl"}>
      <Grid className={classes.mainGrid} container spacing={0}>
        <Grid
          className={classes.sidebar}
          item
          // sm={3}
          md={4}
          component={Box}
          display={{ xs: "none", sm: "none", lg: "block" }}
        >
          <SidebarList drawer={false} />
        </Grid>
        <Grid
          className={classes.mainFeed}
        item xs={12} sm={12} md={8} lg={6}>
          <MainComponentTaps />
        </Grid>
        <Grid
          className={classes.rightSidebar}
          item
          lg={3}
          // md={3}
          component={Box}
          display={{ xs: "none", sm: "none", md: "none", lg: 'block' }}
        >
          <Additional />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
