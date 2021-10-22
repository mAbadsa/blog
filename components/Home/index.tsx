import React, { FC } from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core";
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
        <div
          className={classes.sidebar}>
          <SidebarList drawer={false} />
        </div>
        <div className={classes.mainFeed}>
          <MainComponentTaps />
        </div>
        <div
          className={classes.rightSidebar}>
          <Additional />
        </div>
      </Grid>
    </Container>
  );
};

export default Home;
